import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    {
      name: 'HTML',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 hover:bg-orange-100',
      borderColor: 'hover:border-orange-300'
    },
    {
      name: 'CSS',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 hover:bg-blue-100',
      borderColor: 'hover:border-blue-300'
    },
    {
      name: 'JavaScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50 hover:bg-yellow-100',
      borderColor: 'hover:border-yellow-300'
    },
    {
      name: 'React',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-50 hover:bg-cyan-100',
      borderColor: 'hover:border-cyan-300'
    },
    {
      name: 'Redux',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 hover:bg-purple-100',
      borderColor: 'hover:border-purple-300'
    },
    {
      name: 'Tailwind CSS',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      color: 'text-teal-500',
      bgColor: 'bg-teal-50 hover:bg-teal-100',
      borderColor: 'hover:border-teal-300'
    },
    {
      name: 'GitHub',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      color: 'text-gray-800',
      bgColor: 'bg-gray-100 hover:bg-gray-200',
      borderColor: 'hover:border-gray-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-blue-400 mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Skills
          </h1>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`bg-white rounded-3xl p-8 shadow-lg border-2 border-transparent transition-all duration-500 cursor-pointer transform ${
                skill.bgColor
              } ${skill.borderColor} ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              } ${
                hoveredCard === index 
                  ? 'scale-110 rotate-2 shadow-2xl' 
                  : 'hover:scale-105 hover:-translate-y-2'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                transformOrigin: 'center'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="text-center mb-6">
                <div className={`flex justify-center items-center mb-4 transform transition-all duration-300 ${
                  hoveredCard === index ? 'scale-125 rotate-12' : ''
                }`}>
                  <img 
                    src={skill.image} 
                    alt={skill.name}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain filter drop-shadow-lg"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/80x80/6366f1/ffffff?text=${skill.name.charAt(0)}`;
                    }}
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className={`text-xl md:text-2xl font-bold ${skill.color} transition-all duration-300 ${
                  hoveredCard === index ? 'text-2xl md:text-3xl' : ''
                }`}>
                  {skill.name}
                </h3>
              </div>

              {/* Background animation */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                <div className={`absolute top-4 right-4 w-2 h-2 ${skill.color.replace('text-', 'bg-')} rounded-full opacity-20 transition-all duration-500 ${
                  hoveredCard === index ? 'scale-150 opacity-40' : ''
                }`}></div>
                <div className={`absolute bottom-4 left-4 w-1 h-1 ${skill.color.replace('text-', 'bg-')} rounded-full opacity-30 transition-all duration-700 ${
                  hoveredCard === index ? 'scale-200 opacity-60' : ''
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorations */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-25 animate-ping"></div>
          <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-yellow-400 rounded-full opacity-15 animate-bounce" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="mt-20 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
