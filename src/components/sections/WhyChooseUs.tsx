import { motion } from 'framer-motion';
import { Leaf, Award, Clock, HeartHandshake } from 'lucide-react';

interface ValueCard {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const values: ValueCard[] = [
  {
    id: 1,
    title: "Ingrédients Nobles",
    desc: "Beurre AOP Charentes-Poitou, chocolat de couverture exclusif (Valrhona), vanille Bourbon de Madagascar. Aucun conservateur ni arôme artificiel.",
    icon: <Leaf size={24} />
  },
  {
    id: 2,
    title: "Façon Couture",
    desc: "Chaque cookie est pesé, garni et décoré individuellement à la main par nos pâtissiers pour assurer une texture crousti-fondante parfaite à cœur.",
    icon: <Award size={24} />
  },
  {
    id: 3,
    title: "Fraîcheur Quotidienne",
    desc: "Cuisson tout au long de la journée dans notre atelier de Casablanca. Nos biscuits n'attendent pas, ils vous sont livrés à peine sortis du four.",
    icon: <Clock size={24} />
  },
  {
    id: 4,
    title: "Expérience Signature",
    desc: "Des coffrets écrins inspirés de la joaillerie pour faire de chaque dégustation ou cadeau un moment de pur raffinement et de luxe.",
    icon: <HeartHandshake size={24} />
  }
];

export default function WhyChooseUs() {
  return (
    <section id="whychooseus" className="relative py-24 md:py-32 bg-cookie-cream">
      {/* Abstract lines bg */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#C68B59_1px,transparent_1px),linear-gradient(to_bottom,#C68B59_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-cookie-gold" />
            <span className="font-sans text-[11px] uppercase tracking-widest font-bold text-cookie-gold">Notre Promesse</span>
          </div>
          <h2 className="font-serif text-clamp-title font-bold text-cookie-brown">
            L'Excellence dans <br className="sm:hidden" />
            <span className="text-cookie-caramel font-normal italic">Chaque Bouchée</span>
          </h2>
          <p className="font-sans text-sm font-light text-cookie-brown-light/75 max-w-xl leading-relaxed mt-4">
            Derrière Wiam Cookies se cache une quête sans compromis pour vous offrir le meilleur cookie que vous ayez jamais goûté.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={val.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="p-8 rounded-[2rem] bg-cookie-beige/25 border border-cookie-caramel/10 hover:border-cookie-gold/45 shadow-cookie-soft hover:shadow-cookie-premium transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-cookie-cream text-cookie-gold border border-cookie-caramel/10 flex items-center justify-center mb-6 group-hover:bg-cookie-brown group-hover:text-cookie-cream transition-all duration-500 shadow-sm">
                  {val.icon}
                </div>
                
                <h3 className="font-serif text-lg font-bold text-cookie-brown mb-3 group-hover:text-cookie-caramel transition-colors">
                  {val.title}
                </h3>
                
                <p className="font-sans text-xs font-light text-cookie-brown-light/70 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
