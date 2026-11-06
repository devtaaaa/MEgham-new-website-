import React, { useState } from 'react';
import { Sparkles, PartyPopper, Heart, Users, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { siteData, CelebrationType } from '../content/siteData';

interface CelebrationsSectionProps {
  onOpenCelebrationModal: (occasion?: string) => void;
}

export const CelebrationsSection: React.FC<CelebrationsSectionProps> = ({
  onOpenCelebrationModal,
}) => {
  const [selectedCelebration, setSelectedCelebration] = useState<CelebrationType>(siteData.celebrations[0]);

  return (
    <section id="celebrations" className="py-24 bg-deep-espresso text-creamy-white relative overflow-hidden">
      {/* Background Ambience & Lighting Effect */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-muted-golden/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-soft-caramel/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-golden px-4 py-1.5 rounded-full bg-chocolate-brown/50 border border-muted-golden/30 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Haridwar’s Celebration Destination
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight">
            Celebrate Under The Stars <br />
            <span className="font-italic italic font-normal gold-gradient-text">
              At Megham Rooftop
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
          <p className="text-sm sm:text-base text-warm-beige/85 leading-relaxed font-light">
            From candlelit romantic gazebos and joyous birthday parties to auspicious family reunions and corporate dinners, Megham curates bespoke settings that elevate every moment.
          </p>
        </div>

        {/* Occasion Selector Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {siteData.celebrations.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedCelebration(item)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-300 ${
                selectedCelebration.id === item.id
                  ? 'bg-muted-golden text-deep-espresso shadow-gold-glow scale-105'
                  : 'bg-chocolate-brown/40 text-warm-beige hover:bg-chocolate-brown/70 border border-gold/20'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Highlighted Celebration Feature Card */}
        <div className="bg-chocolate-brown/70 border border-gold/40 rounded-editorial-lg p-8 sm:p-12 shadow-luxury-lg backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold font-bold block mb-1">
                  {selectedCelebration.instagramTag}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-cream">
                  {selectedCelebration.title}
                </h3>
                <p className="font-serif italic text-warm-beige/80 text-base sm:text-lg mt-1">
                  "{selectedCelebration.subtitle}"
                </p>
              </div>

              <p className="text-sm text-warm-beige/90 leading-relaxed font-light">
                {selectedCelebration.description}
              </p>

              {/* Package Inclusions */}
              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase tracking-wider text-gold font-semibold block">
                  Included Arrangements & Features:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedCelebration.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs text-warm-beige/90">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event Specs */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-warm-beige/10 text-xs">
                <div>
                  <span className="text-warm-beige/60 block text-[10px] uppercase">Atmosphere & Vibe:</span>
                  <span className="text-cream font-semibold">{selectedCelebration.vibe}</span>
                </div>
                <div className="border-l border-warm-beige/20 pl-4">
                  <span className="text-warm-beige/60 block text-[10px] uppercase">Capacity / Scale:</span>
                  <span className="text-gold font-semibold">{selectedCelebration.idealFor}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onOpenCelebrationModal(selectedCelebration.title)}
                  className="px-8 py-3.5 bg-muted-golden hover:bg-soft-caramel text-deep-espresso font-bold text-xs uppercase tracking-wider rounded-full shadow-lg hover:shadow-gold-glow transition-all"
                >
                  Make Your Celebration Special at Megham
                </button>
                <a
                  href={`tel:${siteData.brand.phone}`}
                  className="px-6 py-3.5 border border-muted-golden/60 hover:border-muted-golden text-cream hover:bg-muted-golden/10 font-medium text-xs uppercase tracking-wider rounded-full transition-all text-center"
                >
                  Call Event Planner
                </a>
              </div>
            </div>

            {/* Right Card: Magazine Frame with Celebration Details */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-deep-espresso/80 border border-gold/40 p-6 shadow-luxury text-center space-y-6">
                
                <div className="w-16 h-16 rounded-full bg-muted-golden/20 border border-gold flex items-center justify-center mx-auto text-gold">
                  <PartyPopper className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-warm-beige/70">
                    Bespoke Event Coordination
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-cream">
                    Tailored Packages & Thematic Decor
                  </h4>
                  <p className="text-xs text-warm-beige/80 font-light leading-relaxed">
                    Our team handles everything from custom balloon arches, fairy light gazebos, and live cake presentations to grand family feast spreads.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-chocolate-brown/50 border border-gold/20 text-left space-y-2 text-xs">
                  <div className="flex justify-between items-center text-warm-beige/90">
                    <span className="font-semibold text-cream">Custom Cake Pairing:</span>
                    <span className="text-gold font-bold">Megham Bakery</span>
                  </div>
                  <div className="flex justify-between items-center text-warm-beige/90">
                    <span className="font-semibold text-cream">Table Decoration:</span>
                    <span className="text-gold font-bold">Included</span>
                  </div>
                  <div className="flex justify-between items-center text-warm-beige/90">
                    <span className="font-semibold text-cream">Rooftop Sky View:</span>
                    <span className="text-gold font-bold">Open Air</span>
                  </div>
                </div>

                <p className="text-[11px] text-warm-beige/60 italic">
                  Advance booking advised for weekends and festival dates.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Celebration Showcase Grid for other Occasions */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.celebrations.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCelebration(item)}
              className={`p-6 rounded-editorial border cursor-pointer transition-all duration-300 ${
                selectedCelebration.id === item.id
                  ? 'bg-chocolate-brown border-gold shadow-gold-glow/20'
                  : 'bg-chocolate-brown/30 border-gold/20 hover:border-gold/50 hover:bg-chocolate-brown/50'
              }`}
            >
              <span className="text-[10px] uppercase font-bold tracking-wider text-gold block mb-1">
                {item.idealFor}
              </span>
              <h4 className="font-serif text-xl font-bold text-cream mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-warm-beige/80 line-clamp-2 font-light">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
