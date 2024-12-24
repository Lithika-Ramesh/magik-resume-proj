import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => {
  return (
    <div className='logo-container'>
      <div className='top'>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className='logo magik'>Magik</span><br/>
          <span className='logo resume'>Resume</span><br/>
          <span className='tagline'>Your Personalised Resume Wizard</span>
        </Link>
      </div>
    </div>
  );
}

export default Logo;
