import logo from './logo.svg';
import './App.css';

import React from 'react';
import Navbar from './NavBar';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
