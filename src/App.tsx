/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { InteriorShowcase } from './components/InteriorShowcase';
import { GallerySection } from './components/GallerySection';
import { ReservationSection } from './components/ReservationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { QRCodeDineInModal, CartItem } from './components/QRCodeDineInModal';
import { MenuItem } from './data/restaurantData';

export default function App() {
  const [isQROrderOpen, setIsQROrderOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [preselectedZone, setPreselectedZone] = useState<string>('Royal Grand Dining Hall');
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((ci) => {
          if (ci.item.id === itemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prev) => prev.filter((ci) => ci.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleScrollToReservation = (zoneTitle?: string) => {
    if (zoneTitle) {
      setPreselectedZone(zoneTitle);
    }
    const elem = document.getElementById('reservation');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0c0908] text-stone-100 flex flex-col font-sans">
      {/* Top Bar with Prominent 7710822147 Phone */}
      <Header
        onOpenReservation={() => handleScrollToReservation()}
        onOpenQROrder={() => setIsQROrderOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenReservation={() => handleScrollToReservation()}
          onOpenQROrder={() => setIsQROrderOpen(true)}
        />

        {/* Interior & Ambiance Showcase */}
        <InteriorShowcase
          onSelectZoneForBooking={(zone) => handleScrollToReservation(zone)}
        />

        {/* Categorized Food Menus */}
        <MenuSection
          onAddToCart={handleAddToCart}
          onOpenQROrder={() => setIsQROrderOpen(true)}
        />

        {/* Interactive Gallery (Dishes & Grand Interior) */}
        <GallerySection />

        {/* Online Table Reservation Engine */}
        <ReservationSection preselectedZone={preselectedZone} />

        {/* Customer Reviews & Testimonials */}
        <ReviewsSection />

        {/* Location Maps, Hours & Valet */}
        <LocationSection />

        {/* Contact & Banqueting Inquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenReservation={() => handleScrollToReservation()}
        onOpenQROrder={() => setIsQROrderOpen(true)}
      />

      {/* Mobile Sticky Quick Bar */}
      <MobileQuickBar
        onOpenReservation={() => handleScrollToReservation()}
        onOpenQROrder={() => setIsQROrderOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Contactless QR Dine-in & Direct Ordering Modal */}
      <QRCodeDineInModal
        isOpen={isQROrderOpen}
        onClose={() => setIsQROrderOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
