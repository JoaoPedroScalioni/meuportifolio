"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
// Corrigido: Importando com o nome padrão que o Lucide costuma aceitar
import { BarChart3, Github, Linkedin, MessageCircle } from "lucide-react";

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="min-h-screen relative flex flex-col items-center selection:bg-white selection:text-black">

      {/* Mesh Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-[#080808] overflow-hidden">
        <div className="absolute top-[10%] left-[20%] w-[40rem] h-[40rem] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[35rem] h-[35rem] bg-purple-600/5 blur-[120px] rounded-full" />
      </div>

      {/* Header Section (Total Focus) */}
      <header className="relative w-full max-w-6xl px-6 pt-20 pb-16 md:pt-32 md:pb-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" } as const}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-tight">
              Meus Trabalhos
            </h1>
            <p className="text-[10px] md:text-xs font-bold tracking-[0.6em] uppercase text-white/40">
              João Pedro Scalioni
            </p>
          </div>

          <p className="max-w-2xl text-base md:text-xl text-gray-400 font-light leading-relaxed mx-auto px-4">
            Desenvolvedor Web e Estrategista de Performance. <br className="hidden md:block" />
            Interfaces de alto impacto fundamentadas em conversão.
          </p>
        </motion.div>
      </header>

      {/* Grid Showcase Section */}
      <section id="work" className="relative w-full max-w-6xl px-6 pb-40">
        {/* Grid de 3 colunas no desktop, 2 em tablet, 1 no mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </section>

      {/* Modal - Renderizado fora da grid para evitar bugs de z-index */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Footer Profissional */}
      <footer className="relative w-full max-w-6xl px-6 py-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <p className="text-sm font-medium text-white/70 tracking-wide">
            © 2026 João Pedro Scalioni — Elevva Marketing
          </p>
          <p className="text-xs text-gray-500 tracking-wider uppercase">
            Varginha, MG — Performance & Estratégia
          </p>
        </div>

        {/* Social Links Row */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/JoaoPedroScalioni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transform hover:scale-110 transition-all duration-300"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-pedro-scalioni-de-souza-65b1212a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transform hover:scale-110 transition-all duration-300"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://wa.me/5535997350506"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-400 transform hover:scale-110 transition-all duration-300"
          >
            <MessageCircle size={22} />
          </a>
        </div>
      </footer>
    </main>
  );
}