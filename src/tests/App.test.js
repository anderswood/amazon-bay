import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// const chai = require

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
