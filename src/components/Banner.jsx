// src/components/Banner.jsx
import React from "react";
import { motion } from "framer-motion";
// import devImage from '../assets/developer-banner.jpg'; // 👉 Replace with your own image
const Banner = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4 leading-tight">
            Hi, I'm{" "}
            <span className=" bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Mukta Suryavanshi
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-6">
            A passionate{" "}
            <span className="text-cyan-400 font-semibold">
              Front-End Developer
            </span>{" "}
            crafting modern and responsive web apps.
          </p>
          <a
            href="#projects"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            Resume
          </a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center"
        >
          <div className="relative">
            <img
              src="data:image/jpeg;base64,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"
              alt="Developer"
              className="max-w-full h-auto rounded-2xl shadow-2xl ring-4 ring-cyan-400/20 hover:ring-cyan-400/40 transition-all duration-300"
            />
            {/* Decorative gradient backdrop */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-3xl blur-xl -z-10"></div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-blue-900/10 pointer-events-none"></div>
    </section>
  );
};

export default Banner;
