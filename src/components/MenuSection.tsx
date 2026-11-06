import React, { useState } from 'react';
import { Utensils, Sparkles, Leaf, MessageCircle, Star } from 'lucide-react';
import { siteData, MenuItem } from '../content/siteData';

interface MenuSectionProps {
  onOpenReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenReservation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Specialties' },
    { id: 'starters', label: 'Starters' },
    { id: 'indian', label: 'Indian Cuisine' },
    { id: 'main-course', label: 'Main Course & Biryani' },
    { id: 'chinese', label: 'Chinese & Asian' },
    { id: 'pizza-fastfood', label: 'Pizza & Fast Food' },
    { id: 'beverages', label: 'Beverages & Mocktails' },
    { id: 'desserts', label: 'Desserts' },
  ];

  const filteredItems = activeCategory === 'all'
    ? siteData.menu
    : siteData.menu.filter((item) => item.category === activeCategory);

  const handleOrderInquiry = (item: MenuItem) => {
    const text = `*Menu Inquiry - Megham Restaurant*%0A%0AHello, I would like to inquire about ordering: *${encodeURIComponent(item.name)}* (${item.categoryLabel}).%0APlease let me know the availability and pricing.`;
    window.open(`https://wa.me/${siteData.brand.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="menu" className="py-24 bg-creamy-white text-espresso relative overflow-hidden">
      {/* Background Decorative Gold Touches */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-warm-beige/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-caramel px-4 py-1.5 rounded-full bg-beige/50 border border-gold/30 inline-block">
            Culinary Craftsmanship
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso">
            Our Rooftop Menu
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
          <p className="text-sm sm:text-base text-chocolate/80 leading-relaxed font-light">
            Every dish on the Megham menu is thoughtfully prepared with farm-fresh produce, royal spices, and authentic vegetarian culinary traditions.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-espresso text-cream shadow-luxury shadow-gold-glow/20'
                  : 'bg-beige/40 text-chocolate hover:bg-beige/70 border border-gold/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-cream border border-gold/25 hover:border-gold/60 rounded-editorial p-6 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {item.dietary === 'veg' && (
                        <span className="w-3.5 h-3.5 border border-green-600 rounded-sm flex items-center justify-center p-0.5" title="Pure Vegetarian">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                        </span>
                      )}
                      {item.dietary === 'chef-special' && (
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-caramel bg-beige px-2 py-0.5 rounded-full">
                          <Sparkles className="w-3 h-3 text-gold" />
                          Signature
                        </span>
                      )}
                      {item.dietary === 'jain-available' && (
                        <span className="text-[10px] uppercase font-semibold text-chocolate/70 bg-beige/50 px-2 py-0.5 rounded-full">
                          Jain Option Available
                        </span>
                      )}
                      <span className="text-[10px] uppercase tracking-wider text-caramel/90 font-medium">
                        {item.categoryLabel}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-espresso group-hover:text-caramel transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  {item.badge && (
                    <span className="text-[11px] font-semibold text-caramel px-2.5 py-1 bg-beige/50 border border-gold/30 rounded-full whitespace-nowrap">
                      {item.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-chocolate/80 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-beige/60 flex items-center justify-between">
                <span className="text-xs font-serif italic text-caramel">
                  {item.priceNote || 'Freshly Crafted'}
                </span>
                <button
                  onClick={() => handleOrderInquiry(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-espresso hover:text-gold px-3.5 py-1.5 rounded-full bg-beige/40 hover:bg-espresso hover:text-cream transition-all duration-200"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-gold" />
                  <span>Inquire / Order</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Menu Footer CTA Box */}
        <div className="mt-16 bg-gradient-to-r from-espresso via-chocolate to-espresso text-cream rounded-editorial-lg p-8 sm:p-10 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-gold font-semibold">
              Rooftop Dining Reservations
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream">
              Craving Our Chef’s Signatures Under The Stars?
            </h3>
            <p className="text-xs sm:text-sm text-warm-beige/80 font-light max-w-xl">
              Book your rooftop table ahead of time for weekend evenings or candlelight dinners to ensure prime seating.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={onOpenReservation}
              className="px-6 py-3.5 bg-gold hover:bg-caramel text-espresso font-semibold text-xs uppercase tracking-wider rounded-full shadow-md transition-all whitespace-nowrap"
            >
              Reserve Table Now
            </button>
            <a
              href={`https://wa.me/${siteData.brand.whatsappNumber}?text=Hi%20Megham,%20I%20would%20like%20to%20view%20the%20complete%20menu%20and%20specials.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 border border-gold/40 hover:border-gold text-cream hover:bg-cream/10 font-semibold text-xs uppercase tracking-wider rounded-full transition-all text-center whitespace-nowrap"
            >
              Get Full Menu on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
