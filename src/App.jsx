import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-20 ">
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/services" element={<h1>Services Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>


        <Banner />
        <About />
        {/* <Skills /> */}
        <Projects />
        <Footer />
      </div>
    </Router>
  );
};

export default App;


