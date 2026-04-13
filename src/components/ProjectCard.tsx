"use client";

import { motion } from "framer-motion";
import { ExternalLink, Info } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" } as const}
      className="group relative flex flex-col bg-white/[0.02] border border-white/[0.05] rounded-[2.5rem] overflow-hidden border-glow hover:bg-white/[0.04] transition-all duration-500 shadow-2xl text-center"
    >
      {/* Image Container with Zoom */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/40">
        <motion.img
          src={project.image}
          alt={project.title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] } as const}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        />
        
        {/* Category Overlay */}
        <div className="absolute top-6 inset-x-0 mx-auto w-fit z-20">
          <span className="px-4 py-2 rounded-full border border-white/[0.08] bg-black/60 backdrop-blur-md text-[9px] font-bold uppercase tracking-[0.3em] text-white/40 group-hover:text-white/70 transition-colors">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Area - Centralized */}
      <div className="p-8 md:p-10 flex flex-col items-center justify-between flex-1 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white/90 leading-tight px-2">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 font-light leading-relaxed group-hover:text-gray-400 transition-colors px-2">
            {project.description}
          </p>
        </div>

        <div className="w-full pt-2">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full h-[48px] px-8 rounded-full bg-white text-black font-extrabold text-[10px] uppercase tracking-widest hover:bg-gray-100 active:scale-[0.98] transition-all duration-300 shadow-xl"
            >
              <span>Ver Site</span>
              <ExternalLink size={14} className="opacity-50" />
            </a>
          ) : (
            <button
              onClick={() => onSelect(project)}
              className="flex items-center justify-center gap-2 w-full h-[48px] px-8 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/60 font-bold text-[10px] uppercase tracking-widest hover:bg-white/[0.1] hover:text-white transition-all duration-300 active:scale-[0.98]"
            >
              <span>Saiba Mais</span>
              <Info size={14} className="opacity-50" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
