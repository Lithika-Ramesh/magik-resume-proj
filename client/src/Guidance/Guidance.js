import React from 'react';
import { Nav } from '../components/Nav';
import { Side } from '../components/Side';
import './Guidance.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Guidance = () => {
  // Function to toggle accordion
  const toggleAccordion = (index) => {
    const panel = document.getElementById(`panel-${index}`);
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  };

  return (
    <div className="Guidance">
      <div className="side-box">
        <Side />
      </div>
      <div className="GuidanceContainer">
        <Nav />
        <h2><center>FAQs</center></h2>
        {/* FAQ Accordions */}
        <div className="accordion">
          <button className="accordion-btn" onClick={() => toggleAccordion(1)}>
            How do I create a professional resume?{''}
            <FontAwesomeIcon icon={faChevronDown} className="icon" />
          </button>
          <div id="panel-1" className="panel">
            
            <p>Some tips for creating a professional resume:</p>
            <ul>
              <li>Focus on relevant experience and skills.</li>
              <li>Use clear and concise language.</li>
              <li>Highlight achievements and accomplishments.</li>
              <li>Tailor your resume to the job description.</li>
            </ul>
          </div>
        </div>

        <div className="accordion">
          <button className="accordion-btn" onClick={() => toggleAccordion(2)}>
            What are the essential sections of a resume?{''}
            <FontAwesomeIcon icon={faChevronDown} className="icon" />
          </button>
          <div id="panel-2" className="panel">
            
            <p>Some essential sections of a resume include:</p>
            <ul>
              <li>Contact Information</li>
              <li>Summary or Objective</li>
              <li>Work Experience</li>
              <li>Education</li>
              <li>Skills</li>
            </ul>
          </div>
        </div>

        {/* Add more FAQs */}
        <div className="accordion">
          <button className="accordion-btn" onClick={() => toggleAccordion(3)}>
            How can I tailor my resume for a specific job?{''}
            <FontAwesomeIcon icon={faChevronDown} className="icon" />
          </button>
          <div id="panel-3" className="panel">
            
            <p>Here are some tips for tailoring your resume:</p>
            <ul>
              <li>Read the job description carefully.</li>
              <li>Identify keywords and skills required for the job.</li>
              <li>Customize your resume to match the job requirements.</li>
              <li>Highlight relevant experiences and achievements.</li>
              <li>Quantify your achievements whenever possible.</li>
            </ul>
          </div>
        </div>

        <div className="accordion">
          <button className="accordion-btn" onClick={() => toggleAccordion(4)}>
            What are some common resume mistakes to avoid?{''}
            <FontAwesomeIcon icon={faChevronDown} className="icon" />
          </button>
          <div id="panel-4" className="panel">
            
            <p>Common resume mistakes include:</p>
            <ul>
              <li>Spelling and grammar errors.</li>
              <li>Using an outdated or unprofessional email address.</li>
              <li>Not tailoring your resume to the job.</li>
              <li>Including irrelevant information.</li>
              <li>Using a generic objective statement.</li>
            </ul>
          </div>
        </div>

        <div className="accordion">
          <button className="accordion-btn" onClick={() => toggleAccordion(5)}>
            How can I make my resume stand out?{''}
            <FontAwesomeIcon icon={faChevronDown} className="icon" />
          </button>
          <div id="panel-5" className="panel">
            
            <p>Here are some tips to make your resume stand out:</p>
            <ul>
              <li>Use a clean and professional format.</li>
              <li>Quantify your achievements and experiences.</li>
              <li>Showcase relevant skills and experiences prominently.</li>
              <li>Include a strong summary or objective statement.</li>
              <li>Customize your resume for each job application.</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Guidance;
