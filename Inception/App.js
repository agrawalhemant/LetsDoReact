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

// const heading = React.createElement(
//   'h1',
//   { id: 'heading' },
//   'Hello world from React'
// );

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
