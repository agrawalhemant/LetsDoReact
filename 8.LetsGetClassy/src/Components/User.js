import React, { useEffect } from 'react';
import { useState } from 'react';
import Loader from './Loader';
import { Github_User_API } from '../Utils/constants';

const User = () => {
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    const userData = getUserData();
    setUserInfo(userData);
  }, []);

  var getUserData = async () => {
    const data = await fetch(Github_User_API + 'agrawalhemant');
    const json = await data.json();
    console.log(json);
    return json;
  };

  return userInfo == null ? (
    <Loader />
  ) : (
    <div id="user-card">
      <h2>Name: {userInfo.name}</h2>
      <img id="user-img" src={userInfo.avatar_url} alt="Avatar" />
      <h3>{userInfo.bio}</h3>
    </div>
  );
};

export default User;
