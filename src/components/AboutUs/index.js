import React from "react";
import classnames from "classnames";
import "./index.scss";

function AboutUs() {
  return (
    <div className='about-us'>
      <div className={classnames("aboutUs-block", "container1")}>
        <h1>Small-class</h1>
        <p>
          Little Sprouts is San Diego’s best Reggio preschool offering organic
          meals and serving the greater San Diego area including Poway, Mission
          Valley, La Mesa, !
        </p>
      </div>
      <div className={classnames("aboutUs-block", "container2")}>
        <h1>Family own</h1>
        <p>
          Little Sprouts is San Diego’s best Reggio preschool offering organic
          meals and serving the greater San Diego area including Poway, Mission
          Valley, La Mesa, !
        </p>
      </div>
      <div className={classnames("aboutUs-block", "container3")}>
        <h1>Place holder</h1>
        <p>
          Little Sprouts is San Diego’s best Reggio preschool offering organic
          meals and serving the greater San Diego area including Poway, Mission
          Valley, La Mesa, !
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
