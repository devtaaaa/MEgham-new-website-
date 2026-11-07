import React, { useState } from 'react';
import { Sparkles, MessageCircle, Search, Coffee, Utensils, ArrowRight } from 'lucide-react';
import { siteData, MenuItem, CoffeeItem } from '../content/siteData';

interface MenuSectionProps {
  onOpenReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenReservation }) => {
  const [activeMenuType, setActiveMenuType] = useState<'restaurant' | 'coffeebar'>('restaurant');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const restaurantCategories = [
    { id: 'all', label: 'All Dishes' },
    { id: 'starters', label: 'Starters & Soups' },
    { id: 'tandoor', label: 'Tandoor & Sizzlers' },
    { id: 'chinese', label: 'Chinese & Dimsums' },
    { id: 'continental', label: 'Pastas & Bowls' },
    { id: 'pizza', label: 'Artisanal Pizzas' },
    { id: 'south-indian', label: 'Taste of South India' },
    { id: 'indian-curries', label: 'Royal Dals & Curries' },
    { id: 'breads-rice', label: 'Tandoor Breads & Biryani' },
    { id: 'desserts', label: 'Sweet Delicacies' },
  ];

  const coffeeBarCategories = [
    { id: 'all', label: 'All Brews & Drinks' },
    { id: 'classic-brews', label: 'Classic Brews' },
    { id: 'manual-brews', label: 'Manual Coffee Craft' },
    { id: 'cold-brews', label: 'Cold Brews' },
    { id: 'speciality', label: 'Megham Speciality Lattes' },
    { id: 'matcha', label: 'Matcha Studio' },
    { id: 'teas', label: 'Artisanal Teas' },
    { id: 'mocktails', label: 'Signature Mocktails' },
    { id: 'shakes', label: 'Shakes & Smoothies' },
  ];

  const currentCategories = activeMenuType === 'restaurant' ? restaurantCategories : coffeeBarCategories;

  // Filter items
  const rawItems = activeMenuType === 'restaurant' ? siteData.menu : siteData.coffeeBar;

  const filteredItems = rawItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOrderInquiry = (item: MenuItem | CoffeeItem) => {
    const text = `*Menu Inquiry - Megham Restaurant & Café*%0A%0AHello, I would like to inquire about ordering: *${encodeURIComponent(item.name)}* (${item.categoryLabel}) - *${item.priceFormatted}*.%0APlease let me know the availability.`;
    window.open(`https://wa.me/${siteData.brand.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="menu" className="py-24 bg-creamy-white text-espresso relative overflow-hidden">
      {/* Background Decorative Gold Touches */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-warm-beige/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-soft-caramel/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-caramel px-4 py-1.5 rounded-full bg-beige/50 border border-gold/30 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Pure Vegetarian Gastronomy & Coffee Bar
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso">
            Our Rooftop Culinary & Brew Menu
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
          <p className="text-sm sm:text-base text-chocolate/80 leading-relaxed font-light">
            Crafted with farm-fresh ingredients, slow-simmered royal spices, authentic clay tandoor sizzlers, and single-origin Arabica roasts.
          </p>
        </div>

        {/* Top Dual Menu Switcher: Restaurant Menu vs Megham Coffee Bar */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-full bg-beige/60 border border-gold/40 shadow-inner">
            <button
              onClick={() => {
                setActiveMenuType('restaurant');
                setActiveCategory('all');
              }}
              className={`flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-serif font-bold uppercase tracking-wider transition-all duration-300 ${
                activeMenuType === 'restaurant'
                  ? 'bg-deep-espresso text-cream shadow-luxury shadow-gold-glow/20'
                  : 'text-chocolate hover:text-espresso'
              }`}
            >
              <Utensils className="w-4 h-4 text-gold" />
              <span>Restaurant Menu</span>
            </button>
            <button
              onClick={() => {
                setActiveMenuType('coffeebar');
                setActiveCategory('all');
              }}
              className={`flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-serif font-bold uppercase tracking-wider transition-all duration-300 ${
                activeMenuType === 'coffeebar'
                  ? 'bg-deep-espresso text-cream shadow-luxury shadow-gold-glow/20'
                  : 'text-chocolate hover:text-espresso'
              }`}
            >
              <Coffee className="w-4 h-4 text-gold" />
              <span>Megham Coffee Bar</span>
            </button>
          </div>
        </div>

        {/* Search Bar & Stats */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-caramel absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${activeMenuType === 'restaurant' ? 'paneer, sizzler, pizza, dal...' : 'cappuccino, matcha, cold brew...'}`}
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-cream border border-gold/40 text-xs sm:text-sm text-espresso placeholder-chocolate/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-chocolate/60 hover:text-espresso"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {currentCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-espresso text-cream shadow-luxury shadow-gold-glow/20'
                  : 'bg-beige/40 text-chocolate hover:bg-beige/70 border border-gold/25'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.slice(0, 18).map((item) => (
            <div
              key={item.id}
              className="bg-cream border border-gold/25 hover:border-gold/70 rounded-editorial p-5 sm:p-6 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div className="space-y-3">
                
                {/* Optional Image Thumbnail if item has image */}
                {item.image && (
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3 border border-gold/30 group-hover:shadow-md transition-all">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso/80 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-2 left-2 text-[10px] uppercase font-bold text-cream bg-deep-espresso/80 px-2.5 py-0.5 rounded-full border border-gold/40">
                      Rooftop Ambience Plating
                    </span>
                  </div>
                )}

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      {/* Pure Veg indicator for restaurant items */}
                      {'dietary' in item && (
                        <span className="w-3.5 h-3.5 border border-green-600 rounded-sm flex items-center justify-center p-0.5 shrink-0" title="Pure Vegetarian">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                        </span>
                      )}
                      
                      {item.badge && (
                        <span className="text-[10px] uppercase font-bold tracking-wider text-caramel bg-beige/60 px-2 py-0.5 rounded-full border border-gold/30">
                          {item.badge}
                        </span>
                      )}

                      <span className="text-[10px] uppercase tracking-wider text-caramel/90 font-medium">
                        {item.categoryLabel}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold text-espresso group-hover:text-caramel transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  {/* Real Price Display */}
                  <span className="text-sm sm:text-base font-serif font-bold text-espresso bg-beige/40 px-2.5 py-1 rounded-lg border border-gold/30 whitespace-nowrap">
                    {item.priceFormatted}
                  </span>
                </div>

                <p className="text-xs text-chocolate/80 font-light leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-beige/60 flex items-center justify-between">
                <span className="text-[11px] font-serif italic text-caramel">
                  Freshly Prepared
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

        {/* View Full Menu Page Link */}
        <div className="mt-12 text-center">
          <a
            href="/menu"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-deep-espresso hover:bg-chocolate text-cream font-serif font-bold text-sm tracking-wider uppercase shadow-luxury hover:shadow-gold-glow transition-all"
          >
            <span>Explore All 100+ Menu Items & Full Coffee Bar Page</span>
            <ArrowRight className="w-4 h-4 text-gold" />
          </a>
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
