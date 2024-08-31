import React, { useState } from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/silicon.css";
import embeddedImage from '../assets/stats-2.jpg';
import ImageSlider from '../components/ImageSlider';

function Silicon() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleDescription = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
          <Navbar />
                
                <div className="blog_banner" style={{ backgroundImage: 'url(/silicon.jpg)'}}>
                <div className="overlay">
                    <h1>Silicon Engineering</h1>
                    <h3>Your Innovation Accelerator. Build lasting change</h3>
                </div>
                </div>

                <section className="section-container-about about__container" id="about">
                    <div className="about__silicon">
                        <div>
                            {/* <h3 className="section-subheader-about">About Genisup</h3> */}
                            <h2 className="section-header-silicon">
                                All your digital products and services start … with a chip. Silicon engineering is essential in this venture. Getting it right reduces time to market, lower energy consumption, improves security, better customer experience.
                            </h2>
                        </div>
                        <p className="section-description-silicon">
                            At Genisup, we are dedicated to revolutionizing industrial processes with cutting-edge solutions. Our commitment to quality, efficiency, and customer satisfaction sets us apart as leaders in the industry. Experience unparalleled success with our innovative approach and expertise.
                        </p>
                    </div>

                    <section class=" section--article-content" id="quoteWrapper">
                        <div class="article-main-content"><div class="container">
                            <div class="row">
                                <div class="col-12 col-md-11 col-lg-10 offset-md-1 offset-lg-1">
                                    <div class="article-text article-quote-text">
                                        <h2 class="heading" id="h-delivering-this-is-hard">Delivering this is hard</h2>
                                        <p>You need a technology and business partner that understands silicon engineering and its role in solutions. How it will combine with other digital technologies like Cloud, Data &amp; AI and its application. &nbsp;The specifics of your industry: automotive, consumer products, telecom or life sciences, and how silicon engineering enables this.</p>
                                        <p>Silicon Engineering is a strategic business at the heart of our Intelligent Industry&nbsp;ambition. We have a long track record of client success by&nbsp;leveraging our existing worldwide network of thousands of silicon &amp; embedded engineers.</p>
                                        <p>We also focus on turnkey semiconductor design services, from specifications to tape-out to post silicon validation for semiconductor companies and OEMs</p>
                                        <p style={{fontWeight:'500', color:'#21325b'}}>We can support our Customers on multiple aspects:</p>
                                        <ul>
                                            <li>RTL design & integration</li>
                                            <li>Functional Verification</li>
                                            <li>Physical design & physical verification</li>
                                            <li>Analog and Mixed Signal Circuit</li>
                                            <li>Analog layout & IO</li>
                                            <li>Std. Cells & Memory design</li>
                                            <li>Next Gen Talent</li>
                                        </ul>
                                        <hr class="wp-block-separator has-alpha-channel-opacity" />
                                        <p><a id="_msocom_1"></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </section>

                    <section class=" Image_slider" id="quoteWrapper">
                        <div class="slider_heading">
                            <h2 class="heading">Our Experts</h2>
                        </div>
                        <ImageSlider />
                    </section>

                </section>

                

                <section className="section-container-about faq__container" id="faq">
        <div className="faq__image">
          <img src={embeddedImage} alt="faq" />
        </div>
        <div className="faq__content">
          {/* <h3 className="section-subheader-about">Ask By Client</h3> */}
          <h2 className="section-header-about">FAQs</h2>
          {/* <p className="section-description-about">
            A comprehensive resource designed to answer your most common queries
            and provide valuable insights into our products, services, and the
            industrial landscape.
          </p> */}
          <div className="faq__grid">
            {[
              {
                question: "What are embedded solutions?",
                answer: "Embedded solutions help businesses to develop smart, integrated solutions that are combined with sleek hardware and sophisticated user interfaces with powerful software and connectivity capabilities."
              },
              {
                question: "What are embedded systems software?",
                answer: "Embedded systems software can be adapted across all markets to push hardware boundaries and software design through embedded system engineering practice. With various embedded operating systems, wireless communications protocols, and strict QA procedures compliant with international standards for safety and quality, they form the basis for mission-critical equipment."
              },
              {
                question: "What are the various embedded software development tools?",
                answer: "We use several embedded software development tools such as advisory devices, design and development software, integration, embedded software, quality assurance, and product sustenance to maximize the software’s capabilities."
              }
            ].map((item, index) => (
              <div className="faq__card" key={index}>
                <div className="faq__header" onClick={() => toggleDescription(index)}>
                  <h4>{item.question}</h4>
                  <span><i className={`fas fa-chevron-${activeIndex === index ? 'up' : 'down'}`}></i></span>
                </div>
                {activeIndex === index && <div className="faq__description">{item.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

                <Footer />
            
        </div>
    )
}

export default Silicon
