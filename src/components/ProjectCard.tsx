"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

const slideUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      {...slideUp}
      className="group relative flex flex-col items-start gap-4 p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300"
    >
      <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest text-white/40 border border-white/10 bg-white/[0.02]">
        {project.category}
      </span>
      
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm text-white/60 leading-relaxed font-light line-clamp-3">
          {project.description}
        </p>
      </div>

      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-between w-full px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 active:scale-95 transition-all duration-200"
        >
          <span>Ver Site</span>
          <ExternalLink size={16} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      ) : (
        <div className="mt-4 inline-flex items-center justify-center w-full px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/40 font-semibold text-sm cursor-default">
          <span>{project.isStrategy ? "Estratégia & Performance" : "Em Breve"}</span>
        </div>
      )}
    </motion.div>
  );
}
