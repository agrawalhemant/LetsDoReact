import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div id="about">
      <h1>About Us</h1>
      <h4>This is about section of our app</h4>
      <User name={'Hemant (function)'} location={'Mathura (function)'} />
      <UserClass name={'Hemant (Class)'} location={'Mathura (class)'} />
    </div>
  );
};

export default About;
