import React from "react";
import "./Properties.css";
import { PropertyList } from "../../utils/PropertyList";


const Properties = () => {
  return (
    <section className="p-wrapper">
      <div className="p-container">
        <div className="flexColStart p-head">
          <span>Our Popular Homes</span>
        </div>
    {/* property cards  */}
        <div className="p-cards">
          {PropertyList.map((card, i) => (
              <div className="flexColStart p-card">
                <img src={card.image} alt="home" />
                <div className="flexColStart p-details">
                  <span className="p-location">{card.location}</span>
                  <div className="p-extra">
                    <span>{card.bedroom} Bedroom</span>
                    <span>{card.bathroom} Bathroom</span>
                    <span>{card.sqft}</span>
                  </div>
                  <div className="p-price">
                    <span>${card.price}</span>
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
