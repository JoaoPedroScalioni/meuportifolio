"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { BarChart3, Github, Linkedin, MessageCircle } from "lucide-react";

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
      <header className="relative w-full max-w-6xl px-6 pt-16 pb-12 md:pt-32 md:pb-24 flex flex-col items-center text-center gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" } as const}
          className="space-y-4"
        >
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Meus Trabalhos
            </h1>
            <p className="text-[10px] md:text-sm font-bold tracking-[0.5em] uppercase text-white/30">
              João Pedro Scalioni
            </p>
          </div>
          
          <p className="max-w-xl text-base md:text-lg text-gray-500 font-light leading-relaxed mx-auto px-4">
            Desenvolvedor Web e Estrategista de Performance. <br className="hidden md:block" />
            Interfaces de alto impacto fundamentadas em conversão.
          </p>
        </motion.div>
      </header>

      {/* Grid Showcase Section */}
      <section id="work" className="relative w-full max-w-6xl px-6 pb-40">
        <div className="w-full h-[1px] bg-white/[0.05] mb-20" />

        {/* Adaptive Grid (1 Mobile -> 2 Tablet -> 3 Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </section>

      {/* Modal - Renderized at Page Level */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Footer */}
      <footer className="relative w-full max-w-6xl px-6 py-16 md:py-24 border-t border-white/10 flex flex-col md:flex-row items-center justify-center md:items-start md:justify-between gap-12 text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400">
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <p className="text-white/80 tracking-[0.2em]">© 2026 João Pedro Scalioni — Elevva Marketing</p>
          <p className="tracking-normal normal-case opacity-60">Varginha, MG — Performance & Estratégia</p>
        </div>
        
        {/* Social Links Row */}
        <div className="flex items-center gap-8">
          <a 
            href="https://github.com/JoaoPedroScalioni" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/jo%C3%A3o-pedro-scalioni-de-souza-65b1212a6/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://wa.me/5535997350506" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </footer>
    </main>
  );
}
