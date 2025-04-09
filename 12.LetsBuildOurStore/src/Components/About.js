import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>About Us</h1>
      <h4>This is about section</h4>
      <h4>________________________________________</h4>
      <h3>From UserClass Component</h3>
      <UserClass />
      <h4>________________________________________</h4>
      <h3>From User Function Component</h3>
      <User />
    </div>
  );
};

export default About;
