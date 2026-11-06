import React, { useState } from 'react';
import { X, Calendar, Users, Clock, Sparkles, MessageCircle, Phone } from 'lucide-react';
import { siteData } from '../../content/siteData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '07:30 PM',
    guests: '2 Guests',
    occasion: 'Romantic Dinner',
    notes: '',
  });

  if (!isOpen) return null;

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Table Reservation Request - Megham Rooftop*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Date:* ${encodeURIComponent(formData.date || 'Today/Tomorrow')}%0A` +
      `*Time:* ${encodeURIComponent(formData.time)}%0A` +
      `*Guests:* ${encodeURIComponent(formData.guests)}%0A` +
      `*Occasion:* ${encodeURIComponent(formData.occasion)}%0A` +
      (formData.notes ? `*Special Requests:* ${encodeURIComponent(formData.notes)}%0A` : '') +
      `%0APlease confirm table availability. Thank you!`;

    window.open(`https://wa.me/${siteData.brand.whatsappNumber}?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso/70 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-cream border border-gold/40 rounded-editorial-lg shadow-luxury-lg p-6 sm:p-8 text-espresso overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-chocolate/60 hover:text-espresso hover:bg-beige/40 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-caramel font-semibold px-3 py-1 bg-beige/50 rounded-full mb-2">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Reserve Your Experience
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso">
            Book a Table at Megham
          </h3>
          <p className="text-xs sm:text-sm text-chocolate/80 mt-1">
            Enjoy rooftop breezes, exquisite dining, and personalised hospitality.
          </p>
        </div>

        {/* Reservation Form */}
        <form onSubmit={handleWhatsAppBooking} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/90 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Rahul Sharma"
              className="w-full px-4 py-2.5 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold bg-creamy-white text-espresso text-sm outline-none transition"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/90 mb-1">
                Phone Number *
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

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/90 mb-1">
                Occasion
              </label>
              <select
                value={formData.occasion}
                onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold bg-creamy-white text-espresso text-sm outline-none transition"
              >
                <option value="Romantic Dinner">Romantic Dinner / Date</option>
                <option value="Birthday Celebration">Birthday Celebration</option>
                <option value="Anniversary">Anniversary Celebration</option>
                <option value="Family Gathering">Family Gathering</option>
                <option value="Friends Meetup">Friends' Hangout</option>
                <option value="Casual Dining">Casual Dining</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/90 mb-1">
                Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold bg-creamy-white text-espresso text-xs sm:text-sm outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/90 mb-1">
                Time
              </label>
              <select
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold bg-creamy-white text-espresso text-xs sm:text-sm outline-none transition"
              >
                <option value="12:30 PM">12:30 PM (Lunch)</option>
                <option value="01:30 PM">01:30 PM (Lunch)</option>
                <option value="04:30 PM">04:30 PM (Sunset Tea)</option>
                <option value="06:30 PM">06:30 PM (Sunset Dinner)</option>
                <option value="07:30 PM">07:30 PM (Dinner)</option>
                <option value="08:30 PM">08:30 PM (Prime Dinner)</option>
                <option value="09:30 PM">09:30 PM (Late Dinner)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/90 mb-1">
                Guests
              </label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold bg-creamy-white text-espresso text-xs sm:text-sm outline-none transition"
              >
                <option value="2 Guests">2 Guests (Couple)</option>
                <option value="3-4 Guests">3-4 Guests</option>
                <option value="5-8 Guests">5-8 Guests</option>
                <option value="10+ Guests">10+ Guests (Group)</option>
                <option value="20+ Guests (Private Area)">20+ Guests (Party)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/90 mb-1">
              Special Requests (Optional)
            </label>
            <textarea
              rows={2}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="e.g. Candlelight setup, rooftop gazebo corner, Jain food preference..."
              className="w-full px-4 py-2 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold bg-creamy-white text-espresso text-sm outline-none transition resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-espresso hover:bg-chocolate text-cream font-medium rounded-xl shadow-luxury transition-all duration-200 group"
            >
              <MessageCircle className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
              <span>Confirm via WhatsApp</span>
            </button>
            <a
              href={`tel:${siteData.brand.phone}`}
              className="flex items-center justify-center gap-2 px-5 py-3 border border-chocolate/30 hover:border-chocolate text-chocolate font-medium rounded-xl hover:bg-beige/40 transition"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
