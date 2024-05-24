import "./Properties.css";
import PropertyListing from "./PropertyListing";
import Spinner from "../Spinner";
import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Properties = ({ isHome = false }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setloading] = useState(true);

  // fetching properties data from json sever
  useEffect(() => {
    const fetchProperties = async () => {
      const propertiesUrl = isHome
        ? "/api/properties?_limit=4"
        : "/api/properties";

      try {
        const res = await fetch(propertiesUrl);
        const data = await res.json();
        setProperties(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setloading(false);
      }
    };
    fetchProperties();
  }, []);

  return (
    <section className="p-wrapper">
      <div className="p-container">
        <div className={isHome ? "p-head" : "properties-head"}>
          <p>{isHome ? "Our Popular Homes" : "Available Properties"}</p>
          <Link to="/properties">
            <p className={isHome ? "p-head-right" : "p-head-right-none"} >
              Explore All
              <FaArrowRight className="p-head-right-icon"/>
            </p>
            </Link>
        </div>

        {/* property cards  */}
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="p-cards">
            {properties.map((property, i) => (
              <PropertyListing key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Properties;
