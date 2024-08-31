import React, { useState } from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/solution_4.css";
import ImageSlider from '../components/ImageSlider';

function Solution_4() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleDescription = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
                <Navbar />
                <div className="blog_banner" style={{ backgroundImage: 'url(/industry4.jpg)'}}>
                <div className="overlay">
                    <h1>Industry 4.0</h1>
                    <h3>Transform your enterprice to be future ready</h3>
                </div>
                </div>

                <section className="section-container-solution about__container" id="about">
                    <div className="about__solution">
                            {/* <h3 className="section-subheader-about">About Genisup</h3> */}
                            <h2 className="section-header-silicon">
                                Accelerate Business Outcomes with Industry 4.0
                            </h2>
                    </div>

                    <section class=" section--article-content" id="quoteWrapper">
                        <div class="article-main-content"><div class="container">
                            <div class="row">
                                <div class="col-12 col-md-11 col-lg-10 offset-md-1 offset-lg-1">
                                    <div class="article-text article-quote-text">
                                        <h3 class="solution_heading" id="h-delivering-this-is-hard">Make your enterprise more intelligent, resilient, and ready for whatever tomorrow brings</h3>
                                        <p>Market and technical complexities have made it harder than ever to build products and connect global processes. The lack of visibility and insights challenges global enterprises to maintain innovation, efficiency and growth. By applying the Industry 4.0 principles of connectivity, automation, integration and machine learning, organizations can reimagine their go-to-market strategies, rethink their customer-engagement approach, and deploy intelligent products, operations and assets.</p>
                                        <p>Genisup’s Industry 4.0 practice partners with enterprises to help them improve their time to market, boost their bottom line, reduce their carbon footprint, and gain the ability to quickly shift gears as the landscape evolves.</p>
                                        <p>Learn more about our Smart-Digital-Intelligent (SDI) approach to scale-up and create value, explore the insights below, and contact us to discuss how Genisup’s Industry 4.0 experts can help you build and maintain a competitive edge.</p>
                                        <p style={{ fontWeight: '500', color: '#21325b' }}>We can support our Customers on multiple aspects:</p>
                                        <ul>
                                            <li>Assembly Automation</li>
                                            <li>Industrial IoT</li>
                                            <li>Machine Vision</li>
                                            <li>Enterprise Application Services</li>
                                            <li>Data Analytics</li>
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

                </section>


                <div className="lawprovide-section-area section-padding5">
                    <div className="container">
                        <div className='our_solution'>
                            <h2>Our Solutions</h2>
                        </div>
                        <div className="aurow align-items-center">
                            <div className="col-lg-6">
                                <img src='our_solution.jpg' style={{height:'650px'}}></img>
                            </div>
                            <div className="col-lg-6">
                                <div className="lawprovide-boaxrea mb-30 mt-30">
                                    <div className="guidiance-boxarea">
                                        <img src="silicon_engg.png" alt="" className="ts" />
                                    </div>
                                    <div className="lax-conultingprovide">
                                        <a className="color-29" href="/aboutus">
                                            <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b14 ts">
                                            Atlas SaaS Applications
                                            </h1>
                                        </a>
                                        <p className="font-ks lineh-26 weight-500 color-30 font-16 ts">
                                        With Atlas Cloud you have access to a platform where you can map your end-to-end business processes and automate your workflows. You can eliminate wasted time and resources. You can turn data into insight.
                                        </p>
                                    </div>
                                </div>
                                <div className="lawprovide-boaxrea mb-30">
                                    <div className="guidiance-boxarea">
                                        <img src="Embedded Solutions.png" alt="" className="ts" />
                                    </div>
                                    <div className="lax-conultingprovide">
                                        <a className="color-29" href="/aboutus">
                                            <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b14 ts">
                                            Product Lifecycle Management (PLM)
                                            </h1>
                                        </a>
                                        <p className="font-ks lineh-26 weight-500 color-30 font-16 ts">
                                        Smart Manufacturing and Industry 4.0 technologies and approaches is increasing the need for full Product Lifecycle Management. More detailed information is required for the inception of concepts such as the digital twin and the digital thread in Cyber Physical Systems.
                                        </p>
                                    </div>
                                </div>
                                <div className="lawprovide-boaxrea">
                                    <div className="guidiance-boxarea">
                                        <img
                                            src="Industry 4.0 Solutions.png"
                                            alt=""
                                            className="ts"
                                        />
                                    </div>
                                    <div className="lax-conultingprovide">
                                        <a className="color-29" href="/aboutus">
                                            <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b14 ts">
                                            MOM & MES
                                            </h1>
                                        </a>
                                        <p className="font-ks lineh-26 weight-500 color-30 font-16 ts">
                                        Market pressures push manufacturers to reduce costs and improve efficiencies through manufacturing automation. Manufacturing Operations Management (MES/MOM) is critical for this Smart Digital Transformation. It provides the layer for direct execution of production orders and dynamic response to changing situations in Smart Factories.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <section class="section-container-solution" id="quoteWrapper">
                        <div class="slider_heading">
                            <h2 class="heading">Our Experts</h2>
                        </div>
                        <ImageSlider />
                    </section>
                {/* <Faq /> */}
                <Footer />

        </div>
    )
}

export default Solution_4

