import { useState, useCallback, memo } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./DoctorConsultationPage.css";
import doctor1 from '../Images/doctor1.avif';
import doctor2 from '../Images/doctor2.jpg';
import doctor3 from '../Images/doctor3.jpg';
import doctor4 from '../Images/doctor4.jpeg';
import doctor5 from '../Images/doctor5.jpg';
import doctor6 from '../Images/doctor6.jpeg';
import doctor7 from '../Images/doctor7.jpeg';
import doctor8 from '../Images/doctor8.webp';
import doctor9 from '../Images/doctor9.jpg';
import doctor10 from '../Images/doctor10.jpg';

const doctors = [
  { id: 1, name: "Dr. John Doe", specialty: "Cardiologist", description: "Expert in heart-related conditions and treatments.", image: doctor1, phone: "6260222924" },
  { id: 2, name: "Dr. Jane Smith", specialty: "Dermatologist", description: "Specialist in skin health and cosmetic dermatology.", image: doctor2, phone: "6260222924" },
  { id: 3, name: "Dr. Alice Brown", specialty: "Pediatrician", description: "Dedicated to child healthcare and development.", image: doctor3, phone: "6260222924" },
  { id: 4, name: "Dr. Mark Wilson", specialty: "Orthopedic", description: "Expert in bone, joint, and muscle health.", image: doctor4, phone: "6260222924" },
  { id: 5, name: "Dr. Lisa White", specialty: "Neurologist", description: "Specialist in brain and nervous system disorders.", image: doctor5, phone: "6260222924" },
  { id: 6, name: "Dr. Steve Green", specialty: "Dentist", description: "Providing expert dental care for all ages.", image: doctor6, phone: "6260222924" },
  { id: 7, name: "Dr. Emily Blue", specialty: "Psychiatrist", description: "Helping patients with mental health and well-being.", image: doctor7, phone: "6260222924" },
  { id: 8, name: "Dr. Robert Black", specialty: "Endocrinologist", description: "Expert in hormonal health and metabolic disorders.", image: doctor8, phone: "6260222924" },
  { id: 9, name: "Dr. Karen Grey", specialty: "Gynecologist", description: "Providing comprehensive women's health care.", image: doctor9, phone: "6260222924" },
  { id: 10, name: "Dr. James Gold", specialty: "Ophthalmologist", description: "Specialist in eye care and vision health.", image: doctor10, phone: "6260222924" }
];

const DoctorCard = memo(({ doctor, onBookAppointment, isReversed }) => {
  return (
    <div className={`doctor-card ${isReversed ? 'reversed' : ''}`}>
      <div className="doctor-image-container">
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          className="doctor-image" 
          onError={(e) => e.target.src = "default-doctor-image.jpg"} 
          loading="lazy" 
        />
      </div>
      <div className="doctor-content">
        <h2 className="doctor-name">{doctor.name}</h2>
        <p className="doctor-specialty">{doctor.specialty}</p>
        <p className="doctor-description">{doctor.description}</p>
        <div className="button-group">
          <button className="appointment-button" onClick={() => onBookAppointment(doctor.name)}>
            Book an Appointment
          </button>
          <a 
            href={`https://wa.me/${doctor.phone.replace(/\s+/g, '')}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp-button"
          >
            <FaWhatsapp /> Contact through WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
});

export default function DoctorConsultationPage() {
  const [visibleDoctors, setVisibleDoctors] = useState(5);
  const navigate = useNavigate();

  const handleBookAppointment = useCallback((doctorName) => {
    navigate(`/Appointment/${encodeURIComponent(doctorName)}`);
  }, [navigate]);

  const handleShowMore = useCallback(() => {
    setVisibleDoctors(doctors.length);
  }, []);

  return (
    <div className="doctor-page">
      <h1 className="title">Doctor Consultation</h1>
      <div className="doctor-list">
        {doctors.slice(0, visibleDoctors).map((doctor, index) => (
          <DoctorCard 
            key={doctor.id} 
            doctor={doctor} 
            onBookAppointment={handleBookAppointment} 
            isReversed={index % 2 !== 0} 
          />
        ))}
      </div>
      {visibleDoctors < doctors.length && (
        <div className="show-more-container">
          <button className="show-more-button" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
