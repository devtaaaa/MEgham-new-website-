import React, { useState } from 'react';
import { Instagram, Play, Heart, MessageCircle, Share2, Sparkles, ExternalLink, Bookmark } from 'lucide-react';
import { siteData, InstagramMediaItem } from '../content/siteData';

export const InstagramSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeReelModal, setActiveReelModal] = useState<InstagramMediaItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Moments' },
    { id: 'celebrations', label: 'Celebrations & Birthdays' },
    { id: 'bakery', label: 'Bakery & Cake Art' },
    { id: 'food', label: 'Food & Sizzlers' },
    { id: 'ambience', label: 'Rooftop Ambience' },
  ];

  const filteredMedia = activeCategory === 'all'
    ? siteData.instagramMedia
    : siteData.instagramMedia.filter((item) => item.category === activeCategory);

  return (
    <section id="instagram" className="py-24 bg-deep-espresso text-creamy-white relative overflow-hidden">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-muted-golden/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-soft-caramel/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-chocolate-brown/50 border border-muted-golden/30 text-gold text-xs uppercase tracking-widest">
            <Instagram className="w-3.5 h-3.5 text-gold" />
            <span>Live Social Stream</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cream">
            The Megham Moments
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
          <p className="text-sm sm:text-base text-warm-beige/85 leading-relaxed font-light">
            Real laughter, sparkling birthday surprises, sizzling platters, and handcrafted cakes. Follow our journey directly on Instagram <strong className="text-gold font-normal">@{siteData.brand.instagramHandle}</strong>.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-muted-golden text-deep-espresso shadow-gold-glow'
                  : 'bg-chocolate-brown/40 text-warm-beige hover:bg-chocolate-brown/70 border border-gold/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 9:16 Vertical Video & Post Reel Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              className="bg-chocolate-brown/80 border border-gold/30 hover:border-gold rounded-editorial-lg p-4 sm:p-5 shadow-luxury hover:shadow-gold-glow/20 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Instagram Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-warm-beige/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-gold via-caramel to-chocolate p-0.5 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-deep-espresso flex items-center justify-center text-gold font-bold text-xs">
                      M
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold text-cream">
                        {siteData.brand.instagramHandle}
                      </span>
                      <span className="w-3.5 h-3.5 rounded-full bg-gold text-deep-espresso flex items-center justify-center text-[7px] font-bold">
                        ✓
                      </span>
                    </div>
                    <span className="text-[10px] text-warm-beige/60">
                      Haridwar • {item.type === 'reel' ? 'Reel' : 'Post'}
                    </span>
                  </div>
                </div>

                <a
                  href={item.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-beige/60 hover:text-gold transition p-1"
                  aria-label="Open Instagram Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* 9:16 Vertical Reel Screen Frame */}
              <div className="relative my-3 rounded-2xl overflow-hidden aspect-[9/16] bg-deep-espresso border border-gold/20 flex flex-col justify-between p-5 group-hover:border-gold/50 transition-colors shadow-inner">
                
                {/* Background Subtle Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

                {/* Top Badge Overlay */}
                <div className="relative z-10 flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-deep-espresso/80 border border-gold/30 text-[10px] font-semibold uppercase tracking-wider text-gold">
                    {item.type === 'reel' ? '▶ Official Reel' : '📷 Official Post'}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-black/50 text-[10px] text-warm-beige/80">
                    {item.date}
                  </span>
                </div>

                {/* Center Action Button / Reel Indicator */}
                <div className="relative z-10 text-center my-auto">
                  <a
                    href={item.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-full bg-deep-espresso/80 border border-gold/60 text-gold flex items-center justify-center mx-auto shadow-gold-glow group-hover:scale-110 group-hover:bg-gold group-hover:text-deep-espresso transition-all duration-300"
                    aria-label={`Play ${item.title}`}
                  >
                    <Play className="w-7 h-7 ml-1 fill-current" />
                  </a>
                  <p className="font-serif text-lg font-bold text-cream mt-3 px-2 text-shadow-subtle">
                    {item.title}
                  </p>
                  <span className="text-[11px] text-warm-beige/70 italic block mt-1">
                    Click to view on Instagram
                  </span>
                </div>

                {/* Bottom Overlay Inside Reel Screen */}
                <div className="relative z-10 space-y-2 text-xs">
                  <div className="flex items-center gap-4 text-cream">
                    <span className="flex items-center gap-1.5 text-xs">
                      <Heart className="w-4 h-4 text-red-400 fill-red-400" />
                      <strong className="font-medium">{item.likesCount}</strong>
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-warm-beige">
                      <MessageCircle className="w-4 h-4" />
                      <span>{item.commentsCount}</span>
                    </span>
                    <span className="ml-auto text-warm-beige">
                      <Bookmark className="w-4 h-4" />
                    </span>
                  </div>

                  <p className="text-[11px] text-warm-beige/90 line-clamp-2 font-light">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Card Footer: Tags & Link CTA */}
              <div className="pt-2 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-gold/90 bg-deep-espresso/60 px-2 py-0.5 rounded-md border border-gold/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={item.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-deep-espresso/60 hover:bg-deep-espresso border border-gold/30 hover:border-gold text-warm-beige hover:text-cream text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <Instagram className="w-3.5 h-3.5 text-gold" />
                  <span>Open in Instagram</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Follow on Instagram Banner */}
        <div className="mt-16 bg-gradient-to-r from-chocolate-brown via-deep-espresso to-chocolate-brown border border-gold/40 rounded-editorial-lg p-8 sm:p-10 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-gold via-caramel to-chocolate p-0.5 shrink-0 flex items-center justify-center">
              <div className="w-full h-full rounded-2xl bg-deep-espresso flex items-center justify-center text-gold">
                <Instagram className="w-8 h-8" />
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream">
                Join 1,500+ Megham Patrons on Instagram
              </h3>
              <p className="text-xs sm:text-sm text-warm-beige/80 mt-1 font-light">
                Catch daily behind-the-scenes stories, cake decoration reels, new menu specials, and customer celebrations.
              </p>
            </div>
          </div>

          <a
            href={siteData.brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-muted-golden hover:bg-soft-caramel text-deep-espresso font-bold text-xs uppercase tracking-wider rounded-full shadow-lg hover:shadow-gold-glow transition-all whitespace-nowrap flex items-center gap-2"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow @{siteData.brand.instagramHandle}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
