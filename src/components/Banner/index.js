import React from "react";
import rainbow from "../../images/rainbow.jpeg";
import kids from "../../images/kids.png";
import "./index.scss";

function Banner() {
  return (
    <div className='banner-container'>
      <header>
        <img src={rainbow} className='background' />
        <img src={kids} className='foreground' />
        <h1 className='title'>Rainbow Family Care</h1>
      </header>
    </div>
  );
}

export default Banner;
