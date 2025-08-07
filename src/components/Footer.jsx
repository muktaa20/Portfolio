// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo or Name */}
        <div className="text-xl font-semibold">Mukta Suryavanshi</div>

        {/* Navigation Links */}
        <nav className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </nav>

        {/* Social Links */}
        <div className="flex gap-10 text-3xl">
          <a
            href="https://github.com/muktaa20"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mukta-s-632760335/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:muktasuryavanshi48@gmail.com"
            className="hover:text-blue-400"
          >
            <FaEnvelope />
          </a>
          <a href="tel:+9302945768" className="hover:text-blue-400">
            {" "}
            <FaPhoneAlt />{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
