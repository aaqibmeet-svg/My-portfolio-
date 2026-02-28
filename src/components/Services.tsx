import React from 'react';
import { motion } from 'motion/react';
import { Zap, Video, BookOpen, Target, BarChart3 } from 'lucide-react';
import { SERVICES } from '../constants';

const ICON_MAP: Record<string, any> = {
  Zap,
  Video,
  BookOpen,
  Target,
  BarChart3,
};

export default function Services() {
  return (
    <section id="services" className="py-32 bg-brand-black relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-orange text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              What We Do
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-6">
              SERVICES & <span className="text-gradient">VALUE PROPOSITION.</span>
            </h2>
            <p className="max-w-2xl mx-auto text-brand-gray text-lg font-light leading-relaxed">
              We don't just edit videos. We build strategic content engines that 
              turn viewers into loyal fans and paying customers.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-10 rounded-3xl group hover:border-brand-orange/50 transition-all relative overflow-hidden"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-orange/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-8 group-hover:bg-brand-orange group-hover:text-brand-black transition-colors">
                  <Icon size={32} />
                </div>
                
                <h3 className="text-2xl font-display font-black mb-4 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-brand-gray leading-relaxed font-light">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
