import React from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Mail } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xqedjowk");

  return (
    <section id="contact" className="py-32 bg-brand-black relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Final CTA */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-16 md:p-24 rounded-[3rem] relative overflow-hidden border border-brand-orange/20"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-orange/5 blur-[120px]" />
            
            <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter mb-8 leading-[0.9]">
              YOUR STORY DESERVES <br />
              <span className="text-gradient">THE PERFECT EDIT.</span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-brand-gray mb-12 font-light">
              Stop settling for average content. Let's build a content engine that 
              works for you while you sleep.
            </p>
            <a
              href="#form"
              className="inline-block bg-brand-orange text-brand-black px-12 py-6 rounded-full font-black text-xl uppercase tracking-wider glow-orange hover:glow-orange-strong transition-all"
            >
              Let's Work Together
            </a>
          </motion.div>
        </div>

        {/* Contact Form */}
        <div id="form" className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-display font-black tracking-tighter mb-8">
              READY TO <span className="text-brand-orange">SCALE?</span>
            </h3>
            <p className="text-xl text-brand-gray font-light leading-relaxed mb-12">
              Fill out the form below and we'll get back to you within 24 hours to 
              discuss your project and how we can help you grow.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider">Fast Turnaround</h4>
                  <p className="text-sm text-brand-gray">Delivery in as little as 24 hours.</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider">Unlimited Revisions</h4>
                  <p className="text-sm text-brand-gray">We're not happy until you're happy.</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider">Strategic Editing</h4>
                  <p className="text-sm text-brand-gray">Built for retention and conversion.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 rounded-3xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-4 text-brand-orange mb-4">
                <Mail size={24} />
                <h4 className="font-bold uppercase tracking-widest">Direct Contact</h4>
              </div>
              <p className="text-brand-gray mb-4 text-sm">Prefer direct email? Reach out anytime at:</p>
              <a 
                href="mailto:studiobyaaqib@gmail.com" 
                className="text-2xl font-display font-black text-white hover:text-brand-orange transition-colors break-all"
              >
                studiobyaaqib@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 md:p-12 rounded-[2.5rem] border border-white/10"
          >
            {state.succeeded ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-brand-orange/20 rounded-full flex items-center justify-center text-brand-orange mx-auto mb-8 glow-orange">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-display font-black mb-4 tracking-tight">MESSAGE SENT!</h3>
                <p className="text-brand-gray mb-6">We'll be in touch very soon.</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="text-brand-orange font-bold uppercase tracking-widest text-xs hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <ValidationError 
                  prefix="Form" 
                  field="form" 
                  errors={state.errors} 
                  className="bg-red-500/10 border border-red-500/50 p-4 rounded-xl text-red-500 text-sm block"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-gray ml-2">Name</label>
                    <input
                      required
                      id="name"
                      name="name"
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-colors text-white"
                      placeholder="John Doe"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-gray ml-2">Email</label>
                    <input
                      required
                      id="email"
                      name="email"
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-colors text-white"
                      placeholder="john@example.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-gray ml-2">Project Type</label>
                    <select 
                      id="projectType"
                      name="projectType"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-colors text-white appearance-none"
                    >
                      <option>Short Form Content</option>
                      <option>Course Editing</option>
                      <option>Full Content Strategy</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-gray ml-2">Budget Range</label>
                    <select 
                      id="budget"
                      name="budget"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-colors text-white appearance-none"
                    >
                      <option>$100 - $300 /mo</option>
                      <option>$300 - $600 /mo</option>
                      <option>$600+ /mo</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-gray ml-2">Message</label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-colors text-white resize-none"
                    placeholder="Tell us about your goals..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-brand-orange text-brand-black py-5 rounded-2xl font-black text-lg uppercase tracking-wider glow-orange hover:glow-orange-strong transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                  <Send size={20} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
