import "./Properties.css";
import PropertyListing from "./PropertyListing";
import Spinner from "../Spinner";
import { useState, useEffect } from "react";

const Properties = ({ isHome = false }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch("http://localhost:5000/properties");
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
        <div className="flexColStart p-head">
          <span>{isHome ? "Our Popular Homes" : "Available Properties"}</span>
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
