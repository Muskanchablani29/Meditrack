import React from "react";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <div className="container-terms">
      <h1 className="title-terms">Terms and Conditions</h1>
      <p className="content">
        Welcome to Meditrack! These Terms and Conditions govern your use of our website and services. By accessing or using Meditrack, you agree to abide by these terms.
      </p>
      <section className="section">
        <h2 className="subtitle">1. Acceptance of Terms</h2>
        <p>By using Meditrack, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
      </section>
      <section className="section">
        <h2 className="subtitle">2. Services Provided</h2>
        <p>Meditrack provides curated playlists for health-related conditions. The content is for informational purposes only and should not be considered medical advice.</p>
      </section>
      <section className="section">
        <h2 className="subtitle">3. User Responsibilities</h2>
        <ul className="list">
          <li>Provide accurate information.</li>
          <li>Do not misuse our platform for unlawful activities.</li>
          <li>You must be at least 18 years old or have parental consent.</li>
        </ul>
      </section>
      <section className="section">
        <h2 className="subtitle">4. Account and Security</h2>
        <p>Maintain the security of your account credentials. Meditrack is not liable for unauthorized access due to user negligence.</p>
      </section>
      <section className="section">
        <h2 className="subtitle">5. Privacy Policy</h2>
        <p>By using Meditrack, you agree to our Privacy Policy, which outlines how we handle your data.</p>
      </section>
      <section className="section">
        <h2 className="subtitle">6. Intellectual Property</h2>
        <p>All content and trademarks on Meditrack belong to us or our licensors. Unauthorized use is prohibited.</p>
      </section>
      <section className="section">
        <h2 className="subtitle">7. Limitation of Liability</h2>
        <p>Meditrack is not responsible for any harm or damages resulting from the use of our website.</p>
      </section>
      <section className="section">
        <h2 className="subtitle">8. Modifications to Terms</h2>
        <p>We reserve the right to modify these Terms and Conditions at any time.</p>
      </section>
      <section className="section">
        <h2 className="subtitle">9. Termination</h2>
        <p>We may terminate your access if you violate these terms.</p>
      </section>
      <section className="section">
        <h2 className="subtitle">10. Governing Law</h2>
        <p>These terms are governed by the laws of [Your Jurisdiction].</p>
      </section>
      <section className="section">
        <h2 className="subtitle">11. Contact Us</h2>
        <p>For questions, contact us at [your email/contact information].</p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
