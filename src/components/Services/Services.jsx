import React from "react";
import "./Services.css";
import {
  FaSolarPanel,
  FaTools,
  FaHandshake,
  FaFileContract,
  FaTint,
  FaLightbulb,
  FaBatteryFull,
  FaPlug,
  FaNetworkWired,
  FaCheckCircle
} from "react-icons/fa";
import residential from "../../assets/residential.jpeg";
import commercial from "../../assets/commercial.jpg";
import industrial from "../../assets/industrial.jpeg";
import serviceVideo from "../../assets/service.mp4";
import NET_METERING_IMAGE from "../../assets/meter.avif";

const keyServices = [
  {
    title: "Industrial Solar Systems",
    description: "High-Efficiency Systems: Seamless integration with existing power setups for year-round operations.",
    image: industrial,
    features: [
      "High-capacity inverters",
      "Industrial-grade components",
    ]
  },
  {
    title: "Commercial Solar Solutions",
    description: "Scalable Systems: Solar solutions reducing operational costs and enhancing business sustainability.",
    image: commercial,
    features: [
      "Custom financial models",
      "Peak load management",
    ]
  },
  {
    title: "Residential Solar Solutions",
    description: "Customized Installations: Tailored solar systems for homes helping you achieve energy independence and reduce electricity bills.",
    image: residential,
    features: [
      "Energy consumption analysis",
      "Roof-mounted/Ground-mounted options",
    ]
  },
];

const configurationSystems = [
  {
    title: "Off-Grid Systems",
    icon: () => <FaBatteryFull />,
    description: "Standalone systems with battery storage"
  },
  {
    title: "Grid-Tied Systems",
    icon: () => <FaPlug />,
    description: "Connected to utility grid with net metering"
  },
  {
    title: "Hybrid Systems",
    icon: () => <FaNetworkWired />,
    description: "Combine solar, battery, and grid power"
  }
];

const Services = () => {
  return (  
    <div className="services-page">
      {/* Video Banner Section */}
      <section className="services-banner">
        <div className="video-container">
          <video autoPlay loop muted playsInline>
            <source src={serviceVideo} type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>
        <div className="banner-content">
          <h1>Powering Progress with Solar Solutions</h1>
          <p>Innovative energy services for a sustainable future</p>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="key-services">
        <div className="container">
          <div className="section-header">
            <h2>Specialized Solutions</h2>
            <div className="title-divider"></div>
          </div>

          <div className="key-services-grid">
            {keyServices.map((service, index) => (
              <div className="key-service-card" key={index}>
                <div className="ks-image-wrapper">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="service-image"
                  />
                </div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="features-list">
                  {service.features.map((feature, fIndex) => (
                    <div className="feature-item" key={fIndex}>
                      <FaCheckCircle className="feature-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Net Metering Section */}
      <section className="net-metering">
        <div className="container">
          <div className="metering-content">
            <div className="text-content">
              <h2>Net Metering Solutions</h2>
              <div className="title-divider"></div>
              <p>
                Offset electricity costs by feeding excess solar power back to the grid. 
                Earn credits and reduce payback period with our grid-tied solutions.
              </p>
              <ul className="benefits-list">
                <li>Reduce electricity bills by up to 70%</li>
                <li> Government-approved metering systems</li>
                <li> Real-time energy monitoring</li>
                <li> Seamless utility integration</li>
              </ul>
            </div>
            <div className="visual-content">
              <img src={NET_METERING_IMAGE} alt="Net metering illustration" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
