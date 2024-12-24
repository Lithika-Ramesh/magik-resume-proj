import { useState } from "react";
import axios from "axios";

function ForgetPassword() {
    const [email, setEmail] = useState('');
    const [secretAnswer1, setSecretAnswer1] = useState('');
    const [secretAnswer2, setSecretAnswer2] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const standardQuestion1 = "Which place is your birth city?";
    const standardQuestion2 = "What is your mother's maiden name?";

    const handleSubmit = () => {
        if (newPassword !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }

        axios.post('http://localhost:5000/resetpassword', {
            email,
            secretAnswer1,
            secretAnswer2,
            newPassword
        })
        .then(res => {
            console.log(res.data);
            if (res.data.code === 200) {
                alert('Password reset successfully.');
            } else {
                alert('Error resetting password.');
            }
        })
        .catch(err => {
            console.error(err);
            alert('Error resetting password.');
        });
    };

    return (
        <div className="forget-password-container">
            <div className="forget-password-image">
                <img src="resume2.png" alt="resume" />
            </div>
            <div className="forget-password-form">
                <div className="title-container">
                    <h1 className="title-text">MAGIK-RESUME</h1>
                </div>
                <div className="outcard">
                    <h2>Forget Password</h2>
                    <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="inputs" /><br /><br />
                    <label>{standardQuestion1}</label>
                    <input placeholder="Answer to Secret Question 1" onChange={(e) => setSecretAnswer1(e.target.value)} value={secretAnswer1} type="text" className="inputs" /><br /><br />
                    <label>{standardQuestion2}</label>
                    <input placeholder="Answer to Secret Question 2" onChange={(e) => setSecretAnswer2(e.target.value)} value={secretAnswer2} type="text" className="inputs" /><br /><br />
                    <label><bold>New Password</bold></label>
                    <input placeholder="New Password" onChange={(e) => setNewPassword(e.target.value)} value={newPassword} type="password" className="inputs" /><br /><br />
                    <label>Confirm Password</label>
                    <input placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} type="password" className="inputs" /><br /><br />
                    <button onClick={handleSubmit} className="btns">Reset Password</button>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword;

