import React from "react";
import "./Abouttwo.css";

const features = [
  { text: "Easy-to-use interface", img: "/images/interface.png" },
  { text: "Verified & experienced doctors", img: "/images/doctors.png" },
  { text: "Secure & private consultations", img: "/images/secure.png" },
  { text: "Multi-specialty coverage", img: "/images/specialty.png" },
  { text: "24/7 accessibility", img: "/images/accessibility.png" },
  { text: "Personalized treatment plans", img: "/images/treatment.png" },
  { text: "Affordable healthcare options", img: "/images/affordable.png" },
  { text: "Fast and reliable medical support", img: "/images/support.png" },
  { text: "Integration with wearable health devices", img: "/images/wearable.png" },
  { text: "Real-time health monitoring", img: "/images/monitoring.png" },
];

const WhyChoose = () => {
  return (
    <section className="why-choose-container">
      <h2 className="title">Why Choose Meditrack?</h2>
      <div className="marquee">
        <div className="marquee-content">
          {features.concat(features).map((feature, index) => (
            <div key={index} className="feature-box">
              <img src={feature.img} alt={feature.text} className="feature-img" />
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;