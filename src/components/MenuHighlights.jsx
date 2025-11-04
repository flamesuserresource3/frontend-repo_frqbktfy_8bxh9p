import React from 'react';
import { Coffee, Leaf, Sparkles, Sandwich } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: Coffee,
    title: 'Astro Espresso',
    desc: 'Rich, chocolatey shots pulled with precision for a cosmic kick.'
  },
  {
    icon: Leaf,
    title: 'Matcha Nebula',
    desc: 'Ceremonial-grade matcha with microfoam art and yuzu mist.'
  },
  {
    icon: Sandwich,
    title: 'Croissant Lab',
    desc: 'Flaky layers laminated with cultured butter and playful fillings.'
  },
  {
    icon: Sparkles,
    title: 'Seasonal Signatures',
    desc: 'Rotating creations inspired by art, music, and technology.'
  }
];

export default function MenuHighlights() {
  return (
    <section id="menu" className="relative w-full py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Menu Highlights</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Crafted with responsibly sourced ingredients, science-backed techniques, and a dash of whimsy.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <TiltCard key={idx} Icon={it.icon} title={it.title} desc={it.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({ Icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="absolute -inset-1 bg-gradient-to-br from-fuchsia-500/20 via-cyan-500/20 to-emerald-500/20 blur-2xl" />
      </div>
      <div className="relative">
        <div className="h-12 w-12 rounded-xl bg-white/10 grid place-items-center border border-white/20">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{desc}</p>
        <button className="mt-4 inline-flex items-center text-sm font-medium text-white/90 hover:text-white">Learn more →</button>
      </div>
    </motion.div>
  );
}
