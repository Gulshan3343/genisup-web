import React from 'react';
import "../styles/aoe.css";
import padlockImage from "../assets/silicon_engineering.jpg";
import settingsImage from "../assets/Embedded_Solutions.jpg";
import goalImage from "../assets/Industry 4.0 Solutions.jpg";
import { Link } from "react-router-dom";

function Aoe() {

  const handleScrollToTop = () => {
    window.scrollTo(0,0);
  };

  return (
    <div>
      <section className="work">
        <div className="section_container aoe__container">
          <h2 className="section_header">Areas of Expertise</h2>
          <div className="work__grid">
            <div className="aoe__card">
              <span>
                <img src={padlockImage} alt="work" />
              </span>
              <h4>Silicon Engineering</h4>
              <p>
              Foundation IP, Custom SoC, RTL to GDSII
              </p>
              <hr style={{margin:"10px 45px"}}></hr>
              <Link to="/Silicon" onClick={handleScrollToTop}>Learn more <b>></b> </Link>
            </div>
            <div className="aoe__card">
              <span>
                <img src={settingsImage} alt="work" />
              </span>
              <h4>Embedded Solutions</h4>
              <p>
              Designing Advanced Embedded Systems
              </p>
              <hr style={{margin:"10px 45px"}}></hr>
              <Link to ="/Embedded" onClick={handleScrollToTop}>Learn more <b>></b></Link>
            </div>
            <div className="aoe__card">
              <span>
                <img src={goalImage} alt="work" />
              </span>
              <h4>Industry 4.0 Solutions</h4>
              <p>
              Use smart manufacturing technology to expedite your digital transformation.
              </p>
              <hr style={{margin:"10px 45px"}}></hr>
              <Link to="/Solution_4" onClick={handleScrollToTop}>Learn more <b>></b></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Aoe
