import { FaMapMarkerAlt, FaBed, FaBath } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { Link } from "react-router-dom";

const PropertyListing = ({ property }) => {
  return (
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
            {property.bathroom} Bath
          </span>
          <span>
            <GoGraph className="icon" />
            {property.sqft}
          </span>
        </div>
        <div className="p-price">
          <span>${property.price}</span>
          <Link to={`/property/${property.id}`}>
            <button className="p-btn">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
