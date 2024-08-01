import React from "react";
import "../styles/privacy.css"
import Footer from "../components/footer";
import Navbar from "../components/navbar";

function PrivacyPolicy() {
  return (
    <div>
      <header className="header-privacy">
        <Navbar />
        <div className="blog_banner"></div>
        <div className="blog_overlay">
          <div className="blog_content">
            <h1>Privacy Policy</h1>
            <h3>Here's the privacy policy of genisup.com with effective use of it</h3>
          </div>
        </div>

      <div className="privacy-policy-container">
      <p className="privacy-policy-date">Effective Date: 7/27/2024</p>

      <section className="privacy-policy-section">
        <h2 className="privacy-policy-subtitle">1. Introduction</h2>
        <p>Welcome to Genisup.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://genisup.com" className="privacy-policy-link">genisup.com</a>. Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
      </section>

      <section className="privacy-policy-section">
        <h2 className="privacy-policy-subtitle">2. Information We Collect</h2>
        <ul className="privacy-policy-list">
          <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number that you voluntarily give to us.</li>
          <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, and your access times.</li>
          <li><strong>Financial Data:</strong> Data related to your payment method that we may collect when you make a purchase.</li>
        </ul>
      </section>

      <section className="privacy-policy-section">
        <h2 className="privacy-policy-subtitle">3. Use of Your Information</h2>
        <p>We use information collected about you to provide you with a smooth, efficient, and customized experience. This includes administering promotions, assisting law enforcement, and delivering targeted advertising.</p>
      </section>

      <section className="privacy-policy-section">
        <h2 className="privacy-policy-subtitle">4. Disclosure of Your Information</h2>
        <p>We may share your information in certain situations, such as to comply with legal obligations or during business transfers.</p>
      </section>

      <section className="privacy-policy-section">
        <h2 className="privacy-policy-subtitle">5. Security of Your Information</h2>
        <p>We use security measures to protect your personal information, but no system is completely secure.</p>
      </section>

      <section className="privacy-policy-section">
        <h2 className="privacy-policy-subtitle">6. Policy for Children</h2>
        <p>We do not knowingly collect information from children under 13. If we discover such information, we will delete it.</p>
      </section>

      <section className="privacy-policy-section">
        <h2 className="privacy-policy-subtitle">7. Changes to This Privacy Policy</h2>
        <p>We may update this policy to reflect changes in our practices. Check this page regularly for updates.</p>
      </section>

      <section className="privacy-policy-section">
        <h2 className="privacy-policy-subtitle">8. Contact Us</h2>
        <p>If you have questions, please contact us at:</p>
        <p>Email: <a href="mailto:support@genisup.com" className="privacy-policy-link">support@genisup.com</a></p>
        <p>Address: [Your Address]</p>
      </section>
    </div>
    <Footer/>
    </header>
    </div>
  );
}

export default PrivacyPolicy;
