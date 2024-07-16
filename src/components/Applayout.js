import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Navbar from '../components/Navbar';

const Applayout = () => {
  return(
    <div>
      <h1> Developer's Portfolio</h1>
      <Navbar/>
    </div>
  )
}

export default Applayout;