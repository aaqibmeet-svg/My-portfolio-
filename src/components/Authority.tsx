import React from 'react';
import { motion } from 'motion/react';
import { STATS, LOGOS } from '../constants';

export default function Authority() {
  return (
    <section className="py-24 bg-brand-black relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="text-4xl md:text-6xl font-display font-black text-brand-orange mb-2 tracking-tighter group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-bold text-brand-gray uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos Section */}
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-brand-gray mb-12 font-bold">
            Trusted by Creators on All Major Platforms
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all">
            {LOGOS.map((logo) => (
              <span key={logo} className="text-2xl md:text-3xl font-display font-black tracking-tighter">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
