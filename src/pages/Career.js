import React, { useState } from "react";
import "../styles/career.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Career() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    resume: null,
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    closeModal();
  };

  return (
    <div>
      <header className="header-careers">
        <Navbar />
        <div className="blog_banner"></div>
        <div className="blog_overlay">
          <div className="blog_content">
            <h1>Careers</h1>
            <h3>Get connected with us with you expertise and experience</h3>
          </div>
        </div>
      <section className="section-container-job job__container" id="job">
        <div className="job__grid">
          {jobList.map((job, index) => (
            <div className="job__card" key={index}>
              <div className="job__card__header">
                <img src={job.logo} alt="job" />
                <div>
                  <h5>{job.company}</h5>
                  <h6>{job.location}</h6>
                </div>
              </div>
              <h4>{job.title}</h4>
              <p>{job.description}</p>
              <div className="job__card__footer">
                <span>{job.positions} Positions</span>
                <span>{job.type}</span>
                <span>{job.salary}</span>
                <button className="btn" onClick={openModal}>Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>×</button>
            <h2>Apply for the Job</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email Address:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Country:
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Upload Resume:
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  required
                />
              </label>
              <button type="submit" className="btn">Submit Application</button>
            </form>
          </div>
        </div>
      )}
      <Footer/>
      </header>
    </div>
  );
}

const jobList = [
  {
    logo: "assets/figma.png",
    company: "Figma",
    location: "USA",
    title: "Senior Product Engineer",
    description: "Lead the development of innovative product solutions, leveraging your expertise in engineering and product management to drive success.",
    positions: "12",
    type: "Full Time",
    salary: "$1,45,000/Year"
  },
  {
    logo: "assets/google.png",
    company: "Google",
    location: "USA",
    title: "Project Manager",
    description: "Manage project timelines and budgets to ensure successful delivery of projects on schedule, while maintaining clear communication with stakeholders.",
    positions: "2",
    type: "Full Time",
    salary: "$95,000/Year"
  },
  {
    logo: "assets/figma.png",
    company: "Figma",
    location: "USA",
    title: "Senior Product Engineer",
    description: "Lead the development of innovative product solutions, leveraging your expertise in engineering and product management to drive success.",
    positions: "12",
    type: "Full Time",
    salary: "$1,45,000/Year"
  },
  {
    logo: "assets/google.png",
    company: "Google",
    location: "USA",
    title: "Project Manager",
    description: "Manage project timelines and budgets to ensure successful delivery of projects on schedule, while maintaining clear communication with stakeholders.",
    positions: "2",
    type: "Full Time",
    salary: "$95,000/Year"
  },
  {
    logo: "assets/figma.png",
    company: "Figma",
    location: "USA",
    title: "Senior Product Engineer",
    description: "Lead the development of innovative product solutions, leveraging your expertise in engineering and product management to drive success.",
    positions: "12",
    type: "Full Time",
    salary: "$1,45,000/Year"
  },
  {
    logo: "assets/google.png",
    company: "Google",
    location: "USA",
    title: "Project Manager",
    description: "Manage project timelines and budgets to ensure successful delivery of projects on schedule, while maintaining clear communication with stakeholders.",
    positions: "2",
    type: "Full Time",
    salary: "$95,000/Year"
  },
];

export default Career;
