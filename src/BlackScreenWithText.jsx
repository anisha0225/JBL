
import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import './BlackScreenWithText.css';

const words = [ 'JBL', 'TUNE', '500'];

const BlackScreenWithText = ({ onAnimationComplete }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const blackScreenRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500); 

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    if (currentWordIndex === words.length - 1) {
      
      const timeout = setTimeout(() => {
        gsap.to(blackScreenRef.current, {
          opacity: 0,
          duration: 1.5, 
          onComplete: onAnimationComplete
        });
      }, 1000); 

      return () => clearTimeout(timeout);
    }
  }, [currentWordIndex, onAnimationComplete]);

  return (
    <div ref={blackScreenRef} className="black-screen">
      <h1 className="glowing-text">
        {words[currentWordIndex]}
      </h1>
    </div>
  );
};

export default BlackScreenWithText;
