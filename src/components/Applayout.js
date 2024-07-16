import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Navbar from '../components/Navbar';
import Hero from "../components/Hero";

const Applayout = () => {
  return(
    <div>
      {/* <Navbar/> */}
      <Hero/>
    </div>
  )
}

export default Applayout;