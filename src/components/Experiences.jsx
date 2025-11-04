import React from 'react';
import { Wifi, Clock, Music2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const perks = [
  { icon: Wifi, title: 'Ultra-fast Wi‑Fi', desc: 'Seamless connectivity for work, play, and everything in between.' },
  { icon: Clock, title: 'Late Hours', desc: 'Open late on weekends with limited edition night menu.' },
  { icon: Music2, title: 'Live Sessions', desc: 'Local artists and ambient DJs on select evenings.' },
  { icon: Sparkles, title: 'Interactive Art', desc: 'Projection mapping and tactile installations that evolve.' },
];

export default function Experiences() {
  return (
    <section id="experiences" className="relative w-full py-20 bg-slate-950 text-white">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold">Signature Experiences</h2>
            <p className="mt-4 text-white/70">
              Beyond coffee: our space blends craftsmanship with digital artistry. Join tastings, latte-art workshops, and immersive
              nights where sound, light, and flavor converge.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {perks.map((p, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                >
                  <div className="h-10 w-10 rounded-lg bg-white/10 grid place-items-center border border-white/20">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 font-semibold">{p.title}</h3>
                  <p className="text-sm text-white/70">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-cyan-500/20 to-emerald-500/20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.1),transparent_40%)]" />
              <div className="absolute inset-0 grid place-items-center text-center px-8">
                <div>
                  <p className="uppercase tracking-widest text-xs text-white/70">Weekly Event</p>
                  <h3 className="mt-2 text-2xl font-bold">Synthwave Latte Night</h3>
                  <p className="mt-2 text-white/80">Neon pours, retro beats, and limited-time flavors. Fridays from 7pm.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
