import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./BookAppointmentPage.css";

export default function BookAppointmentPage() {
  const { doctorName } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    patientName: "",
    contactNumber: "",
    appointmentDate: "",
    appointmentTime: "",
    address: ""
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate("/Consult");
    }, 5000);
  };

  return (
    <div className="book-appointment-page">
      <h1>Book an Appointment</h1>
      <p>You are booking an appointment with:</p>
      <h2>{decodeURIComponent(doctorName)}</h2>
      <form onSubmit={handleSubmit} className="appointment-form">
        <label>
          Patient Name:
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact Number:
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Appointment Date:
          <input
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Appointment Time:
          <input
            type="time"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="confirm-button">Confirm Appointment</button>
      </form>
      {showPopup && (
        <div className="popup-message">
          <p>Our team will soon fix your appointment and let you know about that through WhatsApp.</p>
          <button onClick={() => setShowPopup(false)}>OK</button>
        </div>
      )}
    </div>
  );
}
