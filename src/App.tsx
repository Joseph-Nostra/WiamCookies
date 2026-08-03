import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Featured from './components/sections/Featured';
import Gallery from './components/sections/Gallery';
import BestSellers from './components/sections/BestSellers';
import CustomOrders from './components/sections/CustomOrders';
import Testimonials from './components/sections/Testimonials';
import WhyChooseUs from './components/sections/WhyChooseUs';
import SpecialOffers from './components/sections/SpecialOffers';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-cookie-cream flex flex-col justify-between overflow-x-hidden">
      {/* Header Navigation */}
      <Navbar />

      {/* Main Page Layout Wrapper */}
      <main className="flex-grow w-full">
        {/* Hero Landing */}
        <Hero />

        {/* Section 2: About Us */}
        <About />

        {/* Section 3: Featured Cookies */}
        <Featured />

        {/* Section 4: Product Gallery */}
        <Gallery />

        {/* Section 5: Best Sellers */}
        <BestSellers />

        {/* Section 6: Custom Orders Selector Form */}
        <CustomOrders />

        {/* Section 7: Testimonials Slider */}
        <Testimonials />

        {/* Section 8: Why Choose Us Values Grid */}
        <WhyChooseUs />

        {/* Section 9: Special Promo Announcement Offers */}
        <SpecialOffers />

        {/* Section 10: Contact Us & Map Details */}
        <Contact />
      </main>

      {/* Footer Info */}
      <Footer />
    </div>
  );
}
