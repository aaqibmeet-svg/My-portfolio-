import React from 'react';
import { motion } from 'motion/react';
import { Upload, Edit3, CheckCircle } from 'lucide-react';

const STEPS = [
  {
    title: 'Send Footage',
    description: 'Upload your raw files to our secure portal. We handle the storage and organization.',
    icon: Upload,
  },
  {
    title: 'Unlimited Revisions',
    description: 'We edit, you review. We tweak until every frame is perfect and aligned with your brand.',
    icon: Edit3,
  },
  {
    title: 'Final Delivery',
    description: 'Receive your high-performing assets ready to be published and scaled across platforms.',
    icon: CheckCircle,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-brand-black relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-orange text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              How It Works
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-6">
              OUR 3-STEP <span className="text-gradient">PROCESS.</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="relative inline-block mb-10">
                  <div className="w-24 h-24 rounded-full border-2 border-brand-orange/30 flex items-center justify-center text-brand-orange bg-brand-black group-hover:border-brand-orange group-hover:glow-orange transition-all duration-500">
                    <step.icon size={40} />
                  </div>
                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-brand-orange text-brand-black font-black flex items-center justify-center text-lg">
                    0{index + 1}
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-black mb-4 tracking-tight">
                  {step.title}
                </h3>
                
                <p className="text-brand-gray leading-relaxed font-light max-w-sm mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
