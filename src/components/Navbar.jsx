import React from 'react'
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div id='nav-div'>
      <div id="hello-text">Hello There!!!</div>
      <div id="menu-div">
        <div className='manuItem' id="home">Home</div>
        <div className='manuItem' id="about">About</div>
        <div className='manuItem' id="experience">Experience</div>
        <div className='manuItem' id="projects">Projects</div>
        <div className='manuItem'id="contact">Contact</div>
      </div>
    </div>
  )
}

export default Navbar