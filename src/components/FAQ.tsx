import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="py-32 bg-brand-black relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-orange text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Common Questions
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-6">
              FREQUENTLY ASKED <span className="text-gradient">QUESTIONS.</span>
            </h2>
          </motion.div>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-3xl overflow-hidden border border-white/10 hover:border-brand-orange/30 transition-all"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full p-8 flex justify-between items-center text-left group"
              >
                <h3 className="text-xl font-display font-black tracking-tight group-hover:text-brand-orange transition-colors">
                  {faq.question}
                </h3>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openId === faq.id ? 'bg-brand-orange text-brand-black glow-orange' : 'bg-white/5 text-brand-orange'}`}>
                  {openId === faq.id ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-brand-gray text-lg font-light leading-relaxed border-t border-white/5 pt-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
