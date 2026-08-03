import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

interface CookieItem {
  id: number;
  name: string;
  price: string;
  description: string;
  category: string;
  availability: string;
  image: string;
  badge: string;
}

const featuredCookies: CookieItem[] = [
  {
    id: 1,
    name: "Red Velvet Velvet",
    price: "45 DH",
    description: "Une pâte veloutée au cacao rouge garnie d'un cœur fondant au cream cheese doux et éclats de chocolat blanc de couverture.",
    category: "Signature Éphémère",
    availability: "Disponible",
    image: "/photos/red-velvet-cookies-nouveau.png",
    badge: "Création Spéciale"
  },
  {
    id: 2,
    name: "Caramel Macadamia Nouveau",
    price: "50 DH",
    description: "Notre cookie au chocolat blanc réinventé avec un coulant caramel au beurre salé de Guérande et noix de macadamia toastées.",
    category: "Signature Caramel",
    availability: "Disponible",
    image: "/photos/caramel-cookies-nouveau.png",
    badge: "Best Seller"
  },
  {
    id: 3,
    name: "Le Splendide",
    price: "48 DH",
    description: "Une fusion divine combinant notre chocolat noir intense et un insert double-cœur onctueux. Une avalanche de textures.",
    category: "Nouvelle Recette",
    availability: "Bientôt Épuisé",
    image: "/photos/nouveau-cookies.png",
    badge: "Exclusivité"
  }
];

export default function Featured() {
  return (
    <section id="featured" className="relative py-24 md:py-32 bg-cookie-beige/40 overflow-hidden border-t border-b border-cookie-beige">
      {/* Decorative Grid Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#C68B59_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cookie-gold/10 text-cookie-gold text-[10px] uppercase font-bold tracking-widest mb-4">
            <Sparkles size={10} />
            <span>Les Éphémères de la Saison</span>
          </div>
          <h2 className="font-serif text-clamp-title font-bold text-cookie-brown mb-6">
            Nouveautés & <span className="text-cookie-caramel font-normal italic">Créations Uniques</span>
          </h2>
          <p className="font-sans text-sm font-light text-cookie-brown-light/75 max-w-xl leading-relaxed">
            Chaque mois, notre chef imagine des assemblages inédits. Découvrez nos trois nouveautés phares disponibles en édition très limitée.
          </p>
        </div>

        {/* 3 cards columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredCookies.map((cookie, idx) => (
            <motion.div
              key={cookie.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col h-full rounded-[2.5rem] bg-cookie-cream border border-cookie-caramel/10 overflow-hidden shadow-cookie-soft hover:shadow-cookie-premium transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-square w-full bg-cookie-cream overflow-hidden">
                {/* Badge Overlay */}
                <div className="absolute top-6 left-6 z-10 px-3.5 py-1.5 rounded-full bg-cookie-brown text-cookie-cream font-bold tracking-widest text-[9px] uppercase border border-cookie-gold/30">
                  {cookie.badge}
                </div>
                
                <img
                  src={cookie.image}
                  alt={cookie.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Shadow/Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-cookie-cream via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Meta Content */}
              <div className="p-8 flex flex-col flex-grow justify-between bg-cookie-cream">
                <div>
                  {/* Category and Availability */}
                  <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-cookie-caramel mb-3">
                    <span>{cookie.category}</span>
                    <span className="flex items-center gap-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${cookie.availability === 'Disponible' ? 'bg-green-500' : 'bg-amber-500'}`} />
                      <span className="text-cookie-brown/65">{cookie.availability}</span>
                    </span>
                  </div>
                  
                  {/* Name and Price */}
                  <div className="flex justify-between items-baseline gap-4 mb-4">
                    <h3 className="font-serif text-xl font-bold text-cookie-brown leading-tight">
                      {cookie.name}
                    </h3>
                    <span className="font-serif text-lg font-bold text-cookie-gold whitespace-nowrap">
                      {cookie.price}
                    </span>
                  </div>
                  
                  {/* Description */}
                  <p className="font-sans text-xs font-light text-cookie-brown-light/75 leading-relaxed mb-6">
                    {cookie.description}
                  </p>
                </div>

                {/* Card CTA */}
                <div className="border-t border-cookie-beige/60 pt-6 flex items-center justify-between">
                  <a
                    href="#custom"
                    className="text-xs uppercase font-bold tracking-widest text-cookie-brown group-hover:text-cookie-gold transition duration-300 flex items-center gap-1.5"
                  >
                    <span>Commander</span>
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                  <button className="text-cookie-brown-light/40 hover:text-cookie-gold transition-colors focus:outline-none" aria-label="Favoris">
                    <Heart size={18} />
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
