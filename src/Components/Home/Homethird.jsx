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
    "Stay Informed",
    "Bookmark & Share"
  ];

  const texts = [
    "Enter Your Condition: Type in your disease or health concern in the search bar. Whether it's diabetes, hypertension, mental health, or fitness, our system is designed to find the best content for you.",
    "Get Relevant Videos: Our advanced algorithm fetches informative and trusted YouTube videos based on your search. These videos include doctor consultations, patient testimonials, treatment options, and healthy lifestyle tips.",
    "Stay Informed: Watch, learn, and take steps towards better health with expert-recommended content. Stay updated with the latest trends and scientific breakthroughs in healthcare.",
    "Bookmark & Share: Save your favorite videos for later reference and share helpful content with your friends and family."
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
      <h1>Step-by-Step Animation</h1>
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
