import React from "react";
import "../styles/contactus.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Contactus() {
  return (
    <div className="contact-us">
      <header className="header-contact">
        <Navbar />
        <div className="blog_banner"></div>
        <div className="blog_overlay">
          <div className="blog_content">
            <h1>Contact Us</h1>
            <h3>Get in touch and let us know how we can help.</h3>
          </div>
        </div>
        <section className="contact-info">
          <div className="info-card">
            <img src="pin-location.svg" alt="Location" />
            <h3>Location</h3>
            <p>
              Genisup India Pvt. Ltd.
              <br />
              #236, TNHB Phase VII, Brindavan Hosur, 635109, Tamil Nadu, IN
            </p>
          </div>
          <div className="info-card">
            <img src="phone.svg" alt="Phone" />
            <h3>Contact</h3>
            <p>
              +88(0) 555-0108 <br />
              <br /> +88(0) 555-01117
            </p>
          </div>
          <div className="info-card">
            <img src="message.svg" alt="Email" />
            <h3>Email</h3>
            <p>info@genisup.com</p>
          </div>
          <div className="info-card">
            <img src="calendar.svg" alt="Visit Hours" />
            <h3>Visit Between</h3>
            <p>
              Mon - Sat: 8.00-5.00 <br />
              <br />
              Sunday: Closed
            </p>
          </div>
        </section>
        <section className="contact-form-section">
          <div className="form-container">
            <h3>Send Us A Message</h3>
            <p>Give us a chance to serve and bring magic to your brand.</p>
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="youremail@gmail.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Your Phone</label>
                <input type="tel" id="phone" placeholder="+0123-456-789" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7783.090420205389!2d77.826124!3d12.743065000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae76ba27286aff%3A0x3630cd858f297941!2sGENISUP%20INDIA%20PVT%20LTD!5e0!3m2!1sen!2sus!4v1721303692398!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
        <Footer/>
      </header>
    </div>
  );
}

export default Contactus;
