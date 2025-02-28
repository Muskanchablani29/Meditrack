import { useState, useEffect } from "react";
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin,
  FaClock,
  FaPaperPlane,
  FaUser,
  FaCommentAlt
} from "react-icons/fa";
import "./Contact.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    subject: "", 
    message: "" 
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      setFormVisible(true);
    }, 300);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Here's how you can reach us.</p>
      </div>
      
      {/* Animated Form Section */}
      <div className={`animated-form-container ${formVisible ? 'visible' : ''}`}>
        <div className="animated-form-card">
          {formSubmitted ? (
            <div className="form-success">
              <div className="success-icon">
                <FaPaperPlane />
              </div>
              <h4>Message Sent!</h4>
              <p>Thank you for reaching out. We'll respond as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="animated-contact-form">
              <div className="form-header">
                <h3>Send Us a Message</h3>
                <p>We'll get back to you as soon as possible</p>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <div className="input-icon-wrapper">
                    <FaUser className="input-icon" />
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      placeholder="Your Name"
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <div className="input-icon-wrapper">
                    <FaEnvelope className="input-icon" />
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      placeholder="Your Email"
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>
              </div>
              
              <div className="form-group">
                <div className="input-icon-wrapper">
                  <FaCommentAlt className="input-icon" />
                  <input 
                    type="text" 
                    id="subject"
                    name="subject" 
                    placeholder="Subject"
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>
              
              <div className="form-group">
                <textarea 
                  id="message"
                  name="message" 
                  placeholder="Your Message"
                  value={formData.message} 
                  onChange={handleChange} 
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                <span>Send Message</span>
                <FaPaperPlane className="button-icon" />
              </button>
            </form>
          )}
        </div>
      </div>
      
      {/* Contact Info and Map Section */}
      <div className="contact-info-map-container">
        <div className="contact-info-column">
          <div className="contact-card">
            <h3>Contact Information</h3>
            
            <div className="contact-info-list">
              <div className="contact-item">
                <div className="icon-container">
                  <FaPhone className="icon" />
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>+123 456 7890</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon-container">
                  <FaEnvelope className="icon" />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>contact@meditrack.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon-container">
                  <FaMapMarkerAlt className="icon" />
                </div>
                <div className="contact-text">
                  <h4>Address</h4>
                  <p>123 Health Street, MedCity<br />Medical District, MD 12345</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon-container">
                  <FaClock className="icon" />
                </div>
                <div className="contact-text">
                  <h4>Business Hours</h4>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM<br />Weekends: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="social-media">
              <h4>Connect With Us</h4>
              <div className="social-icons">
                <a href="#" className="social-icon facebook" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="#" className="social-icon twitter" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" className="social-icon linkedin" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="#" className="social-icon whatsapp" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="map-column">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.2375441415443!2d-73.98823492404045!3d40.74844097138946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1685498266304!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="MediTrack Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
