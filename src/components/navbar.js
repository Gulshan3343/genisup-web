import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollToTop = () => {
    window.scrollTo(0,0);
  };

  return (
    <div className="navbox">
      <nav>
        <div className="nav__logo">
          <Link to="/">
            <img src="Genisup logo.svg" onClick={handleScrollToTop} alt="Genisup Logo" />
          </Link>
        </div>
        <ul className={`nav__links ${isMenuOpen ? 'active' : ''}`} id="nav-links">
          <li className="link">
            <Link to="/aboutus" onClick={handleScrollToTop}>Company</Link>
          </li>
          <li className="link">
            <Link to="/sector" onClick={handleScrollToTop}>Sectors</Link>
          </li>
          <li className="link">
            <Link to="#">Services<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-360 280-560h400L480-360Z"/></svg></Link>
            
            <ul class="dropdown-menu">
              <li><Link to="/silicon" onClick={handleScrollToTop}>Silicon Engineering</Link></li>
              <li><Link to="/embedded" onClick={handleScrollToTop}>Embedded Solutions</Link></li>
              <li><Link to="/solution_4" onClick={handleScrollToTop}>Industry 4.0 Solutions</Link></li>
            </ul>
          </li>
          <li className="link">
            <Link to="/blog" onClick={handleScrollToTop}>Insights</Link>
          </li>
          <li className="link">
            <Link to="/careers" onClick={handleScrollToTop}>Careers</Link>
          </li>
          <li className="link">
            <Link to="/contactus" onClick={handleScrollToTop}>Contact Us</Link>
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
