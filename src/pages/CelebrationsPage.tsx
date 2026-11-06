import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { PhotoFramePlaceholder } from '../components/PhotoFramePlaceholder';
import { Sparkles, PartyPopper, Heart, Calendar, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { siteData, CelebrationType } from '../content/siteData';

interface CelebrationsPageProps {
  onOpenCelebrationModal: (occasion?: string) => void;
}

export const CelebrationsPage: React.FC<CelebrationsPageProps> = ({
  onOpenCelebrationModal,
}) => {
  const [selectedCelebration, setSelectedCelebration] = useState<CelebrationType>(siteData.celebrations[0]);

  return (
    <div className="bg-cream text-espresso min-h-screen">
      {/* Page Header */}
      <PageHeader
        badge="Haridwar's Premier Event Deck"
        title="Celebrations & Milestone Events"
        subtitle="Where every birthday, romantic anniversary, and family reunion is elevated into an unforgettable rooftop celebration under the stars."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Celebrations' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        
        {/* Main Event Showcase Card */}
        <div className="bg-deep-espresso text-creamy-white border border-gold/40 rounded-editorial-lg p-8 sm:p-14 shadow-luxury relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-muted-golden/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-muted-golden font-bold px-3.5 py-1 bg-chocolate-brown/60 rounded-full border border-gold/30 inline-block">
                {selectedCelebration.instagramTag}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream leading-tight">
                {selectedCelebration.title}
              </h2>

              <p className="font-serif italic text-warm-beige/85 text-lg">
                "{selectedCelebration.subtitle}"
              </p>

              <p className="text-sm text-warm-beige/90 leading-relaxed font-light">
                {selectedCelebration.description}
              </p>

              {/* Package Inclusions */}
              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase tracking-wider text-gold font-semibold block">
                  Included Arrangements:
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

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onOpenCelebrationModal(selectedCelebration.title)}
                  className="px-8 py-4 bg-muted-golden hover:bg-soft-caramel text-deep-espresso font-bold text-xs uppercase tracking-wider rounded-full shadow-lg hover:shadow-gold-glow transition-all"
                >
                  Make Your Celebration Special at Megham
                </button>
                <a
                  href={`tel:${siteData.brand.phone}`}
                  className="px-6 py-4 border border-muted-golden/60 hover:border-muted-golden text-cream hover:bg-muted-golden/10 font-medium text-xs uppercase tracking-wider rounded-full transition-all text-center"
                >
                  Call Event Coordinator
                </a>
              </div>
            </div>

            {/* Right Photo Frame Space */}
            <div className="lg:col-span-5">
              <PhotoFramePlaceholder
                title={`${selectedCelebration.title} Setup`}
                category="Rooftop Event"
                caption={`Bespoke decor arrangement for ${selectedCelebration.title.toLowerCase()}.`}
                aspectRatio="portrait"
              />
            </div>

          </div>
        </div>

        {/* Occasions Selector Cards Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-caramel font-semibold">
              Choose Your Occasion
            </span>
            <h3 className="font-serif text-3xl font-bold text-espresso">
              Celebrations Crafted for Every Milestone
            </h3>
            <p className="text-xs sm:text-sm text-chocolate/80 font-light">
              Click any celebration below to view package highlights and customization options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.celebrations.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedCelebration(item)}
                className={`p-7 rounded-editorial border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  selectedCelebration.id === item.id
                    ? 'bg-creamy-white border-gold shadow-luxury scale-[1.02]'
                    : 'bg-cream border-gold/25 hover:border-gold hover:bg-creamy-white'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-caramel bg-beige/50 px-2.5 py-1 rounded-full">
                      {item.idealFor}
                    </span>
                    <span className="text-gold font-serif italic text-xs">
                      {item.vibe}
                    </span>
                  </div>

                  <h4 className="font-serif text-2xl font-bold text-espresso">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-chocolate/80 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-beige flex items-center justify-between text-xs text-caramel font-semibold">
                  <span>View Full Details</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Celebration Photo Spaces Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-caramel font-semibold">
              Event Gallery Spaces
            </span>
            <h3 className="font-serif text-3xl font-bold text-espresso">
              Decor, Ambiance & Memories
            </h3>
            <p className="text-xs sm:text-sm text-chocolate/80 font-light">
              Visual photo spaces for real setups, lighting, and guest smiles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <PhotoFramePlaceholder
              title="Birthday Marquee & Balloons"
              category="Birthdays"
              caption="Customized balloon arch with LED letters and sparkler entry."
              aspectRatio="square"
            />
            <PhotoFramePlaceholder
              title="Candlelight Gazebo Table"
              category="Anniversaries"
              caption="Rose petals, scented candles, and couple dinner arrangement."
              aspectRatio="square"
            />
            <PhotoFramePlaceholder
              title="Grand Family Reunion Feast"
              category="Family Events"
              caption="Spacious rooftop banquet setup for multi-generational dining."
              aspectRatio="square"
            />
            <PhotoFramePlaceholder
              title="Festive Karwa Chauth Rooftop"
              category="Festive Nights"
              caption="Traditional moon-viewing setup under starry skies."
              aspectRatio="square"
            />
          </div>
        </div>

        {/* Planning Guarantee Callout */}
        <div className="bg-creamy-white border border-gold/40 rounded-editorial-lg p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-caramel font-semibold">
              Hassle-Free Event Coordination
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-espresso">
              Have A Special Vision In Mind?
            </h4>
            <p className="text-xs sm:text-sm text-chocolate/80 font-light max-w-xl">
              Connect directly with our celebration team to arrange custom decorations, music playlists, and special dietary menus.
            </p>
          </div>

          <button
            onClick={() => onOpenCelebrationModal()}
            className="px-8 py-4 bg-espresso hover:bg-chocolate text-cream font-bold text-xs uppercase tracking-wider rounded-full shadow-luxury transition-all whitespace-nowrap"
          >
            Plan Your Event
          </button>
        </div>

      </div>
    </div>
  );
};
