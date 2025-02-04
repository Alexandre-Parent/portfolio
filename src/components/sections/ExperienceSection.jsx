import React from 'react';
import { experiences } from '@/data/experience';

const JobDetails = ({ logo, title, subtitle, description }) => (
  <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4 text-center md:text-left">
    {logo && (
      <img 
        src={logo} 
        alt={title} 
        className="w-16 h-16 object-contain rounded-lg mb-4 md:mb-0"
      />
    )}
    <div>
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h3>
      <h4 className="text-lg text-[#b0003a] font-bold mb-2">{subtitle}</h4>
      <p className="text-black-700">{description}</p>
    </div>
  </div>
);

const ImageContent = ({ src, alt }) => (
  <img 
    src={src} 
    alt={alt} 
    className="w-full h-auto object-cover rounded-lg"
  />
);

export default function ExperienceSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
      <h2 className="text-xl md:text-center font-bold text-[#b0003a] mb-8 uppercase tracking-widest text-left">
         Timeline
        </h2>
        
        <div className="mb-8"></div>
        
        <h3 className="text-2xl md:text-3xl font-bold leading-tight text-black md:text-center mb-16 text-left">

          Mon Parcours<br />
          <span className="text-[#b0003a]">Technique et Créatif</span>
        </h3>
        
        <div className="relative w-full max-w-6xl mx-auto experience-timeline">
      
          <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-black/30 transform -translate-x-1/2 hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`flex items-center w-full mb-16 relative
                          ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
            >
         
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className={`w-[120px] h-[120px] 
                                flex items-center justify-center 
                                text-sm font-bold 
                                rounded-lg 
                                shadow-md
                                border border-gray-200
                                transition-all duration-300
                                ${index === 0 
                                  ? 'bg-[#b0003a] text-white hover:bg-primary-700' 
                                  : 'bg-white text-black hover:bg-[#b0003a] hover:text-white'}
                                group`}>
                  {exp.period}
                </div>
              </div>
              
            
              {exp.leftContent && (
                <div className={`w-2/5 p-6 
                                ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                  {exp.leftContent.type === 'job' ? (
                    <JobDetails 
                      logo={exp.leftContent.logo}
                      title={exp.leftContent.title}
                      subtitle={exp.leftContent.subtitle}
                      description={exp.leftContent.description}
                    />
                  ) : exp.leftContent.type === 'image' ? (
                    <ImageContent 
                      src={exp.leftContent.src}
                      alt={exp.leftContent.alt}
                    />
                  ) : null}
                </div>
              )}
              
      
              {exp.rightContent && (
                <div className={`w-2/5 p-6 
                                ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                  {exp.rightContent.type === 'job' ? (
                    <JobDetails 
                      logo={exp.rightContent.logo}
                      title={exp.rightContent.title}
                      subtitle={exp.rightContent.subtitle}
                      description={exp.rightContent.description}
                    />
                  ) : exp.rightContent.type === 'image' ? (
                    <ImageContent 
                      src={exp.rightContent.src}
                      alt={exp.rightContent.alt}
                    />
                  ) : null}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}