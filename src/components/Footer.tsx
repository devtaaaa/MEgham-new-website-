import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { siteData } from '../content/siteData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-deep-espresso text-warm-beige relative border-t border-chocolate-brown/80 overflow-hidden">
      {/* Decorative Warm Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-24 bg-muted-golden/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/">
              <BrandLogo variant="light" size="lg" showTagline={true} />
            </Link>
            
            <p className="text-xs sm:text-sm text-warm-beige/80 max-w-sm leading-relaxed font-light">
              Haridwar’s premier elevated culinary destination. Celebrating rich flavours, bespoke artisan cakes, and heartfelt rooftop gatherings under open skies.
            </p>

            <div className="pt-2 text-xs text-muted-golden flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span>Pure Vegetarian & Jain Friendly Specialties</span>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="font-serif text-cream text-base font-bold mb-4 tracking-wider uppercase text-xs">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-gold transition">Home</Link>
              </li>
              <li>
                <Link to="/story" className="hover:text-gold transition">Our Story & Philosophy</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-gold transition">Our Rooftop Menu</Link>
              </li>
              <li>
                <Link to="/bakery" className="hover:text-gold transition">Megham Bakery & Cakes</Link>
              </li>
              <li>
                <Link to="/celebrations" className="hover:text-gold transition">Celebrations & Packages</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold transition">Editorial Gallery</Link>
              </li>
              <li>
                <Link to="/instagram" className="hover:text-gold transition">The Megham Moments</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition">Location & Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Bakery & Celebrations */}
          <div>
            <h4 className="font-serif text-cream text-base font-bold mb-4 tracking-wider uppercase text-xs">
              Specialties
            </h4>
            <ul className="space-y-2 text-xs text-warm-beige/80">
              <li>• Birthday Celebration Setups</li>
              <li>• Rooftop Candlelight Dinners</li>
              <li>• Custom Tiered Designer Cakes</li>
              <li>• Belgian Chocolate Truffles</li>
              <li>• Lotus Biscoff Cheesecakes</li>
              <li>• Sagai & Pre-Wedding Dinners</li>
              <li>• Corporate Team Celebrations</li>
            </ul>
          </div>

          {/* Column 5: Contact & Social */}
          <div className="space-y-3">
            <h4 className="font-serif text-cream text-base font-bold mb-4 tracking-wider uppercase text-xs">
              Visit Us
            </h4>
            <div className="text-xs space-y-2 text-warm-beige/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{siteData.brand.landmark}, Haridwar</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:${siteData.brand.phone}`} className="hover:text-gold">
                  {siteData.brand.phoneFormatted}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={siteData.brand.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  @{siteData.brand.instagramHandle}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold hover:text-cream py-1 border-b border-gold/40"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-chocolate-brown/80 flex flex-col sm:flex-row items-center justify-between text-xs text-warm-beige/60 gap-4">
          <p>© {new Date().getFullYear()} Megham Restaurant & Bakery. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-gold fill-gold" />
            <span>for Megham, Haridwar</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
