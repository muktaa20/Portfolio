import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import muktaImage from "../assets/mukta.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About me", path: "/aboutme" },
    { name: "Skills", path: "/skills" },
    { name: "Project", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-800 to-slate-900 shadow-lg fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="w-9 h-10 rounded-b-full animate-spin-slow"
          />
          <span className="text-2xl font-bold text-cyan-400 tracking-wide hover:text-cyan-300 transition duration-300">
            Mukta
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-slate-200 hover:text-cyan-400 transition duration-300 font-medium group ${
                location.pathname === link.path ? "text-cyan-400" : ""
              }`}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-200 hover:text-cyan-400 transition-transform duration-300"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-slate-800 px-4 pb-4 pt-2 space-y-3 shadow-lg border-t border-slate-700">
          {/* Mobile Profile Section */}
          <div className="flex items-center space-x-3">
            <img
              src={muktaImage}
              alt="Mukta"
              className="w-10 h-10 rounded-full"
            />
            <p className="text-white font-semibold">I'm Mukta</p>
          </div>

          {/* Mobile Nav Links */}
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-slate-200 hover:text-cyan-400 font-medium transition-all duration-300 transform translate-y-0 opacity-100`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About me', path: '/aboutme' },
//     { name: 'Skills', path: '/skills' },
//     { name: 'Project', path: '/project' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   return (
//     <nav className="bg-gradient-to-r from-slate-800 to-slate-900 shadow-lg fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold text-cyan-400 tracking-wide hover:text-cyan-300 transition duration-300">
//           Mukta
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               className={`relative text-slate-200 hover:text-cyan-400 transition duration-300 font-medium group ${
//                 location.pathname === link.path ? 'text-cyan-400' : ''
//               }`}
//             >
//               {link.name}
//               {/* Hover underline animation */}
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Icon */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-slate-200 hover:text-cyan-400 transition-transform duration-300"
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu with animation */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//           isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
//         }`}
//       >
//         <div className="bg-slate-800 px-4 pb-4 pt-2 space-y-3 shadow-lg border-t border-slate-700">
//           {navLinks.map((link, index) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               onClick={() => setIsOpen(false)}
//               className={`block text-slate-200 hover:text-cyan-400 font-medium transition-all duration-300 transform translate-y-0 opacity-100`}
//               style={{ transitionDelay: `${index * 75}ms` }}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
