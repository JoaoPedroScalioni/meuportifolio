"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { BarChart3, ArrowDown } from "lucide-react";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen relative flex flex-col items-center selection:bg-white selection:text-black">
      
      {/* Header Section (Compact Hero) */}
      <header className="relative w-full max-w-6xl px-6 pt-16 pb-12 md:pt-24 md:pb-16 flex flex-col items-start gap-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" } as const}
          className="space-y-4"
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Meus Trabalhos
            </h1>
            <p className="text-sm md:text-base font-medium tracking-[0.4em] uppercase text-white/40">
              João Pedro Scalioni
            </p>
          </div>
          
          <p className="max-w-xl text-base md:text-lg text-gray-500 font-light leading-relaxed">
            Desenvolvedor Web e Estrategista de Performance. <br className="hidden md:block" />
            Construindo interfaces diretas e sistemas de alta conversão.
          </p>
        </motion.div>
      </header>

      {/* Showcase Grid Section */}
      <section id="work" className="relative w-full max-w-6xl px-6 pb-40">
        {/* Subtle Divider */}
        <div className="w-full h-[1px] bg-white/[0.05] mb-16" />

        {/* Agency Grid (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full max-w-6xl px-6 py-20 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-12 text-[10px] font-bold tracking-[0.5em] uppercase text-white/20">
        <div className="flex flex-col items-center md:items-start gap-3">
          <p>© 2026 João Pedro Scalioni</p>
          <p className="text-white/5 font-medium tracking-normal normal-case">Varginha, MG</p>
        </div>
        <div className="flex items-center gap-16">
          <a href="#" className="hover:text-white transition-colors duration-500">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors duration-500">GitHub</a>
          <a href="#" className="hover:text-white transition-colors duration-500 font-black text-white/40">WhatsApp</a>
        </div>
      </footer>
    </main>
  );
}
