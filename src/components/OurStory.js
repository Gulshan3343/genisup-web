import React from 'react';
import "../styles/navbar.css";

function OurStory() {
  return (
    <div>
      <section className="about" id="about">
        <div className="section__container about__container">
          <div className="about__grid">
            <div className="about__content">
              <p className="section__subheader">Our Story</p>
              <h2 className="section__header">About Genisup</h2>
              <p className="para">
                At Genisup, we are dedicated to transforming businesses with our
                innovative tech solutions. Our journey began with a mission to empower
                enterprises through cutting-edge technology and exceptional service.
                With over a decade of experience, we have become a trusted name in the
                tech industry, delivering solutions that drive success and growth.
              </p>
              <br />
              <p className="para">
                Our commitment to quality and integrity ensures that our clients receive
                the best possible outcomes.
              </p>
            </div>
            <div className="about__list">
              <div className="about__item">
                <span><i className="fas fa-globe"></i></span>
                <h4>Innovative Global Solutions In World</h4>
              </div>
              <div className="about__item">
                <span><i className="fas fa-chart-bar"></i></span>
                <h4>Driving Business Growth To Milestone</h4>
              </div>
              <div className="about__item">
                <span><i className="fas fa-thumbs-up"></i></span>
                <h4>Commitment to Excellence & Proficience</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurStory;
