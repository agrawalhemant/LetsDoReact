import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child1' }, [
    React.createElement('h1', { id: 'heading' }, "I'm an h1 inside child1"),
    React.createElement('h2', {}, "I'm an h2 inside child1"),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, "I'm an h1 inside child2"),
    React.createElement('h2', {}, "I'm an h2 inside child2"),
  ]),
]);

console.log(parent);

// const heading = React.createElement(
//   'h1',
//   { id: 'heading' },
//   'Hello world from React'
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));

console.log(root);

root.render(parent);
root2.render(parent);
