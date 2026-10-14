import React, { useState } from 'react';
import { X, QrCode, Utensils, CheckCircle2, BellRing, Sparkles, Plus, Minus, Trash2, Printer, Phone } from 'lucide-react';
import { MenuItem, RESTAURANT_INFO, MENU_ITEMS } from '../data/restaurantData';

export interface CartItem {
  item: MenuItem;
  quantity: number;
  instruction?: string;
}

interface QRCodeDineInModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
  onAddToCart: (item: MenuItem) => void;
}

export const QRCodeDineInModal: React.FC<QRCodeDineInModalProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onAddToCart,
}) => {
  const [activeTab, setActiveTab] = useState<'order' | 'standee'>('order');
  const [selectedTable, setSelectedTable] = useState<number>(7);
  const [orderStage, setOrderStage] = useState<'ordering' | 'placed'>('ordering');
  const [orderId, setOrderId] = useState<string>('');
  const [waiterToast, setWaiterToast] = useState<string | null>(null);
  const [instructions, setInstructions] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const gst = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + gst;

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;
    const generatedId = `RC-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderId(generatedId);
    setOrderStage('placed');
  };

  const handleServiceCall = (serviceType: string) => {
    setWaiterToast(`${serviceType} requested for Table ${selectedTable}. Our captain will attend shortly!`);
    setTimeout(() => {
      setWaiterToast(null);
    }, 4000);
  };

  const handleResetOrder = () => {
    onClearCart();
    setOrderStage('ordering');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#14100e] border border-amber-900/50 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-950/80 border border-red-800/60 text-amber-400">
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-amber-100">
                Contactless In-Table Ordering
              </h3>
              <p className="text-xs text-stone-400">
                Red Chilli Royal Dining Experience · Direct Kitchen Feed
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-stone-800 bg-[#171210]">
          <button
            onClick={() => setActiveTab('order')}
            className={`flex-1 py-3 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'order'
                ? 'border-amber-500 text-amber-300 bg-amber-950/20'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            Digital Table Ordering
          </button>
          <button
            onClick={() => setActiveTab('standee')}
            className={`flex-1 py-3 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'standee'
                ? 'border-amber-500 text-amber-300 bg-amber-950/20'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            Printable Table QR Standee
          </button>
        </div>

        {/* Toast for Waiter Call */}
        {waiterToast && (
          <div className="bg-amber-900/90 text-amber-100 px-4 py-2 text-xs sm:text-sm font-medium flex items-center justify-between border-b border-amber-700 animate-fade-in">
            <div className="flex items-center gap-2">
              <BellRing className="w-4 h-4 text-amber-300 animate-bounce" />
              <span>{waiterToast}</span>
            </div>
            <button
              onClick={() => setWaiterToast(null)}
              className="text-amber-200 hover:text-white ml-2 text-xs font-bold"
            >
              ✕
            </button>
          </div>
        )}

        {/* Tab 1: Live In-Table Ordering System */}
        {activeTab === 'order' && (
          <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto">
            {orderStage === 'ordering' ? (
              <>
                {/* Table Selector Strip */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-stone-900/80 border border-stone-800 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-wider font-semibold text-stone-400">
                      Active Table:
                    </span>
                    <select
                      value={selectedTable}
                      onChange={(e) => setSelectedTable(Number(e.target.value))}
                      className="bg-stone-950 text-amber-300 border border-amber-800/60 rounded px-2.5 py-1 text-xs font-mono font-bold focus:outline-none focus:border-amber-500"
                    >
                      {Array.from({ length: 24 }, (_, i) => i + 1).map((num) => (
                        <option key={num} value={num}>
                          Table {num < 10 ? `0${num}` : num} {num <= 6 ? '(Hall)' : num <= 14 ? '(Cabana)' : '(Lounge)'}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="text-[11px] text-stone-400">
                    Seated at: <span className="text-amber-300 font-semibold">{selectedTable <= 6 ? 'Royal Grand Hall' : selectedTable <= 14 ? 'Private Jharokha Cabana' : 'The Amber Lounge'}</span>
                  </div>
                </div>

                {/* Service Call Quick Actions */}
                <div className="mb-6">
                  <div className="text-[11px] uppercase tracking-wider text-stone-400 font-bold mb-2">
                    Instant Table Assistance
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button
                      onClick={() => handleServiceCall('Water Refill')}
                      className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 text-xs font-medium transition-colors"
                    >
                      💧 Water Refill
                    </button>
                    <button
                      onClick={() => handleServiceCall('Captain / Waiter')}
                      className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 text-xs font-medium transition-colors"
                    >
                      🛎️ Call Waiter
                    </button>
                    <button
                      onClick={() => handleServiceCall('Fresh Cutlery')}
                      className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 text-xs font-medium transition-colors"
                    >
                      🍴 Fresh Cutlery
                    </button>
                    <button
                      onClick={() => handleServiceCall('Printed Bill')}
                      className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 text-xs font-medium transition-colors"
                    >
                      🧾 Request Bill
                    </button>
                  </div>
                </div>

                {/* Cart Items List */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-stone-200">
                      Table Order Items ({cart.reduce((a, c) => a + c.quantity, 0)})
                    </h4>
                    {cart.length > 0 && (
                      <button
                        onClick={onClearCart}
                        className="text-xs text-red-400 hover:text-red-300 underline underline-offset-2"
                      >
                        Clear All
                      </button>
                    )}
                  </div>

                  {cart.length === 0 ? (
                    <div className="text-center py-8 px-4 rounded-xl border border-dashed border-stone-800 bg-stone-950/40">
                      <Utensils className="w-8 h-8 text-stone-600 mx-auto mb-2" />
                      <p className="text-stone-300 text-sm font-medium">Your Table Cart is Empty</p>
                      <p className="text-stone-500 text-xs mt-1 mb-4">
                        Browse the quick suggestions below or our main menu to add royal dishes!
                      </p>
                      {/* Quick Add Suggestions */}
                      <div className="text-left max-w-md mx-auto space-y-2">
                        {MENU_ITEMS.slice(0, 3).map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center justify-between p-2 rounded-lg bg-stone-900/90 border border-stone-800 text-xs"
                          >
                            <div>
                              <div className="font-semibold text-stone-200">{item.name}</div>
                              <div className="text-amber-400 font-mono">₹{item.price}</div>
                            </div>
                            <button
                              onClick={() => onAddToCart(item)}
                              className="px-2.5 py-1 bg-amber-600 hover:bg-amber-500 text-white rounded font-medium"
                            >
                              + Add
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {cart.map((cartItem) => (
                        <div
                          key={cartItem.item.id}
                          className="p-3.5 rounded-xl bg-stone-950/70 border border-stone-800/80 flex flex-col gap-2"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span
                                  className={`w-2.5 h-2.5 rounded-full ${
                                    cartItem.item.isVeg ? 'bg-emerald-500' : 'bg-red-500'
                                  }`}
                                />
                                <span className="font-semibold text-stone-100 text-sm">
                                  {cartItem.item.name}
                                </span>
                              </div>
                              <div className="text-xs text-amber-300 font-mono mt-0.5 tabular-nums">
                                ₹{cartItem.item.price} × {cartItem.quantity} = ₹
                                {cartItem.item.price * cartItem.quantity}
                              </div>
                            </div>

                            {/* Quantity Stepper */}
                            <div className="flex items-center gap-2 bg-stone-900 border border-stone-700/60 rounded-lg p-1">
                              <button
                                onClick={() => onUpdateQuantity(cartItem.item.id, -1)}
                                className="p-1 hover:text-red-400 transition-colors"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="font-mono text-xs font-bold text-stone-100 w-5 text-center">
                                {cartItem.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(cartItem.item.id, 1)}
                                className="p-1 hover:text-emerald-400 transition-colors"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => onRemoveItem(cartItem.item.id)}
                                className="p-1 text-stone-500 hover:text-red-400 ml-1 border-l border-stone-700 pl-1.5"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          {/* Cooking Instructions Input */}
                          <input
                            type="text"
                            placeholder="Add chef instructions (e.g., less oil, mild spice, extra crisp)..."
                            value={instructions[cartItem.item.id] || ''}
                            onChange={(e) =>
                              setInstructions({ ...instructions, [cartItem.item.id]: e.target.value })
                            }
                            className="w-full text-xs bg-stone-900/60 border border-stone-800/80 rounded px-2.5 py-1 text-stone-300 placeholder-stone-500 focus:outline-none focus:border-amber-700"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bill Breakdown & Place Order Action */}
                {cart.length > 0 && (
                  <div className="p-4 rounded-xl bg-stone-950 border border-stone-800">
                    <div className="space-y-1.5 text-xs text-stone-400 pb-3 border-b border-stone-800">
                      <div className="flex justify-between">
                        <span>Items Subtotal:</span>
                        <span className="font-mono text-stone-200">₹{subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Restaurant GST (5%):</span>
                        <span className="font-mono text-stone-200">₹{gst}</span>
                      </div>
                      <div className="flex justify-between text-emerald-400">
                        <span>Contactless Ordering Discount:</span>
                        <span className="font-mono font-medium">FREE Table Setup</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 mb-4">
                      <span className="text-sm font-bold text-stone-100">Estimated Total:</span>
                      <span className="font-mono text-xl font-bold text-amber-300 tabular-nums">
                        ₹{grandTotal}
                      </span>
                    </div>

                    <button
                      onClick={handlePlaceOrder}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-700 via-red-600 to-amber-600 hover:from-red-600 hover:to-amber-500 text-white font-bold text-sm shadow-xl shadow-red-950/60 transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-amber-200" />
                      <span>Send Order to Master Chef (Table {selectedTable})</span>
                    </button>
                    <p className="text-[11px] text-center text-stone-500 mt-2">
                      Payment can be made at the table via UPI, Card, or Cash after dining.
                    </p>
                  </div>
                )}
              </>
            ) : (
              /* Order Status Tracker */
              <div className="py-6 text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-950/80 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-950/50">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-1">
                  Table {selectedTable} · Order #{orderId}
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
                  Order Dispatched to Kitchen!
                </h3>
                <p className="text-stone-300 text-sm max-w-md mx-auto mb-6">
                  Our Awadhi tandoor master chef has received your order. Handcrafted breads and curries are being prepared fresh for Table {selectedTable}.
                </p>

                {/* 3-Step Live Status Bar */}
                <div className="max-w-md mx-auto bg-stone-950 p-4 rounded-xl border border-stone-800 text-left mb-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-bold">
                        ✓
                      </span>
                      <div className="text-xs">
                        <div className="font-semibold text-stone-200">1. Order Confirmed by Kitchen</div>
                        <div className="text-stone-400 text-[11px]">Ticket printed at clay tandoor station</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold animate-pulse">
                        2
                      </span>
                      <div className="text-xs">
                        <div className="font-semibold text-amber-300">2. Simmering on Charcoal Embers</div>
                        <div className="text-stone-400 text-[11px]">Estimated prep time: ~15-18 mins</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 opacity-60">
                      <span className="w-6 h-6 rounded-full bg-stone-800 text-stone-400 flex items-center justify-center text-xs font-bold">
                        3
                      </span>
                      <div className="text-xs">
                        <div className="font-semibold text-stone-300">3. Table Delivery & Butler Service</div>
                        <div className="text-stone-400 text-[11px]">Direct to Table {selectedTable}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => handleServiceCall('Fresh Water & Glasses')}
                    className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-800 rounded-lg text-xs font-semibold"
                  >
                    💧 Request Water Refill
                  </button>
                  <button
                    onClick={() => handleServiceCall('Captain Assistance')}
                    className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-800 rounded-lg text-xs font-semibold"
                  >
                    🛎️ Call Captain
                  </button>
                  <button
                    onClick={handleResetOrder}
                    className="px-4 py-2 bg-red-900/80 hover:bg-red-800 text-white rounded-lg text-xs font-semibold"
                  >
                    Order Additional Dishes
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Authentic Printable QR Table Standee Card */}
        {activeTab === 'standee' && (
          <div className="p-6 text-center max-h-[75vh] overflow-y-auto">
            <p className="text-xs text-stone-400 max-w-md mx-auto mb-6">
              This is the official Red Chilli digital standee placed at every table. Diners scan with any smartphone camera to open the live interactive menu.
            </p>

            {/* Standee Royal Card */}
            <div className="max-w-sm mx-auto p-6 rounded-2xl bg-gradient-to-b from-[#221714] to-[#120c0a] border-2 border-amber-600/70 shadow-2xl relative text-center">
              {/* Filigree corner accents */}
              <div className="absolute top-2 left-2 text-amber-500/70 text-xs font-serif">✦</div>
              <div className="absolute top-2 right-2 text-amber-500/70 text-xs font-serif">✦</div>
              <div className="absolute bottom-2 left-2 text-amber-500/70 text-xs font-serif">✦</div>
              <div className="absolute bottom-2 right-2 text-amber-500/70 text-xs font-serif">✦</div>

              <div className="text-[11px] uppercase tracking-widest text-amber-400 font-bold mb-1">
                Royal Awadhi Dining
              </div>
              <h4 className="font-cinzel text-2xl font-bold text-amber-100 mb-1">
                RED CHILLI
              </h4>
              <div className="inline-block px-3 py-0.5 rounded bg-red-950 border border-red-700/80 text-amber-300 font-mono text-xs font-bold mb-4">
                TABLE NO: {selectedTable < 10 ? `0${selectedTable}` : selectedTable}
              </div>

              {/* Crisp SVG QR Code Vector */}
              <div className="w-52 h-52 mx-auto bg-white p-3 rounded-xl shadow-inner mb-4 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer Frame & Finder patterns */}
                  {/* Top-Left Finder */}
                  <rect x="5" y="5" width="28" height="28" fill="#1c0f0a" rx="2" />
                  <rect x="9" y="9" width="20" height="20" fill="#ffffff" rx="1" />
                  <rect x="13" y="13" width="12" height="12" fill="#991b1b" rx="1" />

                  {/* Top-Right Finder */}
                  <rect x="67" y="5" width="28" height="28" fill="#1c0f0a" rx="2" />
                  <rect x="71" y="9" width="20" height="20" fill="#ffffff" rx="1" />
                  <rect x="75" y="13" width="12" height="12" fill="#991b1b" rx="1" />

                  {/* Bottom-Left Finder */}
                  <rect x="5" y="67" width="28" height="28" fill="#1c0f0a" rx="2" />
                  <rect x="9" y="71" width="20" height="20" fill="#ffffff" rx="1" />
                  <rect x="13" y="75" width="12" height="12" fill="#991b1b" rx="1" />

                  {/* Realistic QR Matrix bits */}
                  <rect x="38" y="8" width="5" height="5" fill="#1c0f0a" />
                  <rect x="48" y="8" width="5" height="5" fill="#1c0f0a" />
                  <rect x="56" y="8" width="5" height="5" fill="#1c0f0a" />

                  <rect x="38" y="18" width="5" height="5" fill="#1c0f0a" />
                  <rect x="48" y="24" width="5" height="5" fill="#991b1b" />
                  <rect x="56" y="18" width="5" height="5" fill="#1c0f0a" />

                  <rect x="8" y="38" width="5" height="5" fill="#1c0f0a" />
                  <rect x="18" y="44" width="5" height="5" fill="#1c0f0a" />
                  <rect x="26" y="38" width="5" height="5" fill="#991b1b" />

                  {/* Center Emblem Shield */}
                  <rect x="35" y="35" width="30" height="30" fill="#7f1d1d" rx="4" />
                  <circle cx="50" cy="50" r="10" fill="#fef3c7" />
                  <text
                    x="50"
                    y="53.5"
                    fontSize="7"
                    fontWeight="bold"
                    fontFamily="serif"
                    fill="#991b1b"
                    textAnchor="middle"
                  >
                    RC
                  </text>

                  {/* Bottom & Right data dots */}
                  <rect x="38" y="70" width="5" height="5" fill="#1c0f0a" />
                  <rect x="48" y="76" width="5" height="5" fill="#1c0f0a" />
                  <rect x="56" y="70" width="5" height="5" fill="#991b1b" />

                  <rect x="68" y="38" width="5" height="5" fill="#1c0f0a" />
                  <rect x="76" y="46" width="5" height="5" fill="#991b1b" />
                  <rect x="84" y="38" width="5" height="5" fill="#1c0f0a" />
                  <rect x="70" y="70" width="5" height="5" fill="#1c0f0a" />
                  <rect x="80" y="76" width="5" height="5" fill="#1c0f0a" />
                  <rect x="88" y="84" width="5" height="5" fill="#1c0f0a" />
                </svg>
              </div>

              <div className="text-xs font-semibold text-stone-200 mb-1">
                Scan with Phone Camera to Order
              </div>
              <p className="text-[11px] text-stone-400 mb-4">
                No app download required · Instant digital order to chef
              </p>

              {/* Direct phone number prominently placed on standee */}
              <div className="pt-3 border-t border-amber-900/40 flex items-center justify-center gap-2 text-xs text-amber-200">
                <Phone className="w-3.5 h-3.5 text-red-400" />
                <span>Manager Hotline: </span>
                <span className="font-mono font-bold text-amber-300">{RESTAURANT_INFO.phone}</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  window.print();
                }}
                className="flex items-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 rounded-lg text-xs font-semibold"
              >
                <Printer className="w-4 h-4" />
                <span>Print Standee Card</span>
              </button>
              <button
                onClick={() => setActiveTab('order')}
                className="px-5 py-2.5 bg-gradient-to-r from-red-700 to-amber-700 hover:from-red-600 hover:to-amber-600 text-white rounded-lg text-xs font-semibold shadow"
              >
                Test Digital Ordering Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
