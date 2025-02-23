import React from 'react'
import './Homefourth.css'; // Import the CSS file
import image1 from '../Images/provide1.jpg'; 
import image2 from '../Images/Medicine.webp';
import image3 from '../Images/homeremdies.jpeg';
import image4 from '../Images/Contact.webp'



export default function Homefourth() {
  return (
    <div className='Home-fourth'>
         <div className="top-heading-fourth">
                <h1>What we Provide</h1>
            </div>
        <div className="Home-fourth-container">
           
            <div className="content-provide-boxes">
                <div className="box-one">
                    <img src={image1} alt="" />
                    <h2>Doctor Consultation</h2>
                </div>
            </div>
            <div className="content-provide-boxes">
                <div className="box-one">
                    <img src={image2} alt="" />
                    <h2>Remedy for Your Cure</h2>
                </div>
            </div>
            <div className="content-provide-boxes">
                <div className="box-one">
                    <img src={image3} alt="" />
                    <h2>Home Remedies Suggestion</h2>
                </div>
            </div>
            <div className="content-provide-boxes">
                <div className="box-one">
                    <img src={image4} alt="" />
                    <h2>Doctor Contact Info</h2>
                </div>
            </div>
        </div>
    </div>
  ) 
}
