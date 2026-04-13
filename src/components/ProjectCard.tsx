"use client";

import { motion } from "framer-motion";
import { ExternalLink, Zap } from "lucide-react";
import { Project } from "@/data/projects";

const hoverSettings = {
  whileHover: { 
    y: -8, 
    transition: { duration: 0.3, ease: "easeOut" } as const 
  },
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      {...hoverSettings}
      className="group relative flex flex-col justify-between p-8 rounded-[2rem] bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/[0.2] transition-all duration-500 overflow-hidden shadow-2xl"
    >
      {/* Dynamic Shine Light */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-white/[0.03] blur-3xl rounded-full transition-opacity group-hover:opacity-100 opacity-0 pointer-events-none" />

      <div className="relative z-10 space-y-6">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-[0.2em] text-white/40 border border-white/5 bg-white/[0.02]">
            <Zap size={10} className="text-white/30" />
            {project.category}
          </span>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-white transition-colors leading-tight">
            {project.title}
          </h3>
          <p className="text-sm text-gray-400 font-light leading-relaxed line-clamp-3 transition-colors group-hover:text-gray-300">
            {project.description}
          </p>
        </div>
      </div>

      <div className="relative z-10 pt-10">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-8 py-4 rounded-full bg-white text-black font-extrabold text-sm tracking-wide hover:bg-gray-100 active:scale-[0.97] transition-all duration-300"
          >
            <span>Ver Site</span>
            <ExternalLink size={16} className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        ) : (
          <div className="flex items-center justify-center w-full px-8 py-4 rounded-full bg-white/[0.02] border border-white/5 text-white/20 font-bold text-sm tracking-wide cursor-default">
            <span>{project.isStrategy ? "Estratégia & Performance" : "Em Breve"}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
