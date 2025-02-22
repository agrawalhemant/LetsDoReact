import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement('h1', null, 'heading text');
/*const heading = (
  <h1 id="heading" className="heading" tabIndex="1">
    heading using JSX
  </h1>
);
const link = (
  <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
    Click here to visit Google
  </a>
);
const image = (
  <img
    src="https://cdn-icons-png.flaticon.com/512/8136/8136031.png"
    alt="Placeholder Image"
  />
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render([heading, link, image]);*/

// React Functional component
const Heading = () => (
  <h1 id="heading">Heading using React Functional Component</h1>
);
const title = <h1 className="title">Heading using JSX</h1>;
const Title = () => title;
const random = Math.random();
const Div = () => {
  return (
    <div>
      {random}
      <Title />
      <Heading />
      {Title()}
      {Heading()}
      <Title></Title>
      <Heading></Heading>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Div />);
