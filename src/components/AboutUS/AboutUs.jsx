import React from 'react';
import { FaLeaf, FaLightbulb, FaUsers, FaChartLine, FaSun, FaSolarPanel } from 'react-icons/fa';
import './AboutUS.css';
import solarfarm from "../../assets/solar-farm.jpeg";
import videoFile from "../../assets/video.mp4"; 

const AboutUs = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="video-container">
                    <video autoPlay loop muted playsInline poster={solarfarm}>
                        <source src={videoFile} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="hero-content">
                    <h1>Empowering Tomorrow with Solar Innovation</h1>
                    <p>Harnessing sunlight to fuel sustainable progress worldwide</p>
                </div>
            </section>

            {/* Company Overview */}
            <section className="company-overview">
                <div className="content-wrapper">
                    <div className="text-content">
                        <div className="section-tag">
                            <FaSolarPanel className="tag-icon"/>
                            <span>About Us</span>
                        </div>
                        <h2>Solar Energy Pioneers Since 2015</h2>
                        <p>
                            Vasundhara Solar Services leads the renewable revolution with cutting-edge photovoltaic solutions. 
                            Our expertise spans industrial, commercial, and residential installations to utility-scale solar projects, 
                            delivering clean energy solutions.
                        </p>
                        <div className="achievements">
                            <div className="achievement-item">
                                <div className="achievement-number">10+</div>
                                <div className="achievement-text">Years Experience</div>
                            </div>
                            <div className="achievement-item">
                                <div className="achievement-number">700+</div>
                                <div className="achievement-text">Projects Completed</div>
                            </div>
                        </div>
                    </div>
                    <div className="visual-element">
                        <img src={solarfarm} alt="Solar farm" className="featured-image"/>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="core-values">
                <div className="section-header">
                    <div className="section-tag">
                        <FaSun className="tag-icon"/>
                        <span>Our Principles</span>
                    </div>
                    <h2>Foundations of Solar Excellence</h2>
                </div>
                <div className="values-grid">
                    {[
                        { icon: <FaLeaf />, title: "Sustainability", desc: "Reducing environmental impact through renewable energy solutions" },
                        { icon: <FaLightbulb />, title: "Innovation", desc: "Continuous improvement with cutting-edge technologies" },
                        { icon: <FaUsers />, title: "Customer Focus", desc: "Tailored solutions meeting specific client requirements" }
                    ].map((value, index) => (
                        <div className="value-card" key={index}>
                            <div className="value-icon-container">
                                {value.icon}
                            </div>
                            <h4>{value.title}</h4>
                            <p>{value.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Commitment Section */}
            <section className="commitment">
                <div className="commitment-container">
                    <div className="section-header">
                        <div className="section-tag">
                            <FaLeaf className="tag-icon"/>
                            <span>Our Promise</span>
                        </div>
                        <h2>Solar Commitment to Excellence</h2>
                        <p className="section-subtitle">Driving the photovoltaic revolution through measurable impact</p>
                    </div>
                    <div className="solar-stats">
                        {[
                            { icon: <FaSun />, value: "200K+", label: "Panels Installed" },
                            { icon: <FaChartLine />, value: "70%", label: "Cost Reduction" },
                            { icon: <FaLeaf />, value: "2.5M+", label: "Tons CO2 Offset" }
                        ].map((stat, index) => (
                            <div className="stat-item" key={index}>
                                <div className="stat-icon">{stat.icon}</div>
                                <div className="stat-content">
                                    <div className="stat-value">{stat.value}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
