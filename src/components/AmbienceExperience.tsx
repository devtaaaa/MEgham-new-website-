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

      </div>
    </section>
  );
};
