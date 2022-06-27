import React, { useState } from "react";
import classnames from "classnames";
import "./index.scss";

const BurgerMenu = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div
      className={classnames("burger-container", { open: showLinks })}
      onClick={() => setShowLinks(!showLinks)}
    >
      <div className='burger'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default BurgerMenu;
