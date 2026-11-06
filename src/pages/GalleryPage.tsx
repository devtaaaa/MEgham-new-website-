import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { MagazineGallery } from '../components/MagazineGallery';
import { PhotoFramePlaceholder } from '../components/PhotoFramePlaceholder';
import { Sparkles, Camera } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  return (
    <div className="bg-cream text-espresso min-h-screen">
      {/* Page Header */}
      <PageHeader
        badge="Editorial Photography"
        title="The Megham Visual Gallery"
        subtitle="An editorial food and hospitality showcase composed of authentic stories, celebration setups, and culinary creations."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Gallery' },
        ]}
      />

      {/* Main Magazine Gallery Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Curated Magazine Exhibition */}
        <MagazineGallery />

        {/* Additional Editorial Photo Grid Spaces */}
        <div className="space-y-8 pt-8 border-t border-beige">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-caramel font-semibold">
              Archival Frames
            </span>
            <h3 className="font-serif text-3xl font-bold text-espresso">
              More Moments From The Rooftop
            </h3>
            <p className="text-xs sm:text-sm text-chocolate/80 font-light">
              Spaces prepared for continuous visual updates and new Instagram stories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <PhotoFramePlaceholder
              title="Sunset Horizon Table"
              category="Ambience"
              caption="Golden skies greeting diners on the open rooftop terrace."
              aspectRatio="wide"
            />
            <PhotoFramePlaceholder
              title="Chocolate Truffle Sculpting"
              category="Bakery"
              caption="Handcrafting decadent truffles and celebration tiers."
              aspectRatio="wide"
            />
            <PhotoFramePlaceholder
              title="Birthday Sparkler Moment"
              category="Celebrations"
              caption="Joyous smiles as candles are blown under fairy lights."
              aspectRatio="wide"
            />
            <PhotoFramePlaceholder
              title="Clay Tandoor Roasting"
              category="Kitchen"
              caption="Traditional clay oven producing fragrant naan and malai tikka."
              aspectRatio="wide"
            />
            <PhotoFramePlaceholder
              title="Mocktail Shaking Bar"
              category="Beverages"
              caption="Handcrafted syrups and crushed citrus coolers."
              aspectRatio="wide"
            />
            <PhotoFramePlaceholder
              title="Evening Candlelight Path"
              category="Romantic Dinners"
              caption="Rose petal walkway leading to private gazebo dining."
              aspectRatio="wide"
            />
          </div>
        </div>

      </div>
    </div>
  );
};
