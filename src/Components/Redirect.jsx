import React, { useEffect, memo } from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import "./Redirect.css";
import img from "./Images/meditrack.png";

const RedirectPage = memo(({ setRedirectComplete }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      try {
        setRedirectComplete(true);
        navigate("/home");
      } catch (error) {
        console.error("Navigation failed:", error);
      }
    }, 5000);

    return () => clearTimeout(redirectTimer);
  }, [navigate, setRedirectComplete]);

  return (
    <div className="Redirect-container">
      <img 
        src={img}
        alt="MediTrack Logo" 
        className="Redirect-logo"
      />
    </div>
  );
});

RedirectPage.propTypes = {
  setRedirectComplete: PropTypes.func.isRequired
};

RedirectPage.displayName = 'RedirectPage';

export default RedirectPage;

