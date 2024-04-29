import "./Properties.css";
import { properties } from "../../utils/PropertyList";
import { FaMapMarkerAlt, FaBed, FaBath } from "react-icons/fa";
import { GoGraph } from "react-icons/go";

const Properties = ({ isHome = false }) => {
  const propertyList = isHome ? properties.slice(0, 4) : properties;

  return (
    <section className="p-wrapper">
      <div className="p-container">
        <div className="flexColStart p-head">
          <span>{isHome ? "Our Popular Homes" : "Available Properties"}</span>
        </div>
        {/* property cards  */}
        <div className="p-cards">
          {propertyList.map((property, i) => (
            <div className="flexColStart p-card">
              <img src={property.image} alt="home" />
              <div className="flexColStart p-details">
                <span className="p-location">
                  <FaMapMarkerAlt className="icon" />
                  {property.location}
                </span>
                <div className="p-extra">
                  <span>
                    <FaBed className="icon" />
                    {property.bedroom} Bed
                  </span>
                  <span>
                    <FaBath className="icon" />
                    {property.bathroom} Bathroom
                  </span>
                  <span>
                    <GoGraph className="icon" />
                    {property.sqft}
                  </span>
                </div>
                <div className="p-price">
                  <span>${property.price}</span>
                  <button className="p-btn">View Details</button>
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
