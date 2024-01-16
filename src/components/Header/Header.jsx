import "./Header.css";
import logo from "../../assets/marikologo1.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="flexCenter h-wrapper">
      <div className="flexBetween h-container">
        <div className="logo">
          <img src={logo} alt="Mariko logo" width={140} />
        </div>
        <div className="h-menu">
          <Link to="/">Home</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/invest">Invest</Link>
          <Link to="/donations">Donate</Link>
          <Link to="/contacts">Contacts</Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
