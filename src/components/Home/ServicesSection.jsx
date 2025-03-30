import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import residentialImg from "../../assets/residential.jpeg";
import commercialImg from "../../assets/commercial.jpg";
import industrialImg from "../../assets/industrial.jpeg";
import "./ServiceSection.css";

const ServiceSection = () => {
  const services = [
    {
      title: "Residential Solar",
      description: "Tailored solar systems for homes",
      image: residentialImg,
      path: "/residential",
      benefits: [
        "25-year performance warranty",
        "24/7 system monitoring",
        "Federal tax credit eligibility",
        "Energy independence",
      ],
    },
    {
      title: "Commercial Solar",
      description: "Solar solutions for businesses",
      image: commercialImg,
      path: "/commercial",
      benefits: [
        "Commercial tax deductions",
        "Reduced operational costs",
        "Scalable energy solutions",
        "Sustainability certifications",
      ],
    },
    {
      title: "Industrial Solar",
      description: "High-capacity industrial systems",
      image: industrialImg,
      path: "/industrial",
      benefits: [
        "Megawatt-scale installations",
        "Custom energy storage",
        "Peak shaving solutions",
        "Demand charge reduction",
      ],
    },
  ];

  return (
    <section className="solar-section">
      <div className="solar-container">
        <div className="solar-header">
          <h2>Powering Your World with Solar</h2>
          <p className="solar-subtitle">Custom solutions for every energy need</p>
          <div className="solar-divider"></div>
        </div>
        <div className="solar-grid">
          {services.map((service, index) => (
            <div className="solar-card" key={index}>
              <div
                className="solar-card-front"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="solar-overlay"></div>
                <h3 className="solar-title">{service.title}</h3>
              </div>
              <div className="solar-card-back">
                <div className="solar-back-content">
                  <p>{service.description}</p>
                  <ul className="solar-benefits">
                    {service.benefits.map((benefit, i) => (
                      <li key={i}>
                        <FaCheckCircle className="check-icon" /> {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
