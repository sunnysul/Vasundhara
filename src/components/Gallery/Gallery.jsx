import React, { useState } from 'react';
import { FaSolarPanel, FaSearchPlus, FaMapMarkerAlt, FaRegLightbulb } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const galleryItems = [
    { id: 1, category: 'residential', image: 'https://images.unsplash.com/photo-1622504106712-1d1d7b43a149', title: 'Modern Home Installation', location: 'Mumbai', capacity: '5kW' },
    { id: 2, category: 'commercial', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a', title: 'Office Complex Setup', location: 'Delhi', capacity: '250kW' },
    { id: 3, category: 'industrial', image: 'https://images.unsplash.com/photo-1496939376851-5665266a75d5', title: 'Factory Solar Array', location: 'Chennai', capacity: '1.2MW' },
    { id: 4, category: 'residential', image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa1', title: 'Rooftop System', location: 'Bangalore', capacity: '7.5kW' },
    { id: 5, category: 'commercial', image: 'https://images.unsplash.com/photo-1567602901358-5ba17615aaeb', title: 'Solar Farm Project', location: 'Hyderabad', capacity: '500kW' },
    { id: 6, category: 'industrial', image: 'https://images.unsplash.com/photo-1575503802870-45de6a6217c8', title: 'Warehouse Installation', location: 'Pune', capacity: '800kW' },
    { id: 7, category: 'residential', image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a', title: 'Villa Solar Setup', location: 'Kolkata', capacity: '10kW' },
    { id: 8, category: 'commercial', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276', title: 'Shopping Complex', location: 'Ahmedabad', capacity: '150kW' },
    { id: 9, category: 'industrial', image: 'https://images.unsplash.com/photo-1492487049230-bdcdb8b2c1f0', title: 'Manufacturing Plant', location: 'Jaipur', capacity: '2MW' },
    { id: 10, category: 'residential', image: 'https://images.unsplash.com/photo-1581888227599-779811939961', title: 'Eco-Friendly Home', location: 'Goa', capacity: '6kW' },
  ];

  const filteredItems = galleryItems.filter(item => activeFilter === 'all' || item.category === activeFilter);

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2>Our Solar Installations</h2>
        <p>Explore our nationwide sustainable energy projects</p>
        
        <div className="filter-buttons">
          {['all', 'industrial', 'commercial', 'residential'].map(filter => (
            <button
              key={filter}
              className={activeFilter === filter ? 'active' : ''}
              onClick={() => setActiveFilter(filter)}
              aria-label={`Filter ${filter} projects`}
            >
              {filter === 'all' ? 'All Projects' : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="gallery-grid">
        {filteredItems.map(item => (
          <article key={item.id} className={`gallery-item ${item.category}`}>
            <div className="image-container">
              <img 
                src={item.image} 
                alt={item.title} 
                loading="lazy"
                width="400"
                height="300"
              />
              <div className="hover-overlay">
                <div className="content">
                  <h3>{item.title}</h3>
                  <p className="location">
                    <FaMapMarkerAlt aria-hidden="true" /> {item.location}
                  </p>
                  <div className="details">
                    <span><FaSolarPanel aria-hidden="true" /> {item.capacity} System</span>
                    <span><FaRegLightbulb aria-hidden="true" /> 90% Efficiency</span>
                  </div>
                </div>
                <div className="zoom-icon" aria-hidden="true">
                  <FaSearchPlus />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
