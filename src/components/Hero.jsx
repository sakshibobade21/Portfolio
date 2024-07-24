import React, { useEffect, useState } from 'react';
import '../styles/HeroStyles.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Button from '@mui/material/Button';

const Hero = () => {

  return (
    <div id="intro-section">
      <div id="intro-header">
        <div id="veticle-line"></div>
        <div id='about-me'>
          <div id="hero-header">
            <h1 id='hi-intro'>Hi, I'm Sakshi</h1>
            <h3 id='intro'>Full Stack Developer, Crafting Dynamic Web Applications & User-Centric Interfaces</h3>
          </div>
          <div id='about-icons'>
            <div id="icon" className='linkedin-icon'><LinkedInIcon /></div>
            <div id="icon" className='github-icon'><GitHubIcon /></div>
            <div id="icon" className='email-icon'><EmailIcon /></div>
            <div id="icon" className='phone-icon'><PhoneIcon /></div>
          </div>
          <div><Button id="resume-button" variant="outlined" size="medium"><span id='text-resume'>RESUME</span></Button></div>
        </div>
        <div id="image-div"></div>
      </div>
    </div>
  )
}

export default Hero