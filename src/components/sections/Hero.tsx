import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-cookie-brown">
      {/* Background Image with Dark Vignette/Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/photos/landing.png"
          alt="Wiam Cookies Pastry Cover"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.05] transition-transform duration-10000 ease-out hover:scale-105"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-cookie-brown via-transparent to-cookie-brown/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-cookie-brown/40" />
      </div>

      {/* Floating Sparkle Particles */}
      <div className="absolute inset-0 pointers-events-none z-1 overflow-hidden opacity-30">
        <div className="absolute w-2 h-2 bg-cookie-gold rounded-full blur-[1px] animate-float-slow top-[20%] left-[10%]" />
        <div className="absolute w-1.5 h-1.5 bg-cookie-cream rounded-full animate-float-slow top-[65%] left-[85%] [animation-delay:2s]" />
        <div className="absolute w-3 h-3 bg-cookie-gold/40 rounded-full blur-[2px] animate-float-slow top-[75%] left-[25%] [animation-delay:4s]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Soft Golden Badge */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism-gold border border-cookie-gold/30 text-cookie-gold text-xs uppercase tracking-widest mb-8 shadow-cookie-gold"
        >
          <Sparkles size={12} className="animate-spin-slow" />
          <span>Fait Main à Casablanca — Édition Limitée</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-clamp-hero font-bold tracking-tight text-cookie-cream leading-[1.08] mb-6 max-w-4xl"
        >
          La Haute Couture <br />
          <span className="text-stroke-gold text-cookie-gold font-normal italic">de la Pâtisserie</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-sans text-clamp-subtitle tracking-wide font-light text-cookie-beige/85 max-w-2xl mb-12 leading-relaxed"
        >
          Découvrez des cookies artisanaux uniques, façonnés avec passion à partir d’ingrédients nobles et de chocolats grands crus. Une expérience sensorielle inoubliable.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full"
        >
          <a
            href="#cookies"
            className="group relative w-full sm:w-auto px-8 py-4 overflow-hidden rounded-full bg-cookie-gold hover:bg-cookie-gold-dark text-cookie-brown font-bold uppercase tracking-widest text-[11px] sm:text-xs flex items-center justify-center gap-2 shadow-cookie-gold transition duration-300"
          >
            <span>Découvrir la Collection</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#custom"
            className="w-full sm:w-auto px-8 py-4 rounded-full glassmorphism text-cookie-cream hover:bg-cookie-cream hover:text-cookie-brown font-bold uppercase tracking-widest text-[11px] sm:text-xs flex items-center justify-center gap-2 transition duration-300 border border-cookie-cream/20 shadow-cookie-soft"
          >
            <span>Création Sur Mesure</span>
          </a>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-cookie-beige/65">Faire Défiler</span>
        <div className="w-6 h-10 border border-cookie-gold/45 rounded-full flex justify-center p-1.5">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1.5 h-1.5 rounded-full bg-cookie-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
