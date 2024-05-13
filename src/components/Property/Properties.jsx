import "./Properties.css";
import properties from "../../properties.json";
import PropertyListing from "./PropertyListing";


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
            <PropertyListing key={property.id} property={ property }/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
