import { Mail, Phone, MapPin, Instagram, Facebook, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-cookie-brown text-cookie-cream overflow-hidden border-t-2 border-cookie-gold/30">
      {/* Decorative Golden Ambient Backdrops */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cookie-gold/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cookie-caramel/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-cookie-cream/15">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-cookie-gold shadow-md">
                <img
                  src="/photos/logo.jpg"
                  alt="Wiam Cookies Footer Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif text-2xl font-bold tracking-widest text-cookie-cream">
                WIAM
              </span>
            </div>
            <p className="font-sans text-sm leading-relaxed text-cookie-beige/85">
              Créateurs de délices d'exception, nous confectionnons chaque cookie à la main à Casablanca, avec les ingrédients les plus raffinés pour sublimer vos moments gourmands.
            </p>
            <div className="flex gap-4 items-center">
              <a href="#" className="p-2.5 rounded-full bg-cookie-cream/10 text-cookie-cream hover:bg-cookie-gold hover:text-cookie-brown transition-all duration-300" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-cookie-cream/10 text-cookie-cream hover:bg-cookie-gold hover:text-cookie-brown transition-all duration-300" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col gap-6 lg:pl-10">
            <h3 className="font-serif text-lg font-bold tracking-wide text-cookie-gold">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a href="#hero" className="hover:text-cookie-gold hover:underline transition-all">Accueil</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cookie-gold hover:underline transition-all">Notre Histoire</a>
              </li>
              <li>
                <a href="#cookies" className="hover:text-cookie-gold hover:underline transition-all">Nos Créations</a>
              </li>
              <li>
                <a href="#custom" className="hover:text-cookie-gold hover:underline transition-all">Sur Mesure</a>
              </li>
              <li>
                <a href="#special" className="hover:text-cookie-gold hover:underline transition-all">Offres Spéciales</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-lg font-bold tracking-wide text-cookie-gold">
              Contact & Horaires
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-cookie-beige/95">
              <li className="flex items-start gap-3">
                <MapPin className="text-cookie-gold shrink-0 mt-0.5" size={18} />
                <span>Angle Boulevard d'Anfa, Résidence La Palmeraie, Casablanca, Maroc</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-cookie-gold shrink-0" size={18} />
                <span>+212 522 98 76 54</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-cookie-gold shrink-0" size={18} />
                <span>contact@wiamcookies.com</span>
              </li>
              <li className="flex items-start gap-3 border-t border-cookie-cream/10 pt-4 mt-2">
                <Clock className="text-cookie-gold shrink-0 mt-0.5" size={18} />
                <div className="flex flex-col">
                  <span className="font-bold text-xs uppercase tracking-wider text-cookie-gold">Boutique Ouverte</span>
                  <span className="text-[12px] opacity-80 mt-0.5">Lundi — Samedi : 09h00 – 21h00</span>
                  <span className="text-[12px] opacity-80">Dimanche : 10h00 – 19h00</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-lg font-bold tracking-wide text-cookie-gold">
              Lettre d'Information
            </h3>
            <p className="font-sans text-sm text-cookie-beige/85">
              Abonnez-vous pour recevoir nos nouvelles collections éphémères et exclusivités.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="w-full px-4 py-3 bg-cookie-cream/10 border border-cookie-cream/20 rounded-xl text-cookie-cream placeholder:text-cookie-beige/50 text-sm focus:outline-none focus:border-cookie-gold transition duration-300"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-cookie-gold hover:bg-cookie-gold-dark text-cookie-brown font-bold tracking-wider text-xs uppercase rounded-xl transition duration-300 shadow-cookie-soft"
              >
                S'abonner
              </button>
            </form>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-cookie-beige/50">
          <p>© {currentYear} Wiam Cookies. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cookie-gold transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-cookie-gold transition-colors">CGV</a>
            <a href="#" className="hover:text-cookie-gold transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
