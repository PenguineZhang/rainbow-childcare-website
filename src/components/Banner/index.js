import React from "react";
import rainbow from "../../images/bannerBg.jpg";
import kids from "../../images/kids.png";
import "./index.scss";
import { Parallax } from "react-parallax";

function Banner() {
  return (
    <div className='banner-container'>
      <Parallax strength={600} bgImage={rainbow}>
        <div className='content'>rainbow care</div>
      </Parallax>
    </div>
  );
}

export default Banner;
