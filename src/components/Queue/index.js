import React from "react";

const Queue = () => {
  return (
    <div className='queueContainer'>
      <h1>Enter your child Info to queue up today!</h1>
      <input type='text' placeholder='Email' />
      <input type='text' placeholder='Name' />
      <input type='text' placeholder='Age' />
      <input type='text' placeholder='Gender' />
      <input type='text' placeholder='Dipper' />
      <input type='text' />

      <p>Our staff will contact you shortly</p>
    </div>
  );
};

export default Queue;
