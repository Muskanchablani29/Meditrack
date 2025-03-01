import React, { useState, useEffect } from 'react';
import './Homethird.css'; // Import the CSS file
import TypingAnimation from './Home-ani/Homeanimationone';
import TypingAnimationtwo from './Home-ani/Homeanimationtwo';
import TypingAnimationthree from './Home-ani/Homeanimationthree';
import TypingAnimationfour from './Home-ani/Homeanimationfour';

const StepByStepAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Enter Your Condition",
    "Get Relevant Videos",
    "Filter Out the Videos",
    "Select Video"
  ];

  const texts = [
    "Enter Your Condition: Type in your disease or health concern in the search bar. Whether it's diabetes, hypertension, mental health, or fitness, our system is designed to find the best content for you.",
    "Get Relevant Videos: Our advanced algorithm fetches informative and trusted YouTube videos based on your search. These videos include doctor consultations, patient testimonials, treatment options, and healthy lifestyle tips.",
    "Filter Out the Videos According to Their Need",
    "Select the Best Video suitable According to your Cure."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderAnimation = () => {
    switch (currentStep) {
      case 0:
        return <TypingAnimation />;
      case 1:
        return <TypingAnimationtwo />;
      case 2:
        return <TypingAnimationthree />;
      case 3:
        return <TypingAnimationfour />;
      default:
        return null;
    }
  };

  return (
    <div className="container-third">
      <h1 className="heading-Work">How It Works</h1>
      <p>Learn how to use our platform in just 4 simple steps</p>
      <div className="content-wrapper">
        <div className="steps-container">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step ${currentStep === index ? 'active' : currentStep > index ? 'dim' : ''}`}
            >
              {index + 1} - {step}
            </div>
          ))}
        </div>

        <div className="content-container">
          <div className="loading-text">
            {texts[currentStep]}
          </div>

          <div className="animation-box">
            {renderAnimation()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepByStepAnimation;
