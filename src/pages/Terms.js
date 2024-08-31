import React from 'react'
import "../styles/Terms.css"
import Footer from '../components/footer'
import Navbar from '../components/navbar'

function Terms() {
  return (
    <div>
        <Navbar />

        <div className="blog_banner" style={{ backgroundImage: 'url(/T&C.jpg)'}}>
        <div className="overlay">
            <h1>Terms & Conditions</h1>
            <h3>Here's the terms & conditions of genisup.com with effective use of it</h3>
          </div>
        </div>

      <div className="terms-conditions-container">
      <h1 className="terms-conditions-title">Terms and Conditions for Genisup.com</h1>
      <p className="terms-conditions-date">Effective Date: [Date]</p>

      <section className="terms-conditions-section">
        <h2 className="terms-conditions-subtitle">1. Introduction</h2>
        <p>Welcome to Genisup.com. These Terms and Conditions outline the rules and regulations for the use of our website. By accessing or using this website, you agree to be bound by these terms. If you do not agree with these terms, please do not use the website.</p>
      </section>

      <section className="terms-conditions-section">
        <h2 className="terms-conditions-subtitle">2. Use of the Website</h2>
        <p>By using this website, you agree to comply with all applicable laws and regulations. You are responsible for your own actions and for the content you post on this site. You must not use the website for any illegal or unauthorized purposes.</p>
      </section>

      <section className="terms-conditions-section">
        <h2 className="terms-conditions-subtitle">3. Intellectual Property</h2>
        <p>All content on this website, including text, graphics, logos, and images, is the property of Genisup.com and is protected by intellectual property laws. You may not use, reproduce, or distribute any content from this site without our express written permission.</p>
      </section>

      <section className="terms-conditions-section">
        <h2 className="terms-conditions-subtitle">4. Limitation of Liability</h2>
        <p>We are not liable for any damages that may occur from the use or inability to use the website. We do not guarantee the accuracy or completeness of any content on this site and are not responsible for any errors or omissions.</p>
      </section>

      <section className="terms-conditions-section">
        <h2 className="terms-conditions-subtitle">5. Changes to Terms</h2>
        <p>We may update these Terms and Conditions from time to time. We will notify you of any changes by posting the new terms on this page. Your continued use of the website after any changes constitutes acceptance of the new terms.</p>
      </section>

      <section className="terms-conditions-section">
        <h2 className="terms-conditions-subtitle">6. Contact Us</h2>
        <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
        <p>Email: <a href="mailto:support@genisup.com" className="terms-conditions-link">support@genisup.com</a></p>
        <p>Address: [Your Address]</p>
      </section>
    </div>
    <div><Footer/></div>
    
    </div>
  )
}

export default Terms