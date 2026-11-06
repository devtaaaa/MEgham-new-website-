import React from 'react';
import { Utensils, Cake, Sparkles, HeartHandshake, Sunset, GlassWater } from 'lucide-react';

export const BrandIntro: React.FC = () => {
  const pillars = [
    {
      icon: Utensils,
      title: 'Elevated Rooftop Dining',
      tagline: 'Flavours Under The Open Sky',
      description:
        'A carefully curated vegetarian culinary canvas bringing together rich North Indian heritage curries, sizzling starters, crisp artisanal thin-crust pizzas, and wok-tossed delights.',
      accent: 'border-gold/40 bg-cream/80',
    },
    {
      icon: Cake,
      title: 'Artisan Patisserie & Bakery',
      tagline: 'Handcrafted With Belgian Cocoa',
      description:
        'A dedicated in-house patisserie studio creating bespoke designer tiered cakes, Biscoff cheesecakes, delicate tea pastries, and celebration hampers made fresh for your milestones.',
      accent: 'border-caramel/40 bg-cream/80',
    },
    {
      icon: Sparkles,
      title: 'Celebration Destination',
      tagline: 'Where Memories Are Crafted',
      description:
        'The preferred destination in Haridwar for romantic candlelight evenings, fairy-lit gazebo birthdays, intimate anniversary banquets, and family milestone celebrations.',
      accent: 'border-chocolate/30 bg-cream/80',
    },
  ];

  return (
    <section id="story" className="py-24 bg-cream text-espresso relative overflow-hidden">
      {/* Decorative Warm Background Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-beige/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-caramel px-4 py-1.5 rounded-full bg-beige/60 border border-gold/30 inline-block">
            The Megham Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso leading-tight">
            More Than A Restaurant — <br />
            <span className="font-italic italic font-normal text-caramel">
              A Triad of Food, Bakery & Joy
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
          <p className="text-sm sm:text-base text-chocolate/80 leading-relaxed font-light">
            Founded with a passion for elevated hospitality, Megham combines the intimacy of a fine dining rooftop, the sweet mastery of an artisan bakery, and the celebratory spirit of life’s greatest milestones.
          </p>
        </div>

        {/* The 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`relative p-8 rounded-editorial border ${pillar.accent} shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group`}
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-beige/60 border border-gold/30 flex items-center justify-center text-chocolate group-hover:bg-gold group-hover:text-espresso transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-caramel font-semibold block mb-1">
                      {pillar.tagline}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-espresso">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-chocolate/80 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-beige/60 flex items-center justify-between text-xs text-caramel font-semibold">
                  <span className="uppercase tracking-wider">Explore Experience</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Quote Box */}
        <div className="mt-16 bg-beige/30 border border-gold/30 rounded-editorial-lg p-8 sm:p-12 text-center max-w-4xl mx-auto relative shadow-sm">
          <div className="font-serif text-4xl text-gold/40 leading-none mb-2">“</div>
          <p className="font-serif text-lg sm:text-2xl text-espresso italic max-w-2xl mx-auto leading-relaxed">
            Every dish we prepare, every tier of cake we frost, and every candle we light on our rooftop is dedicated to one purpose: making your moments memorable.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-caramel font-medium">
            <span>The Culinary & Patisserie Team</span>
            <span>•</span>
            <span>Megham Haridwar</span>
          </div>
        </div>

      </div>
    </section>
  );
};
