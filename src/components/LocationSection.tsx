import React from 'react';
import { MapPin, Clock, Car, Navigation, Phone, ExternalLink, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-[#0c0908] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Directions & Timings
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Visit Red Chilli
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Conveniently situated in the city's premier dining hub with complimentary valet parking and private arrival concierges.
          </p>
        </div>

        {/* 2-Column Split: Interactive Map Card + Operating Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Visual Interactive Map Card */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-amber-900/40 bg-[#14100e] relative min-h-[360px] flex flex-col justify-between p-6">
            {/* Styled Map Canvas Visual */}
            <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(#392823_1px,transparent_1px)] [background-size:16px_16px]">
              {/* Simulated Map Roads */}
              <svg className="w-full h-full stroke-stone-700/60" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="120" x2="100%" y2="180" strokeWidth="6" stroke="#251a17" />
                <line x1="35%" y1="0" x2="45%" y2="100%" strokeWidth="8" stroke="#31221e" />
                <line x1="0" y1="280" x2="100%" y2="240" strokeWidth="5" stroke="#251a17" />
                <circle cx="42%" cy="170" r="45" fill="none" stroke="#7f1d1d" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
            </div>

            {/* Glowing Map Pin at Center */}
            <div className="relative z-10 my-auto text-center">
              <div className="inline-flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-red-700 to-amber-600 text-white flex items-center justify-center shadow-2xl shadow-red-600/50 animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="mt-2 px-4 py-2 rounded-xl bg-black/90 border border-amber-600/70 text-white shadow-xl">
                  <div className="font-cinzel text-sm font-bold text-amber-200">
                    Red Chilli Restaurant
                  </div>
                  <div className="text-[11px] text-stone-300">
                    {RESTAURANT_INFO.address}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Map Card Bar */}
            <div className="relative z-10 pt-4 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-stone-300">
                <span className="text-amber-400 font-semibold">Landmark:</span> Opp. Royal Heritage Fountain
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(RESTAURANT_INFO.name + ' ' + RESTAURANT_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-red-800 hover:bg-red-700 text-white text-xs font-semibold shadow transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* Location & Contact Information Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Operating Hours */}
            <div className="p-6 rounded-xl bg-[#14100e] border border-stone-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-amber-950/80 border border-amber-800/40 text-amber-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-100 text-base">Operating Hours</h4>
                  <span className="text-xs text-amber-400 font-medium">{RESTAURANT_INFO.timing.days}</span>
                </div>
              </div>
              <div className="space-y-2.5 text-xs sm:text-sm text-stone-300">
                <div className="flex items-center justify-between pb-2 border-b border-stone-800/80">
                  <span>Royal Lunch Buffet & A La Carte</span>
                  <span className="font-mono text-amber-300 font-medium">{RESTAURANT_INFO.timing.lunch}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Candlelight Dinner & Live Music</span>
                  <span className="font-mono text-amber-300 font-medium">{RESTAURANT_INFO.timing.dinner}</span>
                </div>
              </div>
            </div>

            {/* Valet Parking */}
            <div className="p-6 rounded-xl bg-[#14100e] border border-stone-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-red-950/80 border border-red-800/40 text-red-400">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-100 text-base">Complimentary Valet Service</h4>
                  <span className="text-xs text-stone-400">Secure 3-tier basement & chauffeur lounge</span>
                </div>
              </div>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mt-2">
                Drive straight to the main portico. Our uniformed valet team handles vehicle parking and luggage security.
              </p>
            </div>

            {/* Direct Phone Assistance */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-red-950/60 to-[#19120f] border border-red-800/50 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-red-700 text-white">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-amber-300 font-bold block">
                    Direction Helpline & Concierge
                  </span>
                  <span className="font-mono text-base font-bold text-white">
                    {RESTAURANT_INFO.phone}
                  </span>
                </div>
              </div>
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="px-4 py-2 bg-red-700 hover:bg-red-600 text-white text-xs font-bold rounded-lg shadow whitespace-nowrap"
              >
                Call Valet
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
