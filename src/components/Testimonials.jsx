import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const quotes = [
  {
    name: 'Ava M.',
    text: 'The most inspiring cafe in the city. Coffee that hits and an atmosphere that sparks ideas.'
  },
  {
    name: 'Jordan P.',
    text: 'Interactive art meets specialty coffee—never experienced anything like it.'
  },
  {
    name: 'Riley S.',
    text: 'Perfect spot for deep work by day and creative recharge by night.'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full py-20 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Guest Stories</h2>
          <p className="mt-3 text-white/70">What our community says about Nebula Cafe.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-white/80">“{q.text}”</p>
              <p className="mt-3 text-sm text-white/60">— {q.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
