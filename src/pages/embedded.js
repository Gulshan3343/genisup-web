import React, { useState } from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/embedded.css";
import ImageSlider from '../components/ImageSlider';
import embeddedImage from '../assets/stats-2.jpg';

function Embedded() {
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

    return (
        <div>
                <Navbar />
                <div className="blog_banner" style={{ backgroundImage: 'url(/embedded.jpg)'}}>
                <div className="overlay">
                    <h1>Embedded Solutions</h1>
                    <h3>Developing high-quality software for sophisticated technology</h3>
                </div>
                </div>

                <section className="section-container-about about__container" id="about">
                    <div className="about__silicon">
                        <p className="section-description-embedded">
                            Genisup`s embedded expertise lays the ground for the company`s chip-to-cloud offering. We implement the highest quality software for automotive, consumer electronics, and healthcare devices. Our knowledge starts with hardware design and bare-metal up through all the software layers of embedded devices up to the complex HMI. From implantable to wearable technologies, embedded system software has become an integrated part of our lives. We help companies across all markets continue to push the boundaries of hardware and software design through our dedicated embedded system engineering practice. In addition to having extensive experience with various embedded operating systems and wireless communications protocols, we also follow strict QA procedures compliant with international standards and certifications for safety and quality for mission-critical equipment.
                        </p>
                        <div class="embedded_img">
                        <img src='embedded_solution.jpg' />
                        </div>
                    </div>

                    <section class=" section--article-content" id="quoteWrapper">
                        <div class="article-main-content"><div class="container">
                            <div class="row">
                                <div class="col-12 col-md-11 col-lg-10 offset-md-1 offset-lg-1">
                                    <div class="article-text article-quote-text">
                                        <h2 class="heading" id="h-delivering-this-is-hard">Transforming Everyday Devices</h2>
                                        <p>We help businesses develop smart, integrated solutions that combine sleek hardware and sophisticated user interfaces with powerful software and connectivity capabilities.</p>
                                        
                                        <p style={{ fontWeight: '500', color: '#21325b' }}>We can support our Customers on multiple aspects:</p>
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
                <div>
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
    </div>
                <Footer />
        </div>
    )
}

export default Embedded
