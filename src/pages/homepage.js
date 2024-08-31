import React from "react";
import Ourservice from "../components/ourservice";
import Footer from "../components/footer";
import HowItWorks from "../components/HowItWorks";
import OurStory from "../components/OurStory";
// import Header from "../components/header";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Aoe from "../components/Aoe";

function homepage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Aoe />
      <OurStory />
      <Ourservice />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default homepage;
