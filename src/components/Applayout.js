import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
import '../styles/Applayout.css'

const Applayout = () => {
  return(
    <div id="app-layout">
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Applayout;