// import React from "react";
// import "./AboutPage.css";

// const AboutPage = () => {
//   return (
//     <div className="about-container">
//       {/* Hero Section */}
//       <section className="hero-section">
//         <h1>Your Health, Our Priority</h1>
//         <p>Connecting patients with trusted healthcare professionals.</p>
//         <button>Learn More</button>
//       </section>

//       {/* Who We Are */}
//       <section className="who-we-are">
//         <h2>Who We Are</h2>
//         <p>
//           Meditrack is an innovative healthcare platform designed to simplify doctor consultations,
//           making healthcare more accessible, reliable, and efficient.
//         </p>
//       </section>

//       {/* Our Mission & Vision */}
//       <section className="mission-vision">
//         <div>
//           <h2>Our Mission & Vision</h2>
//           <p>
//             Our mission is to make quality healthcare accessible by connecting patients with medical professionals.
//             Our vision is a world where healthcare is just a click away.
//           </p>
//         </div>
//       </section>

//       {/* Our Services */}
//       <section className="services">
//         <h2>Our Services</h2>
//         <div className="services-grid">
//           {[
//             "Doctor Consultation", "Specialist Directory", "Telemedicine Support", "Health Records Management",
//             "Emergency Assistance", "Personalized Health Plans", "Medical History Tracking", "AI-Powered Symptom Checker",
//             "Online Prescription Services", "Mental Health Support"
//           ].map((service, index) => (
//             <div key={index} className="service-card">
//               <h3>{service}</h3>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Why Choose Meditrack */}
//       <section className="why-choose">
//         <div>
//           <h2>Why Choose Meditrack?</h2>
//           <ul>
//             <li>Easy-to-use interface</li>
//             <li>Verified & experienced doctors</li>
//             <li>Secure & private consultations</li>
//             <li>Multi-specialty coverage</li>
//             <li>24/7 accessibility</li>
//             <li>Personalized treatment plans</li>
//             <li>Affordable healthcare options</li>
//             <li>Fast and reliable medical support</li>
//             <li>Integration with wearable health devices</li>
//             <li>Real-time health monitoring</li>
//           </ul>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="testimonials">
//         <h2>What Our Users Say</h2>
//         <div className="testimonial-item">
//           <p>"Meditrack made it easy for me to find a doctor and book an appointment in minutes! Highly recommended."</p>
//           <span>- Sarah J.</span>
//         </div>
//         <div className="testimonial-item">
//           <p>"The telemedicine feature saved me a trip to the hospital. I got the right consultation from the comfort of my home."</p>
//           <span>- Mark R.</span>
//         </div>
//         <div className="testimonial-item">
//           <p>"I love how Meditrack helps me track my medical records and manage prescriptions online. A game-changer!"</p>
//           <span>- Emily W.</span>
//         </div>
//       </section>

//       {/* Our Team */}
//       <section className="our-team">
//         <h2>Meet Our Team</h2>
//         <p>Our team consists of highly skilled professionals dedicated to making healthcare more accessible.</p>
//         <div className="team-grid">
//           {[
//             { name: "Dr. John Smith", role: "Chief Medical Officer" },
//             { name: "Lisa Brown", role: "Head of Telemedicine" },
//             { name: "Mark Johnson", role: "Lead Developer" },
//             { name: "Emily White", role: "Patient Experience Manager" }
//           ].map((member, index) => (
//             <div key={index} className="team-member">
//               <h3>{member.name}</h3>
//               <p>{member.role}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Contact & Join Us */}
//       <section className="contact-section">
//         <h2>Contact & Join Us</h2>
//         <p>Have questions? Reach out to us at support@meditrack.com</p>
//         <p>Join us and be part of a revolutionary healthcare experience.</p>
//         <button>Get in Touch</button>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;


import React from 'react'
import Aboutone from './Aboutone'
import Abouttwo from './Abouttwo'
export default function About() {
  return (
    <>
    <Aboutone/>
    <Abouttwo/>
    </>
  )
}

