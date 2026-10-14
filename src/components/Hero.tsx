import React from 'react';
import { Calendar, QrCode, Phone, Star, Sparkles, MapPin, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenReservation: () => void;
  onOpenQROrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onOpenQROrder }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Photography with Rich Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_redchilli_ambience_1791969977689.jpg"
          alt="Red Chilli Restaurant Royal Interior with glowing crystal chandeliers and carved teakwood arches"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in"
          referrerPolicy="no-referrer"
        />
        {/* Layered luxury scrim: deep obsidian, rich ruby vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0908] via-[#0c0908]/75 to-[#0c0908]/40" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0c0908]/50 to-[#0c0908]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
        {/* Subtle Editorial Kicker without pill badge */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-amber-300 uppercase mb-4">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Royal Indian Fine Dining & Tandoor</span>
          <span className="text-amber-500/60">·</span>
          <span>Authentic Awadhi Heritage</span>
        </div>

        {/* Main Display Headline */}
        <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] text-balance">
          Royal Flavours, <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-red-400 bg-clip-text text-transparent">
            Regal Ambiance.
          </span>
        </h1>

        {/* High-Impact Description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-stone-300 font-light leading-relaxed mb-8 text-balance">
          Step into <span className="text-amber-200 font-medium">Red Chilli</span> — an architectural marvel of hand-carved jharokhas and crystal chandeliers, serving Awadhi dum biryanis, charcoal tandoori kebabs, and velvety curries.
        </p>

        {/* Primary Action Row with Prominent Direct Call */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <button
            onClick={onOpenReservation}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-gradient-to-r from-red-700 via-red-600 to-amber-600 hover:from-red-600 hover:to-amber-500 text-white font-semibold text-sm sm:text-base shadow-xl shadow-red-950/50 hover:shadow-red-800/60 transition-all transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve a Table</span>
          </button>

          <button
            onClick={onOpenQROrder}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#1a1412]/90 hover:bg-[#251e1b] text-amber-100 font-semibold text-sm sm:text-base border border-amber-800/50 hover:border-amber-600 transition-all transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
          >
            <QrCode className="w-4 h-4 text-amber-400" />
            <span>Digital In-Table QR Menu</span>
          </button>

          {/* Prominent Direct Phone Hotline Button */}
          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="flex items-center gap-2.5 px-5 py-3.5 rounded-lg bg-stone-900/90 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700/80 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-red-400" />
            <span className="text-xs uppercase tracking-wider text-stone-400 font-medium">Hotline:</span>
            <span className="font-mono font-bold text-amber-300">{RESTAURANT_INFO.phone}</span>
          </a>
        </div>

        {/* Adjacency Proof Bar: 4 Pillars of Excellence */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-stone-800/60 text-left">
          <div className="p-3 sm:p-4 rounded-xl bg-[#14100e]/80 border border-stone-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-1 text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="font-semibold text-stone-100 text-sm">4.9 / 5.0 Rating</div>
            <div className="text-xs text-stone-400">1,420+ Verified Foodies</div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-[#14100e]/80 border border-stone-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-red-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-wider text-amber-300 font-bold">Awadhi & Tandoor</span>
            </div>
            <div className="font-semibold text-stone-100 text-sm">Clay Oven Cooking</div>
            <div className="text-xs text-stone-400">100% Charcoal Infused</div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-[#14100e]/80 border border-stone-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-amber-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-wider text-amber-300 font-bold">Royal Interior</span>
            </div>
            <div className="font-semibold text-stone-100 text-sm">Private Jharokhas</div>
            <div className="text-xs text-stone-400">Grand Crystal Chandeliers</div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-[#14100e]/80 border border-stone-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-amber-400 mb-1">
              <MapPin className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-wider text-amber-300 font-bold">Open Everyday</span>
            </div>
            <div className="font-semibold text-stone-100 text-sm">12 PM – Midnight</div>
            <div className="text-xs text-stone-400">Complimentary Valet</div>
          </div>
        </div>
      </div>
    </section>
  );
};
