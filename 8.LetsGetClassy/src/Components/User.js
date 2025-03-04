import React from 'react';
import { useState } from 'react';

const User = ({ name, location }) => {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(2);
  return (
    <div id="user-card">
      <h1>Count1: {count1}</h1>
      <h1>Count2: {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h3>Contact: @agrawalhemant</h3>
    </div>
  );
};

export default User;
