import "./NavBar.css";
import logo from "../../assets/marikologo1.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="h-wrapper">
      <div className="h-container">
        <div className="logo">
          <img src={logo} alt="Mariko logo" />
        </div>
        <div className="h-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/articles">Articles</Link></li>
            <li><Link to="/invest">Invest</Link></li>
            <li><Link to="/donations">Donate</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
