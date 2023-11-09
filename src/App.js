import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from './Home.js';
import React from 'react';
import Navbar from './NavBar.js';
import Card from './Card.js';
import Contact from './Contact.html';

function App() {
  return (
    <div className ="App">
  <BrowserRouter>
    <Navbar />
    <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/contact" element={<Contact />} />
        
    </Routes>
  </BrowserRouter>
</div>
  );
}


export default App;
