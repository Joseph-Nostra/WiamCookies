import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check, Loader2, Sparkles, ChefHat } from 'lucide-react';

export default function CustomOrders() {
  const [eventType, setEventType] = useState('gift');
  const [quantity, setQuantity] = useState('24');
  const [flavor, setFlavor] = useState('mix');
  const [message, setMessage] = useState('');
  const [goldLeaf, setGoldLeaf] = useState(false);
  const [ribbonColor, setRibbonColor] = useState('gold');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1800);
  };

  const getEstimatedPrice = () => {
    const basePrices: Record<string, number> = { '12': 500, '24': 950, '48': 1800, '100': 3500 };
    let price = basePrices[quantity] || 950;
    if (goldLeaf) price += (parseInt(quantity) * 5); // Add 5 DH per cookie for gold leaf
    return price;
  };

  return (
    <section id="custom" className="relative py-24 md:py-36 bg-cookie-cream overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-10 left-[-10%] w-[350px] h-[350px] bg-cookie-caramel/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[400px] h-[400px] bg-cookie-gold/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Media Presentation left (5 cols) */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-cookie-gold" />
              <span className="font-sans text-[11px] uppercase tracking-widest font-bold text-cookie-gold">Sur Mesure</span>
            </div>
            
            <h2 className="font-serif text-clamp-title font-bold text-cookie-brown leading-tight mb-8">
              Événements & <br />
              <span className="font-normal italic text-cookie-caramel">Créations Uniques</span>
            </h2>

            <p className="font-sans text-xs font-light text-cookie-brown-light/75 leading-relaxed mb-6">
              Que ce soit pour célébrer un mariage mémorable, un anniversaire élégant, ou remercier vos collaborateurs lors d'un événement d'entreprise corporate, notre atelier confectionne des coffrets sur mesure gravés à votre image.
            </p>

            {/* Feature Image: ingredients.png */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-cookie-premium border border-cookie-beige aspect-[4/3] mb-8">
              <img
                src="/photos/ingredients.png"
                alt="Processus de préparation des cookies"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cookie-brown/50 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center text-cookie-cream">
                <span className="font-serif text-xs italic">Ingrédients d'Exception Sélectionnés</span>
                <span className="font-sans text-[9px] uppercase tracking-wider bg-cookie-gold/80 text-cookie-brown px-2.5 py-1 rounded-full font-bold">100% Chef Pâtissier</span>
              </div>
            </div>

            {/* Callouts */}
            <div className="flex items-center gap-4 text-cookie-brown">
              <div className="p-3 bg-cookie-beige/40 rounded-xl">
                <ChefHat className="text-cookie-gold" size={24} />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold">Personnalisation Totale</h4>
                <p className="text-[11px] text-cookie-brown-light/70 font-light">Choix des parfums, des monogrammes et des écrins.</p>
              </div>
            </div>
          </div>

          {/* interactive form right (7 cols) */}
          <div className="col-span-1 lg:col-span-7 bg-cookie-beige/20 border border-cookie-caramel/10 rounded-[3rem] p-8 md:p-12 shadow-cookie-soft">
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
                  <h3 className="font-serif text-xl font-bold text-cookie-brown border-b border-cookie-beige/80 pb-4 mb-2 flex items-center gap-2">
                    <Sparkles className="text-cookie-gold" size={18} />
                    <span>Configurez votre Écrin</span>
                  </h3>

                  {/* Row 1: Event & Box Size */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Event Type selector */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-cookie-caramel">Type de Prestation</label>
                      <select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="px-4 py-3 bg-cookie-cream border border-cookie-caramel/15 rounded-xl text-black font-sans text-xs focus:outline-none focus:border-cookie-gold transition"
                      >
                        <option value="gift">Coffret Cadeaux Privé</option>
                        <option value="wedding">Mariage & Fiançailles</option>
                        <option value="corporate">Séminaire & Corporate</option>
                        <option value="birthday">Anniversaire Chic</option>
                      </select>
                    </div>

                    {/* Quantity Box Size Selector */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-cookie-caramel">Taille de l'Écrin (Unités)</label>
                      <div className="flex gap-2">
                        {['12', '24', '48', '100'].map((quan) => (
                          <button
                            type="button"
                            key={quan}
                            onClick={() => setQuantity(quan)}
                            className={`flex-grow py-2.5 rounded-xl text-xs font-bold font-sans border transition ${
                              quantity === quan
                                ? 'bg-cookie-brown text-cookie-cream border-cookie-brown'
                                : 'bg-cookie-cream text-cookie-brown border-cookie-caramel/15 hover:border-cookie-caramel'
                            }`}
                          >
                            {quan}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Flavor Picker */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-cookie-caramel">Assortiment Rêvé</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { id: 'mix', name: 'Assortiment Découverte' },
                        { id: 'choc', name: '100% Chocolats Grands Crus' },
                        { id: 'exotic', name: 'Cocktail Fruité & Exotique' }
                      ].map((flav) => (
                        <button
                          type="button"
                          key={flav.id}
                          onClick={() => setFlavor(flav.id)}
                          className={`p-3 text-left rounded-xl text-xs border flex flex-col justify-between transition ${
                            flavor === flav.id
                              ? 'bg-cookie-brown/5 border-cookie-gold text-cookie-brown'
                              : 'bg-cookie-cream border-cookie-caramel/15 text-cookie-brown-light/70 hover:border-cookie-caramel'
                          }`}
                        >
                          <span className="font-bold">{flav.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Customization Extras */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-cookie-cream/45 p-5 rounded-2xl border border-cookie-caramel/5">
                    {/* Gold Leaf Checkbox */}
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="goldLeaf"
                        checked={goldLeaf}
                        onChange={(e) => setGoldLeaf(e.target.checked)}
                        className="w-4 h-4 rounded text-cookie-gold focus:ring-cookie-gold border-cookie-caramel/30 focus:outline-none"
                      />
                      <label htmlFor="goldLeaf" className="cursor-pointer select-none">
                        <span className="block text-xs font-bold text-cookie-brown leading-tight">Ajouter des touches d'or 24k</span>
                        <span className="block text-[10px] text-cookie-caramel mt-0.5">Effet paillettes de feuilles d'or alimentaires (+5 DH/cookie)</span>
                      </label>
                    </div>

                    {/* Ribbon Color selector */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[9px] uppercase font-bold tracking-widest text-cookie-caramel">Couleur du Ruban Satiné</label>
                      <div className="flex gap-2.5">
                        {[
                          { id: 'gold', color: 'bg-amber-400', label: 'Or' },
                          { id: 'choc', color: 'bg-amber-900', label: 'Chocolat' },
                          { id: 'cream', color: 'bg-amber-100', label: 'Crème' }
                        ].map((rib) => (
                          <button
                            type="button"
                            key={rib.id}
                            onClick={() => setRibbonColor(rib.id)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold border transition ${
                              ribbonColor === rib.id
                                ? 'bg-cookie-brown text-cookie-cream border-cookie-brown'
                                : 'bg-cookie-cream text-cookie-brown border-cookie-caramel/10 hover:border-cookie-caramel'
                            }`}
                          >
                            <span className={`w-2.5 h-2.5 rounded-full ${rib.color} border border-cookie-brown/10`} />
                            <span>{rib.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Monogram message for printing */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-cookie-caramel">Plaquette en Chocolat Marquée (Optionnel)</label>
                    <input
                      type="text"
                      maxLength={30}
                      placeholder="Ex: Joyeux Anniversaire, Merci... (Max 30 caractères)"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="px-4 py-3 bg-cookie-cream border border-cookie-caramel/15 rounded-xl text-black font-sans text-xs focus:outline-none focus:border-cookie-gold transition"
                    />
                  </div>

                  {/* Price Estimate & CTA */}
                  <div className="border-t border-cookie-beige/80 pt-6 mt-4 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                      <span className="text-[9px] uppercase font-bold tracking-widest text-cookie-caramel">Estimation de l'Atelier</span>
                      <span className="font-serif text-2xl font-bold text-cookie-brown">{getEstimatedPrice()} DH</span>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cookie-brown hover:bg-cookie-gold text-cookie-cream hover:text-cookie-brown font-bold tracking-widest uppercase text-xs transition duration-300 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin" size={14} />
                          <span>Calcul en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>Déposer ma Demande</span>
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
                  
                  <h3 className="font-serif text-2xl font-bold text-cookie-brown">Demande Enregistrée !</h3>
                  
                  <p className="font-sans text-xs font-light text-cookie-brown-light/75 max-w-md leading-relaxed">
                    Votre configuration d'écrin haut de gamme a été transmise à notre chef de cuisine. Un conseiller de vente vous contactera sous 2 heures par téléphone ou e-mail pour confirmer les modalités de facturation et de livraison.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 rounded-xl border border-cookie-brown/20 hover:border-cookie-gold text-cookie-brown hover:text-cookie-gold text-xs font-bold uppercase transition"
                  >
                    Configurer un autre écrin
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
