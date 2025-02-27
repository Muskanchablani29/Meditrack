import React from 'react';
import './Aboutone.css';

export default function About() {
    return (
        <div className="About">
            {/* Top Section */}
            <div className="about-top">
                <h1 className='top-heading'>About Meditrack</h1>
                <p>
                    Meditrack is your trusted healthcare companion, connecting patients with top doctors for seamless consultations and appointments. We also provide free YouTube video suggestions for your healthcare needs.
                </p>
            </div>
            
            {/* Content Section */}
            <div className="about-con">
                <div className="about-con-left">
                    <h2>Why Choose Meditrack?</h2>
                    <p>
                        Our platform simplifies healthcare access with convenient features tailored to your needs:
                    </p>
                    <ul className="about-list">
                        <li>Book appointments with experienced doctors at your convenience.</li>
                        <li>Instantly connect with healthcare professionals via WhatsApp.</li>
                        <li>View doctor profiles, specialties, and patient reviews.</li>
                        <li>Secure and user-friendly platform for hassle-free bookings.</li>
                        <li>Access reliable medical resources and expert advice.</li>
                    </ul>
                </div>
                <div className="about-con-right">
                    <div className="wrapper"></div>
                </div>
            </div>
            
            {/* Mission Section */}
            <div className="about-mission">
                <h2>Our Mission</h2>
                <p>
                    To revolutionize healthcare accessibility by providing a seamless digital platform that connects patients with quality healthcare services and information.
                </p>
            </div>

            {/* Features Section */}
            <div className="about-features">
                <h2>Key Features</h2>
                <div className="features-grid">
                    {[
                        { title: '24/7 Support', desc: 'Round-the-clock assistance for all your healthcare needs' },
                        { title: 'Expert Doctors', desc: 'Access to verified and experienced healthcare professionals' },
                        { title: 'Easy Booking', desc: 'Simple and quick appointment scheduling process' },
                        { title: 'Health Resources', desc: 'Curated educational content and health tips' }
                    ].map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats Section */}
            <div className="about-stats">
                {[
                    { number: '1000+', text: 'Registered Doctors' },
                    { number: '50,000+', text: 'Patient Consultations' },
                    { number: '4.8/5', text: 'User Rating' }
                ].map((stat, index) => (
                    <div className="stat-item" key={index}>
                        <h3>{stat.number}</h3>
                        <p>{stat.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
