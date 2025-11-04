import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Coffee, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle radial gradient for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Nav */}
        <nav className="mx-auto w-full max-w-6xl px-6 py-6 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-white/10 backdrop-blur-md grid place-items-center border border-white/20">
              <Coffee className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-wide">Nebula Cafe</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#menu" className="hover:text-white/80 transition-colors">Menu</a>
            <a href="#experiences" className="hover:text-white/80 transition-colors">Experiences</a>
            <a href="#testimonials" className="hover:text-white/80 transition-colors">Stories</a>
          </div>
          <a
            href="#menu"
            className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition"
          >
            Reserve a Table
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </nav>

        {/* Hero Copy */}
        <div className="flex-1 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6 text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm backdrop-blur-md border border-white/20">
              <Sparkles className="h-4 w-4" />
              Interactive 3D ambience — move your mouse
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Coffee meets digital art
              <span className="block text-white/90">in a modern, vibrant space.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-white/80 text-base md:text-lg">
              Savor specialty brews, experimental pastries, and immersive experiences inspired by technology and design.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#menu"
                className="rounded-full bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90 transition"
              >
                Explore Menu
              </a>
              <a
                href="#experiences"
                className="rounded-full bg-white/10 text-white px-5 py-3 text-sm font-semibold backdrop-blur-md border border-white/20 hover:bg-white/20 transition"
              >
                Our Experiences
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
