import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'light',
  size = 'md',
  className = '',
  showTagline = true,
}) => {
  const isLight = variant === 'light';

  const titleSizes = {
    sm: 'text-lg sm:text-xl',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  };

  const tagSizes = {
    sm: 'text-[7.5px] sm:text-[8.5px]',
    md: 'text-[8.5px] sm:text-[9.5px]',
    lg: 'text-[9.5px] sm:text-[11px]',
    xl: 'text-[11px] sm:text-xs',
  };

  return (
    <div className={`inline-flex flex-col items-start leading-none select-none ${className}`}>
      <div className="flex items-center gap-1.5">
        <span
          className={`font-serif font-bold ${titleSizes[size]} tracking-[0.2em] uppercase transition-colors ${
            isLight ? 'text-cream group-hover:text-gold' : 'text-espresso group-hover:text-caramel'
          }`}
        >
          MEGHAM
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-gold-glow animate-pulse" />
      </div>
      {showTagline && (
        <span
          className={`font-sans uppercase font-medium mt-1 ${tagSizes[size]} tracking-[0.22em] transition-colors whitespace-nowrap ${
            isLight ? 'text-warm-beige/80' : 'text-chocolate/80'
          }`}
        >
          The Rooftop Restaurant & Café
        </span>
      )}
    </div>
  );
};
