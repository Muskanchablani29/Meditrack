import React from "react";
import "./Abouttwo.css";
import img1 from "../Images/easy-to-use.jpeg";
import img2 from "../Images/Experienced.webp";
import img3 from "../Images/secure.jpeg";
import img4 from "../Images/MultiSpeciality.jpeg";
import img5 from "../Images/Hour.png";
import img6 from "../Images/personalised.jpg";
import img7 from "../Images/Affordable.jpeg";
import img8 from "../Images/fast.avif";
import img9 from "../Images/devices.png";
import img10 from "../Images/monitoring.jpeg";

const features = [
  { text: "Easy-to-use interface", img: img1 },
  { text: "Verified & experienced doctors", img: img2 },
  { text: "Secure & private consultations", img: img3 },
  { text: "Multi-specialty coverage", img: img4 },
  { text: "24/7 accessibility", img: img5 },
  { text: "Personalized treatment plans", img: img6 },
  { text: "Affordable healthcare options", img: img7 },
  { text: "Fast and reliable medical support", img: img8 },
  { text: "Integration with wearable health devices", img: img9 },
  { text: "Real-time health monitoring", img: img10 },
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