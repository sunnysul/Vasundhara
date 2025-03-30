import React from "react";
import "./ClientSection.css";

// Importing client logos
import dhariwal from "../../assets/dhariwal.avif";
import graphite from "../../assets/graphite.webp";
import indiana from "../../assets/indiana.jpeg";
import kisanFeed from "../../assets/kisan_feed.png";
import piaggio from "../../assets/piaggio.png";
import ruby from "../../assets/ruby.png";
import shatayu from "../../assets/shatayu.jpeg";
import smAuto from "../../assets/SM_auto.png";
import sudharshan from "../../assets/sudharshan.png";
import ultraCorpo from "../../assets/ultra_corpo.jpeg";
import varadHP from "../../assets/varad_HP.png";
import varroc from "../../assets/varroc.png";
import global from "../../assets/Global.png";
import aurus from "../../assets/auruspharma.png";

const clients = [
  dhariwal, graphite, indiana, kisanFeed, piaggio,
  ruby, shatayu, smAuto, sudharshan, ultraCorpo,
  varadHP, varroc, global, aurus,
];

const ClientSection = () => {
  return (
    <section className="clients-section">
      <div className="container">
        <h2 className="section-title">Our Valued Clients</h2>
        <div className="clients-container">
          <div className="clients-track">
            {clients.map((client, index) => (
              <div className="client-item" key={index}>
                <img 
                  src={client} 
                  alt={`Client ${index + 1}`} 
                  className="client-logo"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
