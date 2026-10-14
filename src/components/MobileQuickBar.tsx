import React from 'react';
import { Phone, QrCode, Calendar, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface MobileQuickBarProps {
  onOpenReservation: () => void;
  onOpenQROrder: () => void;
  cartCount: number;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  onOpenReservation,
  onOpenQROrder,
  cartCount,
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#120e0d]/95 backdrop-blur-md border-t border-amber-950/70 px-2 py-2 shadow-2xl">
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        {/* Prominent Direct Call Button */}
        <a
          href={`tel:${RESTAURANT_INFO.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-red-950/90 text-amber-300 border border-red-800/60 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-red-400 mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">Call Now</span>
        </a>

        {/* QR Order Button */}
        <button
          onClick={onOpenQROrder}
          className="relative flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-stone-900 text-stone-200 border border-stone-800 active:scale-95 transition-transform"
        >
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-600 text-white font-mono text-[9px] font-bold flex items-center justify-center">
              {cartCount}
            </span>
          )}
          <QrCode className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">QR Order</span>
        </button>

        {/* Table Booking */}
        <button
          onClick={onOpenReservation}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-gradient-to-r from-red-700 to-amber-700 text-white active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">Book Table</span>
        </button>

        {/* Directions */}
        <a
          href="#location"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-stone-900 text-stone-300 border border-stone-800 active:scale-95 transition-transform"
        >
          <MapPin className="w-4 h-4 text-stone-400 mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">Location</span>
        </a>
      </div>
    </div>
  );
};
