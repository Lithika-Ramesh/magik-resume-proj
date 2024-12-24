import { Side } from '../components/Side'
import { Nav } from '../components/Nav'
import { useState } from 'react'
//react quill text editor
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

//input scrollable list
import Scroller from './scroller'
import './Builder.css'
// axios for post,get requests
import axios from 'axios'
//download part
import jsPDF from 'jspdf'
import html2pdf from 'html2pdf.js'
import temp1 from '../Template/temp1'

const Builder = () => {
    const [inputData,setinputData]=useState({
        JobDescription:"",
        FirstName:'',
        LastName:'',
        MiddleName:'',
        PhoneNumber:'',
        EmailId:'',
        Summary:'',
        Education:'',
        Skills:'',
        WorkExperience:'',
        Projects:'',
        Links:''
    }); 
    const [value,setValue]=useState("");
    
    // Add educationa details,
    const InputList=['JobDescription','FirstName','LastName','MiddleName','PhoneNumber','EmailId','Summary','Education','Skills',"WorkExperience","Projects","Links"];
    //save to mongodb using axios
    const save_details=()=>{
        axios.post('http://localhost:5000/builder',inputData)
        .then(result=>{
            console.log(result.data);
        }).catch(err=>{
            console.log(err);
        })
    }
    //prompting
    const prompt=async (inputData)=>{
        var improvised_cv;
        try{
            const response=await axios.get('http://localhost:5000/prompting',{params:{
                                                                                    inputData:inputData
                                                                                }});
            improvised_cv=response.data.message;
            improvised_cv=JSON.parse(improvised_cv);
            setValue(temp1(inputData,improvised_cv));
        }catch(err){
            console.log('error with openai prompting',err);
        }
        
    }
    //handling input changes
    const handleInputChange=(name,value)=>{
        setinputData((prevData)=>({
            ...prevData, //spread
            [name]:value
        }));
        
    }
    const generate_cv= ()=>{
        //save to mongodb
        save_details();
        //prompting && rendering
        prompt(inputData);
    }
    const download_cv=()=>{
        const element = document.createElement('div');
        element.innerHTML = value;

        html2pdf()
            .from(element)
            .set({ html2canvas: { scale: 1 } })
            .save();
    }
    //Preview overlay function handling
   
    return(
        <div className="builder" padding>
            <Side/>
            <div className="builderContainer">
                <Nav/>
                <div className='container'>
                <   div className="listbox">
                        <Scroller InputList={InputList} onInputChange={handleInputChange}/> 
                    </div>
                    <div className="editor">
                        <ReactQuill 
                            theme="snow"
                            value={value} 
                            style={{width:'100%'}}
                            className="editor-text"
                            onChange={setValue}
                        />
                    </div>
                    <div className='bottom-container'>
                        <button className="button" onClick={generate_cv}>Generate CV</button><br></br>
                        <button className='button' onClick={download_cv}>Download CV</button>
                    </div>
                </div>
            </div> 
        </div>
    )
}
export default Builder;