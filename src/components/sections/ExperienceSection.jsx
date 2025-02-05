import React from 'react';
import { experiences } from '@/data/experience';

const JobDetails = ({ logo, title, subtitle, description }) => (
  <div className="flex flex-col md:flex-row items-start md:items-start space-x-0 md:space-x-4 text-left">
    {logo && (
      <img 
        src={logo} 
        alt={title} 
        className="w-16 h-16 object-contain rounded-lg mb-4 md:mb-0 self-start, mt-4 md:mt-0"
      />
    )}
    <div className="w-full">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-left">{title}</h3>
      <h4 className="text-lg text-[#b0003a] font-bold mb-2 text-left">{subtitle}</h4>
      <p className="text-black-700 text-left">{description}</p>
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
          Expériences
        </h2>
                
        <h3 className="text-2xl md:text-3xl font-bold leading-tight text-black md:text-center mb-16 text-left">
          Mon Parcours<br />
          <span className="text-[#b0003a]">Technique et Créatif</span>
        </h3>
        
        <div className="relative w-full max-w-6xl mx-auto experience-timeline">
          <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-black/30 transform -translate-x-1/2 hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center w-full mb-16 relative
                          ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 mb-2 md:mb-0">
                <div className={`
                  text-xl md:text-sm 
                  font-bold 
                  text-left
                  mb-2 md:mb-0
                  md:w-[120px] md:h-[120px] 
                  md:flex md:items-center md:justify-center 
                  md:rounded-lg 
                  md:shadow-md
                  md:border md:border-gray-200
                  md:transition-all md:duration-300
                  ${index === 0 
                    ? 'md:bg-[#b0003a] md:text-white md:hover:bg-primary-700' 
                    : 'md:bg-white md:text-black md:hover:bg-[#b0003a] md:hover:text-white'}
                  md:group`}>
                  {exp.period}
                </div>
              </div>
              
              {exp.leftContent && (
                <div className={`w-full md:w-2/5 p-6 pt-12
                 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
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
                <div className={`w-full md:w-2/5 p-6 
                  ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
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