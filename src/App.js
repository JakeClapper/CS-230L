import logo from './logo.svg';
import './App.css';

import React from 'react';
import Navbar from './NavBar';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <h1>CS 230L</h1>
      <h2>Section -003</h2>
      <p>WVU ID: 800387090</p>
      <p> Hi Im Jake</p>

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
