import React from "react";
import Ourservice from "../components/ourservice";
import Footer from "../components/footer";
import HowItWorks from "../components/HowItWorks";
import OurStory from "../components/OurStory";
import Header from "../components/header";

function homepage() {
  return (
    <div>
      <Header />
      <OurStory />
      <Ourservice />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default homepage;
