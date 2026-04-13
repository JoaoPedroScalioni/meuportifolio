"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { BarChart3 } from "lucide-react";

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="min-h-screen relative flex flex-col items-center selection:bg-white selection:text-black">
      
      {/* Mesh Gradient Background Decorative Blobs */}
      <div className="fixed inset-0 -z-10 bg-[#080808] overflow-hidden">
        <div className="absolute top-[10%] left-[20%] w-[40rem] h-[40rem] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[35rem] h-[35rem] bg-purple-600/5 blur-[120px] rounded-full" />
      </div>

      {/* Header Section (Total Focus & Compact) */}
      <header className="relative w-full max-w-6xl px-6 pt-16 pb-12 md:pt-28 md:pb-20 flex flex-col items-center text-center gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" } as const}
          className="space-y-4"
        >
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Meus Trabalhos
            </h1>
            <p className="text-xs md:text-sm font-bold tracking-[0.5em] uppercase text-white/30">
              João Pedro Scalioni
            </p>
          </div>
          
          <p className="max-w-xl text-base md:text-lg text-gray-500 font-light leading-relaxed mx-auto">
            Desenvolvedor Web e Estrategista de Performance. <br className="hidden md:block" />
            Interfaces de alto impacto fundamentadas em conversão.
          </p>
        </motion.div>
      </header>

      {/* Grid Showcase Section */}
      <section id="work" className="relative w-full max-w-6xl px-6 pb-60">
        <div className="w-full h-[1px] bg-white/[0.05] mb-20" />

        {/* 3 Column Grid (Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </section>

      {/* Modal - Renderized at Page Level for Portal Effect */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Footer */}
      <footer className="relative w-full max-w-6xl px-6 py-20 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-12 text-[10px] font-bold tracking-[0.5em] uppercase text-white/10">
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <p>© 2026 João Pedro Scalioni — Elevva Marketing</p>
          <p className="tracking-normal normal-case opacity-50">Varginha, MG — Performance & Estratgia</p>
        </div>
        <div className="flex items-center gap-16">
          <a href="#" className="hover:text-white transition-colors duration-500">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors duration-500">GitHub</a>
          <a href="#" className="hover:text-white transition-colors duration-500 font-black text-white/20">WhatsApp</a>
        </div>
      </footer>
    </main>
  );
}
