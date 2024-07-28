import React from "react";
import Navbar from "./navbar";
import "../styles/navbar.css";

function header() {
  return (
    <header className="header-nav">
      <Navbar />
      <div className="section__container header__container" id="home">
        <h1>Your Innovation Accelerator. Build lasting changes</h1>
        <button className="btn_header btn-secondary">
          Get Quotation
          <span>
            <i className="ri-arrow-right-double-line"></i>
          </span>
        </button>
      </div>
    </header>
  );
}

export default header;
