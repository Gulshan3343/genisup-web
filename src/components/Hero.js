import {useTypewriter, Cursor} from 'react-simple-typewriter';
import React from 'react'
import "../styles/header.css";

function Hero() {

  const [typeEffect] = useTypewriter({
    words: ['partnership', 'design', 'innovation'],
    loop: {},
    typeSpeed: 60,
    deleteSpeed: 25,
  });

  return (
    <div>
      <section class="hero">
    {/* <div class="section__container hero__container"> */}
  <div class="ai-c">
  <div class="tag_line">
    {/* <!-- Heading --> */}
    <div class="hero_heading">
      <h1 class="display-6 text-white" style={{textAlign:'left'}}>
        End to end
        <span class="text-warning" style={{color: 'rgb(245 202 153)'}}> 
          <span> {typeEffect} </span> 
          <Cursor/>
        </span>
        <br/>
        <i>Designing Tomorrow,</i><br/>
        <i>Together Today</i>
      </h1>

      <p class="lead text-white-70">Your Innovation Accelerator.<br/> Build lasting change</p>
    </div>
    {/* <!-- End Title & Description --> */}

    <div class="gap-3">
      <a class="btn z-index btn-primary btn-transition" href="#">Contact Us</a>
      <a class="btn z-index btn-ghost-light btn-transition" href="#">Learn More <i class="bi-chevron-right small ms-1"></i></a>
    </div>
  </div>

    <div class="img-box">
    <div className="hero_form-container">
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
    </div>
    </div>
    <div class="shape shape-bottom zi-1">
    <svg width="3000" height="500" viewBox="0 0 3000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 500H3000V0L0 500Z" fill="#fff"></path>
    </svg>
  </div>
    {/* </div> */}
    </section>
    </div>
  )
}

export default Hero