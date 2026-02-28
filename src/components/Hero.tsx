import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="relative mb-10">
            <div className="absolute inset-0 bg-brand-orange/20 rounded-full blur-2xl animate-pulse" />
            <img 
              src="/logo.png" 
              alt="Aaqib Creates" 
              className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-brand-orange/30 object-cover relative z-10 glow-orange"
              onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
            />
          </div>

          <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-brand-orange/30 bg-brand-orange/5 text-brand-orange text-xs font-bold uppercase tracking-[0.2em]">
            Premium Video Editing Service
          </span>
          
          <h1 className="text-5xl md:text-8xl font-display font-black leading-[0.9] mb-8 tracking-tighter">
            HELPING CREATORS <br />
            <span className="text-gradient">SCALE THROUGH CONTENT.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-gray mb-10 leading-relaxed font-light">
            We turn raw footage into high-performing assets that drive growth, 
            authority, and ROI for business coaches and personal brands.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#contact"
              className="group relative bg-brand-orange text-brand-black px-10 py-5 rounded-full font-black text-lg uppercase tracking-wider glow-orange hover:glow-orange-strong transition-all flex items-center gap-3"
            >
              Get Started
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#work"
              className="group px-10 py-5 rounded-full border border-white/10 hover:bg-white/5 transition-all flex items-center gap-3 text-lg font-bold uppercase tracking-wider"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-brand-black transition-colors">
                <Play size={14} fill="currentColor" />
              </div>
              View Work
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gray">Scroll</span>
        <div className="w-[1px] h-12 bg-linear-to-b from-brand-orange to-transparent" />
      </motion.div>
    </section>
  );
}
