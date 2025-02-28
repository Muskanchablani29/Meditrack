import React from "react";
import "./Aboutthree.css";
import praveen from "../Images/Praveen.png"
import muskan from "../Images/Muskan2.jpg"
import arshala from "../Images/Arshala.jpg"

const teamMembers = [
  {
    name: "Praveen Singh",
    role: "Frontend Developer",
    specialty: "Authentication & Security",
    img: praveen, // Replace with actual image URL
  },
  {
    name: "Muskan Chablani",
    role: "Project Lead",
    specialty: "System Architecture",
    img: muskan, // Replace with actual image URL
  },
  {
    name: "Arshala Khan",
    role: "UX Designer",
    specialty: "User Experience & Interface",
    img: arshala, // Replace with actual image URL
  },
];

const TeamSection = () => {
  return (
    <div className="team-section">
      <div className="team-section-container">
        <div className="section-header">
          <h2>Our Team</h2>
          <p>The professionals behind MediTrack</p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`team-member ${member.role === "Project Lead" ? "team-lead" : ""}`}
            >
              <div className="member-image-wrapper">
                <div className="member-image-container">
                  <img src={member.img} alt={member.name} />
                </div>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <span className="member-role">{member.role}</span>
                <p className="member-specialty">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
