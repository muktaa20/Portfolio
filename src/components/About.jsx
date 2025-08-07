import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl w-full">
        <div className="bg-white rounded-2xl px-8 py-1 md:px-16 md:py-2 shadow-2xl border border-slate-600">
          {/* Header */}
          <div className="text-center mb-2">
            <h2 className="text-2xl md:text-2xl lg:text-6xl font-bold text-cyan-400 mb-8 tracking-wide">
              About Me
            </h2>
          </div>

          {/* Main Content */}
          <div className="text-center">
            <p className="text-gray-800 font-mono text-lg md:text-xl lg:text-xl leading-relaxed  max-w-5xl mx-auto">
              As a skilled{" "}
              <span className="text-cyan-400 font-bold">
                Frontend Developer
              </span>
              , I am passionate about software development and committed to
              continuous learning. I am seeking a challenging and rewarding
              career that values{" "}
              <span className="text-cyan-400 font-semibold">innovation</span>{" "}
              and <span className="text-cyan-400 font-semibold">teamwork</span>{" "}
              and allows me to contribute my knowledge and skills to the
              organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
