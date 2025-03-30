import React from "react";
import "./EPCPage.css";
import { FiCheck } from "react-icons/fi";
import hybridImage from "../../assets/hybrid.png";
import offgridImage from "../../assets/off-grid.webp";
import ongridImage from "../../assets/on-grid.webp";

const EPCPage = () => {
  const services = [
    {
      image: ongridImage,
      title: "On-Grid Solar Systems",
      features: [
        "Utility grid connection",
        "Net metering enabled",
        "No battery storage",
        "Reduced electricity bills",
      ],
    },
    {
      image: offgridImage,
      title: "Off-Grid Solar Systems",
      features: [
        "Battery storage included",
        "Complete energy independence",
        "24/7 power supply",
        "Ideal for remote locations",
      ],
    },
    {
      image: hybridImage,
      title: "Hybrid Solar Systems",
      features: [
        "Grid + Battery backup",
        "Smart energy management",
        "Uninterrupted power supply",
        "Peak load management",
      ],
    },
  ];

  const comparisonData = [
    { feature: "Grid Connection", onGrid: "Yes", offGrid: "No", hybrid: "Optional" },
    { feature: "Battery Storage", onGrid: "No", offGrid: "Yes", hybrid: "Yes" },
    { feature: "Power Backup", onGrid: "No", offGrid: "Yes", hybrid: "Yes" },
    { feature: "Maintenance Cost", onGrid: "Low", offGrid: "Medium", hybrid: "Medium" },
    { feature: "Installation Cost", onGrid: "₹1.5-2L/kW", offGrid: "₹2.5-3.5L/kW", hybrid: "₹2-3L/kW" },
  ];

  return (
    <div className="epc-page">
      {/* Services Section */}
      <section className="services-section">
        <div className="section-header">
          <h2>Our Solar Solutions</h2>
          <div className="header-line"></div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="system-image-container">
                <img src={service.image} alt={service.title} className="system-image" loading="lazy" />
              </div>
              <h3>{service.title}</h3>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <FiCheck /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison-section">
        <div className="section-header">
          <h2>System Comparison</h2>
          <div className="header-line"></div>
        </div>

        <div className="comparison-table">
          <div className="table-header">
            <div className="header-item">Feature</div>
            <div className="header-item">On-Grid</div>
            <div className="header-item">Off-Grid</div>
            <div className="header-item">Hybrid</div>
          </div>

          {comparisonData.map((row, index) => (
            <div key={index} className="table-row">
              <div className="row-item feature">{row.feature}</div>
              <div className="row-item">{row.onGrid}</div>
              <div className="row-item">{row.offGrid}</div>
              <div className="row-item">{row.hybrid}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <h4>2500+</h4>
            <p>Projects Completed</p>
          </div>
          <div className="stat-card">
            <h4>150MW+</h4>
            <p>Installed Capacity</p>
          </div>
          <div className="stat-card">
            <h4>98%</h4>
            <p>Customer Satisfaction</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EPCPage;
