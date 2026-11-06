import React from 'react';
import { Sparkles, Calendar, Cake, ArrowDown, MapPin, Instagram, Star, Award, Heart } from 'lucide-react';
import { siteData } from '../content/siteData';

interface HeroProps {
  onOpenReservation: () => void;
  onOpenCelebration: () => void;
  onOpenCakeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenReservation,
  onOpenCelebration,
  onOpenCakeModal,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen bg-deep-espresso text-creamy-white flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Ambience Layers & Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-chocolate-brown/40 via-deep-espresso to-deep-espresso" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-muted-golden/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-soft-caramel/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative luxury architectural lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C5A46D_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Headline & Introduction */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-chocolate/40 border border-gold/30 text-beige text-xs uppercase tracking-widest backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
              <span>Haridwar's Premier Rooftop Destination</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-cream leading-[1.08]">
              Where Culinary Art <br />
              <span className="font-italic font-normal italic gold-gradient-text">
                Meets Celebration
              </span>
            </h1>

            {/* Brand Essence Sub-Headline */}
            <p className="text-base sm:text-lg text-warm-beige/90 max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed font-light">
              Experience the finest blend of an elevated rooftop restaurant, an artisan celebration bakery, and Haridwar’s most cherished event destination—under the open sky.
            </p>

            {/* Service Trio Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs tracking-wider uppercase text-beige/80">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                Fine Rooftop Dining
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                Artisan Patisserie & Cakes
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                Bespoke Celebrations
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenReservation}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-muted-golden hover:bg-soft-caramel text-deep-espresso font-semibold rounded-full shadow-lg hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5 text-sm uppercase tracking-wider"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table</span>
              </button>

              <button
                onClick={onOpenCakeModal}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 border border-muted-golden/60 hover:border-muted-golden text-cream hover:bg-muted-golden/10 font-semibold rounded-full transition-all duration-300 text-sm uppercase tracking-wider"
              >
                <Cake className="w-4 h-4 text-gold" />
                <span>Order Custom Cake</span>
              </button>

              <button
                onClick={onOpenCelebration}
                className="w-full sm:w-auto text-xs uppercase tracking-widest text-warm-beige hover:text-gold transition-colors py-2 underline decoration-gold/60 underline-offset-4"
              >
                Plan a Celebration →
              </button>
            </div>

            {/* Verified Location & Social Indicator */}
            <div className="pt-6 border-t border-chocolate/40 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-warm-beige/70">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>Uncha Pull, Arya Nagar Chowk, Haridwar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                <span>5-Star Rooftop Experience</span>
              </div>
              <a
                href={siteData.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gold hover:text-warm-beige transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@{siteData.brand.instagramHandle}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Editorial Framed Instagram Live Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Decorative Gold Frame */}
              <div className="absolute -inset-3 rounded-editorial-lg border border-gold/30 opacity-70 pointer-events-none transform -rotate-1" />
              <div className="absolute -inset-1 rounded-editorial-lg border border-caramel/20 pointer-events-none transform rotate-1" />

              {/* Main Framed Card (Instagram Aesthetic with Luxury Editorial Feel) */}
              <div className="relative bg-chocolate-brown/80 border border-gold/40 rounded-editorial-lg p-5 shadow-luxury-lg backdrop-blur-md overflow-hidden text-cream">
                
                {/* Card Top: Instagram Handle Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-warm-beige/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-gold p-0.5 bg-deep-espresso flex items-center justify-center">
                      <span className="font-serif font-bold text-gold text-sm">M</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-xs tracking-wide text-cream">
                          meghamrestaurant
                        </span>
                        <span className="w-3.5 h-3.5 rounded-full bg-gold/90 text-deep-espresso flex items-center justify-center text-[8px] font-bold">
                          ✓
                        </span>
                      </div>
                      <span className="text-[10px] text-warm-beige/70">
                        Haridwar, Uttarakhand • Rooftop Café
                      </span>
                    </div>
                  </div>

                  <a
                    href={siteData.brand.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-gold hover:text-cream transition flex items-center gap-1"
                  >
                    <span>Follow</span>
                  </a>
                </div>

                {/* Media Showcase Window (Framed Luxury View of Rooftop Ambience & Patisserie) */}
                <div className="relative my-3 rounded-xl overflow-hidden aspect-[4/5] bg-deep-espresso flex flex-col justify-between p-6 border border-gold/20 shadow-inner group">
                  
                  {/* Subtle Background Artistry Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso via-deep-espresso/60 to-transparent" />
                  
                  {/* Floating Tags */}
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full bg-deep-espresso/80 border border-gold/40 text-[10px] font-semibold tracking-wider uppercase text-gold">
                      Rooftop Magic
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-deep-espresso/80 text-[10px] text-cream flex items-center gap-1">
                      <Heart className="w-3 h-3 text-red-400 fill-red-400" />
                      1.5k+
                    </span>
                  </div>

                  {/* Centered Editorial Art */}
                  <div className="relative z-10 text-center my-auto px-4 py-6 border border-gold/30 rounded-lg bg-deep-espresso/60 backdrop-blur-sm">
                    <span className="font-serif italic text-gold text-lg block mb-1">
                      The Megham Experience
                    </span>
                    <p className="font-serif text-2xl font-bold text-cream tracking-tight">
                      Open Skies, Warm Feasts & Sweet Celebrations
                    </p>
                    <p className="text-xs text-warm-beige/80 mt-2 font-light">
                      Extracting authentic moments daily from our Instagram feed.
                    </p>
                  </div>

                  {/* Card Bottom Inside Frame */}
                  <div className="relative z-10 flex items-center justify-between text-xs text-warm-beige/90 pt-3 border-t border-warm-beige/10">
                    <span className="text-[11px] italic">Live from @meghamrestaurant</span>
                    <a
                      href={siteData.brand.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-medium text-gold hover:underline flex items-center gap-1"
                    >
                      <Instagram className="w-3 h-3" />
                      <span>View on Instagram</span>
                    </a>
                  </div>
                </div>

                {/* Card Footer: Verified Highlights */}
                <div className="space-y-2 pt-1 text-xs">
                  <div className="flex items-center gap-2 text-warm-beige/90">
                    <span className="font-semibold text-cream">meghamrestaurant</span>
                    <span className="text-warm-beige/80 truncate">
                      Evenings at Megham are pure poetry ✨
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-warm-beige/60">
                    <span>140+ Stories & Moments Shared</span>
                    <span className="text-gold font-medium">#MeghamHaridwar</span>
                  </div>
                </div>

              </div>

              {/* Decorative Floating Pill */}
              <div className="absolute -bottom-4 -left-4 bg-creamy-white text-deep-espresso border border-gold p-3 rounded-2xl shadow-luxury flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-warm-beige flex items-center justify-center text-deep-espresso">
                  <Award className="w-4 h-4 text-chocolate-brown" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold leading-tight">Celebration Hub</p>
                  <p className="text-[10px] text-chocolate-brown/80">Candlelight & Birthdays</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <a
        href="#story"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 text-warm-beige/60 hover:text-gold transition-colors"
        aria-label="Scroll to Our Story"
      >
        <span className="text-[10px] uppercase tracking-widest font-light">Scroll to Explore</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-gold" />
      </a>
    </section>
  );
};
