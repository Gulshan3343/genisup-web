import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const services = [
  {
    title: "Silicon Engineering",
    description: "Foundation IP, Custom SoC, RTL to GDSII",
    details: [
      { point: "RTL design & integration", desc: "Integration of RTL design." },
      {
        point: "Functional Verification",
        desc: "Verification of functional design.",
      },
      {
        point: "Physical design & physical verification",
        desc: "Design and verification.",
      },
      {
        point: "Analog and Mixed Signal Circuit",
        desc: "Analog and mixed signal circuits.",
      },
      { point: "Analog layout & IO", desc: "Layout and IO for analog." },
      {
        point: "Std. Cells & Memory design",
        desc: "Standard cells and memory.",
      },
      { point: "Next Gen Talent", desc: "Development of next-gen talent." },
    ],
    image: "https://i.ibb.co/5hh146G/industry.png",
  },

  {
    title: "Embedded Solutions",
    description: "Designing Advanced Embedded Systems",
    details: [
      {
        point: "Mixed Signal PCB design",
        desc: "Designing mixed signal PCBs.",
      },
      { point: "Hardware design", desc: "Designing hardware components." },
      { point: "Firmware and Middleware", desc: "Development of firmware." },
      {
        point: "PCB fabrication and Assembly",
        desc: "Fabrication and assembly.",
      },
      { point: "Product Engineering", desc: "Engineering of products." },
      {
        point: "Assembly and Manufacturing Support",
        desc: "Support for assembly.",
      },
    ],
    image: "https://i.ibb.co/SXzyWhS/engineering.png",
  },
  {
    title: "Industry 4.0 Solutions",
    description: "Use smart manufacturing technology to expedite your digital transformation.",
    details: [
      { point: "Assembly Automation", desc: "Automation of assembly." },
      { point: "Industrial IoT", desc: "Internet of Things for industry." },
      { point: "Machine Vision", desc: "Vision systems for machines." },
      {
        point: "Enterprise Application Services",
        desc: "Application services.",
      },
      { point: "Data Analytics", desc: "Analysis of data." },
      { point: "Next Gen Talent", desc: "Development of next-gen talent." },
    ],
    image: "https://i.ibb.co/VBXNZpz/silicon.png",
  },
];

const ServicePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <header className="header-services">
        <Navbar />
        <div className="blog_banner"></div>
        <div className="blog_overlay">
          <div className="blog_content">
            <h1>Our Services</h1>
            <h3>Know the services provided by genisup in details.</h3>
          </div>
        </div>
        <style>
          {`
                    .service-page {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 20px;
                        padding: 20px;
                        margin: 0 20px;
                    }
                   
                    .service-section {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        background-color: #f9f9f9;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    }
                    .service-section img {
                        max-width: 100%;
                        border-radius: 8px;
                    }
                    .service-section h3 {
                        font-size: 1.8em;
                        margin: 20px 0 10px;
                    }
                    .service-section p {
                        font-size: 1.2em;
                        margin: 10px 0;
                        text-align: center;
                    }
                    .service-section ul {
                        list-style: none;
                        padding: 0;
                        text-align: left;
                    }
                    .service-section ul li {
                        margin: 5px 0;
                        font-size: 1em;
                        position: relative;
                        padding-left: 20px;
                        cursor: pointer;
                        transition: color 0.3s;
                    }
                    .service-section ul li.active {
                        color: #007bff;
                    }
                    .service-section ul li::before {
                        content: '➔';
                        position: absolute;
                        left: 0;
                        top: 0;
                        color: #007bff;
                    }
                    .detail-description {
                        margin: 10px 0 0 20px;
                        font-size: 0.9em;
                        color: #555;
                    }
                    .learn-more {
                        margin-top: 20px;
                        font-size: 1em;
                        color: #007bff;
                        text-decoration: none;
                    }
                    .learn-more:hover {
                        text-decoration: underline;
                    }
                    @media (min-width: 768px) {
                        .service-page {
                            grid-template-columns: 1fr 1fr;
                        }
                    }
                    @media (min-width: 1024px) {
                        .service-page {
                            grid-template-columns: 1fr 1fr 1fr;
                        }
                    }
                `}
        </style>
        <div className="service-page">
          {services.map((service, serviceIndex) => (
            <div className="service-section" key={serviceIndex}>
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.details.map((detail, detailIndex) => (
                  <li
                    key={detailIndex}
                    className={detailIndex === activeIndex ? "active" : ""}
                    onClick={() => setActiveIndex(detailIndex)}
                  >
                    {detail.point}
                    {detailIndex === activeIndex && (
                      <div className="detail-description">{detail.desc}</div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      <Footer/>
      </header>
    </div>
  );
};

export default ServicePage;
