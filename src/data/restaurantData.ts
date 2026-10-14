export interface MenuItem {
  id: string;
  name: string;
  hindiName?: string;
  category: 'starters' | 'tandoor' | 'curries' | 'biryani' | 'breads' | 'desserts' | 'beverages';
  price: number;
  description: string;
  isVeg: boolean;
  spiceLevel: 0 | 1 | 2 | 3; // 0: mild, 1: medium, 2: spicy, 3: red chilli fire
  isChefSpecial?: boolean;
  image?: string;
  allergens?: string[];
  prepTime?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  category: 'food' | 'ambiance' | 'service';
  verifiedDiner: boolean;
  favoriteDish: string;
  avatarBg: string;
}

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
  guests: number;
  seatingArea: string;
  specialRequests?: string;
  status: 'confirmed' | 'pending';
}

export const RESTAURANT_INFO = {
  name: "Red Chilli",
  tagline: "Royal Indian Dining & Handcrafted Awadhi Cuisine",
  phone: "7710822147",
  formattedPhone: "+91 7710822147",
  whatsappUrl: "https://wa.me/917710822147?text=Hi%20Red%20Chilli,%20I%20would%20like%20to%20inquire%20about%20table%20reservation",
  email: "reservations@redchillidining.in",
  address: "Plot 42, Heritage Boulevard, Royal Palm Enclave, MG Road District",
  city: "Mumbai / Pune Metropolitan",
  timing: {
    lunch: "12:00 PM – 04:00 PM",
    dinner: "07:00 PM – 12:00 Midnight",
    days: "Open All 7 Days"
  },
  rating: 4.9,
  totalReviews: 1420
};

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Delicacies' },
  { id: 'tandoor', label: 'Royal Tandoor' },
  { id: 'curries', label: 'Grand Curries' },
  { id: 'biryani', label: 'Awadhi Biryani' },
  { id: 'starters', label: 'Crisp Starters' },
  { id: 'breads', label: 'Artisan Breads' },
  { id: 'desserts', label: 'Royal Mithai' },
  { id: 'beverages', label: 'Cocktails & Coolers' }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'rc-1',
    name: 'Red Chilli Signature Tandoori Platter',
    hindiName: 'शाही तंदूरी थाल',
    category: 'tandoor',
    price: 980,
    description: 'A grand charcoal-smoked assemblage of Bhatti Murgh Tikka, Galouti Kebab, Char-grilled Paneer, and Lamb Seekh with fresh mint dip.',
    isVeg: false,
    spiceLevel: 3,
    isChefSpecial: true,
    image: '/src/assets/images/dish_tandoori_platter_1791969978877.jpg',
    prepTime: '20 mins'
  },
  {
    id: 'rc-2',
    name: 'Purani Dilli Butter Chicken',
    hindiName: 'पुरानी दिल्ली बटर चिकन',
    category: 'curries',
    price: 680,
    description: 'Tender tandoori chicken simmered in an indulgent velvety makhani gravy enriched with Kashmiri degi mirch, butter, and sun-dried fenugreek.',
    isVeg: false,
    spiceLevel: 1,
    isChefSpecial: true,
    image: '/src/assets/images/dish_butter_chicken_curry_1791969980831.jpg',
    prepTime: '18 mins'
  },
  {
    id: 'rc-3',
    name: 'Nawabi Mutton Dum Biryani',
    hindiName: 'नवाबी मटन दम बिरयानी',
    category: 'biryani',
    price: 790,
    description: 'Prime cut baby goat cooked in fragrant basmati rice with whole saffron, fried shallots, and potli spices, sealed with dough in a heavy brass handi.',
    isVeg: false,
    spiceLevel: 2,
    isChefSpecial: true,
    image: '/src/assets/images/dish_dum_biryani_1791969980708.jpg',
    prepTime: '25 mins'
  },
  {
    id: 'rc-4',
    name: 'Angara Paneer Tikka',
    hindiName: 'अंगारा पनीर टिक्का',
    category: 'tandoor',
    price: 520,
    description: 'Thick cubes of farm-fresh cottage cheese marinated in mustard oil, pounded red chillies, and ajwain, scorched over open live coals.',
    isVeg: true,
    spiceLevel: 2,
    isChefSpecial: false,
    image: '/src/assets/images/dish_tandoori_platter_1791969978877.jpg',
    prepTime: '15 mins'
  },
  {
    id: 'rc-5',
    name: 'Dal Makhani Bukhara Style',
    hindiName: 'दाल मखनी बुखारा',
    category: 'curries',
    price: 490,
    description: 'Black urad lentils slow-cooked overnight for 24 hours on glowing embers, finished with churned white butter and vine-ripened tomatoes.',
    isVeg: true,
    spiceLevel: 1,
    isChefSpecial: true,
    prepTime: '12 mins'
  },
  {
    id: 'rc-6',
    name: 'Subz Nizami Handi Biryani',
    hindiName: 'सब्ज़ निज़ामी हांडी',
    category: 'biryani',
    price: 560,
    description: 'Seasonal heirloom garden vegetables, royal paneer chunks, and aromatic long-grain aged basmati dum-cooked with saffron and kewra essence.',
    isVeg: true,
    spiceLevel: 1,
    isChefSpecial: false,
    prepTime: '20 mins'
  },
  {
    id: 'rc-7',
    name: 'Kurkuri Dahi Kebab',
    hindiName: 'कुरकुरी दही कबाब',
    category: 'starters',
    price: 460,
    description: 'Silken hung curd infused with green cardamom, roasted cumin, and pomegranate arils, enveloped in a golden crisp crust.',
    isVeg: true,
    spiceLevel: 0,
    isChefSpecial: false,
    prepTime: '12 mins'
  },
  {
    id: 'rc-8',
    name: 'Gosht Rogan Josh',
    hindiName: 'रोगन जोश कश्मीरी',
    category: 'curries',
    price: 740,
    description: 'Kashmiri delicacy of tender braised lamb shank in an aromatic gravy scented with Ratan Jot, fennel seeds, and dry ginger.',
    isVeg: false,
    spiceLevel: 2,
    isChefSpecial: false,
    prepTime: '20 mins'
  },
  {
    id: 'rc-9',
    name: 'Truffle & Garlic Butter Naan',
    hindiName: 'ट्रफल गार्लिक नान',
    category: 'breads',
    price: 180,
    description: 'Clay-oven leavened bread brushed with wild summer truffle oil, minced burnt garlic, and fresh organic herbs.',
    isVeg: true,
    spiceLevel: 0,
    isChefSpecial: true,
    prepTime: '8 mins'
  },
  {
    id: 'rc-10',
    name: 'Shahi Khurmi Roti',
    hindiName: 'शाही खुरमी रोटी',
    category: 'breads',
    price: 140,
    description: 'Traditional multi-layered whole wheat tandoori bread dusted with roasted sesame and crushed kalonji seeds.',
    isVeg: true,
    spiceLevel: 0,
    isChefSpecial: false,
    prepTime: '8 mins'
  },
  {
    id: 'rc-11',
    name: 'Royal Shahi Tukda Flambé',
    hindiName: 'शाही टुकड़ा फ़्लैम्बे',
    category: 'desserts',
    price: 360,
    description: 'Ghee-crisped bread soaked in fragrant saffron syrup, draped with 8-hour reduced rabri, Iranian pistachios, and pure silver vark.',
    isVeg: true,
    spiceLevel: 0,
    isChefSpecial: true,
    prepTime: '10 mins'
  },
  {
    id: 'rc-12',
    name: 'Red Chilli Smoked Guava Spritzer',
    hindiName: 'चिली अमरूद मॉकटेल',
    category: 'beverages',
    price: 290,
    description: 'Fresh pink guava juice infused with roasted cumin, Himalayan pink salt, a touch of flaming red chilli rim, and crisp ginger fizz.',
    isVeg: true,
    spiceLevel: 1,
    isChefSpecial: true,
    prepTime: '5 mins'
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    name: 'Vikramaditya Singhania',
    rating: 5,
    date: '2 days ago',
    comment: 'The interior is breathtaking! The hand-carved jharokhas, warm crystal chandeliers, and brass tableware give you a feeling of a royal Rajasthani palace. The Signature Tandoori Platter and Dum Biryani were out of this world.',
    category: 'ambiance',
    verifiedDiner: true,
    favoriteDish: 'Red Chilli Signature Tandoori Platter',
    avatarBg: 'bg-red-800'
  },
  {
    id: 'rev-2',
    name: 'Ananya Deshmukh',
    rating: 5,
    date: '1 week ago',
    comment: 'Red Chilli is hands down the best fine dining Indian restaurant in town. The Purani Dilli Butter Chicken was silky, authentic, and not overly sweet. Ordering directly via the QR code on our table was seamless and high-tech!',
    category: 'food',
    verifiedDiner: true,
    favoriteDish: 'Purani Dilli Butter Chicken',
    avatarBg: 'bg-amber-700'
  },
  {
    id: 'rev-3',
    name: 'Dr. Rajesh & Sunita Kothari',
    rating: 5,
    date: '2 weeks ago',
    comment: 'We booked the Private Cabana for our 25th wedding anniversary. The candlelit atmosphere, attentive hospitality, and Bukhara style Dal Makhani made our celebration unforgettable. Compliments to the chef and team!',
    category: 'service',
    verifiedDiner: true,
    favoriteDish: 'Dal Makhani Bukhara Style',
    avatarBg: 'bg-rose-900'
  },
  {
    id: 'rev-4',
    name: 'Karan Mehra',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Called Mr. Shaikh on 7710822147 to reserve a table for 12 corporate guests. They set up the Royal Dining Hall seamlessly. The Truffle Naan and Mutton Biryani won everyone over. Exceptional hospitality!',
    category: 'service',
    verifiedDiner: true,
    favoriteDish: 'Nawabi Mutton Dum Biryani',
    avatarBg: 'bg-stone-700'
  }
];

export const SEATING_ZONES = [
  {
    id: 'royal-hall',
    title: 'Royal Grand Dining Hall',
    capacity: '2 to 10 Guests',
    vibe: 'Under glowing crystal chandeliers and teakwood arches',
    description: 'Immerse in the grandeur of our central dining hall with velvet banquettes and live ambient Indian instrumental sitar melodies.'
  },
  {
    id: 'jharokha-cabana',
    title: 'Private Jharokha Cabana',
    capacity: '2 to 6 Guests',
    vibe: 'Secluded intimate dining with hand-carved lattice screens',
    description: 'Designed for anniversaries, private family dinners, and intimate conversations with dedicated butler service.'
  },
  {
    id: 'amber-lounge',
    title: 'The Amber Velvet Lounge',
    capacity: '4 to 8 Guests',
    vibe: 'Relaxed royal sofas with low candle lighting & cocktails',
    description: 'Sophisticated plush lounge area perfect for pre-dinner craft mocktails, conversation, and tandoori sharing platters.'
  },
  {
    id: 'family-banquet',
    title: 'Maharaja Celebration Suite',
    capacity: '10 to 25 Guests',
    vibe: 'Exclusive celebration room for milestones & corporate dinners',
    description: 'State-of-the-art climate control, personalized curated royal thali courses, and custom floral decorations.'
  }
];
