import React, { useState, useEffect } from 'react';
import './Homethird.css'; // Import the CSS file
import Animation1 from './Home-ani/Homeanimationone'
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

  return (
    <div className="container">
      <div className="steps-container" style={{ display: 'flex', gap: '15px', justifyContent: 'center', alignItems: 'center' }}>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${currentStep === index ? 'active' : currentStep > index ? 'dim' : ''}`}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {index + 1}
          </div>
        ))}
      </div>

      <div className="content-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="loading-text">
          {texts[currentStep]}
        </div>

        <div className="animation-box" style={{ backgroundColor: 'transparent' }}>
          <Animation1 />
        </div>
      </div>
    </div>
  );
};

export default StepByStepAnimation;
