import { FaMapMarkerAlt, FaBed, FaBath, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

const PropertyListing = ({ property }) => {
  const mainImage = property.images[0];

  return (
    <div className="p-card">
      <img src={mainImage.url} alt={mainImage.alt} />
      <div className="p-details">
        <div className="p-location">
          <p>{property.title}</p>
        </div>
        {/* <div className="p-type">
          <p>{property.type}</p>
          <p>{property.category}</p>
        </div> */}
        <div className="p-extra">
          <p>
            <FaBed className="p-icon" />
            {property.bedroom} Bed
          </p>
          <p>
            <FaBath className="p-icon" />
            {property.bathroom} Bath
          </p>
          <p>
            <FaChartLine className="p-icon" />
            {property.sqft}
          </p>
        </div>
        <div className="p-price">
          <p>${property.price}</p>
          <Link to={`/properties/${property.id}`}>
            <button className="p-btn">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
