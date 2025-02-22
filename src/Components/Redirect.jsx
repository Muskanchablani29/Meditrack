import React, { useEffect, useState, memo } from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import "./Redirect.css";

const RedirectPage = memo(({ setRedirectComplete }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // In RedirectPage.jsx
useEffect(() => {
  const redirectTimer = setTimeout(() => {
    try {
      setRedirectComplete(true);
      setIsLoading(false);
      navigate("/home");
    } catch (error) {
      console.error("Navigation failed:", error);
      setIsLoading(false);
    }
  }, 5000);

  return () => clearTimeout(redirectTimer);
}, [navigate, setRedirectComplete, setIsLoading]);


  return (
    <div className="card">
      <div className="circle">
        <img 
          src="cocacola_logo.png" 
          alt="Medi Track Logo" 
          className="logo" 
        />
      </div>
      <div className="content">
        <h2>MEDI TRACK</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Vel possimus cumque magnam consequatur illum blanditiis nihil.
        </p>
        {isLoading && <p>Redirecting to home page...</p>}
      </div>
      <img 
        src="Injection-with-medicine-on-transparent-PNG_processed.png" 
        alt="Medical injection illustration" 
        className="product_img" 
      />
    </div>
  );
});

RedirectPage.propTypes = {
  setRedirectComplete: PropTypes.func.isRequired
};

RedirectPage.displayName = 'RedirectPage';

export default RedirectPage;
