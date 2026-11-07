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

        {/* Additional Editorial Photo Grid Spaces with Real Ambience Photography */}
        <div className="space-y-8 pt-8 border-t border-beige">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-caramel font-semibold">
              Archival Frames & Kitchen Highlights
            </span>
            <h3 className="font-serif text-3xl font-bold text-espresso">
              More Moments From The Rooftop
            </h3>
            <p className="text-xs sm:text-sm text-chocolate/80 font-light">
              Captured against Megham's dark marble tables, ambient candlelight, and open Haridwar sky.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <PhotoFramePlaceholder
              title="Sunset Horizon Table Setup"
              category="Ambience"
              caption="From golden hour to starry nights ✨ Contemporary marble table setup under the open sky at Megham terrace."
              aspectRatio="wide"
              photoUrl="/images/food/megham_table_setup.jpg"
              likes="2.5k"
              comments="110"
              tags={['#RooftopDining', '#SunsetHaridwar', '#MeghamRooftop']}
              isReel={true}
              instagramUrl="https://www.instagram.com/meghamrestaurant/"
              date="Sunset Feature"
            />
            <PhotoFramePlaceholder
              title="Clay Tandoor Sizzler Platter"
              category="Kitchen Craft"
              caption="The sizzle you can hear from across the rooftop! ♨️ Paneer Malai Tikka Sizzler with bell peppers and fresh mint dip."
              aspectRatio="wide"
              photoUrl="/images/food/megham_paneer_sizzler.jpg"
              likes="1.8k"
              comments="82"
              tags={['#TandoorHeritage', '#PaneerTikka', '#MeghamFood']}
              instagramUrl="https://www.instagram.com/meghamrestaurant/"
              date="Food Spotlight"
            />
            <PhotoFramePlaceholder
              title="Dal Makhani & Naan Feast"
              category="Slow Charcoal Dum"
              caption="Slow-simmered whole black lentils, golden butter garlic naan, and aged basmati pulao in warm candlelight."
              aspectRatio="wide"
              photoUrl="/images/food/megham_dal_makhani.jpg"
              likes="2.1k"
              comments="94"
              tags={['#DalMakhani', '#RoyalFlavours', '#MeghamDining']}
              instagramUrl="https://www.instagram.com/meghamrestaurant/"
              date="Heritage Spotlight"
            />
            <PhotoFramePlaceholder
              title="Steaming Crystal Dimsums"
              category="Asian Delicacies"
              caption="Steaming hot crystal dumplings served in bamboo steamers with fiery chilli oil dip against evening lights."
              aspectRatio="wide"
              photoUrl="/images/food/megham_dimsum_starters.jpg"
              likes="1.6k"
              comments="74"
              tags={['#Dimsums', '#Momos', '#AsianDelights']}
              isReel={true}
              instagramUrl="https://www.instagram.com/meghamrestaurant/"
              date="Dimsum Reel"
            />
            <PhotoFramePlaceholder
              title="Wood-Fired Artisanal Pizza"
              category="Gourmet Crust"
              caption="Fresh mozzarella, charred crust, and sweet basil leaves on a rustic slate board with rooftop view."
              aspectRatio="wide"
              photoUrl="/images/food/megham_artisan_pizza.jpg"
              likes="1.9k"
              comments="68"
              tags={['#ArtisanPizza', '#HandStretched', '#MeghamCafe']}
              instagramUrl="https://www.instagram.com/meghamrestaurant/"
              date="Pizza Spotlight"
            />
            <PhotoFramePlaceholder
              title="Megham Artisanal Coffee Bar"
              category="Specialty Brews"
              caption="100% Arabica roasts, manual pour overs, layered strawberry matcha, and iced Vietnamese cold brews."
              aspectRatio="wide"
              photoUrl="/images/food/megham_coffee_bar.jpg"
              likes="2.2k"
              comments="88"
              tags={['#MeghamCoffeeBar', '#MatchaCloud', '#HaridwarCafe']}
              isReel={true}
              instagramUrl="https://www.instagram.com/meghamrestaurant/"
              date="Coffee Reel"
            />
          </div>
        </div>

      </div>
    </div>
  );
};
