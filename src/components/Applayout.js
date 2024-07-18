import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
import About from "../components/About";
import '../styles/Applayout.css'

const Applayout = () => {
  return(
    <div id="app-layout">
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default Applayout;