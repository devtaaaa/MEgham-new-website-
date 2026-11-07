import React from 'react';
import { Sunset, Moon, Sparkles, Music, Wind, ShieldCheck } from 'lucide-react';

export const AmbienceExperience: React.FC = () => {
  const highlights = [
    {
      icon: Sunset,
      title: 'Golden Hour & Sunsets',
      description: 'Watch the sun dip behind the Shivalik foothills as amber and violet skies bathe the rooftop in warm cinematic light.',
    },
    {
      icon: Moon,
      title: 'Starry Sky Evenings',
      description: 'Dine under thousands of twinkling stars and warm overhead fairy lights that create an enchanting celebratory mood.',
    },
    {
      icon: Music,
      title: 'Acoustic Soundscapes',
      description: 'Handpicked acoustic, jazz, and soulful melodies played at just the right volume to foster intimate conversation.',
    },
    {
      icon: Wind,
      title: 'Gentle Rooftop Breeze',
      description: 'Escape the crowded streets below and relax in our refreshing elevated open-air atmosphere with panoramic city views.',
    },
  ];

  return (
    <section className="py-24 bg-cream text-espresso relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-caramel px-4 py-1.5 rounded-full bg-beige/60 border border-gold/30 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Atmosphere & Dining Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso">
            Elevated Above The City
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
          <p className="text-sm sm:text-base text-chocolate/80 leading-relaxed font-light">
            Every element of Megham’s rooftop has been thoughtfully composed—from ambient illumination to open sky cabanas—to provide a peaceful retreat for food lovers and dreamers.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div
                key={h.title}
                className="bg-creamy-white border border-gold/30 hover:border-gold rounded-editorial p-6 shadow-sm hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-beige/50 border border-gold/30 flex items-center justify-center text-chocolate">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-espresso">
                    {h.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-chocolate/80 leading-relaxed font-light">
                    {h.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Authentic Ambience Showcase Banner */}
        <div className="mt-14 relative rounded-editorial-lg overflow-hidden border border-gold/40 shadow-luxury group">
          <div className="relative aspect-[21/9] min-h-[300px]">
            <img
              src="/images/food/megham_table_setup.jpg"
              alt="Megham Rooftop Restaurant Dining Setup"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso via-deep-espresso/30 to-deep-espresso/40 pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 z-10 text-cream">
              <div className="space-y-1.5 max-w-xl">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold bg-deep-espresso/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gold/40">
                  Megham Restaurant & Rooftop
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  Contemporary Elegance Under An Open Sky
                </h3>
                <p className="text-xs sm:text-sm text-warm-beige/90 font-light">
                  Dark marble tables, warm ambient glow, and fine vegetarian gastronomy perched atop Haridwar.
                </p>
              </div>

              <a
                href="/gallery"
                className="px-6 py-2.5 rounded-full bg-gold hover:bg-caramel text-deep-espresso text-xs font-semibold uppercase tracking-wider transition-all shadow-md whitespace-nowrap"
              >
                View Full Gallery →
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
