import React from "react";
import Navbar from "../components/navbar";
import Faq from "../components/Faq";
import Footer from "../components/footer";
import "../styles/aboutus.css";
import "../styles/aboutpage.css";

function Aboutus() {
  return (
    <div>
      <header className="header-aboutus">
        <Navbar />
        <div className="blog_banner"></div>
        <div className="blog_overlay">
          <div className="blog_content">
            <h1>About us</h1>
            <h3>Your Innovation Accelerator. Build lasting change</h3>
          </div>
        </div>

        <section className="section-container-about about__container" id="about">
  <div className="about__header">
    <div>
      <h3 className="section-subheader-about">About Genisup</h3>
      <h2 className="section-header-about">
        Leading Innovation in Industrial Solutions
      </h2>
    </div>
    <p className="section-description-about">
      At Genisup, we are dedicated to revolutionizing industrial processes with cutting-edge solutions. Our commitment to quality, efficiency, and customer satisfaction sets us apart as leaders in the industry. Experience unparalleled success with our innovative approach and expertise.
    </p>
  </div>
  <div className="about-grid">
    <div className="about__card">
      <p>TECHNOLOGY</p>
      <h4>Innovative Technological Solutions</h4>
    </div>
    <div className="about__card">
      <p>SUSTAINABILITY</p>
      <h4>Committed to Sustainable Practices</h4>
    </div>
    <div className="about__card">
      <p>QUALITY</p>
      <h4>Uncompromising Quality Standards</h4>
    </div>
  </div>
</section>


        <div className="lawprovide-section-area section-padding5">
          <div className="container">
            <div className="aurow align-items-center">
              <div className="col-lg-6">
                <div className="pr-49">
                  <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">
                    Our Team Provide Customer Centric Advice to Corporations
                  </h1>
                  <p className="font-ks font-16 weight-500 lineh-26 margin-b20 color-30">
                    We offer an end to end innovative solution to give improved
                    results, increased confidentiality, and streamlined
                    programme management.
                  </p>
                  <p className="font-ks font-16 weight-500 lineh-26 color-30">
                    Whatever future you envisage, we have the resources to
                    assist you in realising it, through digital solutions,
                    silicon engineering, innovation ecosystem and many more
                  </p>
                  <a
                    className="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32"
                    href="/team"
                  >
                    Meet Our Attorneys
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="lawprovide-boaxrea mb-30">
                  <div className="guidiance-boxarea">
                    <img src="silicon_engg.png" alt="" className="ts" />
                  </div>
                  <div className="lax-conultingprovide">
                    <a className="color-29" href="/aboutus">
                      <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b14 ts">
                        Silicon Engineering
                      </h1>
                    </a>
                    <p className="font-ks lineh-26 weight-500 color-30 font-16 ts">
                      Foundation IP, Custom SoC, RTL to GDSII
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
                        Embedded Solutions
                      </h1>
                    </a>
                    <p className="font-ks lineh-26 weight-500 color-30 font-16 ts">
                      Designing Advanced Embedded Systems
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
                        Industry 4.0 Solutions
                      </h1>
                    </a>
                    <p className="font-ks lineh-26 weight-500 color-30 font-16 ts">
                      Use smart manufacturing technology to expedite your
                      digital transformation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Faq />
        <Footer />
      </header>
    </div>
  );
}

<<<<<<< HEAD
export default Aboutus;
=======
      export default Aboutus;
>>>>>>> 41d87af634cebd1f2d48bb902c3b27c0d72f3bb5
