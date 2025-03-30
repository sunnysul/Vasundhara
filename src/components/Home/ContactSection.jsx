import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaUser, FaClipboard, FaComment, FaPaperPlane } from "react-icons/fa";
import axios from "axios";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    contactNumber: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending your inquiry...");

    try {
      const response = await axios.post("http://localhost:5000/send-email", formData);
      if (response.data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", contactNumber: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("Error sending message. Please check your connection and try again.");
    }
  };

  return (
    <section className="inquiry-section">
      <div className="inquiry-container">
        <div className="inquiry-content">
          <div className="contact-details">
            <h2>Start Your Solar Journey</h2>
            <div className="info-group">
              <div className="detail-item">
                <FaMapMarkerAlt className="detail-icon" />
                <div>
                  <h4>Visit Us</h4>
                  <p>A/P: Bidal, Tal-Man, Dist-Satara, 415508, Maharashtra, India</p>
                </div>
              </div>
              <div className="detail-item">
                <FaPhone className="detail-icon" />
                <div>
                  <h4>Call Us</h4>
                  <p>+91 7757050168</p>
                  <p>+91 9209768544</p>
                </div>
              </div>
              <div className="detail-item">
                <FaEnvelope className="detail-icon" />
                <div>
                  <h4>Email Us</h4>
                  <p>evasundharasolar@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <form className="inquiry-form" onSubmit={handleSubmit}>
            <h3>Quick Inquiry</h3>
            <div className="input-field">
              <FaUser className="form-icon" />
              <input type="text" name="name" className="form-input" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="input-field">
              <FaEnvelope className="form-icon" />
              <input type="email" name="email" className="form-input" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="input-field">
              <FaPhone className="form-icon" />
              <input type="tel" name="contactNumber" className="form-input" placeholder="Phone Number" value={formData.contactNumber} onChange={handleChange} required />
            </div>
            <div className="input-field">
              <FaClipboard className="form-icon" />
              <input type="text" name="subject" className="form-input" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="input-field">
              <FaComment className="form-icon" />
              <textarea name="message" className="form-input form-textarea" placeholder="Your message..." value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message <FaPaperPlane className="send-icon" />
            </button>
            {status && <div className={`status-message ${status.includes("success") ? "status-success" : "status-error"}`}>{status}</div>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
