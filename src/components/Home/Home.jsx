import React from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import heroVideo from "../../assets/solar-hero.mp4"; 
import "./Home.css";
import ContactSection from "./ContactSection";
import ClientSection from "./ClientSection";
import AboutSection from "./AboutSection";
import ServiceSection from "./ServicesSection";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <section className="hero">
        <video autoPlay muted loop className="hero-video">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1>Empowering Tomorrow with Solar Energy</h1>
          <p>Experience Clean Energy Solutions for Home & Business</p>
          <button className="cta-button" onClick={() => navigate("/contact")}>
            Get Free Consultation
          </button>
        </div>
        <div className="scroll-indicator">
          <FaChevronDown className="bounce" />
        </div>
      </section>
      <AboutSection/>
      <ServiceSection/>
      <ContactSection/>
      <ClientSection/> 
    </div>
  );
};

export default Home;
