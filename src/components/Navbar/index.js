import { directive } from "@babel/types";
import React from "react";
import "./index.scss";

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='nav-left'>LOGO PLACEHOLDER</div>

      <div className='nav-right'>
        <ul>
          <li>Home</li>
          <li>Event</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
