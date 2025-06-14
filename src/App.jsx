// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css'; // ✅ correct relative path
import Banner from './components/Banner';
import About from './components/about';
import Skills from './components/Skills';
import Projects from './components/Projects';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-20 px-4">
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/services" element={<h1>Services Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>
      </div>
      <Banner />
      <About />
      {/* <Skills /> */}
      <Projects />
    </Router>
  );
};

export default App;
