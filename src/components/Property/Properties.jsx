import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Properties.css";
import { PropertyList } from "../../utils/PropertyList";
import { sliderSettings } from "../../utils/common";


const Properties = () => {
  return (
    <section className="p-wrapper">
      <div className="p-container">
        <div className="flexColStart p-head">
          <span>Our Popular Homes</span>
        </div>

        <Swiper 
          {...sliderSettings}
        >
          {PropertyList.map((card, i) => (
            <SwiperSlide key={i}>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Properties;
