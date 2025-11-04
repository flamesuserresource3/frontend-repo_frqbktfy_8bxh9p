import React from 'react';
import Hero from './components/Hero';
import MenuHighlights from './components/MenuHighlights';
import Experiences from './components/Experiences';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-inter">
      <Hero />
      <MenuHighlights />
      <Experiences />
      <Testimonials />

      <footer className="border-t border-white/10 bg-slate-950/60 backdrop-blur">
        <div className="mx-auto w-full max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/70">
          <p className="text-sm">© {new Date().getFullYear()} Nebula Cafe. Crafted with care.</p>
          <div className="flex gap-6 text-sm">
            <a href="#menu" className="hover:text-white">Menu</a>
            <a href="#experiences" className="hover:text-white">Experiences</a>
            <a href="#testimonials" className="hover:text-white">Stories</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
