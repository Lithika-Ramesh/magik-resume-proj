const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
// openai api
const OpenAI=require('openai');
require('dotenv').config();

const usercontrollers = require('./src/controllers/user');

const port = 5000
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// mongodb URI

mongoose.connect(process.env.URI||'mongodb://localhost:27017/lithi')

    .then(() => {
        app.listen(port, () => {
            console.log('Backend running at port: ' + port);
        });
    })
    .catch((err) => {
        if (err.code === 'EADDRINUSE') {
            console.error('Port ' + port + ' is already in use. Please choose a different port.');
        } else {
            console.error('An error occurred while starting the server: ' + err);
        }
    });
//openai set up
const openai=new OpenAI({
    apiKey:process.env.OPENAI_API,
})
app.get('/prompting',async(req,res)=>{
    try{
        const work_exp=req.query.inputData.WorkExperience;
        const skills=req.query.inputData.Skills;
        const job_desc=req.query.inputData.JobDescription;
        const education=req.query.inputData.Education;
        const summary=req.query.inputData.summary;
        const projects=req.query.inputData.Projects;
        var prompt_string=`kindly paraphrase my work experience and skills to align it to job description keywords and do retain important technical skills and work experience position and company name return it in json format{Work_Experience:[{job:value,company:val,time_period:val,work_exp : val}],Skills:[val1,val2...],Education:[{institution:val,course:val,time_interval:val},],Summary:val}for all work experiences in different companies, positions  for the work experience : ${work_exp}, return skills such that it aligns with both the job description and user's skills based on work experience and skills(do not miss any skill mentioned here) given here:${skills}, convert the education details given here:${education}, paraphrase my summary to align to the job description, given here:${summary} `
        if(projects!='' && work_exp!=''){
            prompt_string=`kindly paraphrase my work experience and skills to align it to job description keywords and do retain important technical skills and work experience position and company name return it in json format{Work_Experience:[{job:value,company:val,time_period:val,work_exp : val}],Skills:[val1,val2...],Education:[{institution:val,course:val,time_interval:val},],Summary:val,Projects:[{title:val,description:val},]}for all work experiences in different companies, positions  for the work experience : ${work_exp}, return skills such that it aligns with both the job description and user's skills based on work experience and skills(do not miss any skill mentioned here) given here:${skills}, convert the education details given here:${education}, paraphrase my summary to align to the job description, given here:${summary} and paraphrase my projects without changing its title and meaning such that it highlights the key features that might align to the job description, given here:${projects}`;
        }
        else if(projects!=''){
            prompt_string=`kindly  paraphrase my projects without changing its title and meaning such that it highlights the key features that might align to the job description, given here:${projects} and return it in json format{Projects:[{title:val,description:val},],Skills:[val1,val2...],Education:[{institution:val,course:val,time_interval:val},],Summary:val}, return skills such that it aligns with both the job description and user's skills(do not miss any skill mentioned here) given here:${skills}, convert the education details given here:${education}, paraphrase my summary to align to the job description, given here:${summary}`;
        }
        else{
            //handle this case by giving out warning
        }
        console.log(work_exp);
        var response=await openai.chat.completions.create({
            model:'gpt-3.5-turbo',
            messages:[
                {"role":"system","content":"you are my resume builder for the job with job description as follows :".concat(job_desc)},
                {"role":"user",
                "content":prompt_string,
            }],
            max_tokens:600
        })
        res.send({
            code:200,
            message:response.choices[0].message.content
        })
    }catch(err){
        res.send({
            code:500,
            message:err.error
        })
        console.log(err);
    }
})

// Routes
app.get('/',(req,res)=> {
    res.send("everything working alright mate 🥂")
})
app.post('/signup', usercontrollers.signup)
app.post('/signin', usercontrollers.signin)
app.post('/builder',usercontrollers.GenerateCv)
app.post('/resetpassword', usercontrollers.forgotpassword);
