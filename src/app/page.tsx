"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { MoveRight } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" } as const
};

const slideUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } as const
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-between selection:bg-white selection:text-black">
      {/* Background radial glow */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,#ffffff08_0%,transparent_50%)]" />

      {/* Hero Section */}
      <section className="relative w-full max-w-5xl px-6 pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-start gap-12">
        <motion.div {...fadeIn} className="flex flex-col gap-6">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
            João Pedro
          </h1>
          <motion.p {...slideUp} className="max-w-xl text-lg md:text-xl text-white/50 font-normal leading-relaxed">
            Desenvolvedor Web e Estrategista de Performance. <br/>
            Criando sistemas robustos e interfaces de alto impacto.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex items-center gap-2 text-white/30 text-xs font-bold uppercase tracking-widest group cursor-default"
        >
          <span>Role para ver os trabalhos</span>
          <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </section>

      {/* Projects Grid Section */}
      <section id="work" className="relative w-full max-w-5xl px-6 pb-40">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/20 text-sm font-bold uppercase tracking-[0.2em] mb-12"
        >
          Meus Trabalhos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Experience / Impact Section */}
      <section className="relative w-full max-w-5xl px-6 pb-20 mt-20">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-12 rounded-3xl bg-white/[0.02] border border-white/[0.05] flex flex-col md:flex-row gap-12 items-start"
        >
          <div className="flex-1">
            <h2 className="text-white/20 text-sm font-bold uppercase tracking-[0.2em] mb-6">Foco Regional & Performance</h2>
            <h3 className="text-3xl font-bold tracking-tight mb-6 leading-tight">
              Marketing Digital & Performance <br/>
              <span className="text-white/40">— Nova Construtiza (Varginha)</span>
            </h3>
            <p className="text-lg text-white/50 font-light leading-relaxed">
              Atuação estratégica focada no setor de materiais de construção, desenvolvendo campanhas de tráfego pago e presença digital regional. O objetivo central foi a integração da comunicação de inventário com estratégias de conversão, posicionando a empresa como referência local e destacando os seus diferenciais competitivos em relação aos grandes marketplaces nacionais.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative w-full max-w-5xl px-6 py-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-medium tracking-widest uppercase text-white/30">
        <p>© 2026 Elevva Marketing</p>
        <div className="flex items-center gap-8">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </footer>
    </main>
  );
}
