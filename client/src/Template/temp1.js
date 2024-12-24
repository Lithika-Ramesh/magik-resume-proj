import React from "react";

const temp1=(enteredDetails,genContent)=>{
    
    const sections=Object.keys(genContent);
    var return_val;
    if(sections.includes('Projects') ? !sections.includes('Work_Experience'):sections.includes('Work_Experience')){
        const wrk_proj= (sections.includes('Work_Experience'))? 'Work Experience':'Projects' ;
        const wrk_proj_content=(sections.includes('Work_Experience'))? `${genContent.Work_Experience.map(work_ex=>`${work_ex.job} , ${work_ex.company} <h6>${work_ex.time_period}</h6> <ul><li>${work_ex['work_exp']}</li></ul>`).join('')}`:`<ul>${genContent.Projects.map(proj=>`<li>${proj.title}<ul><li>${proj.description}</ul>`)}</ul>`;
    
        return_val=`<html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 20px;
            }
            h1, h2 {
              color: #333;
            }
            .section {
              margin-bottom: 20px;
            }
          </style>
        </head>
        <body>
          <div class="section">
            <h1 align='center'>${enteredDetails.FirstName} ${enteredDetails.MiddleName} ${enteredDetails.LastName}</h1>
            <p><h6 align='center'>Email: ${enteredDetails.EmailId} | Phone: ${enteredDetails.PhoneNumber}</h6></p>
          </div>
          <hr style="border-top: 1px solid #000; margin: 20px 0;">
          <div class="section">
            <h2>Summary</h2>
            ${genContent.Summary}
          </div>
          <div class='section'>
            <h2>Education</h2>
            
            ${genContent.Education.map(ed=>`${ed.course}<br>${ed.institution} ${ed.time_interval}`).join('')}
            
          </div>
          <div class="section">
            <h2>${wrk_proj}</h2>
            <div className='wrk_proj_content'/>
          </div>
          <div class="section">
            <h2>Skills</h2>
            <ul>
                ${genContent.Skills.map(item=>`<li>${item}`).join('')}
            </ul>
          </div>
        </body>
      </html>`
      return_val=return_val.replace(`<div className='wrk_proj_content'/>`,wrk_proj_content)
      console.log(return_val);
    }
    else{
        
        return_val=`<html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 20px;
            }
            h1, h2 {
              color: #333;
            }
            .section {
              margin-bottom: 20px;
            }
          </style>
        </head>
        <body>
          <div class="section">
            <h1 align='center'>${enteredDetails.FirstName} ${enteredDetails.MiddleName} ${enteredDetails.LastName}</h1>
            <p><h6 align='center'>Email: ${enteredDetails.EmailId} | Phone: ${enteredDetails.PhoneNumber}</h6></p>
          </div>
          <hr style="border-top: 1px solid #000; margin: 20px 0;">
          <div class="section">
            <h2>Summary</h2>
            <p>${genContent.Summary}</p>
          </div>
          <div class='section'>
            <h2>Education</h2>
            
            ${genContent.Education.map(ed=>`${ed.course}<br>${ed.institution} ${ed.time_interval}`).join('')}
            
          </div>
          <div class="section">
            <h2>Work Experience</h2>
            ${genContent.Work_Experience.map(work_ex=>`${work_ex.job} , ${work_ex.company} <h6>${work_ex.time_period}</h6> <ul><li>${work_ex['work_exp']}</li></ul>`).join('')}
          </div>
          <div class="section">
            <h2>Skills</h2>
            <ul>
                ${genContent.Skills.map(item=>`<li>${item}`).join('')}
            </ul>
          </div>
          <div class="section">
            <h2>Projects</h2>
            <ul>${genContent.Projects.map(proj=>`<li>${proj.title}<ul><li>${proj.description}</ul>`)}</ul>
            
          </div>
        </body>
      </html>`
    }
    console.log(return_val);
    return(return_val);}
export default temp1;