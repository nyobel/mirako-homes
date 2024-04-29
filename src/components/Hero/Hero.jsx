import React from "react";
import hero from "../../assets/hr-img.jpeg";
import "./Hero.css";
import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flexCenter hr-wrapper">
      <div className="flexBetween hr-container">
        {/* left side */}
        <div className="flexCoStart hr-left">
          <div className="hr-title">
            <h1>
              let us guide <br />
              you home
            </h1>
          </div>
          <div className="hr-desc">
            <span>Find a variety of properties that suit you very easily.</span>
            <br />
            <span>Forget all difficulties in finding a residence for you.</span>
          </div>
          <Link to='/properties'>
          <button className="button">Get Started</button>
          </Link>
        </div>

        {/* right side */}
        <div className="flexCenter hr-right">
          <div className="img-container">
            <img src={hero} alt="Hero Image" />
          </div>
        </div>
      </div>
      <SearchBar />
    </section>
  );
};

export default Hero;
