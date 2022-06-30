import React from "react";
import classnames from "classnames";
import "./index.scss";

function AboutUs() {
  return (
    <div className='about-us'>
      <div className={classnames("aboutUs-block", "container1")}>
        <h1>Small-class</h1>
        <p>
          Rainbow Faimly Childcare focuses on quality care. With small size class, 
          each child gets every second of attention they deserve. 
        </p>
      </div>
      <div className={classnames("aboutUs-block", "container2")}>
        <h1>Health and safety</h1>
        <p>
          It's our top priority to ensure safe care environment for children's growth 
          and development. Care provider is CPR/First Aid certified and background-checked.
        </p>
      </div>
      <div className={classnames("aboutUs-block", "container3")}>
        <h1>Play-based</h1>
        <p>
          We guide children to learn basic social skills through play-based interactions.
          Children learn to experience the world and respect each other.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
