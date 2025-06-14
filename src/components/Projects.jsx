import React from "react";
import ProjectCard from "./ProjectCard";
import todoDemoImage from "../assets/todo-demo.png";
import healthDemoImage from "../assets/healthconnect-demo.png";
import keyboardDemoImage from "../assets/keyboard-demo.png";
import nestedDemoImage from "../assets/nested-demo.png";

const Projects = () => {
  const projectData = [
    {
      title: "Todo List App ",
      description:
        "A sleek and responsive task manager built with React and Redux. Add, delete, complete, and clear todos with light/dark mode support",
      image: todoDemoImage,
      tech: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      ],
      codeLink: "https://github.com/muktaa20/ReactTodoApp",
      liveLink: "https://reacttodolistp.netlify.app/",
    },
    {
      title: "Health Connect App",
      description:
        "Health Connect is a modern healthcare platform that simplifies patient management and health tracking. Users can sign up, verify their email, and access personalized health services, making it easier to stay informed and connected with their wellness journey.",
      image: healthDemoImage,
      tech: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      ],
      codeLink: "https://github.com/muktaa20/Health-Connect",
      liveLink: "https://healthconnectapp1.netlify.app/",
    },
    {
      title: "nestedDemoImage",
      description:
        "Nested Comment App is a dynamic comment system that supports threaded replies, allowing users to post, reply, and interact in a structured conversation format. Built with React, it mimics real-world comment sections with smooth UI and recursive rendering.",
      image: nestedDemoImage,
      tech: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      ],
      codeLink: "https://github.com/muktaa20/NestedCommentApp",
      liveLink: "https://nestedcommentapp.netlify.app/",
    },
    {
      title: "Qwerty keyboard",
      description:
        "QWERTY Keyboard Simulator is an interactive web-based application that visually highlights key presses on a virtual keyboard. Built with HTML, CSS, and JavaScript, it helps users learn and practice typing by mimicking the real-time behavior of a physical QWERTY keyboard.",
      image: keyboardDemoImage,
      tech: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      ],
      codeLink: "https://github.com/muktaa20/keyboard",
      liveLink: "https://qwertykeyboard.netlify.app/",
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#0d1117] text-white">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-400">
        Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {projectData.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
