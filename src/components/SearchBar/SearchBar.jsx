import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  // Placeholder data for dropdown options
  const locations = ["Ruiru", "Utawala", "Thika"];
  const propertyTypes = ["House", "Apartment", "Condo"];
  const budgets = [
    "Less than $500",
    "$500 - $1000",
    "$1000 - $1500",
    "More than $1500",
  ];

  return (
    <div className="flexCenter searchbox">
      <div className="flexColStart search-container">
        <div className="search-title">
          <span>Search for available properties</span>
        </div>
        {/* Location Dropdown */}
        <div className="flexCenter search-dropdown">
        <div className="dropdown">
          <label htmlFor="location">Location</label>
          <select id="location">
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        {/* Property Type Dropdown */}
        <div className="dropdown">
          <label htmlFor="propertyType">Property Type</label>
          <select id="propertyType">
            {propertyTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        {/* Budget Dropdown */}
        <div className="dropdown">
          <label htmlFor="budget">Budget</label>
          <select id="budget">
            {budgets.map((budget, index) => (
              <option key={index} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
        {/* Search Button */}
        <div className="search-btn ">
        <button type="button">
          Search
        </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
