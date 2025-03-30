import React from 'react';
import './Client.css';

// Import client logos (Ensure images are inside 'src/assets/logo' for Vite compatibility)
import dhariwal from '../../assets/dhariwal.avif';
import graphite from '../../assets/graphite.webp';
import indiana from '../../assets/indiana.jpeg';
import kisanFeed from '../../assets/kisan_feed.png';
import piaggio from '../../assets/piaggio.png';
import ruby from '../../assets/ruby.png';
import shatayu from '../../assets/shatayu.jpeg';
import smAuto from '../../assets/SM_auto.png';
import sudharshan from '../../assets/sudharshan.png';
import ultraCorpo from '../../assets/ultra_corpo.jpeg';
import varadHP from '../../assets/varad_HP.png';
import varroc from '../../assets/varroc.png';
import global from '../../assets/Global.png';
import aurus from '../../assets/auruspharma.png';

const clients = [
  { name: 'Dhariwal', image: dhariwal },
  { name: 'Graphite', image: graphite },
  { name: 'Indiana', image: indiana },
  { name: 'Kisan Feed', image: kisanFeed },
  { name: 'Piaggio', image: piaggio },
  { name: 'Ruby', image: ruby },
  { name: 'Shatayu', image: shatayu },
  { name: 'SM Auto', image: smAuto },
  { name: 'Sudharshan', image: sudharshan },
  { name: 'Ultra Corpo', image: ultraCorpo },
  { name: 'Varad HP', image: varadHP },
  { name: 'Varroc', image: varroc },
  { name: 'Global', image: global },
  { name: 'Aurus', image: aurus },
];

const Client = () => {
  return (
    <div className="clients-page">
      <h1 className="clients-heading">Our Clients</h1>
      <div className="clients-grid">
        {clients.map((client, index) => (
          <div key={`client-${index}`} className="client-card">
            <img 
              src={client.image} 
              alt={client.name} 
              className="client-image"
              loading="lazy" // Improves performance by lazy loading images
            />
            <div className="client-name">{client.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
