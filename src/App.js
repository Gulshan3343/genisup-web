

import './App.css';
import Home from '../src/pages/homepage'
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contactus from './pages/Contactus';
import Blog from './pages/blog';
import Aboutus from './pages/Aboutus';




function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contactus" element={<Contactus/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/aboutus" element={<Aboutus/>}/>
   </Routes>
    </BrowserRouter>
  );
}

export default App;