"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ProjectItem from '@/components/projects/ProjectItem';
import ProjectModal from '@/components/projects/ProjectModal';
import projects from '@/data/projects';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => setSelectedProject(null);

  return (
    <section className="py-24">
      <div className="container mx-auto">
      <h2 className="text-xl md:text-center font-bold text-[#b0003a] mb-8 uppercase tracking-widest text-left">
          Portfolio
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold leading-tight text-black md:text-center mb-16 text-left">
          Quelques projets sur lesquels j'ai travaillé
        </h3>
        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectItem 
              key={project.id}
              project={project}
              onProjectSelect={setSelectedProject}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link 
            href="https://github.com/Alexandre-Parent" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#b0003a] text-white px-6 py-3 rounded-lg  flex items-center gap-3 text-lg"
          >
          
            Et d'autres sur mon Github
          </Link>
        </div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal 
              project={selectedProject} 
              onClose={closeModal}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}