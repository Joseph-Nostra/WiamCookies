import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  stars: number;
}

const reviews: Testimonial[] = [
  {
    id: 1,
    name: "Yasmine Belkader",
    role: "Critique Gastronomique - Casa Saveurs",
    quote: "Une révélation. Le croustillant extérieur laisse place à un fondant incomparable. Le cookie à la pistache de Sicile a redéfini mes attentes en matière de haute pâtisserie.",
    stars: 5
  },
  {
    id: 2,
    name: "Karim Bennani",
    role: "Client Fidèle",
    quote: "Les coffrets personnalisés ont fait fureur lors des cadeaux de fin d'année de nos partenaires. L'élégance du packaging et le goût exquis des biscuits ont sublimé notre image.",
    stars: 5
  },
  {
    id: 3,
    name: "Sophie Laurent",
    role: "Formatrice & Consultante Culinaire",
    quote: "Ce n'est pas un simple biscuit, c'est de l'art. L'équilibre des sucres est parfait, mettant en valeur l'amertume du chocolat noir et la noblesse de la fleur de sel.",
    stars: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-cookie-beige/40 overflow-hidden border-t border-b border-cookie-beige">
      {/* Decorative quotes background */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 opacity-[0.03] text-cookie-brown pointer-events-none select-none hidden lg:block">
        <Quote size={320} />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-cookie-gold" />
            <span className="font-sans text-[11px] uppercase tracking-widest font-bold text-cookie-gold">Avis de nos Clients</span>
          </div>
          <h2 className="font-serif text-clamp-title font-bold text-cookie-brown">
            Ils Parlent de <span className="text-cookie-caramel font-normal italic">Nos Créations</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          
          {/* Navigation Arrows */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:-px-8 pointer-events-none">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-cookie-cream hover:bg-cookie-gold border border-cookie-caramel/10 text-cookie-brown hover:text-cookie-brown transition shadow-md pointer-events-auto focus:outline-none"
              aria-label="Avis précédent"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-cookie-cream hover:bg-cookie-gold border border-cookie-caramel/10 text-cookie-brown hover:text-cookie-brown transition shadow-md pointer-events-auto focus:outline-none"
              aria-label="Avis suivant"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Testimonial Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.4 }}
              className="glassmorphism max-w-2xl px-8 py-10 md:p-12 rounded-[2.5rem] shadow-cookie-soft"
            >
              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-6 text-cookie-gold">
                {[...Array(reviews[currentIndex].stars)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Review Quote */}
              <p className="font-serif text-clamp-subtitle italic tracking-wide text-cookie-brown leading-relaxed mb-8">
                "{reviews[currentIndex].quote}"
              </p>

              {/* Reviewer Meta */}
              <div className="border-t border-cookie-beige/80 pt-6">
                <h4 className="font-serif text-base font-bold text-cookie-brown">{reviews[currentIndex].name}</h4>
                <p className="font-sans text-[10px] uppercase font-bold tracking-widest text-cookie-caramel mt-1">
                  {reviews[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-6 bg-cookie-gold' : 'bg-cookie-brown/15 hover:bg-cookie-brown/30'
              }`}
              aria-label={`Aller à l'avis ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
