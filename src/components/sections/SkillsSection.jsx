import React from 'react';
import { skillCategories } from '@/data/skills';

export default function SkillsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
      <h2 className="text-xl md:text-center font-bold text-[#b0003a] mb-8 uppercase tracking-widest text-left">
          Compétences
        </h2>
        
        <h3 className="text-2xl md:text-3xl font-bold leading-tight text-black md:text-center mb-16 text-left">
          Mes Outils &<br />
          <span className="text-[#b0003a]">
          Environnements Techniques </span>
        </h3>

        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-12">
            <h4 className="text-xl font-bold text-gray-800 text-center mb-6">
              {category.category}
            </h4>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {category.skills.map((skill, skillIndex) => {
                const SkillIcon = skill.icon;
                return (
                  <div 
                    key={skillIndex}
                    className="flex flex-col items-center justify-center 
                               p-3 
                               bg-white 
                               border border-gray-200 
                               rounded-lg 
                               shadow-sm 
                               hover:shadow-md 
                               transition-all 
                               duration-300 
                               group"
                  >
                    <div className="w-10 h-10 mb-2 flex items-center justify-center">
                      <SkillIcon 
                        className="w-full h-full transition-all duration-300 
                                   group-hover:scale-110 
                                   group-hover:text-opacity-100 
                                   text-gray-700 text-opacity-70"
                        style={{ color: skill.color }}
                      />
                    </div>
                    <h5 className="text-xs font-bold text-gray-800 text-center">
                      {skill.name}
                    </h5>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}