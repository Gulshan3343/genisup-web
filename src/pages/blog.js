import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import '../styles/blog.css';

function blog() {
    return (
        <div>
            <Navbar />
            <div class="blog_banner">
                <div class="slider">
                    <img src="banner_blog.jpg" alt="img" id="slideImg" />
                </div>

            </div>
            <div class="blog_overlay">
                <div class="blog_content">
                    <h1>Blog</h1>
                    <h3>Archives</h3>
                </div>
            </div>
            <section class="cards_section">
                <container class="cards_container">
                    <div class="all_cards">
                        <div class="col-sm-6 col-lg-4  mb-lg-0">
                            <div class="card">
                                <div class="card_image">
                                    <img src="blog_card1.jpg" alt="img" />
                                </div>
                                <div class="card_content">
                                    <h3>Move fast, and stay adaptable.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
                                    <hr className='card_hr'></hr>
                                    <div class="card_date">
                                        <p>September 3, 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 mb-4 mb-lg-0">
                            <div class="card">
                                <div class="card_image">
                                    <img src="blog_card2.jpg" alt="img" />
                                </div>
                                <div class="card_content">
                                    <h3>Move fast, and stay adaptable.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
                                    <hr className='card_hr'></hr>
                                    <div class="card_date">
                                        <p>September 3, 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 mb-4 mb-lg-0">
                            <div class="card">
                                <div class="card_image">
                                    <img src="blog_card3.jpg" alt="img" />
                                </div>
                                <div class="card_content">
                                    <h3>Move fast, and stay adaptable.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
                                    <hr className='card_hr'></hr>
                                    <div class="card_date">
                                        <p>September 3, 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 mb-4 mb-lg-0">
                            <div class="card">
                                <div class="card_image">
                                    <img src="blog_card4.jpg" alt="img" />
                                </div>
                                <div class="card_content">
                                    <h3>Move fast, and stay adaptable.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
                                    <hr className='card_hr'></hr>
                                    <div class="card_date">
                                        <p>September 3, 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 mb-4 mb-lg-0">
                            <div class="card">
                                <div class="card_image">
                                    <img src="blog_card5.jpg" alt="img" />
                                </div>
                                <div class="card_content">
                                    <h3>Move fast, and stay adaptable.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
                                    <hr className='card_hr'></hr>
                                    <div class="card_date">
                                        <p>September 3, 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 mb-4 mb-lg-0">
                            <div class="card">
                                <div class="card_image">
                                    <img src="blog_card6.jpg" alt="img" />
                                </div>
                                <div class="card_content">
                                    <h3>Move fast, and stay adaptable.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
                                    <hr className='card_hr'></hr>
                                    <div class="card_date">
                                        <p>September 3, 2022</p>
                                    </div>
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

export default blog