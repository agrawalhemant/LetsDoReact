const User = ({ name, location }) => {
  return (
    <div id="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h3>Contact: @agrawalhemant</h3>
    </div>
  );
};

export default User;
