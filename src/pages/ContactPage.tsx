import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ContactSection } from '../components/ContactSection';
import { MapPin, Phone, MessageCircle, Clock, Instagram, Compass, CheckCircle2 } from 'lucide-react';
import { siteData } from '../content/siteData';

interface ContactPageProps {
  onOpenReservation: () => void;
  onOpenCakeModal: () => void;
  onOpenCelebrationModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onOpenReservation,
  onOpenCakeModal,
  onOpenCelebrationModal,
}) => {
  return (
    <div className="bg-cream text-espresso min-h-screen">
      {/* Page Header */}
      <PageHeader
        badge="Connect & Visit"
        title="Contact Megham Restaurant & Bakery"
        subtitle="Located in the heart of Haridwar near Arya Nagar Chowk. We look forward to welcoming you for memorable dining and celebratory moments."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
        ]}
      />

      {/* Main Contact Section with map and 6 action buttons */}
      <ContactSection
        onOpenReservation={onOpenReservation}
        onOpenCakeModal={onOpenCakeModal}
        onOpenCelebrationModal={onOpenCelebrationModal}
      />

      {/* Visitor FAQ & Accessibility Guide */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-creamy-white border border-gold/40 rounded-editorial-lg p-8 sm:p-12 shadow-sm space-y-6">
          <h3 className="font-serif text-2xl font-bold text-espresso">
            Visiting Information & Frequently Asked Questions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-xs sm:text-sm text-chocolate/85">
            <div className="space-y-2">
              <h5 className="font-serif font-bold text-espresso text-base flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                Table Reservations
              </h5>
              <p className="font-light leading-relaxed">
                Walk-ins are always welcomed! However, for weekend dinners, candlelight gazebo setups, and group parties, advance booking is strongly recommended.
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="font-serif font-bold text-espresso text-base flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                Pure Vegetarian Food
              </h5>
              <p className="font-light leading-relaxed">
                Megham is a 100% pure vegetarian restaurant. We strictly observe purity and cleanliness. Jain food without onion or garlic is happily prepared on request.
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="font-serif font-bold text-espresso text-base flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                Location & Parking
              </h5>
              <p className="font-light leading-relaxed">
                Located near Uncha Pull, Arya Nagar Chowk (opposite Ola Showroom) in Jwalapur, Haridwar. Convenient vehicular parking is available nearby.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
