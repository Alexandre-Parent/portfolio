"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/common/ProjectCard';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing professional work and skills',
      image: 'https://via.placeholder.com/800x600.png?text=Portfolio+Website',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      githubLink: 'https://github.com/Alexandre-Parent/portfolio',
      liveLink: 'https://alexandreparent.com'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      image: 'https://via.placeholder.com/800x600.png?text=E-Commerce+Platform',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubLink: 'https://github.com/Alexandre-Parent/ecommerce-project',
      liveLink: 'https://ecommerce-demo.com'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task tracking and project management tool',
      image: 'https://via.placeholder.com/800x600.png?text=Task+Management+App',
      technologies: ['Vue.js', 'Firebase', 'Vuetify'],
      githubLink: 'https://github.com/Alexandre-Parent/task-manager',
      liveLink: 'https://task-manager-demo.com'
    }
  ];

  const closeModal = () => setSelectedProject(null);

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 
          id="projects-section-title" 
          className="text-xl font-bold text-[#b0003a] mb-4 uppercase tracking-widest"
        >
          Mes Projets
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div 
                className="bg-white p-8 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <button 
                    onClick={closeModal}
                    className="text-2xl hover:text-primary-600"
                  >
                    ×
                  </button>
                </div>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-auto object-cover rounded-lg"
                />
                <p className="mt-4">{selectedProject.description}</p>
                <ul className="list-none mt-4">
                  {selectedProject.technologies.map((tech) => (
                    <li key={tech} className="inline-block mr-2">{tech}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <a 
                    href={selectedProject.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-800"
                  >
                    GitHub
                  </a>
                  <a 
                    href={selectedProject.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-800 ml-2"
                  >
                    Live
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}