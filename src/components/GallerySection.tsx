import React, { useState } from 'react';
import { X, ZoomIn, Eye, Sparkles } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'dishes' | 'tandoor';
  categoryLabel: string;
  image: string;
  caption: string;
}

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'interior' | 'dishes' | 'tandoor'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g-1',
      title: 'Grand Chandelier Royal Dining Hall',
      category: 'interior',
      categoryLabel: 'Royal Ambiance',
      image: '/src/assets/images/hero_redchilli_ambience_1791969977689.jpg',
      caption: 'The main central dining hall illuminated with imported crystal chandeliers, carved arches, and candlelit copper place settings.'
    },
    {
      id: 'g-2',
      title: 'Charcoal Sizzling Tandoori Platter',
      category: 'tandoor',
      categoryLabel: 'Tandoori Delicacies',
      image: '/src/assets/images/dish_tandoori_platter_1791969978877.jpg',
      caption: 'Chef special assortment of chicken tikka, seekh kebabs, paneer tikka, and fiery mint dip served on volcanic slate.'
    },
    {
      id: 'g-3',
      title: 'Private Jharokha Dining Lounge',
      category: 'interior',
      categoryLabel: 'Royal Ambiance',
      image: '/src/assets/images/interior_royal_dining_1791969977696.jpg',
      caption: 'Intimate arched Rajasthani cabana with carved lattice screens, royal velvet dining chairs, and warm glowing lanterns.'
    },
    {
      id: 'g-4',
      title: 'Awadhi Mutton Dum Biryani in Brass Handi',
      category: 'dishes',
      categoryLabel: 'Signature Delicacies',
      image: '/src/assets/images/dish_dum_biryani_1791969980708.jpg',
      caption: 'Sealed dough handi dum biryani with long-grain saffron basmati, caramelized onions, roasted cashews, and claypot raita.'
    },
    {
      id: 'g-5',
      title: 'Purani Dilli Butter Chicken & Garlic Naan',
      category: 'dishes',
      categoryLabel: 'Signature Delicacies',
      image: '/src/assets/images/dish_butter_chicken_curry_1791969980831.jpg',
      caption: 'Velvety smooth fenugreek and butter makhani gravy served in a hammered copper bowl with charred tandoori garlic naan.'
    }
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <section id="gallery" className="py-20 bg-[#0f0c0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Visual Splendour
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Interior & Culinary Gallery
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Glimpses of our palace-inspired interior architecture and award-winning tandoori presentations.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-amber-600 text-white shadow'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
            }`}
          >
            All Perspectives
          </button>
          <button
            onClick={() => setActiveFilter('interior')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === 'interior'
                ? 'bg-amber-600 text-white shadow'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
            }`}
          >
            Palace Interiors
          </button>
          <button
            onClick={() => setActiveFilter('dishes')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === 'dishes'
                ? 'bg-amber-600 text-white shadow'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
            }`}
          >
            Royal Curries & Dum
          </button>
          <button
            onClick={() => setActiveFilter('tandoor')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === 'tandoor'
                ? 'bg-amber-600 text-white shadow'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
            }`}
          >
            Charcoal Tandoor
          </button>
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`group relative rounded-2xl overflow-hidden border border-stone-800/80 bg-stone-950 cursor-pointer shadow-lg hover:border-amber-700/60 transition-all duration-300 ${
                idx === 0 ? 'md:col-span-2 md:h-96 h-64' : 'h-64 sm:h-72'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-sm text-stone-300 group-hover:text-amber-400 transition-colors">
                <ZoomIn className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold block mb-1">
                  {item.categoryLabel}
                </span>
                <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-4xl w-full bg-[#14100e] rounded-2xl overflow-hidden border border-amber-900/60 shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 hover:bg-black text-stone-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[70vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-[#171210]">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{selectedImage.categoryLabel}</span>
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
