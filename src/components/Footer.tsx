import React from 'react';
import { Instagram, Youtube, Twitter, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 bg-brand-black border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-3xl font-display font-black tracking-tighter flex items-center justify-center md:justify-start gap-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Aaqib Mir Logo" 
                className="w-12 h-12 rounded-full border border-brand-orange/30 object-cover"
                onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
              />
              AAQIB<span className="text-brand-orange">CREATES</span>
            </a>
            <p className="text-brand-gray text-sm font-light max-w-xs">
              Premium video editing for high-performing creators and business coaches.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {['Home', 'Work', 'Process', 'Testimonials', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs font-bold uppercase tracking-widest text-brand-gray hover:text-brand-orange transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-6">
            <a 
              href="https://www.instagram.com/aaqib_creates?igsh=MXY5bHVpazQ0OGNhMQ==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-gray hover:text-brand-orange hover:border-brand-orange/50 transition-all"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.youtube.com/@aaqib_creates" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-gray hover:text-brand-orange hover:border-brand-orange/50 transition-all"
            >
              <Youtube size={20} />
            </a>
            <a 
              href="https://x.com/Aaqibstudio1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-gray hover:text-brand-orange hover:border-brand-orange/50 transition-all"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gray font-bold">
            © {new Date().getFullYear()} AAQIB MIR. ALL RIGHTS RESERVED.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-brand-gray hover:text-brand-orange transition-colors font-bold"
          >
            Back to Top
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-orange transition-all">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
