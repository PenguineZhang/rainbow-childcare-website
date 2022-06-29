import React, { useState } from "react";
import "./index.scss";

const Queue = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    age: "",
    gender: "",
    dipper: false,
  });

  return (
    <div className='queueContainer'>
      <h1>Schedule a visit</h1>

      <form action='' className='userInfo'>
        <div className='userInfoContainer'>
          <div className='wrapper'>
            <div className='title'>Email</div>
            <input type='text' placeholder='Email' />
          </div>
        </div>

        <div className='userInfoContainer'>
          <div className='wrapper'>
            <div className='title'>Kid's Name</div>
            <input type='text' placeholder='Name' />
          </div>
        </div>

        <div className='userInfoContainer'>
          <div className='wrapper'>
            <div className='title'>Kid's Age</div>
            <input type='text' placeholder='Age' />
          </div>
        </div>

        <div className='userInfoContainer'>
          <div className='wrapper'>
            <div className='title'>Kid's Gender</div>
            <input type='text' placeholder='Gender' />
          </div>
        </div>

        <div className='userInfoContainer'>
          <div className='wrapper'>
            <div className='title'>Dipper usage</div>
            <input type='dropdown' placeholder='Dipper' />
          </div>
        </div>
      </form>

      <button className='submitForm'>Submit</button>
      <p>Our staff will contact you shortly</p>
    </div>
  );
};

export default Queue;
