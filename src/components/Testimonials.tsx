import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-brand-black relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-orange text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-6">
              CLIENT <span className="text-gradient">SUCCESS STORIES.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-3xl relative group border border-white/10 hover:border-brand-orange/30 transition-all"
            >
              <Quote className="absolute top-8 right-8 text-brand-orange/20 group-hover:text-brand-orange/40 transition-colors" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#FF5A1F" className="text-brand-orange" />
                ))}
              </div>
              
              <p className="text-lg text-brand-gray italic font-light leading-relaxed mb-10 relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border border-brand-orange/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-black text-white tracking-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs font-bold text-brand-orange uppercase tracking-widest">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
