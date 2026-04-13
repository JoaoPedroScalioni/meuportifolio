"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Zap, Target } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-[2.5rem] bg-[#0c0c0c] border border-white/10 shadow-2xl p-6 md:p-12 scrollbar-thin"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button - Optimized for touch (44px) */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-8 md:right-8 w-11 h-11 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors z-[110]"
            aria-label="Fechar"
          >
            <X size={24} className="text-white/40 hover:text-white" />
          </button>

          {/* Modal Content */}
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-4 md:space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                {project.category}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                {project.title}
              </h2>
            </div>

            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black/40 border border-white/5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Viso Geral</h3>
              <p className="text-base md:text-xl text-gray-400 font-light leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Strategy Highlights */}
            {project.isStrategy && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                  <Target size={24} className="text-white/30 mb-2 mx-auto md:mx-0" />
                  <h4 className="text-white font-bold text-sm text-center md:text-left">Foco Regional</h4>
                  <p className="text-xs text-gray-500 text-center md:text-left">Posicionamento estratégico frente a grandes players nacionais.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                  <Zap size={24} className="text-white/30 mb-2 mx-auto md:mx-0" />
                  <h4 className="text-white font-bold text-sm text-center md:text-left">Performance ADS</h4>
                  <p className="text-xs text-gray-500 text-center md:text-left">Campanhas diretas de conversão e awareness regional.</p>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="pt-6">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full h-[56px] rounded-full bg-white text-black font-extrabold text-[11px] uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl"
                >
                  <span>Visitar Site Oficial</span>
                  <ExternalLink size={16} />
                </a>
              ) : (
                <button
                  onClick={onClose}
                  className="w-full h-[56px] rounded-full border border-white/10 text-white/60 font-bold text-[11px] uppercase tracking-widest hover:bg-white/5 transition-all"
                >
                  Fechar Detalhes
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
