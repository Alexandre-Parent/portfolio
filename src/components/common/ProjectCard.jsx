"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ 
  title = '', 
  description = '', 
  image = '', 
  technologies = [], 
  githubLink = '', 
  liveLink = '' 
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Project Image */}
      <div className="relative w-full aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <motion.div 
          className={`absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <h3 className="text-2xl font-bold mb-2 text-center">{title}</h3>
          <p className="text-sm text-center mb-4">{description}</p>
          
          <div className="flex space-x-4">
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-500 transition-colors"
              >
                <FaGithub className="text-2xl" />
              </a>
            )}
            {liveLink && (
              <a 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-500 transition-colors"
              >
                <FaExternalLinkAlt className="text-2xl" />
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Technologies */}
      {technologies.length > 0 && (
        <div className="p-4 bg-white">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-primary-50 text-primary-800 text-xs rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}