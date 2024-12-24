

import { Side } from '../components/Side';
import { Nav } from '../components/Nav';
import templateImage1 from '../assets/images/resume_template_1.png';
import templateImage2 from '../assets/images/resume_template_2.png'; // Importing the second image
import templateImage3 from '../assets/images/resume_template_3.png'; // Importing the third image
import templateImage4 from '../assets/images/resume_template_4.png'; // Importing the fourth image
import templateImage5 from '../assets/images/resume_template_5.png'; // Importing the fifth image
import templateImage6 from '../assets/images/resume_template_6.png';
import templateImage7 from '../assets/images/resume_template_7.png'; // Importing the second image
import templateImage8 from '../assets/images/resume_template_8.png'; // Importing the third image
import templateImage9 from '../assets/images/resume_template_9.png'; // Importing the fourth image
import templateImage10 from '../assets/images/resume_template_10.png'; // Importing the fifth image
import templateImage11 from '../assets/images/resume_template_11.png'; // Importing the fifth image
import templateImage12 from '../assets/images/resume_template_12.png'; // Importing the fifth image
import resume4 from '../assets/images/resume4.png';
import './Template.css';

const Template = () => {
    const openModal = (modalId) => {
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    };

    const closeModal = () => {
        const modal1 = document.getElementById('modal1');
        const modal2 = document.getElementById('modal2');
        const modal3 = document.getElementById('modal3');
        const modal4 = document.getElementById('modal4');
        const modal5 = document.getElementById('modal5');
        const modal6 = document.getElementById('modal6');
        const modal7 = document.getElementById('modal7');
        const modal8 = document.getElementById('modal8');
        const modal9 = document.getElementById('modal9');
        const modal10 = document.getElementById('modal10');
        const modal11 = document.getElementById('modal11');
        const modal12 = document.getElementById('modal12');


        modal1.style.display = 'none';
        modal2.style.display = 'none';
        modal3.style.display = 'none';
        modal4.style.display = 'none';
        modal5.style.display = 'none';
        modal6.style.display = 'none';
        modal7.style.display = 'none';
        modal8.style.display = 'none';
        modal9.style.display = 'none';
        modal10.style.display = 'none';
        modal11.style.display = 'none';
        modal12.style.display = 'none';

    };

    return (
        <div className="template">
            <Side />
            <div className="templateContainer">
                <Nav />
                <div className="infoBox">
                <img src={resume4} alt="Tiny Image" className="tinyImage" />
                    <h2 >Sample Templates</h2><br></br>
                    
                </div>
                <div >
                <p className="smallText">Explore a variety of professionally curated sample templates to ignite your creativity and simplify your design journey. </p>
                    </div> 
                
                <div className="templateImages">
                    {/* Using the imported image variables as src */}
                    <div className="templateImage" onClick={() => openModal('modal1')}>
                        <img src={templateImage1} alt="Resume Template 1" className="responsiveImage" />
                        <h3 className="subHeading">Sample 1</h3>
                    </div>
                    <div className="templateImage" onClick={() => openModal('modal2')}>
                        <img src={templateImage2} alt="Resume Template 2" className="responsiveImage" />
                        <h3 className="subHeading">Sample 2 </h3>
                    </div>
                    <div className="templateImage" onClick={() => openModal('modal3')}>
                        <img src={templateImage3} alt="Resume Template 3" className="responsiveImage" />
                        <h3 className="subHeading">Sample 3</h3>
                    </div>
                    <div className="templateImage" onClick={() => openModal('modal4')}>
                        <img src={templateImage4} alt="Resume Template 4" className="responsiveImage" />
                        <h3 className="subHeading">Sample 4</h3>
                    </div>
                    <div className="templateImage" onClick={() => openModal('modal5')}>
                        <img src={templateImage5} alt="Resume Template 5" className="responsiveImage" />
                        <h3 className="subHeading">Sample 5</h3>
                    </div>
                    <div className="templateImage" onClick={() => openModal('modal6')}>
                        <img src={templateImage6} alt="Resume Template 6" className="responsiveImage" />
                        <h3 className="subHeading">Sample 6</h3>
                    </div>
                    <div className="templateImage" onClick={() => openModal('modal7')}>
                        <img src={templateImage7} alt="Resume Template 7" className="responsiveImage" />
                        <h3 className="subHeading">Sample 7</h3>
                    </div>
                    <div className="templateImage" onClick={() => openModal('modal8')}>
                        <img src={templateImage8} alt="Resume Template 8" className="responsiveImage" />
                        <h3 className="subHeading">Sample 8</h3>
                    </div>
                    <div className="templateImage" onClick={() => openModal('modal9')}>
                        <img src={templateImage9} alt="Resume Template 9" className="responsiveImage" />
                        <h3 className="subHeading">Sample 9</h3>
                    </div>
                    <div className="templateImage" onClick={() => openModal('modal10')}>
                        <img src={templateImage10} alt="Resume Template 10" className="responsiveImage" />
                        <h3 className="subHeading">Sample 10</h3>
                    </div>
                    <div className="templateImage" onClick={() => openModal('modal11')}>
                        <img src={templateImage11} alt="Resume Template 11" className="responsiveImage" />
                        <h3 className="subHeading">Sample 11</h3>
                    </div>
                    <div className="templateImage" onClick={() => openModal('modal12')}>
                        <img src={templateImage12} alt="Resume Template 12" className="responsiveImage" />
                        <h3 className="subHeading">Sample 12</h3>
                    </div>
                </div>
            </div>
            <div id="modal1" className="modal">
                <span className="close" onClick={closeModal}>&times;</span>
                <img className="modal-content" src={templateImage1} alt="Enlarged Resume Template 1" />
            </div>
            <div id="modal2" className="modal">
                <span className="close" onClick={closeModal}>&times;</span>
                <img className="modal-content" src={templateImage2} alt="Enlarged Resume Template 2" />
            </div>
            <div id="modal3" className="modal">
                <span className="close" onClick={closeModal}>&times;</span>
                <img className="modal-content" src={templateImage3} alt="Enlarged Resume Template 3" />
            </div>
            <div id="modal4" className="modal">
                <span className="close" onClick={closeModal}>&times;</span>
                <img className="modal-content" src={templateImage4} alt="Enlarged Resume Template 4" />
            </div>
            <div id="modal5" className="modal">
                <span className="close" onClick={closeModal}>&times;</span>
                <img className="modal-content" src={templateImage5} alt="Enlarged Resume Template 5" />
            </div>
            <div id="modal6" className="modal">
                <span className="close" onClick={closeModal}>&times;</span>
                <img className="modal-content" src={templateImage6} alt="Enlarged Resume Template 6" />
                </div>
            <div id="modal7" className="modal">
                <span className="close" onClick={closeModal}>&times;</span>
                <img className="modal-content" src={templateImage7} alt="Enlarged Resume Template 7" />
                </div>
            <div id="modal8" className="modal">
                <span className="close" onClick={closeModal}>&times;</span>
                <img className="modal-content" src={templateImage8} alt="Enlarged Resume Template 8" />
                </div>
            <div id="modal9" className="modal">
                <span className="close" onClick={closeModal}>&times;</span>
                <img className="modal-content" src={templateImage9} alt="Enlarged Resume Template 9" />
                </div>
            <div id="modal10" className="modal">
                <span className="close" onClick={closeModal}>&times;</span>
                <img className="modal-content" src={templateImage10} alt="Enlarged Resume Template 10" />
                </div>
            <div id="modal11" className="modal">
                <span className="close" onClick={closeModal}>&times;</span>
                <img className="modal-content" src={templateImage11} alt="Enlarged Resume Template 11" />
                </div>
            <div id="modal12" className="modal">
                <span className="close" onClick={closeModal}>&times;</span>
                <img className="modal-content" src={templateImage12} alt="Enlarged Resume Template 12" />
                </div>

        </div>
    );
};

export default Template;
