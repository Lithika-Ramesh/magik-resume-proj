
const UserModel = require('../models/user')
const nodemailer = require('nodemailer')
const UserInfoModel=require('../models/user_details')
const user_details = require('../models/user_details')
module.exports.signup = (req, res) => {
    console.log(req.body)

    // email should not exist alreday

    const newUser = new UserModel({
        email: req.body.email,
        password: req.body.password,
        //secretQuestion1: req.body.secretQuestion1,
        secretAnswer1: req.body.secretAnswer1,
        //secretQuestion2: req.body.secretQuestion2,
        secretAnswer2: req.body.secretAnswer2
    });

    newUser.save().then(() => {
        res.send({ code: 200, message: 'Signup success' })
    }).catch((err) => {
        res.send({ code: 500, message: 'Signup Err' })
    })

}

module.exports.signin = (req, res) => {
    console.log(req.body.email)

    // email and password match

    UserModel.findOne({ email: req.body.email })
        .then(result => {
            console.log(result, '11')

            // match password with req.body.password
            if (result.password !== req.body.password) {
                res.send({ code: 404, message: 'invalid credentials ' })
            } else {
                res.send({
                    email: result.email,
                    code: 200,
                    message: 'user Found',
                    token: 'hfgdhg'
                })
            }

        })
        .catch(err => {
            res.send({ code: 500, message: 'user not found' })
        })



}

module.exports.forgotpassword = async (req, res) => {
    try {
        const { email, secretAnswer1, secretAnswer2, newPassword } = req.body;

        // Find user by email
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).send({ code: 404, message: 'User not found.' });
        }

        // Check if secret answers match
        if (
            user.secretAnswer1 !== secretAnswer1 ||
            user.secretAnswer2 !== secretAnswer2
        ) {
            return res.status(400).send({ code: 400, message: 'Incorrect secret answers.' });
        }

        // Update user's password
        user.password = newPassword;
        await user.save();

        // If everything is correct, send success response
        res.status(200).send({ code: 200, message: 'Password updated successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ code: 500, message: 'Internal server error.' });
    }
}


module.exports.GenerateCv=async (req,res)=>{
    console.log(req.body);
    const first_name=req.body.FirstName;
    const last_name=req.body.LastName;
    const middle_name=req.body.MiddleName;
    const email_id=req.body.EmailId;
    const phone_no=req.body.PhoneNumber;
    const education=req.body.Education;
    const skills=req.body.Skills;
    const work_exp=req.body.WorkExperience;
    const user_id=email_id;   // get userid - either assign when register || email 
    const summary=req.body.Summary;
    const projects=req.body.Projects;
    const links=req.body.Links;

    try{// if the user has his details already saved => update it
        let user=await UserInfoModel.findOne({user_id:email_id});
        if (user){
            user.first_name=first_name;
            user.last_name=last_name;
            user.middle_name=middle_name;
            user.email_id=email_id;
            user.phone_no=phone_no;
            user.summary=summary;
            user.Education=education;
            user.skills=skills;
            user.work_exp=work_exp;
            user.projects=projects;
            user.Links=links;

            user=await user.save();
            res.send({code:200,message:'user details updated'})
        }
        else{//save the details by creating a new record
            user=new UserInfoModel({
                user_id,
                first_name,
                last_name,
                middle_name,
                email_id,
                phone_no,
                summary,
                education,
                skills,
                work_exp,
                projects,
                links
            });
            user=await user.save();
            res.send({code:201,message:'user details saved'});
        }
    }catch(err){
        console.log(err);
        res.send({code:500,messgae:'server error'})
    }
}
