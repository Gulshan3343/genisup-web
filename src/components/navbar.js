import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav>
        <div className="nav__logo">
          <Link to="/">
            <img src="Genisup logo.svg" alt="Genisup Logo" />
          </Link>
        </div>
        <ul className={`nav__links ${isMenuOpen ? 'active' : ''}`} id="nav-links">
        <li className="link">
            <Link to="/aboutus">Company</Link>
          </li>
          <li className="link">
            <Link to="/sector">Sectors</Link>
          </li>
          <li className="link">
            <Link to="/services">Services</Link>
          </li>
          <li className="link">
            <Link to="/blog">Insights</Link>
          </li>
          <li className="link">
            <Link to="/careers">Careers</Link>
          </li>
          <li className="link">
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
        <div className="nav__menu__btn" id="menu-btn" onClick={toggleMenu}>
          <span>
            <i className="fas fa-bars"></i>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
