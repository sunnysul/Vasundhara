import React from "react";
import "./ConsultancyPage.css";
import {
  FiCheck,
  FiUsers,
  FiBriefcase,
  FiClipboard,
  FiDollarSign,
  FiGlobe,
} from "react-icons/fi";

import consultancyHero from "../../assets/consultancy3.jpg";


const ConsultancyPage = () => {
  const services = [
    {
      icon: <FiClipboard />,
      title: "Feasibility Studies",
      description:
        "Detailed analysis of solar potential, financial viability, and technical requirements.",
    },
    {
      icon: <FiDollarSign />,
      title: "Financial Modeling",
      description: "ROI analysis, payback period calculations, and funding assistance.",
    },
    {
      icon: <FiBriefcase />,
      title: "Project Management",
      description: "End-to-end supervision from design to commissioning.",
    },
    {
      icon: <FiGlobe />,
      title: "Sustainability Planning",
      description: "Carbon footprint analysis and renewable integration strategies.",
    },
  ];

  const processSteps = [
    { title: "Initial Consultation", duration: "1-2 Days" },
    { title: "Site Assessment", duration: "3-5 Days" },
    { title: "System Design", duration: "1-2 Weeks" },
    { title: "Financial Planning", duration: "3-5 Days" },
    { title: "Implementation", duration: "2-4 Weeks" },
  ];

  return (
    <div className="consultancy-page">
      {/* Hero Section */}
      <section className="consultancy-hero">
        <div className="hero-image-container">
          <img src={consultancyHero} alt="Solar Consultancy" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>Solar Energy Consultancy Services</h1>
          <p className="hero-subtitle">Expert Guidance for Sustainable Energy Solutions</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose section-padding">
        <div className="section-header">
          <h2>Why Choose Vasundhara?</h2>
          <div className="accent-line"></div>
        </div>

        <div className="advantages-grid">
          <div className="advantage-card">
            <FiUsers className="advantage-icon" />
            <h3>700+ Projects Completed</h3>
            <p>Successful implementations across India</p>
          </div>
          <div className="advantage-card">
            <FiCheck className="advantage-icon" />
            <h3>10+ Years Experience</h3>
            <p>Quality assured services</p>
          </div>
          <div className="advantage-card">
            <FiBriefcase className="advantage-icon" />
            <h3>360° Solutions</h3>
            <p>From planning to maintenance</p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="our-process section-padding">
        <div className="section-header">
          <h2>Our Consultancy Process</h2>
          <div className="accent-line"></div>
        </div>

        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.duration}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="services-section section-padding">
        <div className="section-header">
          <h2>Our Consultancy Services</h2>
          <div className="accent-line"></div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ConsultancyPage;
