import React, { useEffect, useRef } from 'react';
import '../styles/About.css';
import { ABOUT_ME, SKILLS, SKILLS_IMG } from '../utils/constant';


const About = () => {

  const skillSetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          skillSetRef.current.classList.add('skill-set-visible');
        } else {
          skillSetRef.current.classList.remove('skill-set-visible');
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (skillSetRef.current) {
      observer.observe(skillSetRef.current);
    }

    return () => {
      if (skillSetRef.current) {
        observer.unobserve(skillSetRef.current);
      }
    };
  }, []);

  return (
    <div id='about-div'>
      <h1 id='overview-heading'>Overview</h1>
      <div id="desc-header">A Bit About Me </div>
      <div id="description">{ABOUT_ME}</div>
      <div id="technologies">Technical Palette</div>
      <div id="skill-set" ref={skillSetRef}>
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