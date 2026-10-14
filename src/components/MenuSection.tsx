import React, { useState } from 'react';
import { Search, Flame, Clock, Plus, Sparkles, Check, ChevronRight } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '../data/restaurantData';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  onOpenQROrder: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, onOpenQROrder }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesDiet =
      dietFilter === 'all' ||
      (dietFilter === 'veg' && item.isVeg) ||
      (dietFilter === 'non-veg' && !item.isVeg);
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.hindiName && item.hindiName.includes(searchQuery));
    return matchesCategory && matchesDiet && matchesSearch;
  });

  const handleAddItem = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  const renderSpiceIndicator = (level: number) => {
    if (level === 0) return <span className="text-xs text-stone-400">Mild Spice</span>;
    return (
      <div className="flex items-center gap-0.5 text-xs font-semibold text-red-400" title={`Spice Level: ${level}/3`}>
        {[...Array(level)].map((_, i) => (
          <Flame key={i} className="w-3.5 h-3.5 fill-red-500 text-red-500" />
        ))}
        <span className="ml-1 text-[11px] text-stone-400">
          {level === 1 ? 'Balanced' : level === 2 ? 'Desi Spicy' : 'Red Chilli Fire'}
        </span>
      </div>
    );
  };

  return (
    <section id="menu" className="py-20 bg-[#0f0c0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            The Royal Culinary Collection
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Curated Indian Delicacies
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Slow-simmered handis, clay-oven tandoor roasts, and fragrant royal Awadhi gravies crafted by master chefs using stone-ground spices.
          </p>
        </div>

        {/* Controls: Search & Diet Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search kebabs, biryani, curries..."
              className="w-full pl-10 pr-4 py-2 bg-stone-900/90 border border-stone-800 rounded-lg text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-600 transition-colors"
            />
          </div>

          {/* Interactive Diet Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-900/80 border border-stone-800 rounded-lg self-stretch sm:self-auto">
            <button
              onClick={() => setDietFilter('all')}
              className={`flex-1 sm:flex-initial px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                dietFilter === 'all'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setDietFilter('veg')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                dietFilter === 'veg'
                  ? 'bg-emerald-800 text-emerald-100 shadow-sm'
                  : 'text-stone-400 hover:text-emerald-400'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-emerald-950 inline-block"></span>
              <span>Pure Veg</span>
            </button>
            <button
              onClick={() => setDietFilter('non-veg')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                dietFilter === 'non-veg'
                  ? 'bg-red-800 text-red-100 shadow-sm'
                  : 'text-stone-400 hover:text-red-400'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-500 ring-2 ring-red-950 inline-block"></span>
              <span>Non-Veg</span>
            </button>
          </div>
        </div>

        {/* Category Horizontal Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-thin scrollbar-thumb-stone-800 no-scrollbar">
          {MENU_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-red-700 to-amber-700 text-white shadow-md shadow-red-950/40 font-semibold'
                  : 'bg-stone-900/60 text-stone-400 hover:text-stone-200 hover:bg-stone-800/80 border border-stone-800/60'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-stone-900/30 rounded-2xl border border-stone-800/60">
            <p className="text-stone-400 text-base mb-3">No culinary dishes match your selected filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setDietFilter('all');
                setSearchQuery('');
              }}
              className="text-amber-400 hover:text-amber-300 text-sm font-semibold underline underline-offset-4"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const isAdded = addedItemIds[item.id];
              return (
                <div
                  key={item.id}
                  className="group relative flex flex-col justify-between bg-[#151110] border border-stone-800 hover:border-amber-900/60 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/50"
                >
                  {/* Card Visual / Thumbnail */}
                  {item.image ? (
                    <div className="relative h-48 w-full overflow-hidden bg-stone-900">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#151110] via-transparent to-transparent" />
                      {item.isChefSpecial && (
                        <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded bg-red-900/90 text-amber-200 text-[11px] font-semibold tracking-wider uppercase backdrop-blur-sm border border-red-700/50">
                          <Sparkles className="w-3 h-3 text-amber-400" />
                          <span>Chef Special</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="h-4 bg-gradient-to-r from-red-950/30 to-amber-950/30" />
                  )}

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Dietary dot & Hindi Script */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center p-0.5 ${
                              item.isVeg ? 'border-emerald-500' : 'border-red-500'
                            }`}
                            title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                item.isVeg ? 'bg-emerald-500' : 'bg-red-500'
                              }`}
                            />
                          </span>
                          <span className="text-xs text-stone-400 font-medium capitalize">
                            {item.category}
                          </span>
                        </div>
                        {item.hindiName && (
                          <span className="text-xs text-amber-300/80 font-serif">
                            {item.hindiName}
                          </span>
                        )}
                      </div>

                      {/* Dish Title */}
                      <h3 className="font-display text-lg font-bold text-stone-100 group-hover:text-amber-300 transition-colors mb-2">
                        {item.name}
                      </h3>

                      {/* Description */}
                      <p className="text-stone-400 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>

                    {/* Metadata: Spice level & prep time */}
                    <div className="pt-3 border-t border-stone-800/80">
                      <div className="flex items-center justify-between text-xs mb-3">
                        {renderSpiceIndicator(item.spiceLevel)}
                        {item.prepTime && (
                          <div className="flex items-center gap-1 text-stone-400">
                            <Clock className="w-3 h-3 text-stone-500" />
                            <span>{item.prepTime}</span>
                          </div>
                        )}
                      </div>

                      {/* Price & Add to Order */}
                      <div className="flex items-center justify-between pt-1">
                        <div>
                          <span className="text-[10px] uppercase text-stone-500 block leading-none">Price</span>
                          <span className="font-mono text-xl font-bold text-amber-300 tabular-nums">
                            ₹{item.price}
                          </span>
                        </div>

                        <button
                          onClick={() => handleAddItem(item)}
                          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                            isAdded
                              ? 'bg-emerald-700 text-white'
                              : 'bg-stone-800 hover:bg-red-700 text-stone-200 hover:text-white border border-stone-700 hover:border-red-600'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>Order</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* In-Table QR Prompt Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-red-950/80 via-[#18110f] to-amber-950/80 border border-amber-900/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-1">
              Contactless Dining Experience
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-2">
              Dine at Red Chilli? Order directly from your table QR
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm max-w-xl">
              Skip waiting for paper menus. Scan the gold standee on your table to browse chef specials, customize spices, and send orders straight to the clay tandoor kitchen.
            </p>
          </div>
          <button
            onClick={onOpenQROrder}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-lg shadow-amber-950/50 transition-all hover:scale-105 shrink-0 cursor-pointer"
          >
            <span>Open In-Table QR Portal</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
