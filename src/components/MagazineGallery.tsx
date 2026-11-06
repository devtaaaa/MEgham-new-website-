import React, { useState } from 'react';
import { Sparkles, Instagram, ExternalLink, Heart, X, ZoomIn } from 'lucide-react';
import { siteData } from '../content/siteData';

interface GalleryItem {
  id: string;
  category: 'food' | 'bakery' | 'celebrations' | 'ambience';
  categoryLabel: string;
  title: string;
  editorialSubtitle: string;
  caption: string;
  date: string;
  aspect: 'tall' | 'wide' | 'editorial-square' | 'portrait';
  likes: string;
  instagramUrl: string;
  quoteTag?: string;
  bgTone: string;
}

export const MagazineGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      category: 'ambience',
      categoryLabel: 'Restaurant Interiors & Rooftop',
      title: 'Twilight Over Haridwar',
      editorialSubtitle: 'The Open Sky Sanctuary',
      caption: 'When dusk settles over the city, the rooftop comes alive with soft amber lights, fresh mountain breezes, and the gentle chatter of celebratory gatherings.',
      date: 'October 2024',
      aspect: 'wide',
      likes: '1.4k',
      instagramUrl: 'https://www.instagram.com/meghamrestaurant/',
      quoteTag: 'Rooftop Ambience',
      bgTone: 'bg-deep-espresso text-cream',
    },
    {
      id: 'g2',
      category: 'bakery',
      categoryLabel: 'Bakery & Desserts',
      title: 'The Belgian Truffle Architecture',
      editorialSubtitle: 'Artisan Patisserie Journal',
      caption: 'Handcrafted layers of rich dark cocoa ganache, crowned with edible gold dust and delicate celebration message toppers.',
      date: 'November 2024',
      aspect: 'tall',
      likes: '980',
      instagramUrl: 'https://www.instagram.com/meghamrestaurant/',
      quoteTag: 'Handcrafted Patisserie',
      bgTone: 'bg-chocolate-brown text-cream',
    },
    {
      id: 'g3',
      category: 'celebrations',
      categoryLabel: 'Celebrations',
      title: 'A Golden Birthday Under Fairy Lights',
      editorialSubtitle: 'Milestone Memories',
      caption: 'A bespoke celebration setup complete with pastel balloon arches, glowing LED marquee numbers, and an unforgettable cake cutting entry.',
      date: 'Recent Story',
      aspect: 'portrait',
      likes: '1.6k',
      instagramUrl: 'https://www.instagram.com/meghamrestaurant/',
      quoteTag: 'Bespoke Birthdays',
      bgTone: 'bg-warm-beige text-espresso',
    },
    {
      id: 'g4',
      category: 'food',
      categoryLabel: 'Food & Signature Dishes',
      title: 'The Royal Paneer Malai Sizzler',
      editorialSubtitle: 'Tandoor Heritage',
      caption: 'Sizzling hot cottage cheese marinated in hung curd, green cardamom, and toasted nuts, served on a smoking wooden platter with fresh garden dips.',
      date: 'Featured Menu',
      aspect: 'editorial-square',
      likes: '1.1k',
      instagramUrl: 'https://www.instagram.com/meghamrestaurant/',
      quoteTag: 'Chef Signature',
      bgTone: 'bg-creamy-white text-espresso',
    },
    {
      id: 'g5',
      category: 'celebrations',
      categoryLabel: 'Celebrations',
      title: 'Candlelight & Rose Petal Evenings',
      editorialSubtitle: 'Romantic Gazebo',
      caption: 'The candlelit pathway leads to our secluded rooftop table, where anniversaries turn into memories that stay etched forever.',
      date: 'Verified Moment',
      aspect: 'tall',
      likes: '2.3k',
      instagramUrl: 'https://www.instagram.com/meghamrestaurant/',
      quoteTag: 'Anniversary Special',
      bgTone: 'bg-deep-espresso text-cream',
    },
    {
      id: 'g6',
      category: 'bakery',
      categoryLabel: 'Bakery & Desserts',
      title: 'The Lotus Biscoff Seduction',
      editorialSubtitle: 'Sweet Decadence',
      caption: 'Slow-baked New York cheesecake layered with spiced caramelized speculoos cookie crunch and glossy molten spread.',
      date: 'Pastry Counter',
      aspect: 'wide',
      likes: '850',
      instagramUrl: 'https://www.instagram.com/meghamrestaurant/',
      quoteTag: 'House Specialty',
      bgTone: 'bg-warm-beige text-espresso',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Curated Frames' },
    { id: 'food', label: 'Food & Signature Dishes' },
    { id: 'bakery', label: 'Bakery & Patisserie' },
    { id: 'celebrations', label: 'Celebrations & Events' },
    { id: 'ambience', label: 'Rooftop Ambience' },
  ];

  const filteredGallery = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-cream text-espresso relative overflow-hidden">
      {/* Background Subtle Magazine Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A46D_0.75px,transparent_0.75px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-caramel px-4 py-1.5 rounded-full bg-beige/60 border border-gold/30 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Editorial Exhibition
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-espresso">
            The Megham Experience
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
          <p className="text-sm sm:text-base text-chocolate/80 leading-relaxed font-light">
            Designed like a luxury food & hospitality magazine. Real stories, celebration setups, and culinary creations curated directly from our official Instagram chronicle.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-300 ${
                activeFilter === f.id
                  ? 'bg-espresso text-cream shadow-luxury shadow-gold-glow/20'
                  : 'bg-beige/40 text-chocolate hover:bg-beige/70 border border-gold/25'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Asymmetrical Editorial Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className={`group cursor-pointer relative rounded-editorial border border-gold/30 hover:border-gold p-6 transition-all duration-300 hover:shadow-luxury-lg hover:-translate-y-1.5 flex flex-col justify-between ${item.bgTone} ${
                index % 3 === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Outer Magazine Corner Accents */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-gold/40 pointer-events-none" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-gold/40 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-gold/40 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-gold/40 pointer-events-none" />

              {/* Card Top: Editorial Meta */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs pb-3 border-b border-current/15">
                  <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">
                    {item.categoryLabel}
                  </span>
                  <span className="text-[10px] italic opacity-70">
                    {item.date}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <div>
                  <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-1">
                    {item.editorialSubtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold leading-tight group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Inner Framed Content Area (Stylized Picture Window) */}
                <div className="relative my-4 rounded-xl border border-gold/30 p-5 bg-black/10 backdrop-blur-sm overflow-hidden min-h-[160px] flex flex-col justify-between">
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-wider opacity-70">
                    <span>Frame #{item.id.toUpperCase()}</span>
                    <span className="flex items-center gap-1 text-gold">
                      <Heart className="w-3 h-3 fill-gold" />
                      {item.likes}
                    </span>
                  </div>

                  <p className="font-serif text-sm italic my-3 leading-relaxed opacity-95">
                    "{item.caption}"
                  </p>

                  <div className="flex items-center justify-between text-[11px] pt-2 border-t border-current/10 opacity-80">
                    <span>@meghamrestaurant</span>
                    <span className="inline-flex items-center gap-1 text-gold font-semibold group-hover:translate-x-1 transition-transform">
                      <ZoomIn className="w-3.5 h-3.5" />
                      View Frame
                    </span>
                  </div>
                </div>

                {/* Quote tag pill */}
                {item.quoteTag && (
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-gold px-2.5 py-0.5 rounded-full bg-current/5 border border-gold/30">
                    {item.quoteTag}
                  </span>
                )}
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 mt-4 border-t border-current/15 flex items-center justify-between text-xs">
                <span className="text-[11px] opacity-70">
                  Instagram Verified Archive
                </span>
                <span className="text-gold font-semibold group-hover:underline flex items-center gap-1">
                  <span>Enlarge Story</span>
                  <span>→</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Editorial Lightbox Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso/80 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-cream border border-gold/60 rounded-editorial-lg p-6 sm:p-10 shadow-luxury-lg text-espresso"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-chocolate hover:bg-beige/50"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-caramel">
                {activeModalItem.categoryLabel} • {activeModalItem.date}
              </span>

              <h3 className="font-serif text-3xl font-bold text-espresso">
                {activeModalItem.title}
              </h3>

              <div className="p-6 rounded-xl bg-beige/40 border border-gold/40 text-chocolate">
                <p className="font-serif italic text-lg leading-relaxed text-espresso">
                  "{activeModalItem.caption}"
                </p>
                <div className="mt-4 pt-4 border-t border-gold/20 flex items-center justify-between text-xs text-caramel">
                  <span>Official Instagram Post of Megham</span>
                  <span className="flex items-center gap-1 text-gold font-semibold">
                    <Heart className="w-3.5 h-3.5 fill-gold" />
                    {activeModalItem.likes} Likes
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={activeModalItem.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-espresso hover:bg-chocolate text-cream font-semibold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2"
                >
                  <Instagram className="w-4 h-4 text-gold" />
                  <span>View Original Post on Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="px-6 py-3 border border-chocolate/30 text-chocolate font-medium text-xs uppercase tracking-wider rounded-xl hover:bg-beige/40"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
