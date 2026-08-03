import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Accueil', href: '#hero' },
  { name: 'Notre Histoire', href: '#about' },
  { name: 'Créations', href: '#cookies' },
  { name: 'Sur Mesure', href: '#custom' },
  { name: 'Offres', href: '#special' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active link detection
      const sections = ['hero', 'about', 'cookies', 'custom', 'special', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 glassmorphism shadow-cookie-soft'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Left */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-cookie-gold shadow-md">
              <img
                src="/photos/logo.jpg"
                alt="Wiam Cookies Logo"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <span className="font-serif text-xl md:text-2xl font-bold tracking-widest text-cookie-brown group-hover:text-cookie-caramel transition-colors">
              WIAM COOKIES
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const hash = item.href.slice(1);
              const isActive = activeSection === hash;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative py-2 text-sm font-semibold uppercase tracking-wider text-cookie-brown hover:text-cookie-caramel transition-all duration-300"
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-cookie-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#custom"
              className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest bg-cookie-brown text-cookie-cream hover:bg-cookie-gold hover:text-cookie-brown transition-all duration-300 shadow-cookie-soft"
            >
              Commander
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-cookie-brown hover:text-cookie-caramel transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cookie-brown/40 backdrop-blur-md lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-cookie-cream p-8 flex flex-col justify-between shadow-cookie-premium border-l border-cookie-beige"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex justify-between items-center mb-12">
                  <div className="flex items-center gap-3">
                    <img
                      src="/photos/logo.jpg"
                      alt="Wiam Cookies"
                      className="w-10 h-10 rounded-full border border-cookie-gold object-cover"
                    />
                    <span className="font-serif font-bold text-lg text-cookie-brown tracking-wider">
                      WIAM COOKIES
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  {navItems.map((item, index) => {
                    const hash = item.href.slice(1);
                    const isActive = activeSection === hash;
                    return (
                      <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-semibold tracking-wider font-serif py-1 ${
                          isActive
                            ? 'text-cookie-gold border-b border-cookie-gold max-w-max'
                            : 'text-cookie-brown hover:text-cookie-caramel'
                        }`}
                      >
                        {item.name}
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <div>
                <a
                  href="#custom"
                  onClick={() => setIsOpen(false)}
                  className="w-full block py-4 text-center rounded-xl bg-cookie-brown text-cookie-cream hover:bg-cookie-gold hover:text-cookie-brown text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-cookie-soft"
                >
                  Commander en Ligne
                </a>
                <p className="text-center text-xs text-cookie-brown-light/60 mt-6 italic font-serif">
                  Délices faits maison à Casablanca
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
