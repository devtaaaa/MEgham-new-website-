import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { PhotoFramePlaceholder } from '../components/PhotoFramePlaceholder';
import { Cake, Sparkles, MessageCircle, Heart, ChefHat, Gift, CheckCircle2 } from 'lucide-react';
import { siteData } from '../content/siteData';

interface BakeryPageProps {
  onOpenCakeModal: (cakeTitle?: string) => void;
}

export const BakeryPage: React.FC<BakeryPageProps> = ({ onOpenCakeModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Patisserie Creations' },
    { id: 'birthday-cakes', label: 'Birthday Cakes' },
    { id: 'custom-cakes', label: 'Customised Designer Cakes' },
    { id: 'pastries', label: 'Pastries & Cheesecakes' },
    { id: 'hampers', label: 'Celebration Hampers' },
  ];

  const filteredBakery = activeCategory === 'all'
    ? siteData.bakery
    : siteData.bakery.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-cream text-espresso min-h-screen">
      {/* Page Header */}
      <PageHeader
        badge="In-House Patisserie Studio"
        title="Megham Artisan Bakery & Cake Atelier"
        subtitle="Where Belgian cocoa, velvety mascarpone, and edible artistry create unforgettable centerpieces for your sweetest milestones."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Megham Bakery' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        
        {/* Custom Cake Studio Hero Showcase */}
        <div className="bg-gradient-to-br from-beige/50 via-cream to-beige/40 border border-gold/40 rounded-editorial-lg p-8 sm:p-14 shadow-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-widest text-caramel font-bold px-3 py-1 bg-cream rounded-full border border-gold/30 inline-flex items-center gap-1.5">
                <ChefHat className="w-3.5 h-3.5 text-gold" />
                Custom Cake Consultation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso leading-tight">
                Your Dream Celebration Cake, <br />
                <span className="font-italic italic font-normal text-caramel">
                  Bespoke & Handcrafted
                </span>
              </h2>
              <p className="text-sm text-chocolate/85 font-light leading-relaxed">
                Whether you envision a minimalist floral pastel tier, a rich Belgian truffle tower with gold leaf accents, or an imaginative children's cartoon cake, our master pastry chefs turn your concept into delicious reality.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-chocolate/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>100% Pure Vegetarian & Eggless recipe perfection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>Made with genuine Belgian chocolate, real dairy butter, and fresh compotes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>Custom sizes from 0.5 kg to 5+ kg grand stacked tiers</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onOpenCakeModal('Custom Cake Studio')}
                  className="px-8 py-4 bg-espresso hover:bg-chocolate text-cream font-bold text-xs uppercase tracking-wider rounded-full shadow-luxury hover:shadow-gold-glow transition-all flex items-center justify-center gap-2"
                >
                  <Cake className="w-4 h-4 text-gold" />
                  <span>Order Custom Cake Now</span>
                </button>
              </div>
            </div>

            {/* Visual Photo Space for Custom Cake */}
            <div className="lg:col-span-5">
              <PhotoFramePlaceholder
                title="Bespoke Floral Celebration Cake"
                category="Patisserie Atelier"
                caption="Two-tier anniversary cake with edible gold leaf and fresh pastel florets."
                aspectRatio="portrait"
              />
            </div>

          </div>
        </div>

        {/* Visual Bakery Gallery Spaces */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-caramel font-semibold">
              Patisserie Portfolio
            </span>
            <h3 className="font-serif text-3xl font-bold text-espresso">
              Featured Cake Styles & Desserts
            </h3>
            <p className="text-xs sm:text-sm text-chocolate/80 font-light">
              Spaces for real photographs of our baked creations and celebratory desserts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <PhotoFramePlaceholder
              title="Belgian Dark Truffle Cake"
              category="Birthday Cakes"
              caption="Ultra-rich dark cocoa ganache layered with moist sponge."
              aspectRatio="square"
            />
            <PhotoFramePlaceholder
              title="Lotus Biscoff Cheesecake"
              category="Pastries"
              caption="Creamy New York cheesecake smothered in speculoos glaze."
              aspectRatio="square"
            />
            <PhotoFramePlaceholder
              title="Fresh Fruit Summer Gateau"
              category="Celebration Cakes"
              caption="Light vanilla sponge with seasonal kiwis, berries, and peaches."
              aspectRatio="square"
            />
            <PhotoFramePlaceholder
              title="Luxury Festive Gifting Hamper"
              category="Artisan Gifting"
              caption="Handcrafted cocoa truffles, almond florentines, and gourmet jars."
              aspectRatio="square"
            />
          </div>
        </div>

        {/* Catalog Section */}
        <div className="space-y-10">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-chocolate text-cream shadow-luxury'
                    : 'bg-beige/40 text-chocolate hover:bg-beige/70 border border-gold/25'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBakery.map((product) => (
              <div
                key={product.id}
                className="bg-creamy-white border border-gold/30 hover:border-gold/70 rounded-editorial p-7 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-caramel bg-beige/50 px-3 py-1 rounded-full border border-gold/20">
                      {product.categoryLabel}
                    </span>
                    <span className="text-[11px] font-semibold text-chocolate flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-gold" />
                      {product.tag}
                    </span>
                  </div>

                  <h4 className="font-serif text-2xl font-bold text-espresso group-hover:text-caramel transition-colors">
                    {product.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-chocolate/80 font-light leading-relaxed">
                    {product.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] uppercase tracking-wider text-caramel font-semibold block mb-1.5">
                      Flavour Selections:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.flavours.map((flavour) => (
                        <span
                          key={flavour}
                          className="text-[11px] px-2.5 py-0.5 rounded-md bg-beige/40 text-chocolate/90 border border-beige"
                        >
                          {flavour}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-[11px] text-chocolate/75 pt-1">
                    <span className="font-semibold text-chocolate">Best For: </span>
                    {product.occasion}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-beige flex items-center justify-between">
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

        {/* How to Order 4 Steps */}
        <div className="bg-creamy-white border border-gold/40 rounded-editorial-lg p-8 sm:p-12 shadow-sm space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-caramel font-semibold">
              Simple 4-Step Process
            </span>
            <h3 className="font-serif text-3xl font-bold text-espresso">
              How To Order A Custom Cake
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-5 rounded-xl bg-cream border border-gold/20 space-y-2">
              <span className="w-8 h-8 rounded-full bg-gold text-espresso font-bold text-sm flex items-center justify-center mx-auto">1</span>
              <h5 className="font-serif font-bold text-base text-espresso">Choose Style & Occasion</h5>
              <p className="text-xs text-chocolate/80 font-light">Select from tiered birthday cakes, floral anniversaries, or theme designs.</p>
            </div>
            <div className="p-5 rounded-xl bg-cream border border-gold/20 space-y-2">
              <span className="w-8 h-8 rounded-full bg-gold text-espresso font-bold text-sm flex items-center justify-center mx-auto">2</span>
              <h5 className="font-serif font-bold text-base text-espresso">Pick Your Gourmet Flavour</h5>
              <p className="text-xs text-chocolate/80 font-light">Belgian Truffle, Biscoff, Red Velvet, Nutella Hazelnut, or Fruit Gateau.</p>
            </div>
            <div className="p-5 rounded-xl bg-cream border border-gold/20 space-y-2">
              <span className="w-8 h-8 rounded-full bg-gold text-espresso font-bold text-sm flex items-center justify-center mx-auto">3</span>
              <h5 className="font-serif font-bold text-base text-espresso">Share Notes or Photo</h5>
              <p className="text-xs text-chocolate/80 font-light">Send your Pinterest/Instagram reference or message for the topper.</p>
            </div>
            <div className="p-5 rounded-xl bg-cream border border-gold/20 space-y-2">
              <span className="w-8 h-8 rounded-full bg-gold text-espresso font-bold text-sm flex items-center justify-center mx-auto">4</span>
              <h5 className="font-serif font-bold text-base text-espresso">Fresh Handcrafting</h5>
              <p className="text-xs text-chocolate/80 font-light">Freshly baked and hand-finished for your rooftop celebration or pickup.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
