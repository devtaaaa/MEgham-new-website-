import React from 'react';
import { Camera, Instagram, Sparkles, Heart } from 'lucide-react';

interface PhotoFramePlaceholderProps {
  title: string;
  category: string;
  caption?: string;
  aspectRatio?: 'square' | 'portrait' | 'wide' | 'tall';
  photoUrl?: string;
  instagramTag?: string;
  className?: string;
}

export const PhotoFramePlaceholder: React.FC<PhotoFramePlaceholderProps> = ({
  title,
  category,
  caption,
  aspectRatio = 'square',
  photoUrl,
  instagramTag = '@meghamrestaurant',
  className = '',
}) => {
  const aspectClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[4/5]',
    tall: 'aspect-[9/16]',
    wide: 'aspect-[16/10]',
  };

  return (
    <div
      className={`relative group rounded-editorial border border-gold/30 hover:border-gold/70 bg-creamy-white p-4 shadow-sm hover:shadow-luxury transition-all duration-300 ${className}`}
    >
      {/* Editorial Picture Frame Box */}
      <div
        className={`relative ${aspectClasses[aspectRatio]} rounded-xl overflow-hidden bg-gradient-to-br from-beige/40 via-cream to-beige/60 border border-gold/20 flex flex-col justify-between p-5`}
      >
        {photoUrl ? (
          <img
            src={photoUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <>
            {/* Subtle luxury pattern watermark */}
            <div className="absolute inset-0 bg-[radial-gradient(#C5A46D_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

            {/* Frame Top Meta */}
            <div className="relative z-10 flex items-center justify-between text-xs">
              <span className="text-[10px] uppercase font-bold tracking-wider text-caramel bg-cream/90 px-2.5 py-1 rounded-full border border-gold/30">
                {category}
              </span>
              <span className="text-[10px] text-chocolate/70 flex items-center gap-1 font-serif italic">
                <Sparkles className="w-3 h-3 text-gold" />
                Featured Frame
              </span>
            </div>

            {/* Frame Center Emblem */}
            <div className="relative z-10 text-center my-auto px-4 space-y-2">
              <div className="w-12 h-12 rounded-full bg-cream border border-gold/40 flex items-center justify-center mx-auto text-gold group-hover:scale-110 group-hover:border-gold transition-all duration-300 shadow-sm">
                <Camera className="w-5 h-5 text-chocolate" />
              </div>
              <h4 className="font-serif text-lg font-bold text-espresso leading-snug">
                {title}
              </h4>
              <p className="text-[11px] text-chocolate/70 font-light max-w-xs mx-auto">
                {caption || 'Authentic frame curated from Megham Instagram chronicle.'}
              </p>
            </div>

            {/* Frame Bottom Bar */}
            <div className="relative z-10 flex items-center justify-between pt-2 border-t border-gold/20 text-[10px] text-chocolate/80">
              <span className="flex items-center gap-1 font-medium text-caramel">
                <Instagram className="w-3 h-3" />
                {instagramTag}
              </span>
              <span className="flex items-center gap-1 text-gold">
                <Heart className="w-3 h-3 fill-gold" />
                Curated
              </span>
            </div>
          </>
        )}
      </div>

      {/* Frame Bottom Label */}
      <div className="pt-3 flex items-center justify-between text-xs">
        <span className="font-serif font-bold text-espresso group-hover:text-caramel transition-colors">
          {title}
        </span>
        <span className="text-[10px] text-caramel uppercase tracking-wider font-semibold">
          Photo Space
        </span>
      </div>
    </div>
  );
};
