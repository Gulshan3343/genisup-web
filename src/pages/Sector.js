import React from "react";
import Navbar from "../components/navbar";
import "../styles/sector.css";
import Footer from "../components/footer";

function Sector() {
  return (
    <div>

    <Navbar/>

      <div className="blog_banner" style={{ backgroundImage: 'url(/sector.jpg)'}}>
      <div className="overlay">
          <h1>Sector</h1>
          <h3>Archives</h3>
        </div>
      </div>
      <section className="cards_section">
        <div className="container">
          <div className="all_cards">
            
              <div className="card_wrapper">
                <div className="card">
                  <div className="card_image">
                    <img src="blog_card3.jpg" alt="img" />
                  </div>
                  <div className="card_content">
                    <h3>Semiconductor</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card_wrapper">
                <div className="card">
                  <div className="card_image">
                    <img src="blog_card5.jpg" alt="img" />
                  </div>
                  <div className="card_content">
                    <h3>Automobile</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur
                    </p>
                  </div>
                </div>
              </div>

              <div className="card_wrapper">
                <div className="card">
                  <div className="card_image">
                    <img src="blog_card1.jpg" alt="img" />
                  </div>
                  <div className="card_content">
                    <h3>Manufacturing</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur
                    </p>
                  </div>
                </div>
              </div>

              <div className="card_wrapper">
                <div className="card">
                  <div className="card_image">
                    <img src="blog_card4.jpg" alt="img" />
                  </div>
                  <div className="card_content">
                    <h3>Move fast, and stay adaptable.</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur
                    </p>
                  </div>
                </div>
              </div>

              <div className="card_wrapper">
                <div className="card">
                  <div className="card_image">
                    <img src="blog_card2.jpg" alt="img" />
                  </div>
                  <div className="card_content">
                    <h3>Move fast, and stay adaptable.</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur
                    </p>
                  </div>
                </div>
              </div>

              <div className="card_wrapper">
                <div className="card">
                  <div className="card_image">
                    <img src="blog_card6.jpg" alt="img" />
                  </div>
                  <div className="card_content">
                    <h3>Move fast, and stay adaptable.</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Sector;