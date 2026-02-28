import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Eye, X } from 'lucide-react';
import { PROJECTS } from '../constants';

export default function Portfolio() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const getEmbedUrl = (url: string) => {
    if (url.includes('drive.google.com')) {
      return url.replace('/view', '/preview').split('?')[0];
    }
    if (url.includes('youtube.com/shorts/')) {
      return url.replace('youtube.com/shorts/', 'youtube.com/embed/');
    }
    if (url.includes('youtube.com/watch?v=')) {
      return url.replace('youtube.com/watch?v=', 'youtube.com/embed/');
    }
    if (url.includes('youtu.be/')) {
      return url.replace('youtu.be/', 'youtube.com/embed/');
    }
    return url;
  };

  return (
    <section id="work" className="py-32 bg-brand-black relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-orange text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Our Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter">
              SHORT-FORM <span className="text-gradient">PORTFOLIO.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-md text-brand-gray text-lg font-light leading-relaxed text-right"
          >
            High-retention vertical content that stops the scroll and drives 
            engagement on every major platform.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={playingId !== project.id ? { y: -10 } : {}}
              className="group relative aspect-[9/16] rounded-3xl overflow-hidden bg-white/5 border border-white/10"
            >
              <AnimatePresence mode="wait">
                {playingId === project.id ? (
                  <motion.div
                    key="video"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full relative"
                  >
                    <button
                      onClick={() => setPlayingId(null)}
                      className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-brand-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-brand-orange hover:text-brand-black transition-all"
                    >
                      <X size={16} />
                    </button>
                    <iframe
                      src={`${getEmbedUrl(project.videoUrl)}?autoplay=1`}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="thumbnail"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full cursor-pointer"
                    onClick={() => setPlayingId(project.id)}
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-brand-black via-brand-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                      <div className="flex items-center gap-2 text-brand-orange mb-2">
                        <Eye size={16} />
                        <span className="text-xs font-black uppercase tracking-widest">{project.views} Views</span>
                      </div>
                      <h3 className="text-xl font-display font-black mb-6 tracking-tight">
                        {project.title}
                      </h3>
                      
                      <div className="w-12 h-12 rounded-full bg-brand-orange text-brand-black flex items-center justify-center glow-orange hover:scale-110 transition-transform">
                        <Play size={20} fill="currentColor" />
                      </div>
                    </div>

                    {/* Static Stats Badge */}
                    <div className="absolute top-6 right-6 px-3 py-1 bg-brand-black/80 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest text-brand-orange group-hover:opacity-0 transition-opacity">
                      {project.views}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.3em] text-brand-gray hover:text-brand-orange transition-colors group"
          >
            View All Projects
            <div className="w-8 h-[1px] bg-brand-gray group-hover:bg-brand-orange group-hover:w-12 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
}
