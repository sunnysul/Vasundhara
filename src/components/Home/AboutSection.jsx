import React from "react";
import aboutImage from "../../assets/image.jpg";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
    
      <div className="content">
        <h2 className="title">
          Leading the <span className="highlight">Solar Revolution</span>
        </h2>
        <p className="description">
          At <strong>Vasundhara Solar Services (VSS)</strong>, we are committed to delivering 
          top-tier solar solutions that maximize efficiency, reduce costs, 
          and promote a sustainable future.
        </p>

        <div className="stats">
          <div className="stat-item">
            <span className="stat-number">100MW+</span>
            <p className="stat-label">Installed Capacity</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">700+</span>
            <p className="stat-label">Happy Clients</p>
          </div>
        </div>

        <div className="experience-badge">10+ Years of Excellence</div>
      </div>

 
      <div className="image-container">
        <div className="image-frame">
          <img src={aboutImage} alt="Solar Panel Installation" className="about-image" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
