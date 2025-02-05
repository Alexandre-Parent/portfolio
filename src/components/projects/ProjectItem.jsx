import React from 'react';

export default function ProjectItem({ project, onProjectSelect }) {
  return (
    <div 
      className="group relative w-full border-b border-gray-200 pb-4 pt-2 flex items-center justify-between"
    >
      <div className='w-full'  onClick={() => onProjectSelect(project)}>
        <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-8 mb-2">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gray-400 text-left mb-2 md:mb-8  block">
              {project.category || 'DEVELOPMENT'}
            </span>
            <h4 className="text-3xl md:text-4xl font-bold text-gray-900">
              {project.title}
            </h4>
            {project.development && (
              <p className="text-sm text-black-500 mt-1">
                {project.development}
              </p>
            )}
          </div>
        </div>
        
        <div className="flex w-full items-center justify-between mt-4 md:hidden" > 
          <div 
            className="relative max-w-[70%] w-[250px] h-[188px] overflow-hidden rounded-lg 
                       transform origin-center transition-all duration-300
                       group-hover:rotate-6 group-hover:scale-110 
                       shadow-lg"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <button 
            onClick={() => onProjectSelect(project)}
            className="w-16 h-16 border border-opacity-30 border-black text-black 
                       rounded-full flex items-center justify-center 
                       text-2xl transition-all duration-300
                       hover:bg-[#b0003a] hover:text-white hover:border-[#b0003a]"
          >
            +
          </button>
        </div>
      </div>
      
      <div className="hidden md:flex items-center space-x-12 relative">
        <div 
          className="relative w-[250px] h-[188px] overflow-hidden rounded-lg opacity-0 
                     group-hover:opacity-100 transition-all duration-500
                     transform origin-center
                     group-hover:rotate-6 group-hover:scale-110 
                     shadow-lg"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        
        <button 
          onClick={() => onProjectSelect(project)}
          className="w-20 h-20 border border-opacity-30 border-black text-black 
                     rounded-full flex items-center justify-center 
                     text-3xl transition-all duration-300
                     hover:bg-[#b0003a] hover:text-white hover:border-[#b0003a]"
        >
          +
        </button>
      </div>
    </div>
  );
}