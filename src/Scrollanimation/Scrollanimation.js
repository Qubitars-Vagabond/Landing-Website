import React, { useEffect, useState } from 'react';
import { Home } from '../Pages/Home';
import AboutUs from '../Pages/AboutUs';
import Features from '../Pages/Features';
import { GetApplication } from '../Pages/GetApplication';
import TouchPage   from '../Pages/GetInTouch'; // Corrected import statement

const ScrollPage = () => {
  const [currentComponent, setCurrentComponent] = useState(1);

  useEffect(() => {
    const handleScroll = (event) => {
      const scrollDirection = event.deltaY > 0 ? 'down' : 'up';
      const sensitivity = 50;

      if (scrollDirection === 'down') {
        setCurrentComponent((prevComponent) => Math.min(prevComponent + 1, 5));
      } else {
        setCurrentComponent((prevComponent) => Math.max(prevComponent - 1, 1));
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div>
      <div>
        {currentComponent === 1 && <Home />}
        {currentComponent === 2 && <AboutUs />}
        {currentComponent === 3 && <Features />}
        {currentComponent === 4 && <GetApplication />}
        {currentComponent === 5 && <TouchPage />}
      </div>
    </div>
  );
};

export default ScrollPage;
