import "./Footer.css";
import logo from "/images/marikologo1.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGreaterThan,
} from "react-icons/fa";
import {
  FaPhoneVolume,
  FaEnvelopeOpenText,
  FaLocationDot,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-links">
          <div className="footer-info-div">
            <div className="footer-info-div-left">
            <img src={logo} alt="" />
            <p className="footer-about">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda repudiandae praesentium totam aperiam esse rerum
              quisquam quod ducimus optio? Cumque, recusandae. Ad dolor tempore
              minima repudiandae atque, tenetur consequuntur corrupti?
            </p>
            <div>
              <Link to="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="f-icon icon" />
              </Link>
              <Link to="https://twitter.com/MirakoHomes" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="f-icon icon" />
              </Link>
              <Link to="https://www.instagram.com/mirakohomes" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="f-icon icon" />
              </Link>
            </div>
            </div>
          </div>
          <div className="footer-quick-links footer-info-div">
            <h3>Quick Links</h3>
            <Link to="/">
              <FaGreaterThan className="f-symbol icon" />
              Home
            </Link>
            {/* <Link>
              <FaGreaterThan className="f-symbol icon" />
              About
            </Link> */}
            <Link to="/properties">
              <FaGreaterThan className="f-symbol icon" />
              Properties
            </Link>
            <Link to="/articles">
              <FaGreaterThan className="f-symbol icon" />
              Articles
            </Link>
            <Link to="/services">
              <FaGreaterThan className="f-symbol icon" />
              Services
            </Link>
            <Link to="contacts">
              <FaGreaterThan className="f-symbol icon" />
              Contact Us
            </Link>
          </div>
          <div className="footer-services footer-info-div">
            <h3>Services</h3>
            <Link to="/invest">
              <FaGreaterThan className="f-symbol icon" />
              Invest
            </Link>
            <Link to="/donate">
              <FaGreaterThan className="f-symbol icon" />
              Donate
            </Link>
          </div>
          <div className="footer-contacts footer-info-div">
            <h3>Information</h3>
            <p>
              <FaPhoneVolume className="f-icon icon" />
              +254 702008666
            </p>
            <p>
              <FaEnvelopeOpenText className="f-icon icon" />
              mirakohomes@gmail.com
            </p>
            <p>
              <FaLocationDot className="f-icon icon" />
              Coming soon
            </p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>@{new Date().getFullYear()} Mirako Homes. Terms & Conditions.</p>
      </div>
    </footer>
  );
};

export default Footer;
