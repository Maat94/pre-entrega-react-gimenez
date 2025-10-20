import "../styles/Header.css";
import { FaPhone, FaMapMarkerAlt, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const irAlFooter = () => {
  const footer = document.querySelector("footer");
  footer?.scrollIntoView({ behavior: "smooth" });
};
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <span className="logo-white">Sommier</span>
          <span className="logo-yellow">Outlet</span>
        </div>
        <div className='header-ofertas'>Hasta 50% OFF y 12 cuotas sin interés</div>
        <div className="header-icons">
          <FaPhone  className="icon" onClick={irAlFooter} />
          <FaMapMarkerAlt className="icon" onClick={irAlFooter} />
          <FaUser className="icon" onClick={irAlFooter} />
          <Link to='/productos'><FaShoppingCart className="icon" /></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;