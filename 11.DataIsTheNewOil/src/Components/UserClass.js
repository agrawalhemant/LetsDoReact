import React from 'react';
import { Github_User_API } from '../Utils/constants';
import Loader from './Loader';
import UserContext from '../Utils/Contexts/UserContext';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
    console.log('Constructor called in UserClass');
  }

  async componentDidMount() {
    const data = await fetch(Github_User_API + 'agrawalhemant');
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    // this.timer = setInterval(() => {
    //   console.log('setInterval called in UserClass');
    // }, 2000);
  }

  async componentDidUpdate() {
    console.log('componentDidUpdate called in UserClass');
  }

  async componentWillUnmount() {
    console.log('componentWillUnmount called in UserClass');
    //clearInterval(this.timer);
  }

  render() {
    console.log('render called in UserClass');
    const { name, bio, avatar_url } = this.state.userInfo;
    // console.log('name : ' + name);
    return name == null ? (
      <Loader />
    ) : (
      <div className="text-center">
        <UserContext.Consumer>
          {(data) => (
            <div>
              <h2 className="font-bold">Name: {data.username}</h2>
            </div>
          )}
        </UserContext.Consumer>
        <img id="user-img" src={avatar_url} alt="Avatar" />
        <h3>{bio}</h3>
      </div>
    );
  }
}

export default UserClass;
