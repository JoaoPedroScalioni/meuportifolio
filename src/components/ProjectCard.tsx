"use client";

import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, BarChart3 } from "lucide-react";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const isStrategy = project.isStrategy;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" } as const}
      className="group relative flex flex-col bg-white/[0.02] border border-white/[0.05] rounded-[2rem] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500 shadow-2xl"
    >
      {/* Image / Graphic Display */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/40">
        {project.image ? (
          <motion.img
            src={project.image}
            alt={project.title}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] } as const}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/[0.02] to-white/[0.05]">
            <div className="relative">
              <BarChart3 size={80} className="text-white/[0.05] stroke-1" />
              <div className="absolute inset-0 flex items-center justify-center">
                <TrendingUp size={48} className="text-white/40 animate-pulse" />
              </div>
            </div>
          </div>
        )}
        
        {/* Overlay Badge */}
        <div className="absolute top-6 left-6 z-20">
          <span className="px-4 py-2 rounded-full glass text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 backdrop-blur-md">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-10 flex flex-col justify-between flex-1 space-y-8">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold tracking-tight text-white/90 leading-tight">
            {project.title}
          </h3>
          <p className="text-base text-gray-500 font-light leading-relaxed line-clamp-3 group-hover:text-gray-400 transition-colors">
            {project.description}
          </p>
        </div>

        <div className="pt-4">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-8 py-4 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-widest hover:bg-gray-100 active:scale-[0.98] transition-all duration-300"
            >
              <span>Ver Site</span>
              <ExternalLink size={14} className="opacity-50" />
            </a>
          ) : (
            <div className="flex items-center justify-center w-full px-8 py-4 rounded-full bg-white/[0.05] border border-white/[0.05] text-white/30 font-bold text-xs uppercase tracking-widest cursor-default">
              <span>{isStrategy ? "Estratégia & Performance" : "Em Breve"}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
