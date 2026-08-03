import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-36 bg-cookie-cream overflow-hidden">
      {/* Soft decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-cookie-caramel/5 rounded-full filter blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cookie-gold/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Overlapping Image Composition Left (6 cols) */}
          <div className="col-span-1 lg:col-span-6 relative h-[450px] md:h-[600px] flex items-center justify-center">
            
            {/* Background Decorative Frame */}
            <div className="absolute top-8 left-8 w-[80%] h-[80%] border-2 border-cookie-gold/20 rounded-3xl -z-1" />

            {/* Main Image: description.png */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 1 }}
              className="absolute left-[5%] top-[10%] w-[75%] h-[75%] rounded-3xl overflow-hidden shadow-cookie-premium border border-cookie-beige"
            >
              <img
                src="/photos/description.png"
                alt="Artisan Making Cookies"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {/* Overlapping Secondary Image: pstachio-description.png */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, x: 50, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="absolute right-0 bottom-4 w-[50%] h-[45%] rounded-3xl overflow-hidden shadow-cookie-premium border-2 border-cookie-cream"
            >
              <img
                src="/photos/pstachio-description.png"
                alt="Pistachio Ingredient Selection"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {/* Floating Gold Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute left-0 bottom-12 p-5 bg-cookie-brown text-cookie-cream rounded-2xl shadow-cookie-gold border border-cookie-gold/30 flex flex-col justify-center items-center text-center w-36 h-36"
            >
              <span className="font-serif text-3xl font-bold text-cookie-gold">100%</span>
              <span className="font-sans text-[10px] uppercase font-bold tracking-widest mt-1 text-cookie-beige/80">Artisanal</span>
              <span className="font-serif text-[10px] italic mt-0.5 text-cookie-gold">Fait Main</span>
            </motion.div>
          </div>

          {/* Narrative Content Right (6 cols) */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center lg:pl-12">
            
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-cookie-gold" />
              <span className="font-sans text-[11px] uppercase tracking-widest font-bold text-cookie-gold">Notre Maison</span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-clamp-title font-bold text-cookie-brown leading-tight mb-8">
              L'amour du geste <br className="hidden md:inline" />
              <span className="font-normal italic text-cookie-caramel">et l'art des saveurs</span>
            </h2>

            {/* Story */}
            <div className="flex flex-col gap-6 font-sans text-clamp-body text-cookie-brown-light/80 leading-relaxed font-light">
              <p>
                L'aventure <span className="font-bold text-cookie-brown">Wiam Cookies</span> est née d'une quête de perfection : réinventer le cookie traditionnel américain pour en faire un chef-d'œuvre de la pâtisserie fine française.
              </p>
              <p>
                Chez Wiam, chaque création est façonnée à la main au cœur de Casablanca. Du pétrissage de la pâte à l'assemblage minutieux des garnitures, chaque étape respecte un processus artisanal rigoureux. Nous refusons tout arôme artificiel ou conservateur.
              </p>
              <p className="italic font-serif text-cookie-caramel border-l-2 border-cookie-gold pl-4 py-1">
                "Nous ne créons pas seulement des gâteaux, nous sculptons des souvenirs gourmands qui s'évaporent délicatement en bouche."
              </p>
            </div>

            {/* Mini Signatures/Icons */}
            <div className="grid grid-cols-2 gap-8 border-t border-cookie-beige pt-10 mt-10">
              <div>
                <h4 className="font-serif text-lg font-bold text-cookie-brown mb-1">Raw Materials</h4>
                <p className="text-xs font-light text-cookie-brown-light/70 leading-relaxed">
                  Beurres extra-fins AOP, vanille Bourbon de Madagascar, fleur de sel de Guérande.
                </p>
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-cookie-brown mb-1">Haute Couture</h4>
                <p className="text-xs font-light text-cookie-brown-light/70 leading-relaxed">
                  Des textures contrastées, croustillantes à l'extérieur et infiniment fondantes à cœur.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
