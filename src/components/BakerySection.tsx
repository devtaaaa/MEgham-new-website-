import React, { useState } from 'react';
import { Cake, Sparkles, MessageCircle, Heart, Gift, Award, ChefHat } from 'lucide-react';
import { siteData, BakeryItem } from '../content/siteData';

interface BakerySectionProps {
  onOpenCakeModal: (cakeTitle?: string) => void;
}

export const BakerySection: React.FC<BakerySectionProps> = ({ onOpenCakeModal }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'All Bakery Creations' },
    { id: 'birthday-cakes', label: 'Birthday Cakes' },
    { id: 'custom-cakes', label: 'Customised Designer Cakes' },
    { id: 'pastries', label: 'Pastries & Cheesecakes' },
    { id: 'hampers', label: 'Celebration Hampers' },
  ];

  const filteredBakery = activeTab === 'all'
    ? siteData.bakery
    : siteData.bakery.filter((item) => item.category === activeTab);

  return (
    <section id="bakery" className="py-24 bg-cream text-espresso relative overflow-hidden">
      {/* Background Sweet Patisserie Glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-caramel/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-caramel px-4 py-1.5 rounded-full bg-beige/60 border border-gold/30 inline-flex items-center gap-1.5">
            <Cake className="w-3.5 h-3.5 text-gold" />
            Artisan Patisserie Studio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso leading-tight">
            Megham Bakery & Cake Studio
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
          <p className="text-sm sm:text-base text-chocolate/80 leading-relaxed font-light">
            Every celebration deserves a masterpiece. From bespoke tiered birthday cakes and Lotus Biscoff cheesecakes to artisanal chocolate truffles, our patisserie crafts pure indulgence.
          </p>
        </div>

        {/* Custom Cake Studio Hero Feature Banner */}
        <div className="mb-16 bg-gradient-to-br from-beige/50 via-cream to-beige/40 border border-gold/40 rounded-editorial-lg p-8 sm:p-12 shadow-luxury relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-caramel font-bold px-3 py-1 bg-cream rounded-full border border-gold/30">
                <ChefHat className="w-3.5 h-3.5 text-gold" />
                Custom Cake Atelier
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-espresso">
                Design Your Dream Celebration Cake
              </h3>
              <p className="text-xs sm:text-sm text-chocolate/80 leading-relaxed font-light max-w-2xl">
                Have a specific theme, colour palette, or Pinterest design in mind? Share your inspiration photo from Instagram or elsewhere, select your favourite gourmet fillings, and our chefs will handcraft it with passion.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start text-xs font-medium text-chocolate">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  Belgian Chocolate Truffle
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  Multi-Tiered Stacking
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  Edible Gold & Fresh Florals
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  100% Pure Vegetarian
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center gap-3">
              <button
                onClick={() => onOpenCakeModal('Custom Designer Cake')}
                className="w-full sm:w-auto px-8 py-4 bg-espresso hover:bg-chocolate text-cream font-semibold text-xs uppercase tracking-wider rounded-full shadow-luxury hover:shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Cake className="w-4 h-4 text-gold" />
                <span>Order Custom Cake</span>
              </button>
              <span className="text-[11px] text-chocolate/70 italic">
                * Please order 24–48 hours in advance for custom tiered cakes
              </span>
            </div>

          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-chocolate text-cream shadow-luxury'
                  : 'bg-beige/40 text-chocolate hover:bg-beige/70 border border-gold/25'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bakery Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBakery.map((product) => (
            <div
              key={product.id}
              className="bg-creamy-white border border-gold/30 hover:border-gold/70 rounded-editorial p-6 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-caramel bg-beige/50 px-2.5 py-1 rounded-full border border-gold/20">
                    {product.categoryLabel}
                  </span>
                  <span className="text-[11px] font-semibold text-chocolate flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-gold" />
                    {product.tag}
                  </span>
                </div>

                {/* Product Title */}
                <h3 className="font-serif text-2xl font-bold text-espresso group-hover:text-caramel transition-colors">
                  {product.title}
                </h3>

                {/* Product Description */}
                <p className="text-xs sm:text-sm text-chocolate/80 font-light leading-relaxed">
                  {product.description}
                </p>

                {/* Flavours Available */}
                <div className="pt-2">
                  <span className="text-[11px] uppercase tracking-wider text-caramel/90 font-semibold block mb-1.5">
                    Available Flavours:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.flavours.map((flavour) => (
                      <span
                        key={flavour}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-beige/40 text-chocolate/90 border border-beige"
                      >
                        {flavour}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ideal Occasion */}
                <div className="text-[11px] text-chocolate/70">
                  <span className="font-semibold text-chocolate">Ideal for: </span>
                  {product.occasion}
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-beige/60 flex items-center justify-between">
                <span className="text-xs font-serif italic text-caramel">
                  Artisanal & Eggless
                </span>
                <button
                  onClick={() => onOpenCakeModal(product.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full bg-espresso hover:bg-chocolate text-cream transition-all duration-200 shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-gold" />
                  <span>Enquire / Order</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
