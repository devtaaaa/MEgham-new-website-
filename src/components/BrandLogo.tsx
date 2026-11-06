import React, { useState } from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
  showTagline = true,
}) => {
  const [imageError, setImageError] = useState(false);

  // Logo variations:
  // - Light logo for dark backgrounds (e.g. espresso, footer, hero dark overlays)
  // - Dark logo for light backgrounds (e.g. cream, warm beige navbar)
  const logoSrc = variant === 'light' ? '/images/brand/logo-light.png' : '/images/brand/logo-dark.png';

  const sizeStyles = {
    sm: 'h-8 md:h-10',
    md: 'h-11 md:h-14',
    lg: 'h-16 md:h-20',
    xl: 'h-20 md:h-28',
  };

  const textStyles = {
    sm: { title: 'text-xl tracking-widest', tag: 'text-[9px] tracking-widest' },
    md: { title: 'text-2xl md:text-3xl tracking-widest', tag: 'text-[10px] md:text-xs tracking-widest' },
    lg: { title: 'text-3xl md:text-4xl tracking-widest', tag: 'text-xs md:text-sm tracking-widest' },
    xl: { title: 'text-4xl md:text-5xl tracking-widest', tag: 'text-sm md:text-base tracking-widest' },
  };

  const isLight = variant === 'light';

  return (
    <div className={`inline-flex items-center gap-3 transition-opacity duration-300 ${className}`}>
      {!imageError ? (
        <img
          src={logoSrc}
          alt="Megham Restaurant & Bakery Logo"
          className={`${sizeStyles[size]} w-auto object-contain select-none`}
          onError={() => setImageError(true)}
        />
      ) : (
        /* Graceful high-fidelity SVG brand identity while user uploads PNGs */
        <div className="flex flex-col items-start leading-none select-none">
          <div className="flex items-center gap-2">
            <span
              className={`font-serif font-bold ${textStyles[size].title} uppercase ${
                isLight ? 'text-cream' : 'text-espresso'
              }`}
            >
              MEGHAM
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          </div>
          {showTagline && (
            <span
              className={`font-sans uppercase font-medium mt-1 ${textStyles[size].tag} ${
                isLight ? 'text-beige/80' : 'text-chocolate/80'
              }`}
            >
              The Rooftop Restaurant & Café
            </span>
          )}
        </div>
      )}
    </div>
  );
};
