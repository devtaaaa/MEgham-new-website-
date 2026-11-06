import React, { useState } from 'react';
import { X, Cake, Sparkles, MessageCircle, Heart } from 'lucide-react';
import { siteData } from '../../content/siteData';

interface CakeEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCakeTitle?: string;
}

export const CakeEnquiryModal: React.FC<CakeEnquiryModalProps> = ({
  isOpen,
  onClose,
  selectedCakeTitle = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cakeType: selectedCakeTitle || 'Celebration Birthday Cake',
    flavour: 'Belgian Truffle',
    weight: '1 kg',
    occasion: 'Birthday',
    deliveryDate: '',
    customMessage: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Custom Cake Enquiry - Megham Bakery Studio*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Cake Style:* ${encodeURIComponent(formData.cakeType)}%0A` +
      `*Flavour:* ${encodeURIComponent(formData.flavour)}%0A` +
      `*Weight / Size:* ${encodeURIComponent(formData.weight)}%0A` +
      `*Occasion:* ${encodeURIComponent(formData.occasion)}%0A` +
      `*Required Date:* ${encodeURIComponent(formData.deliveryDate || 'Within 2 days')}%0A` +
      (formData.customMessage ? `*Cake Topper / Message:* "${encodeURIComponent(formData.customMessage)}"%0A` : '') +
      (formData.notes ? `*Custom Design Notes:* ${encodeURIComponent(formData.notes)}%0A` : '') +
      `%0APlease let me know the availability and pricing. Thank you!`;

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
            <Cake className="w-3.5 h-3.5 text-gold" />
            Megham Patisserie Studio
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso">
            Order Your Custom Cake
          </h3>
          <p className="text-xs sm:text-sm text-chocolate/80 mt-1">
            Handcrafted with Belgian chocolates, premium vanilla, and artisanal artistry.
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
                placeholder="e.g. Priya Rawat"
                className="w-full px-4 py-2.5 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold bg-creamy-white text-espresso text-sm outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/90 mb-1">
                WhatsApp Number *
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
                Cake Flavour
              </label>
              <select
                value={formData.flavour}
                onChange={(e) => setFormData({ ...formData, flavour: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold bg-creamy-white text-espresso text-sm outline-none transition"
              >
                <option value="Belgian Dark Truffle">Belgian Dark Truffle</option>
                <option value="Lotus Biscoff Cheesecake">Lotus Biscoff Cream</option>
                <option value="Fresh Seasonal Fruit">Fresh Seasonal Fruit Gateau</option>
                <option value="Red Velvet Cream Cheese">Red Velvet Cream Cheese</option>
                <option value="Nutella Hazelnut Crunch">Nutella Hazelnut Crunch</option>
                <option value="Butterscotch Crunch">Butterscotch Caramel Crunch</option>
                <option value="Custom Flavour Request">Other / Custom Flavour</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/90 mb-1">
                Size / Weight
              </label>
              <select
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold bg-creamy-white text-espresso text-sm outline-none transition"
              >
                <option value="0.5 kg (Small Celebration)">0.5 kg (4-5 slices)</option>
                <option value="1 kg (Standard Celebration)">1 kg (8-10 slices)</option>
                <option value="1.5 kg">1.5 kg (12-14 slices)</option>
                <option value="2 kg (Two-Tier Option)">2 kg (Two-Tier Option)</option>
                <option value="3+ kg (Grand Celebration Tier)">3+ kg (Grand Tiered Cake)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/90 mb-1">
                Occasion
              </label>
              <select
                value={formData.occasion}
                onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold bg-creamy-white text-espresso text-sm outline-none transition"
              >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Engagement / Sagai">Engagement / Sagai</option>
                <option value="Children's Theme Cake">Children's Theme Party</option>
                <option value="Milestone / Corporate">Milestone / Corporate</option>
                <option value="Special Gift">Special Gift / Surprise</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/90 mb-1">
                Required By Date *
              </label>
              <input
                type="date"
                required
                value={formData.deliveryDate}
                onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold bg-creamy-white text-espresso text-sm outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/90 mb-1">
              Custom Message on Cake / Topper
            </label>
            <input
              type="text"
              value={formData.customMessage}
              onChange={(e) => setFormData({ ...formData, customMessage: e.target.value })}
              placeholder="e.g. Happy 25th Anniversary Papa & Mummy"
              className="w-full px-4 py-2.5 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold bg-creamy-white text-espresso text-sm outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/90 mb-1">
              Design Notes or Instagram Reference (Optional)
            </label>
            <textarea
              rows={2}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="e.g. Minimalist floral design, reference from your Instagram reel, pastel blue shade..."
              className="w-full px-4 py-2 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold bg-creamy-white text-espresso text-sm outline-none transition resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-chocolate hover:bg-espresso text-cream font-medium rounded-xl shadow-luxury transition-all duration-200 group"
            >
              <MessageCircle className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
              <span>Send Cake Request via WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
