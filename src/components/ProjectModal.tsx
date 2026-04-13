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
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] bg-[#0c0c0c] border border-white/10 shadow-2xl p-8 md:p-12"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 transition-colors"
          >
            <X size={20} className="text-white/40" />
          </button>

          {/* Modal Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                {project.category}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
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

            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/20">Viso Geral</h3>
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Strategy Highlights if applicable */}
            {project.isStrategy && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 font-center">
                  <Target size={24} className="text-white/40 mb-2 mx-auto" />
                  <h4 className="text-white font-bold text-center">Foco Regional</h4>
                  <p className="text-sm text-gray-500 text-center">Posicionamento estratégico frente a grandes players nacionais.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 font-center">
                  <Zap size={24} className="text-white/40 mb-2 mx-auto" />
                  <h4 className="text-white font-bold text-center">Performance ADS</h4>
                  <p className="text-sm text-gray-500 text-center">Campanhas diretas de conversão e awareness regional.</p>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="pt-8">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-8 py-5 rounded-full bg-white text-black font-extrabold text-sm uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl"
                >
                  <span>Visitar Site Oficial</span>
                  <ExternalLink size={16} />
                </a>
              ) : (
                <button
                  onClick={onClose}
                  className="w-full px-8 py-5 rounded-full border border-white/10 text-white/60 font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all"
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
