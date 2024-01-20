// src/App.js
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';

const App = () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      {/* Add more routes as needed */}
    </div>
  );
};

export default App;
