import React, { useState, useEffect } from 'react';
import { Phone, UtensilsCrossed, QrCode, Calendar, Menu, X, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeaderProps {
  onOpenReservation: () => void;
  onOpenQROrder: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenReservation,
  onOpenQROrder,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Royal Interior', href: '#interior' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location & Hours', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0f0c0a]/95 backdrop-blur-md border-b border-amber-950/40 shadow-xl py-3'
          : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-left shrink-0 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-600 to-amber-700 flex items-center justify-center shadow-lg shadow-red-900/30 group-hover:scale-105 transition-transform">
              <UtensilsCrossed className="w-5 h-5 text-amber-100" />
            </div>
            <div>
              <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider text-amber-100 block leading-tight">
                RED CHILLI
              </span>
              <span className="text-[10px] uppercase tracking-widest text-amber-400/90 font-medium block">
                Royal Indian Dining
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Clean single line) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-stone-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-amber-300 ${
                  activeSection === link.href.substring(1)
                    ? 'text-amber-400 font-semibold border-b border-amber-400'
                    : 'text-stone-300'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & PROMINENT Phone Number */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Prominent Phone Hotline */}
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-red-950/80 border border-red-700/60 hover:bg-red-900 text-amber-100 transition-all shadow-md group"
              title="Call Red Chilli"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <Phone className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
              <div className="text-left">
                <span className="hidden sm:block text-[9px] uppercase tracking-wider text-amber-300/80 font-bold leading-none">
                  Direct Hotline
                </span>
                <span className="font-mono font-bold text-xs sm:text-sm text-amber-100 tracking-wider">
                  {RESTAURANT_INFO.phone}
                </span>
              </div>
            </a>

            {/* QR Menu Button */}
            <button
              onClick={onOpenQROrder}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-stone-900/90 hover:bg-stone-800 text-stone-200 border border-stone-700 transition-colors"
            >
              <QrCode className="w-4 h-4 text-amber-400" />
              <span>QR Order</span>
            </button>

            {/* Table Reservation Button */}
            <button
              onClick={onOpenReservation}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-gradient-to-r from-red-700 to-amber-700 hover:from-red-600 hover:to-amber-600 text-white shadow-lg shadow-red-900/20 transition-all hover:shadow-red-800/40"
            >
              <Calendar className="w-4 h-4" />
              <span className="whitespace-nowrap">Book Table</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-stone-900/80 text-stone-300 hover:text-white border border-stone-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#120e0d] border-b border-amber-950/60 px-6 py-5 shadow-2xl transition-all">
          <div className="flex flex-col gap-3">
            {/* Prominent Mobile Phone Banner */}
            <div className="p-3 rounded-lg bg-red-950/90 border border-red-700/50 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400" />
                <div>
                  <div className="text-[10px] uppercase text-amber-300/80 font-bold">Call For Reservations</div>
                  <div className="font-mono font-bold text-amber-100 text-sm tracking-wider">{RESTAURANT_INFO.phone}</div>
                </div>
              </div>
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="px-3 py-1.5 bg-red-700 hover:bg-red-600 text-white text-xs font-bold rounded shadow"
              >
                Call Now
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1 pb-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQROrder();
                }}
                className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-stone-900 border border-amber-900/40 text-stone-200 text-xs font-semibold"
              >
                <QrCode className="w-4 h-4 text-amber-400" />
                <span>In-Table QR Menu</span>
              </button>
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-800/40 text-emerald-200 text-xs font-semibold"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="h-px bg-stone-800 my-1" />

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-stone-200 hover:text-amber-400 text-base font-medium transition-colors border-b border-stone-800/40"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
