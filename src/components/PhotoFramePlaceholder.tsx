import React, { useState } from 'react';
import { Camera, Instagram, Sparkles, Heart, Play, ExternalLink, MessageCircle, Volume2, Film } from 'lucide-react';

interface PhotoFramePlaceholderProps {
  title: string;
  category: string;
  caption?: string;
  aspectRatio?: 'square' | 'portrait' | 'wide' | 'tall';
  photoUrl?: string;
  instagramUrl?: string;
  instagramTag?: string;
  date?: string;
  likes?: string;
  comments?: string;
  tags?: string[];
  isReel?: boolean;
  className?: string;
}

export const PhotoFramePlaceholder: React.FC<PhotoFramePlaceholderProps> = ({
  title,
  category,
  caption,
  aspectRatio = 'square',
  photoUrl,
  instagramUrl = 'https://www.instagram.com/meghamrestaurant/',
  instagramTag = '@meghamrestaurant',
  date = 'Official Post',
  likes = '1.2k',
  comments = '54',
  tags = ['#MeghamHaridwar', '#MeghamRooftop'],
  isReel = false,
  className = '',
}) => {
  const [showEmbed, setShowEmbed] = useState(false);

  // Extract Instagram shortcode if reel or post URL is provided
  const extractShortcode = (url: string) => {
    const match = url.match(/(?:p|reel|tv)\/([A-Za-z0-9_-]+)/);
    return match ? match[1] : null;
  };

  const shortcode = extractShortcode(instagramUrl);

  const aspectClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[4/5]',
    tall: 'aspect-[9/16]',
    wide: 'aspect-[16/10]',
  };

  return (
    <div
      className={`relative group rounded-editorial border border-gold/30 hover:border-gold/80 bg-creamy-white p-4 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      {/* Editorial Picture Frame Box */}
      <div
        className={`relative ${aspectClasses[aspectRatio]} rounded-xl overflow-hidden bg-gradient-to-br from-beige/40 via-cream to-beige/60 border border-gold/25 flex flex-col justify-between p-4 shadow-inner`}
      >
        {/* If live embed is toggled and we have a valid shortcode */}
        {showEmbed && shortcode ? (
          <div className="absolute inset-0 w-full h-full bg-black flex items-center justify-center">
            <iframe
              src={`https://www.instagram.com/reel/${shortcode}/embed/`}
              className="w-full h-full border-0"
              allowFullScreen
              title={title}
            />
            <button
              onClick={() => setShowEmbed(false)}
              className="absolute top-2 right-2 z-20 px-2 py-1 bg-deep-espresso/90 text-gold text-[10px] font-bold rounded-md shadow-lg"
            >
              ✕ Close Embed
            </button>
          </div>
        ) : photoUrl ? (
          <>
            <img
              src={photoUrl}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso/90 via-deep-espresso/30 to-deep-espresso/50 pointer-events-none" />

            {/* Frame Top Meta */}
            <div className="relative z-10 flex items-center justify-between text-xs">
              <span className="text-[10px] uppercase font-bold tracking-wider text-cream bg-deep-espresso/70 backdrop-blur-sm px-2.5 py-1 rounded-full border border-gold/40 shadow-xs">
                {category}
              </span>
              <span className="text-[10px] text-warm-beige flex items-center gap-1 font-serif italic bg-deep-espresso/60 backdrop-blur-sm px-2 py-0.5 rounded-full">
                {isReel ? <Film className="w-3 h-3 text-gold" /> : <Sparkles className="w-3 h-3 text-gold" />}
                {isReel ? 'Instagram Reel' : 'Featured Post'}
              </span>
            </div>

            {/* Center Play button if reel */}
            {isReel && (
              <div className="relative z-10 my-auto text-center">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-deep-espresso/80 border border-gold/60 text-gold flex items-center justify-center mx-auto shadow-gold-glow group-hover:scale-110 group-hover:bg-gold group-hover:text-deep-espresso transition-all duration-300"
                  title="Watch Reel on Instagram"
                >
                  <Play className="w-5 h-5 ml-0.5 fill-current" />
                </a>
              </div>
            )}

            {/* Frame Bottom Bar */}
            <div className="relative z-10 pt-2 border-t border-white/20 text-[10px] text-cream flex items-center justify-between">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-semibold text-gold hover:text-white transition"
              >
                <Instagram className="w-3 h-3" />
                <span>{instagramTag}</span>
              </a>

              <div className="flex items-center gap-2.5">
                <span className="flex items-center gap-0.5 text-gold font-medium">
                  <Heart className="w-3 h-3 fill-gold" />
                  {likes}
                </span>
                <span className="flex items-center gap-0.5 text-warm-beige">
                  <MessageCircle className="w-3 h-3" />
                  {comments}
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Subtle luxury pattern watermark */}
            <div className="absolute inset-0 bg-[radial-gradient(#C5A46D_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

            {/* Frame Top Meta */}
            <div className="relative z-10 flex items-center justify-between text-xs">
              <span className="text-[10px] uppercase font-bold tracking-wider text-caramel bg-cream/95 px-2.5 py-1 rounded-full border border-gold/30 shadow-xs">
                {category}
              </span>
              <span className="text-[10px] text-chocolate/80 flex items-center gap-1 font-serif italic bg-cream/70 px-2 py-0.5 rounded-full">
                {isReel ? <Film className="w-3 h-3 text-gold" /> : <Sparkles className="w-3 h-3 text-gold" />}
                {isReel ? 'Instagram Reel' : 'Featured Post'}
              </span>
            </div>

            {/* Frame Center Content */}
            <div className="relative z-10 text-center my-auto px-2 space-y-2">
              {/* Play or Camera Emblem */}
              {isReel ? (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-deep-espresso/80 border border-gold/60 text-gold flex items-center justify-center mx-auto shadow-gold-glow group-hover:scale-110 group-hover:bg-gold group-hover:text-deep-espresso transition-all duration-300"
                  title="Watch Reel on Instagram"
                >
                  <Play className="w-5 h-5 ml-0.5 fill-current" />
                </a>
              ) : (
                <div className="w-11 h-11 rounded-full bg-cream border border-gold/40 flex items-center justify-center mx-auto text-gold group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <Camera className="w-5 h-5 text-chocolate" />
                </div>
              )}

              <h4 className="font-serif text-base sm:text-lg font-bold text-espresso leading-snug">
                {title}
              </h4>

              {caption && (
                <p className="font-serif italic text-xs text-chocolate/85 line-clamp-3 px-2 leading-relaxed bg-cream/60 py-1.5 rounded-lg border border-gold/15">
                  "{caption}"
                </p>
              )}
            </div>

            {/* Frame Bottom Bar */}
            <div className="relative z-10 pt-2 border-t border-gold/25 text-[10px] text-chocolate/90 flex items-center justify-between">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-semibold text-caramel hover:text-espresso transition"
              >
                <Instagram className="w-3 h-3" />
                <span>{instagramTag}</span>
              </a>

              <div className="flex items-center gap-2.5">
                <span className="flex items-center gap-0.5 text-gold font-medium">
                  <Heart className="w-3 h-3 fill-gold" />
                  {likes}
                </span>
                <span className="flex items-center gap-0.5 text-chocolate/70">
                  <MessageCircle className="w-3 h-3" />
                  {comments}
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Frame Bottom Card Details */}
      <div className="pt-3.5 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-serif font-bold text-espresso group-hover:text-caramel transition-colors truncate max-w-[70%]">
            {title}
          </span>
          <span className="text-[10px] text-chocolate/60">{date}</span>
        </div>

        {/* Action button to open directly on Instagram */}
        <div className="flex items-center gap-2 pt-1">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-1.5 px-3 rounded-lg bg-beige/50 hover:bg-espresso text-chocolate hover:text-cream border border-gold/30 text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-all duration-200"
          >
            <Instagram className="w-3 h-3 text-gold" />
            <span>Watch on Instagram</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
          </a>

          {shortcode && !showEmbed && (
            <button
              onClick={() => setShowEmbed(true)}
              className="py-1.5 px-2.5 rounded-lg bg-gold/20 hover:bg-gold text-deep-espresso border border-gold/40 text-[10px] font-bold transition-all"
              title="Embed live Instagram post"
            >
              Embed Live
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
