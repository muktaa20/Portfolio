// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl w-full">
        <div className="bg-white rounded-2xl px-8 py-4 md:px-16 md:py-6 shadow-2xl border border-slate-600">
          <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold text-cyan-400 mb-8 tracking-wide text-center">
            Contact Me
          </h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 border border-gray-300 rounded"
              required
            />
            <textarea
              placeholder="Your Message"
              className="p-2 border border-gray-300 rounded"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-cyan-500 text-white py-2 rounded hover:bg-cyan-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
