import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import '../styles/contactus.css';

function Contactus() {
  return (
    <div>
      <Navbar />
      <div class="contact_banner">
        <div class="slider">
          <img src="pcb banner contact us.jpg" alt="img" id="slideImg" />
        </div>

      </div>
      <div class="contact_overlay">
        <div class="contact_content">
          <h1>Contact us</h1>
          <h3>Get in touch and let us know how we can help.</h3>
        </div>
      </div>
      <section class="cu_cards_section">
        <container class="cu_cards_container">
          <div class="all_cu_cards">
            <div class="border_card">
              <div class="cu_card">
                <div class="cu_card_image">
                  <img src="pin-location.svg" alt="img" />
                </div>
                <div class="cu_card_content">
                  <h3>Location</h3>
                  <p>Genisup India Pvt. Ltd.<br/>
                  #236,TNHB Phase VII, Brindavan Hosur, 635109, Tamil Nadu, IN</p>
                </div>
              </div>
            </div>
            <div class="border_card">
              <div class="cu_card">
                <div class="cu_card_image">
                  <img src="pin-location.svg" alt="img" />
                </div>
                <div class="cu_card_content">
                  <h3>Contact</h3>
                  <p>+88(0) 555-0108 <br/><br/> +88(0) 555-01117</p>
                </div>
              </div>
            </div>
            <div class="border_card">
              <div class="cu_card">
                <div class="cu_card_image">
                  <img src="pin-location.svg" alt="img" />
                </div>
                <div class="cu_card_content">
                  <h3>Email</h3>
                  <p>info@genisup.com</p>
                </div>
              </div>
            </div>
            <div class="border_card">
              <div class="cu_card">
                <div class="cu_card_image">
                  <img src="pin-location.svg" alt="img" />
                </div>
                <div class="cu_card_content">
                  <h3>Visit Between</h3>
                  <p>Mon - Sat: 8.00-5.00 <br/><br/>Sunday: Closed</p>
                </div>
              </div>
            </div>
            



          </div>
        </container>
      </section>
      <div>
        <Footer />
      </div>

    </div>
  )
}

export default Contactus
