import React, { useState, useEffect } from "react";
import "./TeamPage.css";
import site1 from "../../assets/site-1.jpg";
import site2 from "../../assets/site-2.jpg";
import site3 from "../../assets/site-3.jpg";
import site4 from "../../assets/site-4.jpg";
import site5 from "../../assets/site-5.jpg";
import site6 from "../../assets/site-6.jpg";
import site7 from "../../assets/site-7.jpg";
import directorImage from "../../assets/DirectorProfile.jpg";

const TeamPage = () => {
  const director = {
    name: "Sagar Jagdale",
    position: "Director",
    bio: "Visionary leader with 12+ years of experience in digital innovation. Passionate about building sustainable tech solutions and fostering collaborative environments.",
    image: directorImage,
  };

  const slideshowImages = [site1, site2, site3, site4, site5, site6, site7];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval
  }, [slideshowImages.length]);

  return (
    <div className="team-page">
      {/* Director Section */}
      <section className="director-section">
        <div className="director-image-container">
          <img 
            src={director.image} 
            alt={director.name} 
            className="director-image" 
          />
        </div>
        
        <div className="director-info">
          <h1>{director.name}</h1>
          <p className="position">{director.position}</p>
          <p className="bio">{director.bio}</p>
        </div>
      </section>

      {/* Slideshow Section */}
      <section className="slideshow-section">
        <div className="slideshow-container">
          {slideshowImages.map((image, index) => (
            <div 
              key={index}
              className={`slide ${index === activeSlide ? "active" : ""}`}
              style={{
                backgroundImage: `url(${image})`,
                opacity: index === activeSlide ? 1 : 0,
                transition: "opacity 1s ease-in-out",
              }}
            />
          ))}
        </div>
        <div className="slideshow-dots">
          {slideshowImages.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === activeSlide ? "active" : ""}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
