import React from "react";
import "./Properties.css";
import { properties } from "../../utils/PropertyList";


const Properties = ({ isHome = false }) => {
const propertyList = isHome ? properties.slice(0, 4) : properties;


  return (
    <section className="p-wrapper">
      <div className="p-container">
        <div className="flexColStart p-head">
          <span>Our Popular Homes</span>
        </div>
    {/* property cards  */}
        <div className="p-cards">
          {propertyList.map((property, i) => (
              <div className="flexColStart p-card">
                <img src={property.image} alt="home" />
                <div className="flexColStart p-details">
                  <span className="p-location">{property.location}</span>
                  <div className="p-extra">
                    <span>{property.bedroom} Bedroom</span>
                    <span>{property.bathroom} Bathroom</span>
                    <span>{property.sqft}</span>
                  </div>
                  <div className="p-price">
                    <span>${property.price}</span>
                    <button className="p-btn">Book Now</button>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
