import "./App.css";
import Home from "../src/pages/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contactus from "./pages/Contactus";
import Blog from "./pages/blog";
import Aboutus from "./pages/Aboutus";
import Career from "./pages/Career";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import ServicePage from "./pages/Services";
import Sector from "./pages/Sector";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/sector" element={<Sector />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
