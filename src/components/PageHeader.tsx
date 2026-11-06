import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  breadcrumbs: { label: string; href?: string }[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  subtitle,
  breadcrumbs,
}) => {
  return (
    <div className="relative pt-32 pb-20 bg-deep-espresso text-creamy-white overflow-hidden border-b border-gold/30">
      {/* Background glow and ambient textures */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-chocolate-brown/40 via-deep-espresso to-deep-espresso" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-muted-golden/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C5A46D_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumbs */}
        <nav className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-warm-beige/70 mb-4">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label}>
              {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-gold/60" />}
              {crumb.href ? (
                <Link to={crumb.href} className="hover:text-gold transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gold font-medium">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-chocolate/50 border border-gold/30 text-gold text-xs uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>{badge}</span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cream tracking-tight mb-4 leading-tight">
          {title}
        </h1>

        {/* Decorative divider */}
        <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-warm-beige/85 font-light leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
