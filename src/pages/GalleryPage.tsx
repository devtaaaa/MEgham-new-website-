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
              caption="From golden hour to starry nights ✨ When twilight settles over Haridwar, there is no place quite like the Megham terrace."
              aspectRatio="wide"
              likes="1.4k"
              comments="92"
              tags={['#RooftopDining', '#SunsetHaridwar', '#MeghamRooftop']}
              isReel={true}
              instagramUrl="https://www.instagram.com/meghamrestaurant/"
              date="Sunset Reel"
            />
            <PhotoFramePlaceholder
              title="Chocolate Truffle Sculpting"
              category="Bakery Craft"
              caption="Straight from the Megham Bakery studio 🎂 Rich Belgian cocoa ganache whipped to velvety perfection and finished with handcrafted chocolate truffles."
              aspectRatio="wide"
              likes="1.1k"
              comments="78"
              tags={['#ArtisanBakery', '#CakeArt', '#MeghamBakery']}
              isReel={true}
              instagramUrl="https://www.instagram.com/meghamrestaurant/"
              date="Bakery Reel"
            />
            <PhotoFramePlaceholder
              title="Birthday Sparkler Moment"
              category="Celebrations"
              caption="Seeing these priceless smiles is why we love what we do! Complete birthday setup with custom pastel balloon arches and sparkler cake entry."
              aspectRatio="wide"
              likes="1.8k"
              comments="145"
              tags={['#BirthdayCelebration', '#PartySetup', '#MeghamCelebrations']}
              isReel={true}
              instagramUrl="https://www.instagram.com/meghamrestaurant/"
              date="Party Reel"
            />
            <PhotoFramePlaceholder
              title="Clay Tandoor Charcoal Heritage"
              category="Kitchen Craft"
              caption="The sizzle you can hear from across the rooftop! ♨️ Melt-in-your-mouth paneer cubes marinated in rich malai, cardamom, and roasted spices."
              aspectRatio="wide"
              likes="960"
              comments="58"
              tags={['#TandoorHeritage', '#PaneerTikka', '#MeghamFood']}
              instagramUrl="https://www.instagram.com/meghamrestaurant/"
              date="Food Spotlight"
            />
            <PhotoFramePlaceholder
              title="Handcrafted Mocktail Bar"
              category="Rooftop Coolers"
              caption="Handcrafted signature rooftop cooler with fresh crushed garden mint, citrus lime, passionfruit essence, and sparkling bubbles."
              aspectRatio="wide"
              likes="880"
              comments="42"
              tags={['#Mocktails', '#SunsetVibes', '#HaridwarCafe']}
              instagramUrl="https://www.instagram.com/meghamrestaurant/"
              date="Beverage Feature"
            />
            <PhotoFramePlaceholder
              title="Evening Candlelight Path"
              category="Romantic Dinners"
              caption="Candlelight, open breezes, and the one who matters most ❤️ Treat your partner to an intimate romantic evening in our private rooftop gazebo."
              aspectRatio="wide"
              likes="2.4k"
              comments="180"
              tags={['#AnniversaryGoals', '#CandlelightDinner', '#MeghamRomance']}
              isReel={true}
              instagramUrl="https://www.instagram.com/meghamrestaurant/"
              date="Romantic Reel"
            />
          </div>
        </div>

      </div>
    </div>
  );
};
