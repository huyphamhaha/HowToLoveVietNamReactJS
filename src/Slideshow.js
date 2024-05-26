import React, { useState, useEffect } from 'react';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 1000); // Thời gian khớp với transition trong CSS
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="background">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`slide ${index}`}
          className={`background-image ${index === currentIndex && !isFading ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default Slideshow;
