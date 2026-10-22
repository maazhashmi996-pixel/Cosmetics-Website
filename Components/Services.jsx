
import React from "react";
import "./Services.css";

function Services() {
  return (  
    <section className="services-section">
       <div>
        <h1 className="heading">Our Services</h1>
       </div>
      <div className="service-box">
        <div className="service-info">
          <h2>Hair Cuts & Style</h2>
          <div className="service-prices">
            <div className="price-row">
              <span>Women's Haircut:</span>
              <strong>$55+</strong>
            </div>
            <div className="price-row">
              <span>Men's Haircut:</span>
              <strong>$75+</strong>
            </div>
            <div className="price-row">
              <span>Up Do Style:</span>
              <strong>$35+</strong>
            </div>
            <div className="price-row">
              <span>Half-up do style:</span>
              <strong>$45+</strong>
            </div>
          </div>
        </div>
        <div className="service-photo">
          <img
            src="30.avif"
            alt="Hair cuts and styling"
          />
        </div>
      </div>
      <div className="service-box reverse">
        <div className="service-info">
          <h2>Color & Highlights</h2>
          <div className="service-prices">
            <div className="price-row">
              <span>Full Hair Color:</span>
              <strong>$65+</strong>
            </div>
            <div className="price-row">
              <span>Root Touch Up:</span>
              <strong>$45+</strong>
            </div>
            <div className="price-row">
              <span>Hair Highlights:</span>
              <strong>$85+</strong>
            </div>
            <div className="price-row">
              <span>Balayage:</span>
              <strong>$120+</strong>
            </div>
          </div>
        </div>
        <div className="service-photo">
          <img
            src="31.avif"
            alt="Hair color and highlights"
          />
        </div>
      </div>
      <div className="service-box">
        <div className="service-info">
          <h2>Hair Treatments</h2>
          <div className="service-prices">
            <div className="price-row">
              <span>Deep Conditioning:</span>
              <strong>$35+</strong>
            </div>
            <div className="price-row">
              <span>Keratin Treatment:</span>
              <strong>$100+</strong>
            </div>
            <div className="price-row">
              <span>Hair Spa:</span>
              <strong>$50+</strong>
            </div>
            <div className="price-row">
              <span>Scalp Treatment:</span>
              <strong>$40+</strong>
            </div>
          </div>
        </div>
        <div className="service-photo">
          <img
            src="32.avif"
            alt="Hair treatment"/>
        </div>
      </div>
    </section>
  );
}

export default Services;
