import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 2,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count1, count2 } = this.state;
    return (
      <div id="user-card">
        <h1>Count1: {count1}</h1>

        <h1>Count2: {count2}</h1>
        <button
          onClick={() =>
            this.setState({
              count1: count1 + 1,
              count2: count2 + 1,
            })
          }
        >
          Increment count1 & count2
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: @agrawalhemant</h3>
      </div>
    );
  }
}

export default UserClass;
