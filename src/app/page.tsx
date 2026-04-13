"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
// Mudança Crítica: Usando a grafia que o Turbopack/Next 16 exige
import { BarChart3, GitHub, LinkedIn, MessageCircle } from "lucide-react";

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="min-h-screen relative flex flex-col items-center selection:bg-white selection:text-black">
      {/* Background e Header... (mantenha como está) */}

      {/* Grid de Projetos... (mantenha como está) */}

      {/* Footer Ajustado */}
      <footer className="relative w-full max-w-6xl px-6 py-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <p className="text-sm font-medium text-white/70 tracking-wide">
            © 2026 João Pedro Scalioni — Elevva Marketing
          </p>
          <p className="text-xs text-gray-500 tracking-wider uppercase">
            Varginha, MG — Performance & Estratégia
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/JoaoPedroScalioni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transform hover:scale-110 transition-all duration-300"
          >
            {/* Note o nome do componente aqui também */}
            <GitHub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-pedro-scalioni-de-souza-65b1212a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transform hover:scale-110 transition-all duration-300"
          >
            {/* Note o nome do componente aqui também */}
            <LinkedIn size={22} />
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