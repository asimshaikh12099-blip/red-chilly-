import React, { useState } from 'react';
import { Calendar, Clock, Users, Crown, CheckCircle2, Phone, Sparkles, MessageCircle, Share2, MapPin } from 'lucide-react';
import { RESTAURANT_INFO, SEATING_ZONES } from '../data/restaurantData';

interface ReservationSectionProps {
  preselectedZone?: string;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ preselectedZone }) => {
  const [date, setDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState<string>('08:00 PM');
  const [guests, setGuests] = useState<number>(4);
  const [seatingArea, setSeatingArea] = useState<string>(preselectedZone || 'Royal Grand Dining Hall');
  const [occasion, setOccasion] = useState<string>('Dinner Gathering');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [specialNote, setSpecialNote] = useState<string>('');

  const [bookingPass, setBookingPass] = useState<{
    bookingId: string;
    name: string;
    phone: string;
    date: string;
    timeSlot: string;
    guests: number;
    seatingArea: string;
    occasion: string;
  } | null>(null);

  const timeSlots = [
    { label: '12:30 PM', period: 'Lunch' },
    { label: '01:30 PM', period: 'Lunch' },
    { label: '02:30 PM', period: 'Lunch' },
    { label: '07:00 PM', period: 'Dinner' },
    { label: '08:00 PM', period: 'Dinner' },
    { label: '09:00 PM', period: 'Dinner' },
    { label: '10:00 PM', period: 'Dinner' },
  ];

  const occasions = [
    'Dinner Gathering',
    'Romantic Candlelight Date',
    'Wedding Anniversary',
    'Birthday Celebration',
    'Corporate Executive Dinner',
    'Family Reunion',
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const bookingId = `RC-RES-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingPass({
      bookingId,
      name,
      phone,
      date,
      timeSlot,
      guests,
      seatingArea,
      occasion,
    });
  };

  return (
    <section id="reservation" className="py-24 bg-[#0a0807] relative overflow-hidden">
      {/* Decorative ambient backdrop glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>Guaranteed Table Seating</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Reserve Your Royal Experience
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Reserve central chandelier tables or private jharokha cabanas with instant digital confirmation. For immediate banquet inquiries, call our direct line: <span className="font-mono text-amber-300 font-bold">{RESTAURANT_INFO.phone}</span>.
          </p>
        </div>

        {bookingPass ? (
          /* Confirmed Royal Table Pass */
          <div className="max-w-xl mx-auto bg-gradient-to-b from-[#1c1411] to-[#120d0b] border-2 border-amber-600/70 rounded-2xl p-6 sm:p-8 shadow-2xl animate-fade-in text-center relative">
            <div className="w-14 h-14 rounded-full bg-emerald-950/90 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-1">
              Table Reservation Confirmed
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-1">
              Welcome to Red Chilli, {bookingPass.name}
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm mb-6">
              Your royal table pass has been reserved. Please present this pass upon arrival.
            </p>

            {/* Pass Card Details */}
            <div className="p-5 rounded-xl bg-black/60 border border-amber-900/40 text-left mb-6 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <span className="text-xs text-stone-400">Pass Reference:</span>
                <span className="font-mono font-bold text-amber-300">{bookingPass.bookingId}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-stone-400 block text-[11px]">Date & Time</span>
                  <span className="font-semibold text-stone-200">
                    {bookingPass.date} · {bookingPass.timeSlot}
                  </span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[11px]">Guests & Area</span>
                  <span className="font-semibold text-stone-200">
                    {bookingPass.guests} Diners ({bookingPass.seatingArea})
                  </span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[11px]">Occasion</span>
                  <span className="font-semibold text-stone-200">{bookingPass.occasion}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[11px]">Contact</span>
                  <span className="font-mono font-semibold text-stone-200">{bookingPass.phone}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions for Confirmation Pass */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-red-950/80 hover:bg-red-900 border border-red-700/60 text-amber-200 text-xs font-semibold"
              >
                <Phone className="w-4 h-4 text-red-400" />
                <span>Call Concierge: {RESTAURANT_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/917710822147?text=Hello%20Red%20Chilli,%20I%20have%20confirmed%20booking%20${bookingPass.bookingId}%20for%20${bookingPass.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 text-emerald-200 text-xs font-semibold"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Details</span>
              </a>

              <button
                onClick={() => setBookingPass(null)}
                className="px-4 py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 text-xs font-semibold border border-stone-800 cursor-pointer"
              >
                Make Another Booking
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Reservation Form */
          <form
            onSubmit={handleBookingSubmit}
            className="p-6 sm:p-10 rounded-2xl bg-[#14100e] border border-stone-800 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Step 1: Date */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-amber-300 font-semibold mb-2">
                  1. Dining Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3.5 py-2.5 bg-stone-900/90 border border-stone-800 rounded-lg text-sm text-stone-200 focus:outline-none focus:border-amber-600 transition-colors"
                  required
                />
              </div>

              {/* Step 2: Time Slot */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-amber-300 font-semibold mb-2">
                  2. Select Time
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-900/90 border border-stone-800 rounded-lg text-sm text-stone-200 focus:outline-none focus:border-amber-600 transition-colors"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot.label} value={slot.label}>
                      {slot.label} ({slot.period})
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 3: Number of Guests */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-amber-300 font-semibold mb-2">
                  3. Number of Guests
                </label>
                <div className="flex items-center gap-2">
                  {[2, 4, 6, 8, 12].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuests(num)}
                      className={`flex-1 py-2 text-xs font-mono font-bold rounded-lg transition-colors cursor-pointer ${
                        guests === num
                          ? 'bg-amber-600 text-white'
                          : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 4: Seating Atmosphere Selection */}
            <div className="mb-8">
              <label className="block text-xs uppercase tracking-wider text-amber-300 font-semibold mb-3">
                4. Select Seating Atmosphere
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {SEATING_ZONES.map((zone) => (
                  <div
                    key={zone.id}
                    onClick={() => setSeatingArea(zone.title)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                      seatingArea === zone.title
                        ? 'bg-amber-950/40 border-amber-500 shadow-md'
                        : 'bg-stone-900/60 border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-xs sm:text-sm text-stone-200">
                        {zone.title}
                      </span>
                      {seatingArea === zone.title && (
                        <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      )}
                    </div>
                    <p className="text-[11px] text-stone-400 line-clamp-2">{zone.vibe}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 5: Occasion & Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-8">
              <div>
                <label className="block text-xs uppercase tracking-wider text-amber-300 font-semibold mb-2">
                  Special Occasion
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-900/90 border border-stone-800 rounded-lg text-sm text-stone-200 focus:outline-none focus:border-amber-600 transition-colors"
                >
                  {occasions.map((occ) => (
                    <option key={occ} value={occ}>
                      {occ}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-amber-300 font-semibold mb-2">
                  Your Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Asim Shaikh"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-900/90 border border-stone-800 rounded-lg text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-600 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-amber-300 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 7710822147"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-900/90 border border-stone-800 rounded-lg text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-600 transition-colors"
                  required
                />
              </div>
            </div>

            {/* Special Requests */}
            <div className="mb-8">
              <label className="block text-xs uppercase tracking-wider text-amber-300 font-semibold mb-2">
                Special Dining Requests (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Quiet booth for anniversary, high chair needed, Jain food preparation preference..."
                value={specialNote}
                onChange={(e) => setSpecialNote(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-stone-900/90 border border-stone-800 rounded-lg text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-600 transition-colors"
              />
            </div>

            {/* Submit CTA & Direct Helpline */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-800">
              <div className="text-xs text-stone-400 text-center sm:text-left">
                Need instant assistance or booking for 15+ guests?
                <br />
                Call directly on{' '}
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="font-mono font-bold text-amber-300 hover:underline"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-700 via-red-600 to-amber-600 hover:from-red-600 hover:to-amber-500 text-white font-bold text-sm shadow-xl shadow-red-950/60 transition-all hover:scale-105 cursor-pointer"
              >
                Confirm Table Reservation
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
