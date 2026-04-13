"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Code, TrendingUp, ExternalLink, MessageCircle, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Dr. Filipe Vaneli",
    desc: "Landing page médica focada em conversão e autoridade.",
    link: "https://www.drfilipevaneli.site/",
    tag: "Web Dev",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800"
  },
  {
    id: 2,
    title: "Elevva Reputation",
    desc: "Sistema de gestão de reputação digital e análise de dados.",
    link: "https://elevva-reputation.vercel.app/",
    tag: "Software",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800"
  },
  {
    id: 3,
    title: "Elevva Marketing",
    desc: "Site institucional para serviços e propostas estratégicas.",
    link: "https://site-elevva-mkt-propaganda.vercel.app/",
    tag: "Design",
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800"
  },
  {
    id: 4,
    title: "Nova Construtiza",
    desc: "Estratégia de performance e tráfego pago regional.",
    tag: "Marketing",
    // Link de imagem novo e direto
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    isStrategy: true
  }
];

export default function Portfolio() {
  const [modalData, setModalData] = useState<typeof projects[0] | null>(null);

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/20">

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full" />
      </div>

      <header className="max-w-4xl mx-auto pt-24 pb-16 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-4"
        >
          Meus Trabalhos
        </motion.h1>
        <p className="text-zinc-500 uppercase tracking-[0.5em] text-[10px] md:text-xs font-bold">
          João Pedro Scalioni
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ y: -8 }}
              className="bg-[#0A0A0A] border border-white/5 rounded-3xl overflow-hidden group hover:border-white/20 transition-all duration-500 flex flex-col h-full"
            >
              {/* Espaço da Imagem - Forçado a aparecer */}
              <div className="aspect-[16/10] overflow-hidden bg-zinc-900 relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="p-8 text-center flex flex-col flex-grow justify-between items-center">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2 block">{p.tag}</span>
                  <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                  <p className="text-zinc-400 text-sm mb-8 leading-relaxed">{p.desc}</p>
                </div>

                {p.isStrategy ? (
                  <button
                    onClick={() => setModalData(p)}
                    className="w-full py-4 bg-white text-black rounded-full font-bold text-sm hover:bg-zinc-200 transition-colors"
                  >
                    Saiba Mais
                  </button>
                ) : (
                  <a
                    href={p.link} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-zinc-900 border border-white/10 text-white rounded-full font-bold text-sm hover:bg-white hover:text-black transition-all"
                  >
                    Ver Site <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {modalData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#0F0F0F] border border-white/10 p-8 md:p-12 rounded-[2.5rem] max-w-lg w-full relative"
            >
              <button onClick={() => setModalData(null)} className="absolute top-6 right-6 text-zinc-500 hover:text-white">
                <X size={24} />
              </button>
              <TrendingUp size={40} className="text-blue-500 mb-6" />
              <h2 className="text-3xl font-bold mb-4">{modalData.title}</h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Atuação estratégica focada no setor de materiais de construção em Varginha.
                Integrei campanhas de tráfego pago com inteligência regional para competir com gigantes do setor.
              </p>
              <a href="https://wa.me/5535997350506" target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center py-4 bg-white text-black rounded-full font-bold">
                Falar sobre Estratégia
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="max-w-6xl mx-auto border-t border-white/5 px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">© 2026 João Pedro Scalioni — Elevva Marketing</p>
          <p className="text-xs text-zinc-600 mt-1">Varginha, MG — Performance & Estratégia</p>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/JoaoPedroScalioni" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Code size={20} /></a>
          <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-scalioni-de-souza-65b1212a6/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Globe size={20} /></a>
          <a href="https://wa.me/5535997350506" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><MessageCircle size={20} /></a>
        </div>
      </footer>
    </main>
  );
}