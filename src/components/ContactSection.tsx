import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Instagram, Compass, Calendar, Cake, PartyPopper } from 'lucide-react';
import { siteData } from '../content/siteData';

interface ContactSectionProps {
  onOpenReservation: () => void;
  onOpenCakeModal: () => void;
  onOpenCelebrationModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenReservation,
  onOpenCakeModal,
  onOpenCelebrationModal,
}) => {
  return (
    <section id="contact" className="py-24 bg-cream text-espresso relative overflow-hidden">
      {/* Background Decorative Gold Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-warm-beige/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-caramel px-4 py-1.5 rounded-full bg-beige/60 border border-gold/30 inline-block">
            Visit & Connect
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso">
            We Welcome You To Megham
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
          <p className="text-sm sm:text-base text-chocolate/80 leading-relaxed font-light">
            Plan your visit, order custom bakery creations, or get in touch with our event hosts.
          </p>
        </div>

        {/* 6 Functional Quick Action Buttons as requested */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
          <a
            href={`tel:${siteData.brand.phone}`}
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-espresso hover:bg-chocolate text-cream shadow-card transition-all duration-300 hover:-translate-y-1 group"
          >
            <Phone className="w-5 h-5 text-gold group-hover:scale-110 transition-transform mb-2" />
            <span className="text-xs font-semibold uppercase tracking-wider">Call Now</span>
          </a>

          <a
            href={`https://wa.me/${siteData.brand.whatsappNumber}?text=Hi%20Megham,%20I%20have%20an%20enquiry.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-espresso hover:bg-chocolate text-cream shadow-card transition-all duration-300 hover:-translate-y-1 group"
          >
            <MessageCircle className="w-5 h-5 text-gold group-hover:scale-110 transition-transform mb-2" />
            <span className="text-xs font-semibold uppercase tracking-wider">WhatsApp</span>
          </a>

          <a
            href={siteData.brand.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-espresso hover:bg-chocolate text-cream shadow-card transition-all duration-300 hover:-translate-y-1 group"
          >
            <Compass className="w-5 h-5 text-gold group-hover:scale-110 transition-transform mb-2" />
            <span className="text-xs font-semibold uppercase tracking-wider">Directions</span>
          </a>

          <button
            onClick={onOpenReservation}
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-muted-golden hover:bg-soft-caramel text-deep-espresso shadow-gold-glow transition-all duration-300 hover:-translate-y-1 group"
          >
            <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform mb-2" />
            <span className="text-xs font-bold uppercase tracking-wider">Book Table</span>
          </button>

          <button
            onClick={() => onOpenCakeModal()}
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-soft-caramel hover:bg-muted-golden text-cream shadow-card transition-all duration-300 hover:-translate-y-1 group"
          >
            <Cake className="w-5 h-5 group-hover:scale-110 transition-transform mb-2" />
            <span className="text-xs font-bold uppercase tracking-wider">Order Cake</span>
          </button>

          <button
            onClick={() => onOpenCelebrationModal()}
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-chocolate-brown hover:bg-deep-espresso text-cream shadow-card transition-all duration-300 hover:-translate-y-1 group"
          >
            <PartyPopper className="w-5 h-5 text-gold group-hover:scale-110 transition-transform mb-2" />
            <span className="text-xs font-semibold uppercase tracking-wider">Plan Event</span>
          </button>
        </div>

        {/* Details & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Verified Contact Information Card */}
          <div className="lg:col-span-5 bg-creamy-white border border-gold/40 rounded-editorial-lg p-8 shadow-card space-y-6">
            <h3 className="font-serif text-2xl font-bold text-espresso">
              Location & Details
            </h3>

            <div className="space-y-5 text-sm text-chocolate/90 font-light">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold text-espresso">Rooftop Restaurant Address:</strong>
                  <span>{siteData.brand.fullAddress}</span>
                  <span className="block text-xs text-caramel mt-0.5">({siteData.brand.landmark})</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold text-espresso">Reservations & Orders:</strong>
                  <a href={`tel:${siteData.brand.phone}`} className="hover:text-gold transition">
                    {siteData.brand.phoneFormatted}
                  </a>
                  <span className="mx-1">/</span>
                  <a href={`tel:${siteData.brand.altPhone}`} className="hover:text-gold transition">
                    {siteData.brand.altPhoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold text-espresso">Operating Hours:</strong>
                  <span>{siteData.brand.hours}</span>
                  <p className="text-xs text-chocolate/70 mt-0.5">Open every day for lunch, sunset coolers & evening dinner.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Instagram className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold text-espresso">Instagram Profile:</strong>
                  <a
                    href={siteData.brand.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-caramel font-semibold hover:underline"
                  >
                    @{siteData.brand.instagramHandle}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-beige">
              <a
                href={siteData.brand.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-espresso hover:bg-chocolate text-cream font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition"
              >
                <Compass className="w-4 h-4 text-gold" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right: Map Embed Frame */}
          <div className="lg:col-span-7 bg-creamy-white border border-gold/40 rounded-editorial-lg overflow-hidden shadow-card h-[400px] relative">
            <iframe
              title="Megham Rooftop Restaurant Location Map"
              src="https://maps.google.com/maps?q=Megham+Rooftop+Restaurant+Aryanagar+Chowk+Haridwar&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 bg-deep-espresso/90 backdrop-blur-md text-cream px-4 py-2 rounded-xl text-xs flex items-center gap-2 border border-gold/40 shadow-lg">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span>Megham • Uncha Pull, Arya Nagar Chowk</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
