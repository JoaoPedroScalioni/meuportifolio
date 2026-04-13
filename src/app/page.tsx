"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import {
  Github,
  Linkedin,
  MessageSquare,
  ExternalLink,
  Code2,
  TrendingUp,
  Globe
} from "lucide-react";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-zinc-100 p-4 md:p-8 lg:p-12 font-sans">

      {/* Container Principal do Bento */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-6 gap-4 h-full">

        {/* Bloco 1: Bio & Perfil (Destaque) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 } as const}
          className="md:col-span-2 md:row-span-2 bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 flex flex-col justify-center gap-4 group hover:border-white/20 transition-all"
        >
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">João Pedro Scalioni</h1>
            <p className="text-zinc-500 text-lg">Desenvolvedor Web & Estrategista de Performance</p>
          </div>
          <div className="flex gap-4">
            <a href="https://wa.me/5535997350506" target="_blank" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
              <MessageSquare size={20} />
            </a>
            <a href="https://github.com/JoaoPedroScalioni" target="_blank" className="p-3 bg-zinc-900 border border-white/10 rounded-full hover:bg-zinc-800 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-scalioni-de-souza-65b1212a6/" target="_blank" className="p-3 bg-zinc-900 border border-white/10 rounded-full hover:bg-zinc-800 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        {/* Bloco 2: Dr. Filipe Vaneli */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-2 md:row-span-3 bg-zinc-900/50 border border-white/5 rounded-3xl overflow-hidden relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
          <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" alt="Med" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
          <div className="absolute bottom-0 left-0 p-8 z-20 w-full flex justify-between items-end">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400">Web Development</span>
              <h2 className="text-2xl font-bold">Dr. Filipe Vaneli</h2>
            </div>
            <a href="https://www.drfilipevaneli.site/" target="_blank" className="bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white hover:text-black transition-all">
              <ExternalLink size={20} />
            </a>
          </div>
        </motion.div>

        {/* Bloco 3: Elevva Reputation */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-2 md:row-span-2 bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
            <Globe className="text-zinc-500" size={32} />
            <a href="https://elevva-reputation.vercel.app/" target="_blank" className="text-zinc-500 hover:text-white transition-colors">
              <ExternalLink size={20} />
            </a>
          </div>
          <div>
            <h3 className="text-xl font-bold">Elevva Reputation</h3>
            <p className="text-sm text-zinc-500">Gestão e análise de reputação digital.</p>
          </div>
        </motion.div>

        {/* Bloco 4: Nova Construtiza (Estratégia) */}
        <motion.div
          className="md:col-span-1 md:row-span-2 bg-white text-black rounded-3xl p-6 flex flex-col justify-between"
        >
          <TrendingUp size={32} />
          <div className="space-y-1">
            <h3 className="font-bold leading-tight">Nova Construtiza</h3>
            <p className="text-xs opacity-70">Marketing de Performance em Varginha.</p>
          </div>
        </motion.div>

        {/* Bloco 5: Elevva Propaganda */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-1 md:row-span-2 bg-[#0a0a0a] border border-white/5 rounded-3xl p-6 flex flex-col justify-between"
        >
          <Code2 size={32} className="text-zinc-500" />
          <div className="space-y-1">
            <h3 className="font-bold leading-tight">Elevva Propaganda</h3>
            <a href="https://site-elevva-mkt-propaganda.vercel.app/" target="_blank" className="text-xs text-blue-500 hover:underline">Acessar Projeto →</a>
          </div>
        </motion.div>

        {/* Bloco 6: Rodapé dentro do Grid */}
        <div className="md:col-span-4 py-4 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600 uppercase tracking-[0.3em]">
          <p>© 2026 Elevva Marketing — Varginha, MG</p>
          <p>Performance & Estratégia</p>
        </div>

      </div>
    </main>
  );
}