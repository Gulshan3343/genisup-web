import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import '../styles/aboutus.css';

function aboutus() {
  return (
    <div>
      <Navbar/>
      <div class="aboutus_banner">
                <div class="slider">
                    <img src="banner_au.jpg" alt="img" id="slideImg" />
                </div>
                
            </div>
            <div class="aboutus_overlay">
                    <div class="aboutus_content">
                        <h1>About us</h1>
                        <h3>Your Innovation Accelerator. Build lasting change</h3>

                        {/* <div>
                            <Link to="/aboutusus" className="button-link">
                                aboutus Us
                            </Link>
                        </div> */}
                    </div>
                </div>
      <div>
      <Footer/>
      </div>
    </div>
  )
}

export default aboutus
