import React, { useState } from "react";
import "./index.scss";
import googleDocService from "../../service/googleDoc";

const Queue = () => {
  const [userInfo, setUserInfo] = useState([
    {
      email: "",
      name: "",
      age: "",
      gender: "",
      dipper: "",
    },
  ]);

  const handleSubmitInfo = (userInfo) => {
    console.log("function calkled");
    googleDocService.handlePostData(userInfo);
  };

  const handleUpdateItem = (e, item) => {
    const newInfo = [...userInfo];
    newInfo[0][item] = e.target.value;
    // console.log(newInfo);
    setUserInfo(newInfo);
  };

  return (
    <div className='queueContainer'>
      <h1>Schedule a visit</h1>

      <form action='' className='userInfo'>
        <div className='userInfoContainer'>
          <div className='wrapper'>
            <div className='title'>Email</div>
            <input
              type='text'
              placeholder='Email'
              value={userInfo[0].email}
              onChange={(e) => handleUpdateItem(e, "email")}
            />
          </div>
        </div>

        <div className='userInfoContainer'>
          <div className='wrapper'>
            <div className='title'>Kid's Name</div>
            <input
              type='text'
              placeholder='Name'
              value={userInfo[0].name}
              onChange={(e) => handleUpdateItem(e, "name")}
            />
          </div>
        </div>

        <div className='userInfoContainer'>
          <div className='wrapper'>
            <div className='title'>Kid's Age</div>
            <input
              type='text'
              placeholder='Age'
              value={userInfo[0].age}
              onChange={(e) => handleUpdateItem(e, "age")}
            />
          </div>
        </div>

        <div className='userInfoContainer'>
          <div className='wrapper'>
            <div className='title'>Kid's Gender</div>
            <input
              type='text'
              placeholder='Gender'
              value={userInfo[0].gender}
              onChange={(e) => handleUpdateItem(e, "gender")}
            />
          </div>
        </div>

        <div className='userInfoContainer'>
          <div className='wrapper'>
            <div className='title'>Dipper usage</div>
            <input
              type='dropdown'
              placeholder='Dipper'
              value={userInfo[0].dipper}
              onChange={(e) => handleUpdateItem(e, "dipper")}
            />
          </div>
        </div>
      </form>

      <button className='submitForm' onClick={() => handleSubmitInfo(userInfo)}>
        Submit
      </button>
      <p>Our staff will contact you shortly</p>
      <div>{userInfo[0].email}</div>
    </div>
  );
};

export default Queue;
