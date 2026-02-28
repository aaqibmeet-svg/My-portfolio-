import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Authority from './components/Authority';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-brand-black min-h-screen selection:bg-brand-orange selection:text-brand-black">
      <Navbar />
      <main>
        <Hero />
        <Authority />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
