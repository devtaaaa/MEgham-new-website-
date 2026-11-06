import React from 'react';
import { Star, Quote, CheckCircle2, ExternalLink } from 'lucide-react';
import { siteData } from '../content/siteData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-creamy-white text-espresso relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-caramel px-4 py-1.5 rounded-full bg-beige/50 border border-gold/30 inline-block">
            Verified Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso">
            Words From Our Guests
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
          <p className="text-sm sm:text-base text-chocolate/80 leading-relaxed font-light">
            Genuine testimonials from patrons who have celebrated birthdays, anniversaries, and dinners at Megham.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-cream border border-gold/30 rounded-editorial p-8 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-caramel">
                  "{t.highlight}"
                </div>

                <p className="font-serif italic text-sm text-espresso/90 leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-beige/60 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-serif font-bold text-espresso text-base">
                    {t.author}
                  </h4>
                  <span className="text-[11px] text-chocolate/70">
                    {t.role} • {t.date}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                  <CheckCircle2 className="w-3 h-3 text-green-600" />
                  {t.verifiedSource}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Review Footnote */}
        <div className="mt-12 text-center text-xs text-chocolate/70">
          <span>Visited Megham recently? We would love to hear your story. </span>
          <a
            href={siteData.brand.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-caramel font-semibold hover:underline inline-flex items-center gap-1 ml-1"
          >
            <span>Leave a Google Review</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
};
