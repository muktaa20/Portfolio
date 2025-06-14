import React from 'react';

const ProjectCard = ({ image, title, description, tech, codeLink, liveLink }) => {
  return (
    <div className="bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364] rounded-2xl text-white p-5 w-full max-w-sm shadow-lg flex flex-col items-center">
      <img src={image} alt={title} className="w-full rounded-lg mb-4" />

      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-sm text-center">{description}</p>
      <p className="text-sm mt-2 italic">An individual project.</p>

      <div className="flex flex-wrap justify-center items-center gap-3 mt-4">
        {tech.map((icon, i) => (
          <img key={i} src={icon} alt="tech" className="w-8 h-8" />
        ))}
      </div>

      <div className="mt-5 flex gap-4">
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1f2937] hover:bg-[#374151] text-white px-4 py-2 rounded-md flex items-center gap-2 transition"
        >
          Code
        </a>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-4 py-2 rounded-md flex items-center gap-2 transition"
        >
          Live
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
