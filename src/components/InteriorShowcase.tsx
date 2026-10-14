import React, { useState } from 'react';
import { Sparkles, Users, Crown, Armchair, ChevronRight } from 'lucide-react';
import { SEATING_ZONES } from '../data/restaurantData';

interface InteriorShowcaseProps {
  onSelectZoneForBooking: (zoneTitle: string) => void;
}

export const InteriorShowcase: React.FC<InteriorShowcaseProps> = ({ onSelectZoneForBooking }) => {
  const [selectedZoneIndex, setSelectedZoneIndex] = useState(0);
  const currentZone = SEATING_ZONES[selectedZoneIndex];

  return (
    <section id="interior" className="py-24 bg-[#0c0908] relative overflow-hidden">
      {/* Subtle ambient glow in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3">
            <Crown className="w-4 h-4 text-amber-400" />
            <span>Palatial Indian Architecture</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            An Opulent Feast for the Senses
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Red Chilli is designed as a contemporary royal haven. Every arch, chandelier, and carved teakwood lattice evokes the majestic grandeur of historic Indian palaces with modern acoustic comfort.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Main Visual Frame */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-amber-900/40 shadow-2xl group min-h-[380px] lg:min-h-[460px]">
            <img
              src="/src/assets/images/interior_royal_dining_1791969977696.jpg"
              alt="Red Chilli Private Dining Lounge with Rajasthani jharokhas and crystal chandeliers"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase tracking-widest text-amber-300 font-bold block mb-1">
                Featured Ambiance
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                The Royal Jharokha Sanctuary
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm max-w-lg leading-relaxed">
                Hand-carved wooden jharokha lattices, low ambient lantern illumination, and velvet seating set with heirloom brass dinnerware.
              </p>
            </div>
          </div>

          {/* 4 Architectural Features Stack */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="p-5 rounded-xl bg-[#14100e] border border-stone-800 hover:border-amber-900/60 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-red-950/80 border border-red-800/40 text-amber-400 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-100 text-base mb-1">
                    Carved Teakwood & Brass Screens
                  </h4>
                  <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                    Custom craftsman woodwork inspired by Rajasthani havelis provides visual privacy between tables without enclosing the vibrant atmosphere.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#14100e] border border-stone-800 hover:border-amber-900/60 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-amber-950/80 border border-amber-800/40 text-amber-400 shrink-0">
                  <Crown className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-100 text-base mb-1">
                    Crystal Chandeliers & Candle Glow
                  </h4>
                  <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                    Hand-cut Bohemian amber chandeliers paired with pure beeswax table candles create a warm, flattering golden illumination.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#14100e] border border-stone-800 hover:border-amber-900/60 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-red-950/80 border border-red-800/40 text-amber-400 shrink-0">
                  <Armchair className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-100 text-base mb-1">
                    Plush Crimson Velvet Banquettes
                  </h4>
                  <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                    Deep crimson upholstery designed for unhurried multi-course dining, business dinners, and family milestones.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#14100e] border border-stone-800 hover:border-amber-900/60 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-amber-950/80 border border-amber-800/40 text-amber-400 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-100 text-base mb-1">
                    Live Charcoal Glass Kitchen
                  </h4>
                  <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                    Watch our master ustads stretch oversized rumali rotis and pull skewers of sizzling kebabs from red-hot clay tandoors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Seating Zone Explorer */}
        <div className="bg-[#120e0c] border border-amber-950/60 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block mb-1">
                Choose Your Atmosphere
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                Select Your Preferred Dining Zone
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {SEATING_ZONES.map((zone, idx) => (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZoneIndex(idx)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedZoneIndex === idx
                      ? 'bg-amber-600 text-white shadow'
                      : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
                  }`}
                >
                  {zone.title}
                </button>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-xl bg-stone-950/70 border border-stone-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3">
                <h4 className="font-display text-lg sm:text-xl font-bold text-amber-200">
                  {currentZone.title}
                </h4>
                <span className="px-2.5 py-0.5 rounded bg-stone-800 text-[11px] font-mono text-stone-300">
                  {currentZone.capacity}
                </span>
              </div>
              <div className="text-xs text-amber-400/90 font-medium italic">
                {currentZone.vibe}
              </div>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                {currentZone.description}
              </p>
            </div>

            <button
              onClick={() => onSelectZoneForBooking(currentZone.title)}
              className="px-5 py-2.5 rounded-lg bg-red-700 hover:bg-red-600 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-red-950/50 transition-all shrink-0 cursor-pointer"
            >
              <span>Book Table in This Area</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
