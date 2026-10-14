import React from 'react';
import { UtensilsCrossed, Phone, MapPin, Mail, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenReservation: () => void;
  onOpenQROrder: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation, onOpenQROrder }) => {
  return (
    <footer className="bg-[#080605] border-t border-stone-800/80 pt-16 pb-24 lg:pb-16 text-stone-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-red-700 flex items-center justify-center text-amber-100">
                <UtensilsCrossed className="w-4 h-4" />
              </div>
              <span className="font-cinzel text-xl font-bold tracking-wider text-white">
                RED CHILLI
              </span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed mb-4">
              An authentic royal Indian dining sanctuary celebrating slow-cooked Awadhi tandoor cuisine, fragrant saffron biryanis, and palatial hospitality.
            </p>
            <div className="text-xs text-stone-500">
              Direct Inquiries: <a href={`tel:${RESTAURANT_INFO.phone}`} className="font-mono text-amber-300 font-bold">{RESTAURANT_INFO.phone}</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel text-sm font-bold text-stone-100 uppercase tracking-wider mb-4">
              Culinary Journey
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">
                  A La Carte Menu
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenQROrder}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Digital In-Table QR Order
                </button>
              </li>
              <li>
                <a href="#interior" className="hover:text-amber-300 transition-colors">
                  Royal Jharokha Interiors
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-300 transition-colors">
                  Food & Ambiance Gallery
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenReservation}
                  className="hover:text-amber-300 transition-colors text-left text-amber-400 font-semibold"
                >
                  Book Royal Dining Table
                </button>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="font-cinzel text-sm font-bold text-stone-100 uppercase tracking-wider mb-4">
              Dining Schedule
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div>
                <span className="text-stone-300 block font-medium">Lunch Service</span>
                <span className="font-mono text-amber-400/90">{RESTAURANT_INFO.timing.lunch}</span>
              </div>
              <div>
                <span className="text-stone-300 block font-medium">Dinner & Candlelight</span>
                <span className="font-mono text-amber-400/90">{RESTAURANT_INFO.timing.dinner}</span>
              </div>
              <div className="pt-1 text-[11px] text-stone-500">
                Open All 7 Days · Valet Parking Available
              </div>
            </div>
          </div>

          {/* Direct Address & Phone */}
          <div>
            <h4 className="font-cinzel text-sm font-bold text-stone-100 uppercase tracking-wider mb-4">
              Contact & Hotline
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}, {RESTAURANT_INFO.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="font-mono font-bold text-stone-200 hover:text-amber-300"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{RESTAURANT_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Footer Line */}
        <div className="pt-8 border-t border-stone-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Red Chilli Restaurant. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#menu" className="hover:text-stone-400">Privacy Policy</a>
            <span>·</span>
            <a href="#reservation" className="hover:text-stone-400">Terms of Dining</a>
            <span>·</span>
            <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-amber-300 font-mono">
              Hotline: {RESTAURANT_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
