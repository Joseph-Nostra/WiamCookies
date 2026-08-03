import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', tel: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', tel: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 md:py-36 bg-cookie-cream overflow-hidden">
      {/* Background radial shapes */}
      <div className="absolute top-[20%] left-[-15%] w-[500px] h-[500px] border border-cookie-gold/10 rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[450px] h-[450px] border border-cookie-caramel/10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Tag */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-cookie-gold" />
            <span className="font-sans text-[11px] uppercase tracking-widest font-bold text-cookie-gold">Contact</span>
          </div>
          <h2 className="font-serif text-clamp-title font-bold text-cookie-brown">
            Nous Contacter & <br className="sm:hidden" />
            <span className="text-cookie-caramel font-normal italic">Nous Rendre Visite</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Coordinates details left (5 cols) */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-6">
              <h3 className="font-serif text-xl font-bold text-cookie-brown">
                L'Atelier Wiam Cookies
              </h3>
              <p className="font-sans text-xs font-light text-cookie-brown-light/75 leading-relaxed max-w-sm">
                Pour toute demande commerciale, événementielle ou question sur nos de livraison, notre équipe se tient à votre entière disposition.
              </p>

              <div className="flex flex-col gap-6 mt-4">
                {/* Item 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cookie-beige/40 text-cookie-gold flex items-center justify-center shrink-0 border border-cookie-caramel/10">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-cookie-brown">Adresse de la Boutique</h4>
                    <p className="text-xs font-light text-cookie-brown-light/70 mt-1 leading-relaxed">
                      Angle Boulevard d'Anfa, Résidence La Palmeraie, Casablanca, Maroc
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cookie-beige/40 text-cookie-gold flex items-center justify-center shrink-0 border border-cookie-caramel/10">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-cookie-brown">Téléphone & Whatsapp</h4>
                    <p className="text-xs font-light text-cookie-brown-light/70 mt-1">
                      +212 522 98 76 54
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cookie-beige/40 text-cookie-gold flex items-center justify-center shrink-0 border border-cookie-caramel/10">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-cookie-brown">Adresse Courriel</h4>
                    <p className="text-xs font-light text-cookie-brown-light/70 mt-1">
                      contact@wiamcookies.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Mock Map/Visual box with rounded corners */}
            <div className="relative rounded-[2rem] overflow-hidden aspect-[16/10] w-full border border-cookie-caramel/10 shadow-cookie-soft">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!11m18!1m12!1m3!1d3323.7145610260274!2d-7.636737525381831!3d33.586745173336785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2eb2954a6db%3A0xc3cf9c9162985161!2sBd%20d&#39;Anfa%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'contrast(1.05) saturate(0.85) sepia(0.08)' }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Google Map Bd Anfa"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form right (7 cols) */}
          <div className="col-span-1 lg:col-span-7 bg-cookie-beige/20 border border-cookie-caramel/10 rounded-[3rem] p-8 md:p-12 shadow-cookie-soft flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  <h3 className="font-serif text-xl font-bold text-cookie-brown border-b border-cookie-beige/80 pb-4 mb-2">
                    Laissez-nous un Message
                  </h3>

                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-cookie-caramel">Nom Complet</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Yassine Chef"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="px-4 py-3 bg-cookie-cream border border-cookie-caramel/15 rounded-xl text-black font-sans text-xs focus:outline-none focus:border-cookie-gold transition"
                    />
                  </div>

                  {/* Group fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email field */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-cookie-caramel">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="Ex: yassine@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="px-4 py-3 bg-cookie-cream border border-cookie-caramel/15 rounded-xl text-black font-sans text-xs focus:outline-none focus:border-cookie-gold transition"
                      />
                    </div>

                    {/* Tel field */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-cookie-caramel">Téléphone</label>
                      <input
                        type="tel"
                        required
                        placeholder="Ex: +212 600 00 00 00"
                        value={formData.tel}
                        onChange={(e) => setFormData({ ...formData, tel: e.target.value })}
                        className="px-4 py-3 bg-cookie-cream border border-cookie-caramel/15 rounded-xl text-black font-sans text-xs focus:outline-none focus:border-cookie-gold transition"
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-cookie-caramel">Message</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Votre message ici..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="px-4 py-3 bg-cookie-cream border border-cookie-caramel/15 rounded-xl text-black font-sans text-xs focus:outline-none focus:border-cookie-gold transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="mt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl bg-cookie-brown hover:bg-cookie-gold text-cookie-cream hover:text-cookie-brown font-bold tracking-widest uppercase text-xs transition duration-300 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin" size={14} />
                          <span>Transmission en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>Envoyer le Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 flex flex-col items-center justify-center text-center gap-6"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 border border-green-300 flex items-center justify-center text-green-600 shadow-cookie-soft">
                    <Check size={28} />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-cookie-brown">Message Envoyé !</h3>

                  <p className="font-sans text-xs font-light text-cookie-brown-light/75 max-w-md leading-relaxed">
                    Votre message a été transmis avec succès. Notre service client prendra contact avec vous très rapidement pour répondre à votre demande. Merci de votre confiance !
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl border border-cookie-brown/20 hover:border-cookie-gold text-cookie-brown hover:text-cookie-gold text-xs font-bold uppercase transition"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
