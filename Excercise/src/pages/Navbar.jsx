import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/nosotros">Sobre Nosotros</Link></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
