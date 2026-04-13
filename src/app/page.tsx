"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  ExternalLink,
  Mail,
  Layout,
  Zap,
  ArrowUpRight,
  Code
} from "lucide-react";

// Como o seu GitHub e LinkedIn estão dando erro de exportação, 
// vamos usar ícones genéricos de alta qualidade que NÃO falham no build.
export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white p-4 md:p-10 font-sans selection:bg-white/20">

      {/* Bento Grid Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4">

        {/* CARD 1: BIO (Grande) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-2 md:row-span-2 bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between hover:border-white/20 transition-colors"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">João Pedro</h1>
            <p className="text-zinc-500 text-lg md:text-xl font-medium">Performance & Web Dev</p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <a href="https://wa.me/5535997350506" target="_blank" className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-bold hover:scale-105 transition-transform">
              <Zap size={18} /> Contato
            </a>
            <a href="https://github.com/JoaoPedroScalioni" target="_blank" className="p-3 bg-zinc-900 border border-white/10 rounded-full hover:bg-zinc-800 transition-colors">
              <Code size={20} />
            </a>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-scalioni-de-souza-65b1212a6/" target="_blank" className="p-3 bg-zinc-900 border border-white/10 rounded-full hover:bg-zinc-800 transition-colors">
              <Globe size={20} />
            </a>
          </div>
        </motion.div>

        {/* CARD 2: PROJETO DESTAQUE (Dr. Filipe) */}
        <motion.div
          className="md:col-span-2 md:row-span-3 bg-zinc-900/40 border border-white/5 rounded-[2rem] overflow-hidden relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
          <div className="absolute top-6 right-6 z-20">
            <div className="bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-[10px] uppercase tracking-widest border border-white/10">Destaque</div>
          </div>
          <div className="absolute bottom-8 left-8 z-20">
            <h2 className="text-3xl font-bold mb-2">Dr. Filipe Vaneli</h2>
            <p className="text-zinc-400 mb-4 max-w-xs">Landing Page médica focada em conversão e autoridade.</p>
            <a href="https://www.drfilipevaneli.site/" target="_blank" className="inline-flex items-center gap-2 text-white font-semibold hover:underline">
              Visitar Projeto <ArrowUpRight size={18} />
            </a>
          </div>
          {/* Placeholder de imagem escura */}
          <div className="w-full h-full bg-zinc-800/50 group-hover:scale-105 transition-transform duration-700" />
        </motion.div>

        {/* CARD 3: REPUTATION */}
        <motion.div className="md:col-span-2 md:row-span-1 bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-6 flex items-center justify-between group">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-500"><Layout size={24} /></div>
            <div>
              <h3 className="font-bold">Elevva Reputation</h3>
              <p className="text-xs text-zinc-500">Gestão de dados e reputação.</p>
            </div>
          </div>
          <a href="https://elevva-reputation.vercel.app/" target="_blank" className="p-2 opacity-0 group-hover:opacity-100 transition-opacity"><ExternalLink size={20} /></a>
        </motion.div>

        {/* CARD 4: NOVA CONSTRUTIZA (Marketing) */}
        <motion.div className="md:col-span-1 md:row-span-2 bg-white text-black rounded-[2rem] p-8 flex flex-col justify-between">
          <Zap size={32} className="fill-black" />
          <div>
            <h3 className="text-xl font-bold leading-tight mb-2">Nova Construtiza</h3>
            <p className="text-sm font-medium opacity-70 italic">Performance de vendas em Varginha.</p>
          </div>
        </motion.div>

        {/* CARD 5: ELEVVA PROPAGANDA */}
        <motion.div className="md:col-span-1 md:row-span-2 bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between">
          <div className="text-zinc-500"><Mail size={32} /></div>
          <h3 className="font-bold">Elevva Propaganda</h3>
          <a href="https://site-elevva-mkt-propaganda.vercel.app/" target="_blank" className="text-xs text-zinc-500 hover:text-white flex items-center gap-1">Check Project <ArrowUpRight size={14} /></a>
        </motion.div>

        {/* FOOTER */}
        <div className="md:col-span-4 flex flex-col md:flex-row justify-between items-center px-4 py-6 text-[10px] text-zinc-600 tracking-[0.3em] uppercase">
          <p>© 2026 Elevva Marketing</p>
          <p className="mt-2 md:mt-0">Varginha, MG — Estratégia Digital</p>
        </div>

      </div>
    </main>
  );
}