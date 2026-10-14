import React, { useState } from 'react';
import { Star, MessageSquarePlus, CheckCircle, ThumbsUp, X } from 'lucide-react';
import { REVIEWS_DATA, Review, RESTAURANT_INFO } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(REVIEWS_DATA);
  const [filter, setFilter] = useState<'all' | 'food' | 'ambiance' | 'service'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New review state
  const [newName, setNewName] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [newCategory, setNewCategory] = useState<'food' | 'ambiance' | 'service'>('food');
  const [newFavoriteDish, setNewFavoriteDish] = useState('Purani Dilli Butter Chicken');

  const filteredReviews = reviews.filter(
    (rev) => filter === 'all' || rev.category === filter
  );

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newComment) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      name: newName,
      rating: newRating,
      date: 'Just now',
      comment: newComment,
      category: newCategory,
      verifiedDiner: true,
      favoriteDish: newFavoriteDish,
      avatarBg: 'bg-red-800'
    };

    setReviews([newRev, ...reviews]);
    setIsModalOpen(false);
    setNewName('');
    setNewComment('');
  };

  return (
    <section id="reviews" className="py-20 bg-[#0f0c0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
              Guest Testimonials
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
              Loved by Connoisseurs
            </h2>
            <div className="flex items-center gap-2 text-stone-400 text-sm">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-stone-200">4.9 out of 5</span>
              <span>·</span>
              <span>Based on 1,420+ authentic reviews</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-900/50 hover:border-amber-600 transition-colors text-xs sm:text-sm font-semibold cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Share Your Dining Experience</span>
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              filter === 'all'
                ? 'bg-amber-600 text-white'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
            }`}
          >
            All Reviews ({reviews.length})
          </button>
          <button
            onClick={() => setFilter('food')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              filter === 'food'
                ? 'bg-amber-600 text-white'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
            }`}
          >
            Food & Flavours
          </button>
          <button
            onClick={() => setFilter('ambiance')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              filter === 'ambiance'
                ? 'bg-amber-600 text-white'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
            }`}
          >
            Interior & Decor
          </button>
          <button
            onClick={() => setFilter('service')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              filter === 'service'
                ? 'bg-amber-600 text-white'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
            }`}
          >
            Royal Hospitality
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-[#14100e] border border-stone-800 hover:border-amber-900/50 transition-all flex flex-col justify-between"
            >
              <div>
                {/* User info & rating */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${rev.avatarBg} text-amber-100 flex items-center justify-center font-bold text-sm font-serif`}
                    >
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-stone-100 text-sm">
                          {rev.name}
                        </span>
                        {rev.verifiedDiner && (
                          <span
                            className="inline-flex items-center gap-1 text-[11px] text-emerald-400"
                            title="Verified Diner"
                          >
                            <CheckCircle className="w-3 h-3" />
                            <span>Verified</span>
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-stone-400">{rev.date}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4">
                  "{rev.comment}"
                </p>
              </div>

              {/* Attributed Favorite Dish */}
              <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
                <span className="text-[11px]">
                  Favourite Dish: <span className="text-amber-300 font-medium">{rev.favoriteDish}</span>
                </span>
                <span className="text-stone-400 capitalize">{rev.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-[#14100e] border border-amber-900/50 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-cinzel text-xl font-bold text-white mb-1">
              Share Your Red Chilli Experience
            </h3>
            <p className="text-xs text-stone-400 mb-6">
              Your feedback inspires our ustads and restaurant team.
            </p>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="block text-xs uppercase text-amber-300 font-semibold mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priyanshi Sharma"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-900 border border-stone-800 rounded-lg text-sm text-stone-200 focus:outline-none focus:border-amber-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase text-amber-300 font-semibold mb-1">
                    Rating (1-5)
                  </label>
                  <div className="flex items-center gap-1.5 py-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewRating(star)}
                        className="cursor-pointer"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newRating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-stone-700'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase text-amber-300 font-semibold mb-1">
                    Highlight Category
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) =>
                      setNewCategory(e.target.value as 'food' | 'ambiance' | 'service')
                    }
                    className="w-full px-3 py-2 bg-stone-900 border border-stone-800 rounded-lg text-xs text-stone-200 focus:outline-none focus:border-amber-600"
                  >
                    <option value="food">Food & Flavours</option>
                    <option value="ambiance">Interior Ambiance</option>
                    <option value="service">Royal Service</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase text-amber-300 font-semibold mb-1">
                  Favorite Dish
                </label>
                <input
                  type="text"
                  placeholder="e.g. Signature Tandoori Platter, Dum Biryani"
                  value={newFavoriteDish}
                  onChange={(e) => setNewFavoriteDish(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-900 border border-stone-800 rounded-lg text-xs text-stone-200 focus:outline-none focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block text-xs uppercase text-amber-300 font-semibold mb-1">
                  Your Review
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell others about the food taste, chandeliers, seating comfort, or service..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-900 border border-stone-800 rounded-lg text-xs text-stone-200 focus:outline-none focus:border-amber-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-red-700 to-amber-700 hover:from-red-600 hover:to-amber-600 text-white font-semibold text-xs sm:text-sm shadow cursor-pointer"
              >
                Publish Verified Review
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
