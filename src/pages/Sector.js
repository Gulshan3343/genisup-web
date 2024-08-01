import React from "react";
import Navbar from "../components/navbar";
import "../styles/sector.css";
import Footer from "../components/footer";

function Sector() {
  return (
    <div>
    <header className="header-blogs">
    <Navbar/>
      <div className="blog_banner">
      </div>
      <div className="blog_overlay">
        <div className="blog_content">
          <h1>Sector</h1>
          <h3>Archives</h3>
        </div>
      </div>
      <section className="cards_section">
        <div className="container">
          <div className="all_cards">
            {[...Array(6)].map((_, index) => (
              <div className="card_wrapper" key={index}>
                <div className="card">
                  <div className="card_image">
                    <img src={`blog_card${index + 1}.jpg`} alt="img" />
                  </div>
                  <div className="card_content">
                    <h3>Move fast, and stay adaptable.</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur
                    </p>
                    <hr className="card_hr" />
                    <div className="card_date">
                      <p>September 3, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
      </header>
    </div>
  );
}

export default Sector;