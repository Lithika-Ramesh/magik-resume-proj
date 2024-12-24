import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import './Signin.css';

function Signin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
 console.log(email, password)
        axios.post('http://localhost:5000/signin',
            {
                email: email,
                password: password
            })
            .then(res => {
                console.log(res.data)

                if (res.data.code === 500) {
                    alert('User Not Found')
                }
                if (res.data.code === 404) {
                    alert('Password is wrong')
                }
                if (res.data.code === 200) {
                    // move to home
                    navigate('/')
                    localStorage.setItem('TOKEN', res.data.token)
                    localStorage.setItem('EMAIL', res.data.email)
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return (<>
        <div className="title-container">
            <div className="title-content">
                <span className="logo magik">Magik</span>
                <br />
                <span className="logo resume">Resume</span>
                <br />
                <span className="tagline" style={{ fontStyle: 'italic' }}>Your Personalised Resume Wizard</span>
                {/* Display the image */}
                <img src="/images/check.png" alt="Check mark" />
                <br />
                <span className="description">Where Your Dream Job Begins <br /> with a Tailored Resume!</span>
            </div>
        </div>
        <div className="outcard">
        <h1 className="journey-title"> START YOUR JOURNEY </h1>
        <h1 className="signin-title"> Sign In to Magik Resume </h1>
             <bold>E-mail</bold>
             <br />
            <input
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                value={email}
                className="inputs"
                type="email" /> <br /> 
                <br />
            <bold>Password</bold>
            <br />
            <input
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                value={password}
                className="inputs" type="password" /> <br /> <br />
            
            <span style={{textAlign: 'right', display: 'block', marginTop: '5px' }}
                to={'/forgot-link'}>Forgot Password?</span>
            <Link style={{textAlign: 'right', display: 'block', marginTop: '5px', marginBottom: '5px'}}
                to={'/forget-pass'}> Click here </Link>
            <button
                onClick={handleSubmit}
                className="btns"> Submit </button>
            <span style={{textAlign: 'left', display: 'block', marginTop: '5px' }}
                to={'/signup-link'}>Don't have an account yet?</span>
            <Link style={{textAlign: 'left', display: 'block', marginTop: '5px' }}
                to={'/signup'}> Sign up Here </Link>

        </div>
    </>
    )
}

export default Signin;
