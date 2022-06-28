import React, { useState } from "react";
import classnames from "classnames";
import logo from "../../images/businessLogo.png";
import "./index.scss";
import BurgerMenu from "../BurgerMenu";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className='nav-container'>
      <img src={logo} alt='' />

      <div className={classnames("nav-right")}>
        <ul className={classnames("nav-links", { displayLinks: showLinks })}>
          <li
            onClick={() => setShowLinks(!showLinks)}
            className={classnames("nav-links", { displayLinks: showLinks })}
          >
            Home
          </li>
          <li
            onClick={() => setShowLinks(!showLinks)}
            className={classnames("nav-links", { displayLinks: showLinks })}
          >
            Event
          </li>
          <li
            onClick={() => setShowLinks(!showLinks)}
            className={classnames("nav-links", { displayLinks: showLinks })}
          >
            Contact Us
          </li>
        </ul>
      </div>
      <BurgerMenu showLinks={showLinks} setShowLinks={setShowLinks} />
    </div>
  );
};

export default Navbar;
