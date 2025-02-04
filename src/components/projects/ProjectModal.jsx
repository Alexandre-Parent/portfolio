// src/components/projects/ProjectModal.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden grid md:grid-cols-2 shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Section */}
        <div className="relative h-[500px] overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <h3 className="text-2xl font-bold">{project.title}</h3>
          </div>
        </div>

        {/* Details Section */}
        <div className="p-6 flex flex-col justify-between">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-black transition-colors"
          >
            ×
          </button>

          {/* Project Description */}
          <div>
            <p className="text-gray-700 mb-6">{project.description}</p>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex space-x-4">
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-[#b0003a] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                <span>GitHub</span>
              </a>
            )}
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 border border-[#b0003a] text-[#b0003a] px-4 py-2 rounded-lg hover:bg-[#b0003a] hover:text-white transition-colors"
              >
                <span>Voir le site</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}