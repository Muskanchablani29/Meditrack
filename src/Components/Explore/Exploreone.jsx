import React, { useState, useEffect } from 'react';
import './Exploreone.css';

export default function Exploreone() {
  const [isActive, setIsActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAllSections, setShowAllSections] = useState(false);

  // Initial activation of the component
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
      setActiveIndex(0);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    const rotateSection = () => {
      setActiveIndex(prevIndex => {
        if (prevIndex === null) return 0;
        if (prevIndex >= sections.length - 1) {
          // When reaching the last section, show all sections for 2 seconds
          setShowAllSections(true);
          setTimeout(() => {
            setShowAllSections(false);
            setActiveIndex(0);
          }, 2000);
          return prevIndex;
        }
        return prevIndex + 1;
      });
    };

    const autoRotateInterval = setInterval(() => {
      if (!showAllSections) {
        rotateSection();
      }
    }, 5000); // Change section every 5 seconds

    return () => clearInterval(autoRotateInterval);
  }, [showAllSections]);

  const handleElementClick = (index) => {
    if (activeIndex === index) return;
    setActiveIndex(index);
    setShowAllSections(false);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setActiveIndex(null);
    setShowAllSections(true);
    setTimeout(() => {
      setShowAllSections(false);
      setActiveIndex(0);
    }, 2000);
  };

  const sections = [
    { text: "greatest wealth is your health" },
    { text: "Your body hears everything your mind says" },
    { text: "Health is not just about what you're eating. It's also about what you're thinking and saying" },
    { text: "Health is a state of body. Wellness is a state of being." },
    { text: "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear" }
  ];

  return (
    <div className='body'>
      <div className={`cont ${!isActive ? 's--inactive' : ''} ${activeIndex !== null && !showAllSections ? 's--el-active' : ''}`}>
        <div className="cont__inner">
          {sections.map((section, index) => (
            <div 
              key={index}
              className={`el ${activeIndex === index && !showAllSections ? 's--active' : ''}`}
              onClick={() => handleElementClick(index)}
            >
              <div className="el__overflow">
                <div className="el__inner">
                  <div className="el__bg"></div>
                  <div className="el__preview-cont">
                    <h2 className="el__heading">{section.heading}</h2>
                  </div>
                  <div className="el__content">
                    <div className="el__text">{section.text}</div>
                    <div className="el__close-btn" onClick={handleClose}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
