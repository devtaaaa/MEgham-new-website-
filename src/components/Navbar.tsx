import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Instagram } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
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

  const isHomePage = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? 'bg-cream/95 luxury-blur shadow-luxury py-3 border-b border-beige/60'
            : 'bg-gradient-to-b from-espresso/80 via-espresso/40 to-transparent py-4 text-cream'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <BrandLogo
                variant={isScrolled || !isHomePage ? 'dark' : 'light'}
                size="md"
                showTagline={!isScrolled && isHomePage}
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`text-xs uppercase tracking-widest font-medium transition-all relative py-1 ${
                      isActive
                        ? 'text-gold font-bold after:w-full'
                        : isScrolled || !isHomePage
                        ? 'text-espresso/90 hover:text-gold'
                        : 'text-cream/90 hover:text-gold'
                    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-gold hover:after:w-full after:transition-all after:duration-300 ${
                      isActive ? 'after:w-full' : 'after:w-0'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                onClick={onOpenCelebration}
                className={`text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-full border transition-all duration-300 ${
                  isScrolled || !isHomePage
                    ? 'border-caramel/40 text-chocolate hover:bg-beige/40'
                    : 'border-gold/50 text-cream hover:bg-cream/10'
                }`}
              >
                Plan Celebration
              </button>

              <button
                onClick={onOpenReservation}
                className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-full bg-gold hover:bg-caramel text-espresso transition-all duration-300 shadow-md hover:shadow-gold-glow hover:-translate-y-0.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book a Table</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={onOpenReservation}
                className="sm:hidden text-xs font-semibold px-3 py-1.5 rounded-full bg-gold text-espresso"
              >
                Book Table
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xl transition ${
                  isScrolled || !isHomePage
                    ? 'text-espresso hover:bg-beige/40'
                    : 'text-cream hover:bg-cream/10'
                }`}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-espresso/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-cream p-6 shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-gold/30">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-beige">
                <BrandLogo variant="dark" size="sm" showTagline={false} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-chocolate hover:bg-beige/50"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col space-y-4">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.label}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-base font-serif font-medium transition py-1 border-b border-beige/40 flex items-center justify-between ${
                        isActive ? 'text-caramel font-bold' : 'text-espresso hover:text-caramel'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="text-xs text-caramel">→</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-beige space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 bg-espresso text-cream font-medium text-sm rounded-xl flex items-center justify-center gap-2 shadow-luxury"
              >
                <Calendar className="w-4 h-4 text-gold" />
                <span>Book a Table</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCelebration();
                }}
                className="w-full py-3 border border-caramel text-chocolate font-medium text-sm rounded-xl flex items-center justify-center gap-2 hover:bg-beige/30"
              >
                <span>Plan Your Celebration</span>
              </button>
              <div className="flex items-center justify-between text-xs text-chocolate/80 pt-2">
                <a href={`tel:${siteData.brand.phone}`} className="flex items-center gap-1.5 hover:text-espresso">
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span>{siteData.brand.phoneFormatted}</span>
                </a>
                <a
                  href={siteData.brand.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-caramel hover:text-espresso"
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
