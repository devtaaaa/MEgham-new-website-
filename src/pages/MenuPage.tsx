import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { PhotoFramePlaceholder } from '../components/PhotoFramePlaceholder';
import { Utensils, Sparkles, MessageCircle, Leaf, Calendar, CheckCircle2 } from 'lucide-react';
import { siteData, MenuItem } from '../content/siteData';

interface MenuPageProps {
  onOpenReservation: () => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onOpenReservation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Complete Menu' },
    { id: 'starters', label: 'Starters & Sizzlers' },
    { id: 'indian', label: 'Indian Heritage' },
    { id: 'main-course', label: 'Main Course & Biryani' },
    { id: 'chinese', label: 'Chinese & Asian Bowls' },
    { id: 'pizza-fastfood', label: 'Artisanal Pizzas & Cafe' },
    { id: 'beverages', label: 'Beverages & Mocktails' },
    { id: 'desserts', label: 'Desserts & Sizzlers' },
  ];

  const filteredItems = activeCategory === 'all'
    ? siteData.menu
    : siteData.menu.filter((item) => item.category === activeCategory);

  const handleOrderInquiry = (item: MenuItem) => {
    const text = `*Menu Inquiry - Megham Restaurant*%0A%0AHello! I would like to inquire about ordering: *${encodeURIComponent(item.name)}* (${item.categoryLabel}).%0APlease share details and availability.`;
    window.open(`https://wa.me/${siteData.brand.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-cream text-espresso min-h-screen">
      {/* Page Header */}
      <PageHeader
        badge="Pure Vegetarian Gastronomy"
        title="Our Complete Rooftop Menu"
        subtitle="Crafted from fresh local ingredients, slow-simmered gravies, and sizzling clay tandoor delicacies."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Menu' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        
        {/* Featured Visual Dish Photo Spaces */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-caramel font-semibold">
              Chef's Signatures
            </span>
            <h2 className="font-serif text-3xl font-bold text-espresso">
              Visual Highlights From Our Kitchen
            </h2>
            <p className="text-xs sm:text-sm text-chocolate/80 font-light">
              Plated with precision, garnished with organic herbs, and served hot at your table.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <PhotoFramePlaceholder
              title="Paneer Malai Tikka Sizzler"
              category="Tandoor Starters"
              caption="Smoking hot platter with mint chutney and fresh lime."
              aspectRatio="square"
            />
            <PhotoFramePlaceholder
              title="Dal Megham Special"
              category="Slow Simmered"
              caption="Overnight charcoal-simmered black lentils with churned butter."
              aspectRatio="square"
            />
            <PhotoFramePlaceholder
              title="Hand-Stretched Pizza"
              category="Artisan Cafe"
              caption="Thin crust topped with mozzarella, basil, and olives."
              aspectRatio="square"
            />
            <PhotoFramePlaceholder
              title="Sunset Sky Mocktail"
              category="Rooftop Coolers"
              caption="Handcrafted passionfruit, fresh mint, and sparkling bubbles."
              aspectRatio="square"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div>
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-espresso text-cream shadow-luxury shadow-gold-glow/20'
                    : 'bg-beige/40 text-chocolate hover:bg-beige/70 border border-gold/25'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Detailed Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-creamy-white border border-gold/30 hover:border-gold rounded-editorial p-7 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        {item.dietary === 'veg' && (
                          <span className="w-3.5 h-3.5 border border-green-600 rounded-sm flex items-center justify-center p-0.5" title="Pure Vegetarian">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                          </span>
                        )}
                        {item.dietary === 'chef-special' && (
                          <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-caramel bg-beige px-2 py-0.5 rounded-full">
                            <Sparkles className="w-3 h-3 text-gold" />
                            House Special
                          </span>
                        )}
                        {item.dietary === 'jain-available' && (
                          <span className="text-[10px] uppercase font-semibold text-chocolate/70 bg-beige/50 px-2 py-0.5 rounded-full">
                            Jain Friendly
                          </span>
                        )}
                        <span className="text-[10px] uppercase tracking-wider text-caramel/90 font-medium">
                          {item.categoryLabel}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl font-bold text-espresso group-hover:text-caramel transition-colors">
                        {item.name}
                      </h3>
                    </div>

                    {item.badge && (
                      <span className="text-[11px] font-semibold text-caramel px-3 py-1 bg-beige/50 border border-gold/30 rounded-full whitespace-nowrap">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-chocolate/80 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-beige flex items-center justify-between">
                  <span className="text-xs font-serif italic text-caramel">
                    {item.priceNote || 'Freshly Crafted'}
                  </span>
                  <button
                    onClick={() => handleOrderInquiry(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-espresso hover:text-gold px-4 py-2 rounded-full bg-beige/40 hover:bg-espresso hover:text-cream transition-all duration-200"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-gold" />
                    <span>Inquire / Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dietary & Hospitality Guarantee Banner */}
        <div className="bg-beige/30 border border-gold/30 rounded-editorial-lg p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-beige flex items-center justify-center text-gold shrink-0">
              <Leaf className="w-6 h-6 text-green-700" />
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold text-espresso">
                Strict Pure Vegetarian Integrity
              </h4>
              <p className="text-xs text-chocolate/80 mt-0.5 font-light">
                We prepare all food in a strictly pure vegetarian kitchen. Jain preparations without onion & garlic are happily prepared upon request.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenReservation}
            className="px-8 py-3.5 bg-espresso hover:bg-chocolate text-cream font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all whitespace-nowrap"
          >
            Reserve Table Now
          </button>
        </div>

      </div>
    </div>
  );
};
