import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Instagram, Sparkles, ChevronRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { siteData } from '../content/siteData';

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenCelebration: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation, onOpenCelebration }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Our Story', path: '/story' },
    { label: 'Our Menu', path: '/menu' },
    { label: 'Megham Bakery', path: '/bakery' },
    { label: 'Celebrations', path: '/celebrations' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Instagram', path: '/instagram' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Floating Side-Curved Glass Navigation Bar */}
      <header className="fixed top-2.5 sm:top-4 md:top-5 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 flex justify-center pointer-events-none transition-all duration-300">
        <div
          className={`pointer-events-auto w-full max-w-7xl h-16 sm:h-[70px] md:h-[72px] rounded-full px-4 sm:px-6 lg:px-7 flex items-center justify-between gap-2 lg:gap-4 transition-all duration-500 ${
            isScrolled
              ? 'bg-[#18110c]/90 border-gold/45 shadow-[0_12px_45px_rgba(0,0,0,0.6)] backdrop-blur-2xl'
              : 'bg-deep-espresso/80 border-gold/30 shadow-[0_10px_35px_rgba(0,0,0,0.45)] backdrop-blur-xl'
          } border ring-1 ring-white/10`}
        >
          {/* 1. Left: Brand Logo (Properly Aligned & Vertically Centered) */}
          <Link
            to="/"
            className="flex items-center group shrink-0 py-1 transition-transform duration-300 hover:scale-[1.02]"
            aria-label="Megham Home"
          >
            <BrandLogo variant="light" size="md" showTagline={true} />
          </Link>

          {/* 2. Center: Desktop Navigation Links (Properly Spaced & Aligned) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 2xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`relative px-3 xl:px-3.5 py-1.5 rounded-full text-[11px] xl:text-xs uppercase tracking-wider font-semibold transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'text-gold bg-gold/15 border border-gold/40 shadow-[0_0_12px_rgba(197,164,109,0.2)] font-bold'
                      : 'text-cream/80 hover:text-gold hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* 3. Right: Action Buttons (Curved Pills & Vertical Alignment) */}
          <div className="flex items-center gap-2 sm:gap-2.5 xl:gap-3 shrink-0">
            {/* Plan Celebration Outline Pill */}
            <button
              onClick={onOpenCelebration}
              className="hidden sm:inline-flex items-center justify-center text-[11px] xl:text-xs uppercase tracking-wider font-semibold px-4 xl:px-4.5 py-2 rounded-full border border-gold/45 hover:border-gold text-cream hover:text-gold hover:bg-gold/10 transition-all duration-300 shadow-xs whitespace-nowrap"
            >
              Plan Celebration
            </button>

            {/* Book A Table Radiant Gold Pill */}
            <button
              onClick={onOpenReservation}
              className="inline-flex items-center justify-center gap-1.5 text-[11px] sm:text-xs uppercase tracking-wider font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-gold via-[#d4b47e] to-gold hover:opacity-95 text-deep-espresso transition-all duration-300 shadow-md hover:shadow-gold-glow hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Table</span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-cream/90 hover:text-gold hover:bg-white/10 border border-gold/30 transition-all"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-gold" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Floating Side-Curved Glass Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden px-4 pt-24 pb-8 flex justify-center animate-fade-in">
          {/* Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Glass Drawer Card with Side Curves */}
          <div className="relative z-10 w-full max-w-md bg-[#18110c]/95 backdrop-blur-2xl border border-gold/40 rounded-3xl p-6 shadow-2xl flex flex-col justify-between overflow-y-auto max-h-[82vh] ring-1 ring-white/10 text-cream">
            <div>
              {/* Header inside mobile drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-gold/25">
                <BrandLogo variant="light" size="sm" showTagline={true} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-warm-beige hover:text-gold hover:bg-white/10 border border-gold/25"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links List */}
              <nav className="mt-5 flex flex-col space-y-1.5">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.label}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-2.5 rounded-full text-sm font-serif transition-all flex items-center justify-between ${
                        isActive
                          ? 'bg-gold/20 text-gold font-bold border border-gold/40'
                          : 'text-warm-beige hover:text-gold hover:bg-white/5'
                      }`}
                    >
                      <span className="tracking-wide">{link.label}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-gold' : 'text-warm-beige/40'}`} />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Footer CTAs & Contact */}
            <div className="pt-5 mt-6 border-t border-gold/25 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 rounded-full bg-gradient-to-r from-gold via-[#d4b47e] to-gold text-deep-espresso font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-gold-glow"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCelebration();
                }}
                className="w-full py-2.5 rounded-full border border-gold/50 text-cream hover:bg-gold/10 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>Plan Your Celebration</span>
              </button>

              <div className="flex items-center justify-between text-xs text-warm-beige/80 pt-2 px-1">
                <a href={`tel:${siteData.brand.phone}`} className="flex items-center gap-1.5 hover:text-gold">
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span>{siteData.brand.phoneFormatted}</span>
                </a>
                <a
                  href={siteData.brand.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-gold hover:text-cream"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>@{siteData.brand.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
