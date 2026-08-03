import { motion } from 'framer-motion';
import { Award, ShoppingCart } from 'lucide-react';

interface BestSellerCookie {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  details: string;
  soldCount: string;
}

const bestSellers: BestSellerCookie[] = [
  {
    id: 1,
    name: "Pistache Origin Sicily",
    price: "48 DH",
    category: "L'Intense",
    image: "/photos/pistachiocookies.png",
    details: "Un biscuit tendre infusé de pâte de pistache pure de Sicile, surmonté de pistaches concassées torréfiées et d'un coeur praliné pistache coulant.",
    soldCount: "N°1 des ventes"
  },
  {
    id: 2,
    name: "Crumble Lotus Biscoff",
    price: "45 DH",
    category: "L'Irrésistible",
    image: "/photos/lotus_cookies.png",
    details: "Une base biscuitée croustillante, fourrée d'une crème onctueuse de Speculoos Lotus et couronnée d'un biscuit Lotus entier.",
    soldCount: "Coup de cœur client"
  },
  {
    id: 3,
    name: "Caramel Drizzle Royal",
    price: "46 DH",
    category: "Le Gourmand",
    image: "/photos/caramel-cookies.png",
    details: "Pâte fine parfumée à la vanille noble de Madagascar, généreux filets de caramel fondu au beurre salé et fleur de sel.",
    soldCount: "+10k commandés"
  },
  {
    id: 4,
    name: "Red Velvet Tradition",
    price: "44 DH",
    category: "L'Élégant",
    image: "/photos/red-velvet-cookies.png",
    details: "Une texture moelleuse de couleur pourpre, avec de grosses pépites de chocolat blanc fondant et un enrobage velouté sucré.",
    soldCount: "Édition Iconique"
  }
];

export default function BestSellers() {
  return (
    <section id="bestsellers" className="relative py-24 md:py-32 bg-cookie-beige/25 overflow-hidden">
      {/* Golden spotlight radial graphics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cookie-gold/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center justify-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cookie-brown/10 text-cookie-brown text-[10px] uppercase font-bold tracking-widest mb-4">
            <Award size={10} className="text-cookie-gold" />
            <span>Les Incontournables de notre Maison</span>
          </div>
          <h2 className="font-serif text-clamp-title font-bold text-cookie-brown">
            Nos Plus Grands <span className="text-cookie-caramel font-normal italic">Succès</span>
          </h2>
          <p className="font-sans text-sm font-light text-cookie-brown-light/75 max-w-xl leading-relaxed mt-4">
            Ces recettes ont conquis le cœur de nos clients. Découvrez les cookies stars plébiscités pour leurs saveurs inoubliables.
          </p>
        </div>

        {/* Dynamic Card Assembly - Alternate layout (2 cols grid / asymmetric) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {bestSellers.map((cookie, idx) => (
            <motion.div
              key={cookie.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="flex flex-col sm:flex-row items-center gap-8 p-6 md:p-8 rounded-[2rem] bg-cookie-cream border border-cookie-caramel/10 hover:border-cookie-gold/45 shadow-cookie-soft hover:shadow-cookie-premium transition-all duration-500 group"
            >
              {/* Image Column */}
              <div className="w-full sm:w-44 h-44 shrink-0 rounded-2xl overflow-hidden bg-cookie-beige/25 relative border border-cookie-beige">
                <img
                  src={cookie.image}
                  alt={cookie.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-cookie-gold text-cookie-brown font-bold tracking-wider text-[8px] uppercase">
                  {cookie.soldCount}
                </div>
              </div>

              {/* Specs Column */}
              <div className="flex flex-col justify-between flex-grow text-center sm:text-left">
                <div>
                  <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-cookie-caramel">
                    {cookie.category}
                  </span>
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mt-1.5 mb-3">
                    <h3 className="font-serif text-xl font-bold text-cookie-brown group-hover:text-cookie-caramel transition">
                      {cookie.name}
                    </h3>
                    <span className="font-serif text-lg font-bold text-cookie-gold">
                      {cookie.price}
                    </span>
                  </div>
                  
                  <p className="font-sans text-xs font-light text-cookie-brown-light/75 leading-relaxed mb-6">
                    {cookie.details}
                  </p>
                </div>

                <div className="flex items-center justify-center sm:justify-start">
                  <a
                    href="#custom"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cookie-brown hover:text-cookie-gold transition duration-300"
                  >
                    <ShoppingCart size={13} className="text-cookie-gold" />
                    <span>Commander</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
