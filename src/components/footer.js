import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo(0,0);
  };
  return (
    <div>
      <footer className="footer">
        <div className="section__container footer__container">
          <div className="footer__col">
          <div className="footer__logo">
          <Link to="/">
            <img src="Genisup logo.svg" onClick={handleScrollToTop} alt="Genisup Logo" />
          </Link>
        </div>
            <p>End to end partnership| Designing Tomorrow, Together Today</p>
            <p>
              When you visit or interact with our sites, services or tools, we
              or our authorised service providers may use cookies for storing
              information to help provide you with a better, faster and safer
              experience and for marketing purposes.
            </p>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <p>
              <Link to="/aboutus" onClick={handleScrollToTop}>About Us</Link>
            </p>
            <p>
              <Link to="/careers" onClick={handleScrollToTop}>Careers</Link>
            </p>
            <p>
              <Link to="/blog" onClick={handleScrollToTop}>Our Blogs</Link>
            </p>
            <p>
              <Link to="/privacypolicy" onClick={handleScrollToTop}>Privacy Policy</Link>
            </p>
            <p>
              <Link to="/terms" onClick={handleScrollToTop}>Terms & Conditions</Link>
            </p>
          </div>
          <div className="footer__col">
            <h4>Our Services</h4>
            <p>
              <Link to="/silicon" onClick={handleScrollToTop}>Silicon Engineering</Link>
            </p>
            <p>
              <Link to="/embedded" onClick={handleScrollToTop}>Embedded Solutions</Link>
            </p>
            <p>
              <Link to="/solution_4" onClick={handleScrollToTop}>Industry 4.0</Link>
            </p>
            <p>
              <Link to="/" onClick={handleScrollToTop}>Customer Goods</Link>
            </p>
            <p>
              <Link to="/" onClick={handleScrollToTop}>Manufacturing</Link>
            </p>
          </div>
          <div className="footer__col">
            <h4>Contact Us</h4>
            <p>
              <i className="fas fa-map-pin"></i> #236, TNHB Phase VII, Brindavan
              Hosur, 635109, Tamil Nadu, IN
            </p>
            <p>
              <i className="fas fa-envelope"></i>{" "}
              <a href="mailto:info@genisup.com">info@genisup.com</a>
            </p>
            <p>
              <i className="fas fa-phone"></i>{" "}
              <a href="tel:+914344350044">043443 50044</a>
            </p>
          </div>
        </div>
        <hr style={{margin:"0 80px"}}/>
        <div className="footer__bar">
          <div className="footer__bar__content">
            <p>Copyright © 2024 Genisup Pvt Ltd. All rights reserved.</p>
            <div className="footer__socials">
              <span>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
