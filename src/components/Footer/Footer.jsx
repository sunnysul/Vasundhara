import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";
import logo from "../../assets/Vasundhara.png";

const Footer = () => {
    const socialLinks = {
        facebook: "https://www.facebook.com/share/15wcvpyqbX/?mibextid=wwXIfr",
        linkedin: "#",
        instagram: "https://www.instagram.com/vasundharasolar?igsh=MTgycmltbmppcjRmNA==",
        whatsapp: "https://wa.me/917757050168?text=Hello%20I'm%20interested%20in%20your%20solar%20solutions.%20Please%20provide%20more%20information",
    };

    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__main">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <img src={logo} alt="Vasundhara Solar Solutions logo" className="logo-image" />
                        </div>
                        <p className="footer__tagline">Illuminating the Future with Sustainable Energy</p>
                    </div>

                    <div className="footer__sections">
                        <div className="footer__col">
                            <h4 className="footer__title">Contact</h4>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <FaMapMarkerAlt className="icon" />
                                    <p>A/P: Bidal, Tal-Man,<br/>Dist-Satara, 415508<br/>Maharashtra, India</p>
                                </div>
                                <div className="contact-item">
                                    <FaPhone className="icon" />
                                    <div className="phone-numbers">
                                        <a href="tel:+917757050168">+91 7757050168</a>
                                        <a href="tel:+919209768544">+91 9209768544</a>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <FaEnvelope className="icon" />
                                    <a href="mailto:evasundharasolar@gmail.com">evasundharasolar@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="footer__col">
                            <h4 className="footer__title">Quick Links</h4>
                            <nav className="footer__nav">
                                <Link to="/about" className="nav-link">About</Link>
                                <Link to="/service" className="nav-link">Services</Link>
                                <Link to="/gallery" className="nav-link">Projects</Link>
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </nav>
                        </div>

                        <div className="footer__col">
                            <h4 className="footer__title">Connect</h4>
                            <div className="social-links">
                                <a href={socialLinks.facebook} className="social-link" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF aria-label="Facebook" />
                                </a>
                                <a href={socialLinks.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn aria-label="LinkedIn" />
                                </a>
                                <a href={socialLinks.instagram} className="social-link" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram aria-label="Instagram" />
                                </a>
                                <a href={socialLinks.whatsapp} className="social-link whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                                    <FaWhatsapp />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="copyright">
                        © {new Date().getFullYear()} Vasundhara Solar Solutions. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
