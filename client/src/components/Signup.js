import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const standardQuestion1 = "Which place is your birth city?";
    const standardQuestion2 = "What is your mother's maiden name?";
    const [secretAnswer1, setSecretAnswer1] = useState('');
    const [secretAnswer2, setSecretAnswer2] = useState('');

    const validateEmail = (email) => {
        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        // Password validation regex
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = () => {
        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        if (!validatePassword(password)) {
            alert('Password must be at least 8 characters long and contain at least one letter, one number, and one special character');
            return;
        }

        if (!email || !password || !secretAnswer1 || !secretAnswer2) {
            alert('All fields are required');
            return;
        }

        // Passwords match, proceed with signup
        axios.post('http://localhost:5001/signup', {
            email: email,
            password: password,
            secretQuestion1: standardQuestion1,
            secretAnswer1: secretAnswer1,
            secretQuestion2: standardQuestion2,
            secretAnswer2: secretAnswer2
        })
        .then(res => {
            console.log(res.data);
            if (res.data.code === 200) {
                alert('Signup success.');
            } else {
                alert('Error.');
            }
        })
        .catch(err => {
            console.log(err);
            alert('Error.');
        });
    };

    return (
        <>
            <div className="title-container">
            <div className="title-content">
                <span className="logo magik">Magik</span>
                <br />
                <span className="logo resume">Resume</span>
                <br />
                <span className="tagline" style={{ fontStyle: 'italic' }}>Your Personalised Resume Wizard</span>

                <br />
                <span className="tagline2">Join us today!</span>
                <br /><br />
                <span className="tagline3">Unlock Your Career Potential <br /> with Tailored Resumes! <br /> Crafting compelling resumes <br /> for successful job interviews.</span>
                <img src="/images/check.png" alt="Check mark" />
            </div>

            </div>
            <div className="signup-form">
                <div className="outcard">
                <h1 className="signup-title"> Create an account today </h1>
                    E-mail
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="inputs"
                        type="email"
                    /><br /><br />
                    Password
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="inputs"
                        type="password"
                    /><br /><br />
                    Confirm Password
                    <input
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        className="inputs"
                        type="password"
                    /><br /><br />
                    <p>Secret Question 1: <br />{standardQuestion1}</p>
                    Enter Secret Answer 1:
                    <input
                        onChange={(e) => setSecretAnswer1(e.target.value)}
                        value={secretAnswer1}
                        className="inputs"
                        type="text"
                    /><br /><br />
                    <p>Secret Question 2: <br /> {standardQuestion2}</p>
                    Enter Secret Answer 2
                    <input
                        onChange={(e) => setSecretAnswer2(e.target.value)}
                        value={secretAnswer2}
                        className="inputs"
                        type="text"
                    /><br /><br />
                    <button
                        onClick={handleSubmit}
                        className="btns"
                    >
                        Submit
                    </button>
                    <div className="signin-link">
                        <span className="signed">Already have an Account?</span>
                        <Link to={'/signin'}>Sign in</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
