import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-content">
        {/* Animated background bubbles */}
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        
        <div className="icons">
            <h1>CONNECT WITH US ON SOCIAL MEDIA</h1>

            <div className="icons-con">
                <a href="#" aria-label="Facebook">
                    <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <FontAwesomeIcon icon={faFacebookF} className="fab" />
                    </div>
                    <div className="text">Facebook</div>
                </a>
                <a href="#" aria-label="Twitter">
                    <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <FontAwesomeIcon icon={faTwitter} className="fab" />
                    </div>
                    <div className="text">Twitter</div>
                </a>
                <a href="#" aria-label="Instagram">
                    <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <FontAwesomeIcon icon={faInstagram} className="fab" />
                    </div>
                    <div className="text">Instagram</div>
                </a>
                <a href="#" aria-label="LinkedIn">
                    <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <FontAwesomeIcon icon={faLinkedinIn} className="fab" />
                    </div>
                    <div className="text">LinkedIn</div>
                </a>
                <a href="#" aria-label="YouTube">
                    <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <FontAwesomeIcon icon={faYoutube} className="fab" />
                    </div>
                    <div className="text">YouTube</div>
                </a>
            </div>
        </div>
        <div className="footer-links">
            <ul>
                <NavLink to=""><li>Help</li></NavLink>
                <NavLink to=""><li>Privacy</li></NavLink>
                <NavLink to="/terms"><li>Terms</li></NavLink>
                <NavLink to="/Faq"><li>FAQ</li></NavLink>
            </ul>
        </div>
    </div>
  );
};

export default Footer;
