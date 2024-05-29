import "./PropertyPage.css";
import { useParams, useLoaderData, Link } from "react-router-dom";
import ImageSlider from "../../components/ImageSlider/ImageSlider.jsx";
import {
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaHome,
  FaChartLine,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

const PropertyPage = () => {
  const { id } = useParams();
  const property = useLoaderData();

  return (
    <section>
      <div className="property-page">
        {/* Property Page Header */}
        <div className="property-page-header">
          <h1>{property.title}</h1>
        </div>
        <div className="property-page-content container">
          {/* Image slider */}
          <div className="property-page-images">
            <ImageSlider images={property.images} />
          </div>
          <div className="property-page-details">
            <div className="property-page-details-left">
              <div className="overview">
                <h3>Overview</h3>
                <div className="overview-elements">
                  <p>
                    <FaHome className="property-page-icon" />
                    {property.type}
                  </p>
                  <p>
                    <FaBed className="property-page-icon" />
                    {property.bedroom}Bed
                  </p>
                  <p>
                    <FaBath className="property-page-icon" />
                    {property.bathroom} Bath
                  </p>
                  <p>
                    <FaChartLine className="property-page-icon" />
                    {property.sqft} Sqft
                  </p>
                </div>
                <div className="overview-pricing">
                  <p>
                    <FaMapMarkerAlt className="property-page-icon" />
                    {property.location}
                  </p>
                  <p>Kshs.{property.price}</p>
                </div>
              </div>
              <div className="description">
                <h3>Description</h3>
                <p>{property.desc}</p>
              </div>
            </div>
            <div className="property-page-details-right">
              <div className="owner">
                <h3>Owner</h3>
                <p>
                  <FaEnvelopeOpenText className="property-page-icon" />
                  {property.owner.email}
                </p>
                
                <p>
                  <IoPerson className="property-page-icon" />
                  {property.owner.name}
                </p>
                <p>Rating: {property.owner.reviews.stars}</p>
              </div>
              {/* <Link to={`/properties/${property.id}/booking`}>
                <button>Book for Viewing</button>
              </Link> */}
              <Link to={`/properties/${property.id}/booking`}>
                <button>Book property</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const propertyLoader = async ({ params }) => {
  const res = await fetch(`/api/properties/${params.id}`);
  const data = await res.json();
  return data;
};

export { PropertyPage as default, propertyLoader };
