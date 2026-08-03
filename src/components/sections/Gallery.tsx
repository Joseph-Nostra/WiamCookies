import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Plus } from 'lucide-react';

interface GalleryCookie {
  id: number;
  name: string;
  price: string;
  category: string;
  categoryTag: 'chocolat' | 'fruite' | 'exotique';
  image: string;
  description: string;
  availability: string;
}

const items: GalleryCookie[] = [
  {
    id: 1,
    name: "Classic Tout Chocolat",
    price: "42 DH",
    category: "Chocolat",
    categoryTag: "chocolat",
    image: "/photos/classic-cookies.png",
    description: "Le cookie iconique américain revisité. Pâte pur beurre, généreuse en pépites de chocolat noir 65% de cacao.",
    availability: "Disponible"
  },
  {
    id: 2,
    name: "Lemon Drop Citronné",
    price: "44 DH",
    category: "Fruitée",
    categoryTag: "fruite",
    image: "/photos/lemon-cookies.png",
    description: "Une explosion de fraîcheur avec un zeste de citron jaune bio et éclats de confit de citron fait maison, équilibré au chocolat blanc.",
    availability: "Disponible"
  },
  {
    id: 3,
    name: "Douceur Orange-Cannelle",
    price: "44 DH",
    category: "Fruitée",
    categoryTag: "fruite",
    image: "/photos/orange-cookies.png",
    description: "Une alliance réconfortante de pépites d'écorces d'orange confites, d'une touche légère de cannelle et de chocolat au lait.",
    availability: "Disponible"
  },
  {
    id: 4,
    name: "Café Mocha Intense",
    price: "46 DH",
    category: "Café & Exotique",
    categoryTag: "exotique",
    image: "/photos/coffee-cookies.png",
    description: "Pâte infusée au café d'Éthiopie de spécialité, parsemée d'amandes effilées grillées et de pépites de chocolat noir intense.",
    availability: "Sur Commande"
  },
  {
    id: 5,
    name: "Détente Estivale Coco-Fraise",
    price: "48 DH",
    category: "Fruitée",
    categoryTag: "fruite",
    image: "/photos/summer-cookies.png",
    description: "Une recette ensoleillée mariant la noix de coco râpée torréfiée et des éclats croustillants de fraises lyophilisées.",
    availability: "Disponible"
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'chocolat' | 'fruite' | 'exotique'>('all');
  const [selectedCookie, setSelectedCookie] = useState<GalleryCookie | null>(null);

  const filteredItems = filter === 'all' ? items : items.filter(item => item.categoryTag === filter);

  return (
    <section id="cookies" className="relative py-24 md:py-32 bg-cookie-cream">
      {/* Background Graphic shapes */}
      <div className="absolute top-[10%] right-[-10%] w-96 h-96 rounded-full border border-cookie-gold/10 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full border border-cookie-caramel/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-cookie-gold" />
              <span className="font-sans text-[11px] uppercase tracking-widest font-bold text-cookie-gold">Notre Collection</span>
            </div>
            <h2 className="font-serif text-clamp-title font-bold text-cookie-brown leading-tight">
              L'Art de la pâte à cookies <br />
              <span className="font-normal italic text-cookie-caramel">Une Carte d'Exceptions</span>
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2.5 md:self-end">
            {(['all', 'chocolat', 'fruite', 'exotique'] as const).map((cat) => {
              const nameMap = { all: 'Tous', chocolat: 'Chocolat', fruite: 'Fruités', exotique: 'Exotiques' };
              const isSelected = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                    isSelected
                      ? 'bg-cookie-brown text-cookie-cream border-cookie-brown shadow-cookie-soft'
                      : 'bg-transparent text-cookie-brown border-cookie-brown/20 hover:border-cookie-caramel hover:text-cookie-caramel'
                  }`}
                >
                  {nameMap[cat]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((cookie) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={cookie.id}
                className="group relative rounded-[2rem] bg-cookie-beige/20 border border-cookie-caramel/10 overflow-hidden shadow-cookie-soft hover:shadow-cookie-premium flex flex-col justify-between"
              >
                {/* Image Wrapper */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-cookie-beige/25">
                  <img
                    src={cookie.image}
                    alt={cookie.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Glass Hover Utility Panel */}
                  <div className="absolute inset-0 bg-cookie-brown/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                    <button
                      onClick={() => setSelectedCookie(cookie)}
                      className="p-3 bg-cookie-cream text-cookie-brown rounded-full hover:bg-cookie-gold hover:text-cookie-brown transition shadow-md"
                      aria-label="Aperçu rapide"
                    >
                      <Eye size={18} />
                    </button>
                    <a
                      href="#custom"
                      className="p-3 bg-cookie-cream text-cookie-brown rounded-full hover:bg-cookie-gold hover:text-cookie-brown transition shadow-md"
                      aria-label="Ajouter ou Commander"
                    >
                      <Plus size={18} />
                    </a>
                  </div>
                </div>

                {/* Meta details */}
                <div className="p-6 bg-cookie-cream/40 flex-grow flex flex-col justify-between border-t border-cookie-caramel/5">
                  <div>
                    <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-widest text-cookie-caramel mb-2">
                      <span>{cookie.category}</span>
                      <span className={cookie.availability === 'Disponible' ? 'text-green-600' : 'text-amber-600'}>
                        {cookie.availability}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-cookie-brown mb-2 group-hover:text-cookie-caramel transition">
                      {cookie.name}
                    </h3>
                    <p className="text-[12px] font-light text-cookie-brown-light/70 line-clamp-2">
                      {cookie.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center border-t border-cookie-beige/65 mt-4 pt-4">
                    <span className="font-serif text-base font-bold text-cookie-gold">{cookie.price}</span>
                    <button
                      onClick={() => setSelectedCookie(cookie)}
                      className="text-[10px] uppercase font-bold tracking-wider text-cookie-brown hover:text-cookie-gold transition duration-300"
                    >
                      Découvrir
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Rapid Preview Modal */}
        <AnimatePresence>
          {selectedCookie && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-cookie-brown/70 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedCookie(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="bg-cookie-cream border border-cookie-gold/20 max-w-2xl w-full rounded-[2.5rem] overflow-hidden shadow-cookie-premium flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Photo Wrapper */}
                <div className="md:w-1/2 aspect-square md:aspect-auto md:h-full min-h-[250px] relative bg-cookie-beige/25">
                  <img
                    src={selectedCookie.image}
                    alt={selectedCookie.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 py-1.5 px-3 rounded-full bg-cookie-brown text-cookie-cream text-[10px] uppercase tracking-wider border border-cookie-gold/30">
                    {selectedCookie.category}
                  </div>
                </div>

                {/* Details Wrapper */}
                <div className="p-8 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-cookie-brown mb-2">{selectedCookie.name}</h3>
                    <div className="text-xl font-serif text-cookie-gold font-bold mb-4">{selectedCookie.price}</div>
                    <p className="font-sans text-xs font-light text-cookie-brown-light/80 leading-relaxed mb-6">
                      {selectedCookie.description}
                    </p>
                    <div className="flex gap-2 items-center text-xs text-cookie-brown border-t border-cookie-beige pt-4 mb-4">
                      <span className="font-bold">Disponibilité:</span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] ${selectedCookie.availability === 'Disponible' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                        {selectedCookie.availability}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="#custom"
                      onClick={() => setSelectedCookie(null)}
                      className="flex-grow py-3 rounded-xl bg-cookie-brown hover:bg-cookie-gold text-cookie-cream hover:text-cookie-brown text-center text-xs font-bold uppercase tracking-wider transition duration-300"
                    >
                      Commander ce Biscuit
                    </a>
                    <button
                      onClick={() => setSelectedCookie(null)}
                      className="px-4 py-3 rounded-xl border border-cookie-brown/20 text-cookie-brown text-xs font-bold uppercase hover:bg-cookie-beige transition"
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
