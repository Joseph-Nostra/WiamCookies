import { motion } from 'framer-motion';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

export default function SpecialOffers() {
  return (
    <section id="special" className="relative py-24 md:py-32 bg-cookie-beige/25 overflow-hidden">
      {/* Dynamic blurred circles */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-cookie-gold/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cookie-caramel/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-cookie-gold" />
            <span className="font-sans text-[11px] uppercase tracking-widest font-bold text-cookie-gold">Privilèges</span>
          </div>
          <h2 className="font-serif text-clamp-title font-bold text-cookie-brown">
            Offres Éphémères <br className="sm:hidden" />
            <span className="text-cookie-caramel font-normal italic">& Expériences</span>
          </h2>
          <p className="font-sans text-sm font-light text-cookie-brown-light/75 max-w-xl leading-relaxed mt-4">
            Profitez de nos privilèges saisonniers exclusifs pour régaler vos convives ou goûter à l'ensemble de notre gamme.
          </p>
        </div>

        {/* Promo Grid (2 premium blocks) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Card 1: Special Tea Time Collection (annonce.png) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col rounded-[2.5rem] bg-cookie-cream border border-cookie-caramel/10 overflow-hidden shadow-cookie-soft hover:shadow-cookie-premium transition-all duration-500 group"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-cookie-beige/25">
              <img
                src="/photos/annonce.png"
                alt="Teatime Platter Cookie Offers"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cookie-cream via-transparent to-transparent opacity-85" />
              <div className="absolute top-6 right-6 px-3 py-1.5 rounded-full bg-cookie-gold text-cookie-brown font-bold tracking-widest text-[9px] uppercase border border-cookie-brown/20 shadow-md">
                -15% ce Week-end
              </div>
            </div>
            
            <div className="p-8 md:p-10 flex flex-col justify-between flex-grow bg-cookie-cream">
              <div>
                <div className="flex items-center gap-2 text-cookie-caramel text-[9px] uppercase font-bold tracking-widest mb-3">
                  <Calendar size={12} />
                  <span>Jusqu'au 15 Août</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-cookie-brown mb-4 group-hover:text-cookie-caramel transition">
                  L'Écrin Dégustation Plaisir
                </h3>
                
                <p className="font-sans text-xs font-light text-cookie-brown-light/75 leading-relaxed mb-8">
                  Commandez notre coffret Découverte composé de 12 cookies assortis (dont 2 Pistache de Sicile et 2 Red Velvet) et bénéficiez d'une remise exclusive de 15% pour adoucir vos goûters d'été.
                </p>
              </div>

              <div>
                <a
                  href="#custom"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cookie-brown group-hover:text-cookie-gold transition duration-300"
                >
                  <span>Commander l'Assortiment</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Special Lotus Promotion (loyus-annonce.png) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col rounded-[2.5rem] bg-cookie-cream border border-cookie-caramel/10 overflow-hidden shadow-cookie-soft hover:shadow-cookie-premium transition-all duration-500 group"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-cookie-beige/25">
              <img
                src="/photos/loyus-annonce.png"
                alt="Lotus Speculoos Promo Cookie Ads"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cookie-cream via-transparent to-transparent opacity-85" />
              <div className="absolute top-6 right-6 px-3.5 py-1.5 rounded-full bg-cookie-brown text-cookie-cream font-bold tracking-widest text-[9px] uppercase border border-cookie-gold/30 shadow-md">
                Offre Limitée
              </div>
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-between flex-grow bg-cookie-cream">
              <div>
                <div className="flex items-center gap-2 text-cookie-caramel text-[9px] uppercase font-bold tracking-widest mb-3">
                  <Sparkles size={12} />
                  <span>Exclusivité Web</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-cookie-brown mb-4 group-hover:text-cookie-caramel transition">
                  La Box Speculoos Lotus Addiction
                </h3>

                <p className="font-sans text-xs font-light text-cookie-brown-light/75 leading-relaxed mb-8">
                  Amateurs de Biscoff, cette offre est conçue pour vous. Achetez notre boîte signature de 5 cookies fourrés crème Lotus croustillante, et nous glisserons gracieusement une 6ème création surprise dans votre écrin.
                </p>
              </div>

              <div>
                <a
                  href="#custom"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cookie-brown group-hover:text-cookie-gold transition duration-300"
                >
                  <span>Saisir l'Offre Exclusive</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
