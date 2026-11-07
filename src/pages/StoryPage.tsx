import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { PhotoFramePlaceholder } from '../components/PhotoFramePlaceholder';
import { Sparkles, Utensils, Cake, Heart, Award, ShieldCheck, Calendar } from 'lucide-react';
import { siteData } from '../content/siteData';

interface StoryPageProps {
  onOpenReservation: () => void;
  onOpenCelebrationModal: () => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({
  onOpenReservation,
  onOpenCelebrationModal,
}) => {
  return (
    <div className="bg-cream text-espresso min-h-screen">
      {/* Editorial Page Header */}
      <PageHeader
        badge="The Megham Chronicle"
        title="Our Story & Philosophy"
        subtitle="Born out of love for authentic flavours, artisanal baking, and unforgettable rooftop memories under the Haridwar sky."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Story' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        
        {/* Section 1: The Genesis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-caramel font-semibold px-3 py-1 bg-beige/60 rounded-full border border-gold/30 inline-block">
              Elevated Hospitality
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso leading-tight">
              A Sanctuary Above The Bustling Holy City
            </h2>
            <div className="w-16 h-0.5 bg-gold" />
            <p className="text-sm sm:text-base text-chocolate/85 font-light leading-relaxed">
              Situated near Arya Nagar Chowk (Uncha Pull) in Jwalapur, Haridwar, Megham was conceived with a clear vision: to establish a world-class culinary sanctuary that seamlessly merges three distinctive passions under one roof.
            </p>
            <p className="text-sm sm:text-base text-chocolate/85 font-light leading-relaxed">
              We asked ourselves: why should one have to choose between a gourmet restaurant, a high-end patisserie, and a vibrant celebration destination? Megham brings all three together with uncompromising quality, pure vegetarian purity, and genuine warmth.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-beige">
              <div>
                <span className="font-serif text-3xl font-bold text-caramel block">100%</span>
                <span className="text-xs text-chocolate/75 uppercase tracking-wider font-medium">
                  Pure Vegetarian & Jain Friendly
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-caramel block">Open Air</span>
                <span className="text-xs text-chocolate/75 uppercase tracking-wider font-medium">
                  Panoramic Rooftop Ambience
                </span>
              </div>
            </div>
          </div>

          {/* Photo Space / Framed Highlight */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            <PhotoFramePlaceholder
              title="Golden Hour Sunset & Twilight Vibe"
              category="Rooftop Ambience"
              caption="From golden hour to starry nights ✨ When twilight settles over Haridwar, there is no place quite like the Megham terrace. Come for the food, stay for the magic."
              aspectRatio="portrait"
              likes="1.4k"
              comments="92"
              tags={['#MeghamHaridwar', '#RooftopCafe', '#SunsetSky']}
              isReel={true}
              instagramUrl="https://www.instagram.com/meghamrestaurant/"
              date="Official Reel"
            />
          </div>
        </div>

        {/* Section 2: Visual Photo Spaces Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-caramel font-semibold">
              Live From Our Instagram
            </span>
            <h3 className="font-serif text-3xl font-bold text-espresso">
              Crafted With Care In Every Corner
            </h3>
            <p className="text-xs sm:text-sm text-chocolate/80 font-light">
              Real stories, culinary preparation, and celebration setups from our official feed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <PhotoFramePlaceholder
              title="Clay Tandoor Charcoal Heritage"
              category="Kitchen Craft"
              caption="The sizzle you can hear from across the rooftop! ♨️ Melt-in-your-mouth paneer cubes marinated in rich malai, cardamom, and roasted spices."
              aspectRatio="square"
              likes="960"
              comments="58"
              tags={['#TandoorHeritage', '#PaneerTikka', '#MeghamFood']}
              instagramUrl="https://www.instagram.com/meghamrestaurant/"
              date="Food Spotlight"
            />
            <PhotoFramePlaceholder
              title="Handcrafting Belgian Truffle Gateau"
              category="Bakery Craft"
              caption="Straight from the Megham Bakery studio 🎂 Rich Belgian cocoa ganache whipped to velvety perfection and finished with handcrafted chocolate truffles."
              aspectRatio="square"
              likes="1.1k"
              comments="78"
              tags={['#ArtisanBakery', '#CakeArt', '#MeghamBakery']}
              isReel={true}
              instagramUrl="https://www.instagram.com/meghamrestaurant/"
              date="Bakery Reel"
            />
            <PhotoFramePlaceholder
              title="Candlelight Gazebo Anniversary"
              category="Celebrations"
              caption="Candlelight, open breezes, and the one who matters most ❤️ Treat your partner to an intimate romantic evening in our private rooftop gazebo."
              aspectRatio="square"
              likes="2.4k"
              comments="180"
              tags={['#AnniversaryGoals', '#CandlelightDinner', '#MeghamRomance']}
              isReel={true}
              instagramUrl="https://www.instagram.com/meghamrestaurant/"
              date="Celebration Reel"
            />
          </div>
        </div>

        {/* Section 3: The Three Pillars */}
        <div className="bg-creamy-white border border-gold/40 rounded-editorial-lg p-8 sm:p-14 shadow-luxury space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-caramel font-semibold">
              Our Core Pillars
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-espresso">
              What Defines Megham
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-cream border border-gold/20 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-beige/60 flex items-center justify-center text-gold">
                <Utensils className="w-6 h-6 text-chocolate" />
              </div>
              <h4 className="font-serif text-xl font-bold text-espresso">Culinary Excellence</h4>
              <p className="text-xs text-chocolate/80 leading-relaxed font-light">
                Authentic North Indian curries, slow-cooked dal, sizzling starters, and fresh oven-baked pizzas prepared with top-grade ghee, cream, and organic spices.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream border border-gold/20 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-beige/60 flex items-center justify-center text-gold">
                <Cake className="w-6 h-6 text-chocolate" />
              </div>
              <h4 className="font-serif text-xl font-bold text-espresso">Artisan Patisserie</h4>
              <p className="text-xs text-chocolate/80 leading-relaxed font-light">
                An authentic bakery dedicated to Belgian chocolate truffles, Biscoff cheesecakes, and custom tiered cakes designed for your milestone celebrations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream border border-gold/20 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-beige/60 flex items-center justify-center text-gold">
                <Heart className="w-6 h-6 text-chocolate" />
              </div>
              <h4 className="font-serif text-xl font-bold text-espresso">Heartfelt Hospitality</h4>
              <p className="text-xs text-chocolate/80 leading-relaxed font-light">
                From personalized decorations and candlelight setups to gracious table service, we treat every patron like an esteemed family guest.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: CTA Box */}
        <div className="bg-gradient-to-r from-deep-espresso via-chocolate-brown to-deep-espresso text-cream rounded-editorial-lg p-10 sm:p-14 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-gold font-semibold">
              Experience Megham In Person
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-cream">
              Join Us Tonight On The Rooftop
            </h3>
            <p className="text-xs sm:text-sm text-warm-beige/80 max-w-xl font-light">
              Whether you are planning an intimate dinner or hosting a party, our team is ready to welcome you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button
              onClick={onOpenReservation}
              className="px-8 py-4 bg-muted-golden hover:bg-soft-caramel text-deep-espresso font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all"
            >
              Book a Table
            </button>
            <button
              onClick={onOpenCelebrationModal}
              className="px-8 py-4 border border-gold/40 hover:border-gold text-cream font-medium text-xs uppercase tracking-wider rounded-full hover:bg-cream/10 transition-all text-center"
            >
              Plan Your Celebration
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
