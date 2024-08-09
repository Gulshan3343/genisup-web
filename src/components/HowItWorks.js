import React from "react";
import "../styles/working.css";
import padlockImage from "../assets/padlock.png";
import settingsImage from "../assets/settings.png";
// import waterDropsImage from "../assets/water-drops.png";
import goalImage from "../assets/goal.png";

function HowItWorks() {
  return (
    <div>
      <section className="work">
        <div className="section_container work__container">
          <h2 className="section_header">How It Works</h2>
          <div className="work__grid">
            <div className="work__card">
              <span>
                <img src={padlockImage} alt="work" />
              </span>
              <h4>Consultation</h4>
              <p>
                Engage with our experts to identify your business needs and
                develop customized solutions.
              </p>
            </div>
            <div className="work__card">
              <span>
                <img src={settingsImage} alt="work" />
              </span>
              <h4>Implementation</h4>
              <p>
                Deploy tailored technology solutions that drive efficiency and
                growth.
              </p>
            </div>
            <div className="work__card">
              <span>
                <img src={goalImage} alt="work" />
              </span>
              <h4>Support</h4>
              <p>
                Provide ongoing support and maintenance to keep your business
                running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="section-container mission__container">
          <h2 className="section_header">Our Mission</h2>
          <p className="section_subheader">
            At Genisup, our mission is to empower businesses with innovative
            technology solutions that drive success and growth.
          </p>
          <div className="mission__grid">
            <div className="mission__list">
              <h4>Empower</h4>
              <h4>Innovate</h4>
              <h4>Excel</h4>
            </div>
            <div className="mission__content">
              <p>
                We strive to empower businesses by providing cutting-edge
                technology solutions that enhance efficiency and productivity.
                Our focus on innovation and excellence ensures that our clients
                stay ahead in a rapidly evolving tech landscape.
              </p>
              <img src={goalImage} alt="mission" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowItWorks;
