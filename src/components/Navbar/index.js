import React, { useState } from "react";
import logo from "../../images/businessLogo.png";
import "./index.scss";
import BurgerMenu from "../BurgerMenu";

const Navbar = () => {
  return (
    <div className='nav-container'>
      <img src={logo} alt='' />

      <div className='nav-right'>
        <ul>
          <li>Home</li>
          <li>Event</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <BurgerMenu />
    </div>
  );
};

export default Navbar;
