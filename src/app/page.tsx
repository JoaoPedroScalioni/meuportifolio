"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { Target, BarChart3, ShieldCheck, ArrowDown } from "lucide-react";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen relative flex flex-col items-center selection:bg-white selection:text-black">
      
      {/* Hero Section */}
      <section className="relative w-full max-w-6xl px-6 pt-32 pb-24 md:pt-64 md:pb-48 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" } as const}
          className="flex flex-col items-center gap-10"
        >
          <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-white/[0.05] bg-white/[0.02] backdrop-blur-3xl shadow-2xl">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.6)] animate-pulse" />
            <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/40">Disponível para projetos Premium</span>
          </div>
          
          <h1 className="text-8xl md:text-[12rem] font-bold tracking-tighter leading-[0.75] text-white selection:bg-purple-500">
            João Pedro
          </h1>
          
          <p className="max-w-xl text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
            Desenvolvedor Web e Estrategista de Performance. <br className="hidden md:block" />
            Especialista em construir interfaces que convertem.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="mt-24 flex flex-col items-center gap-6"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-white/20 to-transparent" />
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} className="text-white/20" />
          </motion.div>
        </motion.div>
      </section>

      {/* Showcase Grid Section */}
      <section id="work" className="relative w-full max-w-6xl px-6 pb-60 space-y-32">
        <div className="flex items-end justify-between border-b border-white/[0.05] pb-12">
          <div className="space-y-4">
            <h2 className="text-white/20 text-xs font-bold uppercase tracking-[0.5em]">Selected Showcase</h2>
            <p className="text-4xl font-bold tracking-tight text-white/90">Trabalhos Realizados</p>
          </div>
          <BarChart3 size={24} className="text-white/10" />
        </div>

        {/* Agency Grid (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full max-w-6xl px-6 pt-24 pb-20 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-16 text-[10px] font-bold tracking-[0.5em] uppercase text-white/20">
        <div className="flex flex-col items-center md:items-start gap-4">
          <p>© 2026 Elevva Marketing</p>
          <p className="text-white/5 font-medium tracking-normal normal-case">Performance & Design — Varginha, MG</p>
        </div>
        <div className="flex items-center gap-20">
          <a href="#" className="hover:text-white transition-colors duration-500">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors duration-500">GitHub</a>
          <a href="#" className="hover:text-white transition-colors duration-500 font-extrabold text-white/40">WhatsApp</a>
        </div>
      </footer>
    </main>
  );
}
