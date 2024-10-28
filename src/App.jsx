

import React, { useState } from 'react';
import BlackScreenWithText from './BlackScreenWithText';
import LaptopModel from './LaptopModel';
import Navbar from './Navbar'
import './App.css';
const App = () => {
  const [showModel, setShowModel] = useState(false);

  const handleAnimationComplete = () => {
    setShowModel(true); 
  };

  return (
    <>
      {!showModel && <BlackScreenWithText onAnimationComplete={handleAnimationComplete} />}
      {showModel && 
      <>
      <Navbar/>
      
      <LaptopModel/>
      </>
    }
    </>
  );
};

export default App;
