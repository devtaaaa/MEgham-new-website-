import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { PhotoFramePlaceholder } from '../components/PhotoFramePlaceholder';
import { Utensils, Sparkles, MessageCircle, Leaf, Search, Coffee, ShieldCheck } from 'lucide-react';
import { siteData, MenuItem, CoffeeItem } from '../content/siteData';

interface MenuPageProps {
  onOpenReservation: () => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onOpenReservation }) => {
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
    const text = `*Menu Inquiry - Megham Restaurant & Café*%0A%0AHello! I would like to inquire about ordering: *${encodeURIComponent(item.name)}* (${item.categoryLabel}) - *${item.priceFormatted}*.%0APlease let me know the details and availability.`;
    window.open(`https://wa.me/${siteData.brand.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-cream text-espresso min-h-screen">
      {/* Page Header */}
      <PageHeader
        badge="Pure Vegetarian Gastronomy & Coffee Bar"
        title="Our Complete Rooftop Menu"
        subtitle="Crafted from fresh local ingredients, slow-simmered gravies, sizzling tandoor delicacies, and 100% Arabica artisanal coffee brews."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Menu' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Featured Visual Dish Photo Spaces with Real Ambience Photography */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-caramel font-semibold">
              Chef's Signatures & Rooftop Ambience
            </span>
            <h2 className="font-serif text-3xl font-bold text-espresso">
              Visual Highlights Plated in Our Ambience
            </h2>
            <p className="text-xs sm:text-sm text-chocolate/80 font-light">
              Captured against Megham's contemporary marble tables, warm golden lights, and open evening sky.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <PhotoFramePlaceholder
              title="Paneer Malai Tikka Sizzler"
              category="Tandoor Starters"
              caption="The sizzle you can hear from across the rooftop! ♨️ Melt-in-your-mouth cottage cheese cubes slow-marinated in cardamom and rich cashew paste."
              aspectRatio="square"
              photoUrl="/images/food/megham_paneer_sizzler.jpg"
              likes="1.8k"
              comments="84"
              tags={['#PaneerTikka', '#TandooriSizzler', '#MeghamFood']}
              instagramUrl="https://www.instagram.com/meghamrestaurant/"
              date="Chef Special"
            />
            <PhotoFramePlaceholder
              title="Dal Makhani & Naan Feast"
              category="Slow Charcoal Dum"
              caption="Our iconic signature black lentils simmered overnight over slow charcoal with organic butter, cream, and freshly baked butter garlic naan."
              aspectRatio="square"
              photoUrl="/images/food/megham_dal_makhani.jpg"
              likes="2.1k"
              comments="112"
              tags={['#DalMegham', '#PureVegetarian', '#FamilyDining']}
              instagramUrl="https://www.instagram.com/meghamrestaurant/"
              date="Signature Dish"
            />
            <PhotoFramePlaceholder
              title="Steaming Crystal Dimsums"
              category="Asian Delicacies"
              caption="Steaming hot, delicate crystal dimsums and momos served in bamboo steamers with artisanal chilli dips! 🔥"
              aspectRatio="square"
              photoUrl="/images/food/megham_dimsum_starters.jpg"
              likes="1.6k"
              comments="95"
              tags={['#Dimsums', '#MomosLover', '#MeghamAsian']}
              isReel={true}
              instagramUrl="https://www.instagram.com/meghamrestaurant/"
              date="Food Reel"
            />
            <PhotoFramePlaceholder
              title="Megham Artisanal Coffee Bar"
              category="Specialty Brews"
              caption="100% Arabica estate roasts, layered strawberry matcha, and iced Vietnamese cold brews crafted under open skies."
              aspectRatio="square"
              photoUrl="/images/food/megham_coffee_bar.jpg"
              likes="1.9k"
              comments="74"
              tags={['#MeghamCoffeeBar', '#MatchaCloud', '#HaridwarCafe']}
              instagramUrl="https://www.instagram.com/meghamrestaurant/"
              date="Coffee Feature"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <PhotoFramePlaceholder
              title="Wood-Fired Artisanal Pizza"
              category="Hand-Stretched Pizza"
              caption="Charred blistered crust, melted fresh mozzarella, and sweet basil leaves served hot on a dark rustic board."
              aspectRatio="wide"
              photoUrl="/images/food/megham_artisan_pizza.jpg"
              likes="1.5k"
              comments="62"
              tags={['#ArtisanPizza', '#WoodFiredStyle', '#MeghamPizza']}
              instagramUrl="https://www.instagram.com/meghamrestaurant/"
              date="Gourmet Feature"
            />
            <PhotoFramePlaceholder
              title="Megham Rooftop Table Experience"
              category="Dining Ambience"
              caption="Contemporary dark marble dining tables, warm golden lights, and panoramic Haridwar skyline views under open stars."
              aspectRatio="wide"
              photoUrl="/images/food/megham_table_setup.jpg"
              likes="2.6k"
              comments="140"
              tags={['#RooftopDining', '#HaridwarSkyline', '#MeghamAmbience']}
              instagramUrl="https://www.instagram.com/meghamrestaurant/"
              date="Restaurant Feature"
            />
          </div>
        </div>

        {/* Dual Menu Switcher: Restaurant Menu vs Megham Coffee Bar */}
        <div className="space-y-8">
          <div className="flex items-center justify-center">
            <div className="inline-flex p-1.5 rounded-full bg-beige/60 border border-gold/40 shadow-inner">
              <button
                onClick={() => {
                  setActiveMenuType('restaurant');
                  setActiveCategory('all');
                }}
                className={`flex items-center gap-2 px-7 sm:px-10 py-3.5 rounded-full text-xs sm:text-sm font-serif font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeMenuType === 'restaurant'
                    ? 'bg-deep-espresso text-cream shadow-luxury shadow-gold-glow/20'
                    : 'text-chocolate hover:text-espresso'
                }`}
              >
                <Utensils className="w-4 h-4 text-gold" />
                <span>🍽️ Megham Restaurant Menu</span>
              </button>
              <button
                onClick={() => {
                  setActiveMenuType('coffeebar');
                  setActiveCategory('all');
                }}
                className={`flex items-center gap-2 px-7 sm:px-10 py-3.5 rounded-full text-xs sm:text-sm font-serif font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeMenuType === 'coffeebar'
                    ? 'bg-deep-espresso text-cream shadow-luxury shadow-gold-glow/20'
                    : 'text-chocolate hover:text-espresso'
                }`}
              >
                <Coffee className="w-4 h-4 text-gold" />
                <span>☕ Megham Coffee Bar</span>
              </button>
            </div>
          </div>

          {/* Search Input Bar */}
          <div className="max-w-lg mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-caramel absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search through ${activeMenuType === 'restaurant' ? 'all 100+ dishes, curries, pastas, dosas...' : 'cold brews, lattes, matcha, shakes...'}`}
                className="w-full pl-11 pr-10 py-3 rounded-full bg-creamy-white border border-gold/40 text-sm text-espresso placeholder-chocolate/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-chocolate/60 hover:text-espresso font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none">
            {currentCategories.map((cat) => (
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

          {/* Items Count Header */}
          <div className="flex items-center justify-between border-b border-beige pb-3 text-xs text-chocolate/70 font-serif">
            <span>Showing {filteredItems.length} curated offerings</span>
            <span>All prices in INR (₹) • Taxes extra</span>
          </div>

          {/* Detailed Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-creamy-white border border-gold/30 hover:border-gold rounded-editorial p-6 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                <div className="space-y-3">
                  
                  {/* Item Image if present */}
                  {item.image && (
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3 border border-gold/30">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso/70 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute bottom-2 left-2 text-[10px] uppercase font-bold text-cream bg-deep-espresso/80 px-2 py-0.5 rounded-full border border-gold/30">
                        Megham Ambience Photo
                      </span>
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        {'dietary' in item && (
                          <span className="w-3.5 h-3.5 border border-green-600 rounded-sm flex items-center justify-center p-0.5 shrink-0" title="Pure Vegetarian">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                          </span>
                        )}
                        {'dietary' in item && item.dietary === 'chef-special' && (
                          <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-caramel bg-beige px-2 py-0.5 rounded-full">
                            <Sparkles className="w-3 h-3 text-gold" />
                            House Special
                          </span>
                        )}
                        {'dietary' in item && item.dietary === 'jain-available' && (
                          <span className="text-[10px] uppercase font-semibold text-chocolate/70 bg-beige/50 px-2 py-0.5 rounded-full">
                            Jain Friendly
                          </span>
                        )}
                        {item.badge && (
                          <span className="text-[10px] font-semibold text-caramel px-2.5 py-0.5 bg-beige/50 border border-gold/30 rounded-full whitespace-nowrap">
                            {item.badge}
                          </span>
                        )}
                        <span className="text-[10px] uppercase tracking-wider text-caramel/90 font-medium">
                          {item.categoryLabel}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl font-bold text-espresso group-hover:text-caramel transition-colors">
                        {item.name}
                      </h3>
                    </div>

                    <span className="text-base font-serif font-bold text-espresso bg-beige/40 px-3 py-1 rounded-lg border border-gold/30 whitespace-nowrap">
                      {item.priceFormatted}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-chocolate/80 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-beige flex items-center justify-between">
                  <span className="text-xs font-serif italic text-caramel">
                    Freshly Crafted
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
              <h4 className="font-serif text-xl font-bold text-espresso flex items-center gap-2 justify-center md:justify-start">
                <span>Strict Pure Vegetarian Integrity</span>
                <ShieldCheck className="w-4 h-4 text-green-700" />
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
