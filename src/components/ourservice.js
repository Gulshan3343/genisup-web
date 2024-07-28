import React from 'react';
import "../styles/navbar.css";
import statsImage1 from '../assets/stats-1.jpg';
import statsImage2 from '../assets/stats-2.jpg';

function OurService() {
  return (
    <div>
      <section className="stats" id="stats">
        <div className="section__container stats__container">
          <div className="stats__content">
            <p className="section__subheader">Company</p>
            <h2 className="section__header">Our Stats</h2>
            <p className="para">
              At Genisup, our team of dedicated experts and professionals brings
              a wealth of experience and knowledge to every project. Our deep
              industry insights and hands-on experience enable us to tackle even
              the most complex challenges, providing you with tailored solutions
              that drive results.
            </p>
            <div className="stats__grid">
              <div className="stats__card">
                <span><i className="fas fa-building"></i></span>
                <h4>150+</h4>
                <p>Global Clients</p>
              </div>
              <div className="stats__card">
                <span><i className="fas fa-user"></i></span>
                <h4>200+</h4>
                <p>Expert Team Members</p>
              </div>
              <div className="stats__card">
                <span><i className="fas fa-smile"></i></span>
                <h4>1000+</h4>
                <p>Satisfied Clients</p>
              </div>
              <div className="stats__card">
                <span><i className="fas fa-trophy"></i></span>
                <h4>300+</h4>
                <p>Successful Projects</p>
              </div>
            </div>
          </div>
          <div className="stats__image">
            <img src={statsImage1} alt="stats" />
            <img src={statsImage2} alt="stats" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurService;
