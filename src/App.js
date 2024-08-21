import './App.css';
import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './components/AboutUs';

const App = () => {
 return(
  <div>
    <Navbar />
    
    <main>
      <div id="home">
        <Home />
      </div>

      <div id="aboutus">
        <AboutUs />
      </div>
      
    </main>
    
  </div>
 );
  
};


export default App;
