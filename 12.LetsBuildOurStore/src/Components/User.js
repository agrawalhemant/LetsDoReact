import React, { useEffect } from 'react';
import { useState } from 'react';
import Loader from './Loader';
import { Github_User_API } from '../Utils/constants';

const User = () => {
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    getUserData();
  }, []);

  var getUserData = async () => {
    const data = await fetch(Github_User_API + 'agrawalhemant');
    const json = await data.json();
    setUserInfo(json);
  };

  return userInfo == null ? (
    <Loader />
  ) : (
    <div className="text-center">
      <h2>Name: {userInfo.name}</h2>
      <img id="user-img" src={userInfo.avatar_url} alt="Avatar" />
      <h3>{userInfo.bio}</h3>
    </div>
  );
};

export default User;
