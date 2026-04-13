"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { MoveRight, Target, BarChart3, ShieldCheck } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.2, ease: "easeOut" } as const
};

const slideUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut", delay: 0.3 } as const
};

export default function PortfolioPage() {
  const mainProjects = projects.filter(p => !p.isStrategy);
  const strategyProject = projects.find(p => p.isStrategy);

  return (
    <main className="min-h-screen relative flex flex-col items-center selection:bg-white selection:text-black">
      
      {/* Hero Section */}
      <section className="relative w-full max-w-6xl px-6 pt-32 pb-24 md:pt-60 md:pb-48 flex flex-col items-center text-center gap-10">
        <motion.div {...fadeIn} className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.04] border border-white/5 backdrop-blur-xl mb-4 shadow-2xl">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse" />
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/50">Disponvel para novos projetos</span>
          </div>
          <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.8] text-white">
            João Pedro
          </h1>
          <motion.p {...slideUp} className="max-w-2xl text-lg md:text-2xl text-gray-400 font-light leading-relaxed">
            Desenvolvedor Web e Estrategista de Performance. <br className="hidden md:block" />
            Criando sistemas robustos e interfaces de alto impacto.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-4 text-white/20 text-[10px] font-bold uppercase tracking-[0.4em] cursor-default"
        >
          <span>Role para explorar</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* Projects Grid Section */}
      <section id="work" className="relative w-full max-w-6xl px-6 pb-40 space-y-24">
        <div className="flex items-end justify-between border-b border-white/5 pb-10">
          <div className="space-y-3">
            <h2 className="text-white/20 text-xs font-bold uppercase tracking-[0.4em]">Portflio Selecionado</h2>
            <p className="text-3xl font-semibold tracking-tight">Meus Trabalhos</p>
          </div>
          <BarChart3 size={24} className="text-white/5" />
        </div>

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {mainProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* Featured Strategy Card (Nova Construtiza) */}
          {strategyProject && (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" } as const}
              className="group relative col-span-full p-12 md:p-16 rounded-[3rem] bg-white/[0.03] backdrop-blur-3xl border border-white/[0.08] hover:border-white/[0.2] transition-all duration-700 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              {/* Specialized Background Light for Strategy */}
              <div className="absolute top-0 left-0 -ml-32 -mt-32 w-96 h-96 bg-purple-600/[0.03] blur-[120px] rounded-full" />
              
              <div className="relative z-10 flex flex-col md:flex-row gap-16 items-start md:items-center">
                <div className="flex-shrink-0 p-8 rounded-[2rem] bg-white/[0.04] border border-white/5 shadow-2xl">
                  <Target size={64} className="text-white/70 group-hover:scale-110 transition-transform duration-700" />
                </div>
                
                <div className="flex-1 space-y-8">
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/30">{strategyProject.category}</span>
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                      {strategyProject.title}
                    </h3>
                  </div>
                  <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-4xl group-hover:text-gray-200 transition-colors duration-500">
                    {strategyProject.description}
                  </p>
                  <div className="pt-6 flex flex-wrap gap-4 items-center">
                    <div className="px-6 py-2 rounded-full bg-white/[0.05] border border-white/5 text-[10px] font-bold uppercase tracking-widest text-white/40">
                      Impacto Regional
                    </div>
                    <div className="px-6 py-2 rounded-full bg-white/[0.05] border border-white/5 text-[10px] font-bold uppercase tracking-widest text-white/40">
                      Alta Performance
                    </div>
                    <div className="px-6 py-2 rounded-full bg-white/[0.05] border border-white/5 text-[10px] font-bold uppercase tracking-widest text-white/40">
                      Varginha, MG
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full max-w-6xl px-6 pt-24 pb-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12 text-[10px] font-bold tracking-[0.4em] uppercase text-white/20">
        <div className="flex flex-col items-center md:items-start gap-4">
          <p>© 2026 Elevva Marketing</p>
          <p className="text-white/5 font-medium tracking-normal normal-case">Varginha, MG   Brasil</p>
        </div>
        <div className="flex items-center gap-16">
          <a href="#" className="hover:text-white transition-colors duration-300">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors duration-300">GitHub</a>
          <a href="#" className="hover:text-white transition-colors duration-300 font-black">WhatsApp</a>
        </div>
      </footer>
    </main>
  );
}
