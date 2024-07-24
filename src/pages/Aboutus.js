import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import '../styles/aboutus.css';

function Aboutus() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="aboutus_banner">
          <div className="slider">
            <img src="blog_card1.jpg" alt="img" id="slideImg" />
          </div>

        </div>
        <div className="aboutus_overlay">
          <div className="aboutus_content">
            <h1>About us</h1>
            <h3>Your Innovation Accelerator. Build lasting change</h3>
          </div>
        </div>
      </div>

      <div className="about-section-area section-padding100">
        <div className="container">
          <div className="aurow align-items-center">
            <div className="col-lg-6">
              <div className="about3-images1">
                <img src="aboutus_img.svg" alt=""/>
                  </div>
              </div>
              <div className="col-lg-6">
                <div className="about3-textarea1">
                  <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">About Us</span>
                  <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">Mission Values Of Your Product Engineering</h1>
                  <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Use smart manufacturing technology to expedite your digital transformation.</p>
                  <div className="counter3-area3">
                    <div className="aurow">
                      <div className="col-lg-6 col-md-6">
                        <div className="counter3-boxarea4 text-center margin-b20 margin-t32">
                          <div className="counter4-boxarea4">
                            <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                              <span className="counter"><span><span>728</span></span></span>+</h1><p className="font-ks font-16 lineh-16 weight-500 color-30">Successful projects</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="counter3-boxarea4 text-center margin-b20 margin-t32">
                          <div className="counter4-boxarea4">
                            <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                              <span className="counter">
                                <span><span>10</span></span></span>+</h1><p className="font-ks font-16 lineh-16 weight-500 color-30">Years of exeperience</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="counter3-boxarea4 text-center">
                          <div className="counter4-boxarea4">
                            <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                              <span className="counter"><span><span>68</span></span></span>%</h1><p className="font-ks font-16 lineh-16 weight-500 color-30">Cost savings</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="counter3-boxarea4 text-center">
                          <div className="counter4-boxarea4">
                            <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                              <span className="counter"><span><span>1k</span></span></span>+</h1><p className="font-ks font-16 lineh-16 weight-500 color-30">Email leads generated
                              </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a className="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32" href="/about">About Us <span><i className="fa-solid fa-arrow-right"></i></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lawprovide-section-area section-padding5">
        <div class="container">
            <div class="aurow align-items-center">
                <div class="col-lg-6">
                    <div class="pr-49">
                        <h1 class="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">Our Team Provide Customer
                            Centric Advice to Corporations</h1>
                        <p class="font-ks font-16 weight-500 lineh-26 margin-b20 color-30">We offer an end to end innovative solution to give improved results, increased confidentiality, and streamlined programme management.</p>
                        <p class="font-ks font-16 weight-500 lineh-26 color-30">Whatever future you envisage, we have the resources to assist you in realising it, through digital solutions, silicon engineering, innovation ecosystem and many more</p>
                            <a class="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32" href="/team">Meet
                            Our Attorneys</a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="lawprovide-boaxrea mb-30">
                        <div class="guidiance-boxarea"><img src="silicon_engg.png" alt="" class="ts"/>
                        </div>
                        <div class="lax-conultingprovide"><a class="color-29" href="/aboutus">
                                <h1 class="font-lora font-24 lineh-24 weight-600 color-29 margin-b14 ts">Silicon Engineering</h1>
                            </a>
                            <p class="font-ks lineh-26 weight-500 color-30 font-16 ts">Foundation IP, Custom SoC, RTL to GDSII</p>
                        </div>
                    </div>
                    <div class="lawprovide-boaxrea mb-30">
                        <div class="guidiance-boxarea"><img src="Embedded Solutions.png" alt="" class="ts"/></div>
                        <div class="lax-conultingprovide"><a class="color-29" href="/aboutus">
                                <h1 class="font-lora font-24 lineh-24 weight-600 color-29 margin-b14 ts">Embedded Solutions</h1>
                            </a>
                            <p class="font-ks lineh-26 weight-500 color-30 font-16 ts">Designing Advanced Embedded Systems</p>
                        </div>
                    </div>
                    <div class="lawprovide-boaxrea">
                        <div class="guidiance-boxarea"><img src="Industry 4.0 Solutions.png" alt="" class="ts"/>
                        </div>
                        <div class="lax-conultingprovide"><a class="color-29" href="/aboutus">
                                <h1 class="font-lora font-24 lineh-24 weight-600 color-29 margin-b14 ts">Industry 4.0 Solutions</h1>
                            </a>
                            <p class="font-ks lineh-26 weight-500 color-30 font-16 ts">Use smart manufacturing technology to expedite your digital transformation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mission-area-starts section-padding5">
        <div class="container">
            <div class="aurow align-items-center">
                <div class="col-lg-6">
                    <div class="missionimg">
                      <img src="our_mission_img.svg" alt=""class="missionimg2"/>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="missiontextarea">
                        <h1 class="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">Our Mission</h1>
                        <p class="font-ks font-16 lineh-26 weight-500 color-30 margin-b">Fueled by the mantra 'fewer clients, more attention', we strive for excellence in providing high quality services.</p>
                        <p class="font-ks font-16 lineh-26 weight-500 color-30 margin-b">We are dedicated to achieving favorable results for our clients.We strive excellence in all aspects of our work.</p>
                        <ul>
                            <li class="font-ks font-16 lineh-16 weight-600 color-17 margin-b20"><span>
                              <img src="/assets/images/icons/check1.png" alt=""/>
                              </span>Client-Focused Solutions and Results</li>
                            <li class="font-ks font-16 lineh-16 weight-600 color-17 margin-b20">
                              <span><img src="/assets/images/icons/check1.png" alt=""/></span>
                              Flexible, Value Driven Approach</li>
                            <li class="font-ks font-16 lineh-16 weight-600 color-17 margin-b20"><span><img
                                        src="/assets/images/icons/check1.png" alt=""/></span>Assembly and Manufacturing Support</li>
                            <li class="font-ks font-16 lineh-16 weight-600 color-17"><span><img
                                        src="/assets/images/icons/check1.png" alt=""/></span>A team of experienced and
                                highly specialized</li>
                        </ul><a class="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32"
                            href="/servicev1">Learn More <span><i class="fa-solid fa-arrow-right"></i></span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        

        <div>
          <Footer />
        </div>
      </div>
      )
}

      export default Aboutus;
