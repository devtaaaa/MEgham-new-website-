import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { InstagramSection } from '../components/InstagramSection';
import { PhotoFramePlaceholder } from '../components/PhotoFramePlaceholder';
import { Instagram, Sparkles, Heart, MessageCircle, ExternalLink, Hash } from 'lucide-react';
import { siteData } from '../content/siteData';

export const InstagramPage: React.FC = () => {
  const hashtags = [
    '#MeghamHaridwar',
    '#MeghamRooftop',
    '#MeghamBakery',
    '#MeghamCelebrations',
    '#HaridwarFoodie',
    '#RooftopCafeHaridwar',
    '#BirthdayAtMegham',
    '#CandlelightHaridwar',
  ];

  return (
    <div className="bg-cream text-espresso min-h-screen">
      {/* Page Header */}
      <PageHeader
        badge="Official Social Chronicle"
        title="The Megham Moments on Instagram"
        subtitle="Extracting authentic stories, 9:16 vertical video reels, and celebrations directly from our community on Instagram."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Instagram' },
        ]}
      />

      {/* Main Instagram Showcase */}
      <InstagramSection />

      {/* Community Spotlight & Hashtag Wall */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        
        {/* Hashtags Section */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-caramel font-semibold">
            Tag Us in Your Stories
          </span>
          <h3 className="font-serif text-3xl font-bold text-espresso">
            Join The Conversation
          </h3>
          <p className="text-xs sm:text-sm text-chocolate/80 font-light">
            Tag <strong className="font-semibold text-espresso">@{siteData.brand.instagramHandle}</strong> or use our official hashtags during your visit to get featured on our live wall!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {hashtags.map((tag) => (
              <a
                key={tag}
                href={siteData.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-creamy-white border border-gold/40 text-chocolate hover:text-espresso hover:border-gold text-xs font-semibold tracking-wider transition-all shadow-sm"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>

        {/* Additional 9:16 Video Frame Spaces for Future Reels */}
        <div className="space-y-6 pt-8 border-t border-beige">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-caramel font-semibold">
              Reel Feed Frames
            </span>
            <h4 className="font-serif text-2xl font-bold text-espresso">
              Upcoming Stories & Reel Slots
            </h4>
            <p className="text-xs text-chocolate/80 font-light">
              Spaces allocated for newly published Instagram video reels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <PhotoFramePlaceholder
              title="Sunset Golden Hour Reel"
              category="Reel Preview"
              caption="Live rooftop sunset vibes captured in 9:16 vertical motion."
              aspectRatio="tall"
            />
            <PhotoFramePlaceholder
              title="Chocolate Frosting ASMR"
              category="Bakery Reel"
              caption="Behind the scenes frosting of our Belgian truffle gateau."
              aspectRatio="tall"
            />
            <PhotoFramePlaceholder
              title="Surprise Birthday Reaction"
              category="Celebration Reel"
              caption="Priceless smiles as sparklers illuminate the rooftop table."
              aspectRatio="tall"
            />
            <PhotoFramePlaceholder
              title="Sizzler Steam & Plating"
              category="Food Reel"
              caption="Hot tandoori platters sizzling on their way to the table."
              aspectRatio="tall"
            />
          </div>
        </div>

      </div>
    </div>
  );
};
