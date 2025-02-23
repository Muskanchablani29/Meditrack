import React from 'react'
import './Exploretwo.css'; // Import the CSS file
import image1 from '../Images/meditation.jpeg';
import image2 from '../Images/homeremedies.jpeg';
import image3 from '../Images/Doctorconsult.jpg';

export default function Exploretwo() {
  return (
    <><section class="section-1">
        <div class="bottle">
            <h1>Explore Our Services</h1>
        </div>
        <div class="container container-feature">
            <div class="features">
                <div class="feature-image">
                    <img src={image1} alt="Order Online" />
                </div>
                <h3>Meditation</h3>
                <p>Meditation is Best Remedy for Every Cure</p>
            </div>
            <div class="features">
                <div class="feature-image">
                    <img src={image2} alt="Home Remedies" />
                </div>
                <h3>Home Remedies</h3>
                <p>View some home remedies.</p>
            </div>
            <div class="features">
                <div class="feature-image">
                    <img src={image3} alt="YouTube" />
                </div>
                <h3>Doctor Consultation</h3>
                <p>Contact with the Best Doctors.</p>
            </div>
        </div>
    </section>
    </>
  )
}
