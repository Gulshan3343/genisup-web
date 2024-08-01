import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="section__container footer__container">
          <div className="footer__col">
            <h3>Genisup</h3>
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
              <Link to="/aboutus">About Us</Link>
            </p>
            <p>
              <Link to="/careers">Careers</Link>
            </p>
            <p>
              <Link to="/blogs">Our Blogs</Link>
            </p>
            <p>
              <Link to="/privacypolicy">Privacy Policy</Link>
            </p>
            <p>
              <Link to="/terms">Terms & Conditions</Link>
            </p>
          </div>
          <div className="footer__col">
            <h4>Industries</h4>
            <p>
              <Link to="/">Semiconductor</Link>
            </p>
            <p>
              <Link to="/">Automobile</Link>
            </p>
            <p>
              <Link to="/">Aviation</Link>
            </p>
            <p>
              <Link to="/">Customer Goods</Link>
            </p>
            <p>
              <Link to="/">Manufacturing</Link>
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
