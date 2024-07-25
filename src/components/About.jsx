import React from 'react';
import '../styles/About.css';
import { ABOUT_ME, SKILLS, SKILLS_IMG } from '../utils/constant';


const About = () => {

  return (
    <div id='about-div'>
      <h1 id='overview-heading'>Overview</h1>
      <div id="desc-header">A Bit About Me </div>
      <div id="description">{ABOUT_ME}</div>
      <div id="technologies">Technical Palette</div>
      <div id="skill-set">
        {SKILLS.map((skill,index) => (
          <div id="skill-item" key={index}>
           <img id="skill-image" src={SKILLS_IMG[index]}/>
           <div id='skill-name'>{skill}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About