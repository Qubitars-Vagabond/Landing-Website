import React from 'react';
import ImageGallery from '../../Pages/Home';

const index = () => {
  const images = [
    "../Images/Rectangle 2.png",
    "../Images/Group 341.png",
    "../Images/Group 340.png"
  ];

  return (
    <div>
      <ImageGallery images={images} />
    </div>
  );
};

export default index;
