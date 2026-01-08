import React from 'react';

const Projects = () => {
  const myProjects = [
    {
      id: 1,
      title: "Abdullo Weather",
      description: "weather app",
      link: "https://abdulloweatherapp.vercel.app",
      github: "https://github.com/abdulloCode/Abdulloweatherapp",
      tech: ["React", "API"],
      icon: "🌤️",
      color: "from-cyan-500/20 to-blue-600/20"
    }
  ];

  return (
    <section className="py-12 px-4 max-w-5xl mx-auto bg-[#020617] border rounded-xl md:rounded-2xl">
      <div className="mb-10 text-left border-l-2 border-cyan-500 pl-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Loyihalarim
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {myProjects.map((project) => (
          <div 
            key={project.id} 
            className="group relative bg-slate-900/40 border border-slate-800 p-5 rounded-2xl transition-all duration-300 hover:border-cyan-500/40"
          >
            {/* Tepasi: Ikonka va Sarlavha */}
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-xl border border-white/5`}>
                {project.icon}
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
            </div>

            
            <p className="text-slate-400 text-sm leading-snug mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5 rounded-md">
              {project.tech.map((t, i) => (
                <span key={i} className="text-[10px] font-medium px-2 py-0.5 bg-slate-800 text-slate-300 rounded-md border border-slate-700">
                  {t}
                </span>
              ))}
            </div>

           
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="text-xs font-bold text-cyan-500 hover:text-cyan-400 transition-colors"
              >
                loyihani korish
              </a>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer"
                className="text-xs font-bold text-slate-500 hover:text-white transition-colors"
              >
              kodlari git hub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;