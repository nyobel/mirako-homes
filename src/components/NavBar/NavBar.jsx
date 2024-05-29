import "./NavBar.css";
import logo from "/images/marikologo1.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="h-wrapper">
      <div className="h-container">
          <img src={logo} alt="Mariko logo" />
        <div className="h-menu">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/properties">Properties</NavLink></li>
            <li><NavLink to="/articles">Articles</NavLink></li>
            <li><NavLink to="/invest">Invest</NavLink></li>
            <li><NavLink to="/donations">Donate</NavLink></li>
            <li><NavLink to="/contacts">Contacts</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
