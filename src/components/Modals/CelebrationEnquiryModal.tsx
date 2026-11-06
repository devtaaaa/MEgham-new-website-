import React, { useState } from 'react';
import { X, Sparkles, Calendar, Users, PartyPopper, MessageCircle, Phone } from 'lucide-react';
import { siteData } from '../../content/siteData';

interface CelebrationEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedOccasion?: string;
}

export const CelebrationEnquiryModal: React.FC<CelebrationEnquiryModalProps> = ({
  isOpen,
  onClose,
  selectedOccasion = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    occasion: selectedOccasion || 'Birthday Celebration',
    date: '',
    guestCount: '15-25 Guests',
    decorPreference: 'Balloon & Floral Arch Setup',
    needCustomCake: 'Yes, please include custom cake',
    budgetRange: 'Standard Celebration Package',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Celebration Planning Enquiry - Megham Rooftop*%0A%0A` +
      `*Host Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Occasion:* ${encodeURIComponent(formData.occasion)}%0A` +
      `*Event Date:* ${encodeURIComponent(formData.date || 'To be finalized')}%0A` +
      `*Expected Guests:* ${encodeURIComponent(formData.guestCount)}%0A` +
      `*Decoration Preference:* ${encodeURIComponent(formData.decorPreference)}%0A` +
      `*Custom Cake Required:* ${encodeURIComponent(formData.needCustomCake)}%0A` +
      (formData.notes ? `*Special Requirements:* ${encodeURIComponent(formData.notes)}%0A` : '') +
      `%0APlease share package details and availability. Thank you!`;

    window.open(`https://wa.me/${siteData.brand.whatsappNumber}?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso/70 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-cream border border-gold/40 rounded-editorial-lg shadow-luxury-lg p-6 sm:p-8 text-espresso overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-chocolate/60 hover:text-espresso hover:bg-beige/40 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-caramel font-semibold px-3 py-1 bg-beige/50 rounded-full mb-2">
            <PartyPopper className="w-3.5 h-3.5 text-gold" />
            Make Your Celebration Special
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso">
            Plan Your Event at Megham
          </h3>
          <p className="text-xs sm:text-sm text-chocolate/80 mt-1">
            Bespoke rooftop decor, multi-course feasts, custom cakes, and attentive service.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/90 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Vikas Bansal"
                className="w-full px-4 py-2.5 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold bg-creamy-white text-espresso text-sm outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/90 mb-1">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 98765 43210"
                className="w-full px-4 py-2.5 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold bg-creamy-white text-espresso text-sm outline-none transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/90 mb-1">
                Occasion Type
              </label>
              <select
                value={formData.occasion}
                onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold bg-creamy-white text-espresso text-sm outline-none transition"
              >
                <option value="Birthday Celebration">Birthday Celebration</option>
                <option value="Anniversary Celebration">Anniversary Party</option>
                <option value="Ring Ceremony / Sagai">Ring Ceremony / Sagai</option>
                <option value="Family Reunion">Family Gathering / Reunion</option>
                <option value="Friends Get-Together">Friends' Get-Together / Kitty Party</option>
                <option value="Corporate Celebration">Corporate Party / Team Dinner</option>
                <option value="Festive Event">Festive Celebration</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/90 mb-1">
                Expected Guests
              </label>
              <select
                value={formData.guestCount}
                onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold bg-creamy-white text-espresso text-sm outline-none transition"
              >
                <option value="2 Guests (Private Candlelight Table)">2 Guests (Candlelight)</option>
                <option value="5-10 Guests (Intimate Circle)">5-10 Guests</option>
                <option value="15-25 Guests (Standard Party)">15-25 Guests</option>
                <option value="30-50 Guests (Large Gathering)">30-50 Guests</option>
                <option value="50-100 Guests (Full Rooftop Event)">50-100+ Guests (Full Venue)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/90 mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold bg-creamy-white text-espresso text-xs sm:text-sm outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/90 mb-1">
                Include Custom Cake?
              </label>
              <select
                value={formData.needCustomCake}
                onChange={(e) => setFormData({ ...formData, needCustomCake: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold bg-creamy-white text-espresso text-sm outline-none transition"
              >
                <option value="Yes, please include custom cake">Yes, from Megham Bakery</option>
                <option value="No, just table and feast">No, only dining & decor</option>
                <option value="Undecided">Discuss during call</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/90 mb-1">
              Decoration & Theme Wishes (Optional)
            </label>
            <textarea
              rows={2}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="e.g. Pastel balloon arch, fairy light tunnel, live music playlist, Jain food counter..."
              className="w-full px-4 py-2 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold bg-creamy-white text-espresso text-sm outline-none transition resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-espresso hover:bg-chocolate text-cream font-medium rounded-xl shadow-luxury transition-all duration-200 group"
            >
              <MessageCircle className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
              <span>Submit Event Enquiry via WhatsApp</span>
            </button>
            <a
              href={`tel:${siteData.brand.phone}`}
              className="flex items-center justify-center gap-2 px-5 py-3 border border-chocolate/30 hover:border-chocolate text-chocolate font-medium rounded-xl hover:bg-beige/40 transition"
            >
              <Phone className="w-4 h-4" />
              <span>Call Team</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
