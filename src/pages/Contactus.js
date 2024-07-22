import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import '../styles/contactus.css';

function Contactus() {
  return (
    <div className='contact-us'>
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
                  <p>Genisup India Pvt. Ltd.<br />
                    #236,TNHB Phase VII, Brindavan Hosur, 635109, Tamil Nadu, IN</p>
                </div>
              </div>
            </div>
            <div class="border_card">
              <div class="cu_card">
                <div class="cu_card_image">
                  <img src="phone.svg" alt="img" />
                </div>
                <div class="cu_card_content">
                  <h3>Contact</h3>
                  <p>+88(0) 555-0108 <br /><br /> +88(0) 555-01117</p>
                </div>
              </div>
            </div>
            <div class="border_card">
              <div class="cu_card">
                <div class="cu_card_image">
                  <img src="message.svg" alt="img" />
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
                  <img src="calendar.svg" alt="img" />
                </div>
                <div class="cu_card_content">
                  <h3>Visit Between</h3>
                  <p>Mon - Sat: 8.00-5.00 <br /><br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </container>
      </section>

      <section className='lower_section'>
        <container className='lower_container'>
          <div className='message_form'>

              

            <div className='heading_outer'>
              <div className='cu_heading'>
                <h3> Send Us A Message</h3>
              </div>
            </div>
            <div className='sub_heading'>
              <p>Give us chance to serve and bring magic to your brand.</p>
            </div>
            <div className='form_map'>
              <div>
                <form>
                  <div className='contact_form'>
                    <div className='half_box'>
                      <div className='form_group'>
                        <label className='input_title' for="intput name">Full Name</label>
                        <span>
                          <input type='Name' placeholder='Your Name' className='form_control'></input>
                        </span>
                      </div>
                    </div>
                    <div className='half_box'>
                      <div className='form_group'>
                        <label className='input_title' for="intput name">Your Email</label>
                        <span>
                          <input type='Name' placeholder='youremail@gmail.com' className='form_control'></input>
                        </span>
                      </div>
                    </div>
                    <div className='full_box'>
                      <div className='form_group'>
                        <label className='input_title' for="intput name">Your Phone</label>
                        <span>
                          <input type='Name' placeholder='+0123-456-789' className='form_control'></input>
                        </span>
                      </div>
                    </div>
                    <div className='full_box'>
                      <div className='form_group'>
                        <label className='input_title' for="intput name">Message</label>
                        <span>
                          <textarea class='message_form_control' placeholder='How can be help you?'></textarea>
                        </span>
                      </div>
                      <button type="submit" class="send_message mb-30">
                        <span class="btn_label" data-text="Send Message">Send Message</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className='map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7783.090420205389!2d77.826124!3d12.743065000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae76ba27286aff%3A0x3630cd858f297941!2sGENISUP%20INDIA%20PVT%20LTD!5e0!3m2!1sen!2sus!4v1721303692398!5m2!1sen!2sus" width="800" height="600" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
