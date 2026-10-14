import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle2, Instagram, Facebook, Globe } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'Banqueting & Private Event',
    guestEstimate: '25-50 guests',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#0f0c0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Get In Touch
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Connect with Red Chilli
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Planning a grand wedding sangeet, birthday feast, corporate dinner, or custom off-site royal catering? Our banquet directors are at your service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Direct Call Card */}
          <div className="lg:col-span-5 space-y-5">
            {/* Direct Phone Highlight Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-950 via-[#18110f] to-amber-950/60 border border-red-800/60 shadow-xl">
              <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold block mb-1">
                Direct Restaurant Hotline
              </span>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-red-700 text-white shadow-lg">
                  <Phone className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="font-mono text-2xl sm:text-3xl font-bold text-white hover:text-amber-300 transition-colors block"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                  <span className="text-xs text-stone-300">
                    Call anytime for reservations, takeaway, or catering
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="flex-1 py-2.5 rounded-lg bg-red-700 hover:bg-red-600 text-white text-xs font-bold text-center shadow transition-all"
                >
                  Call Now
                </a>
                <a
                  href={RESTAURANT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold text-center shadow transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Email & Location Card */}
            <div className="p-6 rounded-2xl bg-[#14100e] border border-stone-800 space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-stone-900 text-amber-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-stone-400">Direct Email</div>
                  <a
                    href={`mailto:${RESTAURANT_INFO.email}`}
                    className="text-sm font-semibold text-stone-200 hover:text-amber-300"
                  >
                    {RESTAURANT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-stone-900 text-amber-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-stone-400">Location</div>
                  <div className="text-sm font-semibold text-stone-200 leading-snug">
                    {RESTAURANT_INFO.address}, {RESTAURANT_INFO.city}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Integration */}
            <div className="p-6 rounded-2xl bg-[#14100e] border border-stone-800">
              <div className="text-xs uppercase tracking-wider text-stone-400 font-bold mb-3">
                Follow Our Culinary Journey
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-stone-900 hover:bg-red-950 text-stone-300 hover:text-amber-300 border border-stone-800 transition-colors flex items-center gap-2 text-xs font-medium"
                >
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <span>@RedChilliRoyal</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-blue-400 border border-stone-800 transition-colors flex items-center gap-2 text-xs font-medium"
                >
                  <Facebook className="w-4 h-4 text-blue-500" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Banquet & General Inquiry Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#14100e] border border-stone-800 shadow-xl">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-2">
              Banquets & Event Inquiries
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mb-6">
              Fill out your requirements below and our banquet manager will get back within 2 hours.
            </p>

            {submitted ? (
              <div className="py-12 text-center animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-950/80 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-cinzel text-xl font-bold text-white mb-2">
                  Thank You, {formData.name}!
                </h4>
                <p className="text-stone-300 text-sm max-w-md mx-auto mb-6">
                  Your inquiry has been received. Our event manager will contact you on <span className="font-mono text-amber-300 font-bold">{formData.phone}</span> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-lg bg-stone-900 text-stone-200 text-xs font-semibold hover:bg-stone-800 border border-stone-700"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase text-amber-300 font-semibold mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Asim Shaikh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-800 rounded-lg text-sm text-stone-200 focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-amber-300 font-semibold mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 7710822147"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-800 rounded-lg text-sm text-stone-200 focus:outline-none focus:border-amber-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase text-amber-300 font-semibold mb-1">
                      Inquiry Nature
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-800 rounded-lg text-sm text-stone-200 focus:outline-none focus:border-amber-600"
                    >
                      <option>Banqueting & Private Event</option>
                      <option>Wedding / Sangeet Catering</option>
                      <option>Corporate Dinner Booking</option>
                      <option>Chef Table Experience</option>
                      <option>General Feedback / Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-amber-300 font-semibold mb-1">
                      Estimated Guests
                    </label>
                    <select
                      value={formData.guestEstimate}
                      onChange={(e) => setFormData({ ...formData, guestEstimate: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-800 rounded-lg text-sm text-stone-200 focus:outline-none focus:border-amber-600"
                    >
                      <option>10 to 25 Guests</option>
                      <option>25 to 50 Guests</option>
                      <option>50 to 150 Guests</option>
                      <option>150+ Guests (Full Hall)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase text-amber-300 font-semibold mb-1">
                    Event Details or Special Requests
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the date, preferred cuisine courses, live tandoor setups, or decoration requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-800 rounded-lg text-sm text-stone-200 focus:outline-none focus:border-amber-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-700 to-amber-700 hover:from-red-600 hover:to-amber-600 text-white font-bold text-sm shadow-lg shadow-red-950/60 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Banquet Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
