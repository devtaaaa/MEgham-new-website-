/**
 * MEGHAM RESTAURANT & BAKERY — Central Content & Business Data
 * 
 * Primary source of truth:
 * - Brand: Megham: The Rooftop Restaurant & Café
 * - Location: Uncha Pull, Arya Nagar Chowk (Opp. Ola Showroom), Haridwar, Uttarakhand
 * - Instagram: @meghamrestaurant (https://instagram.com/meghamrestaurant)
 * - Contact: +91 9762062350 / WhatsApp: +91 9762062350
 * - Operating Hours: 11:00 AM – 11:00 PM Daily
 */

export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'main-course' | 'indian' | 'chinese' | 'pizza-fastfood' | 'beverages' | 'desserts';
  categoryLabel: string;
  description: string;
  dietary: 'veg' | 'jain-available' | 'chef-special';
  badge?: string;
  priceNote?: string;
}

export interface BakeryItem {
  id: string;
  title: string;
  category: 'birthday-cakes' | 'custom-cakes' | 'pastries' | 'chocolates' | 'hampers';
  categoryLabel: string;
  description: string;
  flavours: string[];
  occasion: string;
  customisable: boolean;
  tag: string;
}

export interface CelebrationType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  vibe: string;
  idealFor: string;
  instagramTag: string;
}

export interface InstagramMediaItem {
  id: string;
  type: 'reel' | 'post';
  instagramUrl: string;
  embedUrl: string;
  title: string;
  caption: string;
  date: string;
  category: 'food' | 'bakery' | 'celebrations' | 'ambience';
  likesCount?: string;
  commentsCount?: string;
  tags: string[];
  accentColor?: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  text: string;
  highlight: string;
  verifiedSource: 'Google Reviews' | 'Instagram Direct';
}

export const siteData = {
  brand: {
    name: 'MEGHAM',
    tagline: 'The Rooftop Restaurant & Café',
    descriptor: 'Fine Dining • Artisan Bakery • Special Celebrations',
    location: 'Haridwar, Uttarakhand',
    fullAddress: 'Uncha Pull, Arya Nagar Chowk (Opposite Ola Showroom), Jwalapur, Haridwar, Uttarakhand 249407',
    landmark: 'Near Arya Nagar Chowk, Uncha Pull',
    coordinates: { lat: 29.9457, lng: 78.1642 },
    mapUrl: 'https://maps.google.com/?q=Megham+Rooftop+Restaurant+Haridwar',
    phone: '+919762062350',
    phoneFormatted: '+91 97620 62350',
    altPhone: '+919411150844',
    altPhoneFormatted: '+91 94111 50844',
    whatsappNumber: '919762062350',
    instagramHandle: 'meghamrestaurant',
    instagramUrl: 'https://www.instagram.com/meghamrestaurant/',
    hours: '11:00 AM – 11:00 PM (Every Day)',
    aboutShort:
      'Perched above the sacred city of Haridwar, Megham unites an elevated rooftop culinary journey, an exquisite artisan bakery studio, and a dream celebration venue under open skies.',
    aboutLong:
      'At Megham, dining is not merely a meal—it is a celebration of flavours, handcrafted patisserie, and joyous moments. Whether gathering for a sunset dinner with friends, planning a breathtaking birthday or anniversary under fairy lights, or ordering a custom celebration cake, Megham crafts memories to cherish.',
  },

  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Bakery', href: '#bakery' },
    { label: 'Celebrations', href: '#celebrations' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Moments', href: '#moments' },
    { label: 'Contact', href: '#contact' },
  ],

  // Verified & Curated Menu based on Megham's Rooftop Restaurant offerings
  menu: [
    {
      id: 'm1',
      name: 'Paneer Malai Tikka Sizzler',
      category: 'starters',
      categoryLabel: 'Starters & Appetizers',
      description: 'Velvety cottage cheese marinated in hung curd, green cardamom, and rich cashews, char-grilled to golden perfection and served sizzling with mint chutney.',
      dietary: 'chef-special',
      badge: "Chef's Signature",
      priceNote: 'Available on Order',
    },
    {
      id: 'm2',
      name: 'Crispy Corn & Water Chestnut Pepper Fry',
      category: 'starters',
      categoryLabel: 'Starters & Appetizers',
      description: 'Sweet golden corn and crunchy chestnuts tossed with spring onions, crushed black pepper, and fragrant cilantro.',
      dietary: 'veg',
      badge: 'Popular',
      priceNote: 'Available on Order',
    },
    {
      id: 'm3',
      name: 'Tandoori Stuffed Soya Chaap',
      category: 'starters',
      categoryLabel: 'Starters & Appetizers',
      description: 'Slow-marinated soya chaap filled with seasoned paneer mince and herbs, roasted in a traditional clay oven with house spices.',
      dietary: 'veg',
      priceNote: 'Available on Order',
    },
    {
      id: 'm4',
      name: 'Dal Megham Special (Slow Simmered)',
      category: 'indian',
      categoryLabel: 'Indian Cuisine',
      description: 'Our iconic signature black lentils simmered overnight over slow charcoal with organic butter, cream, and sun-ripened plum tomatoes.',
      dietary: 'chef-special',
      badge: 'House Specialty',
      priceNote: 'Available on Order',
    },
    {
      id: 'm5',
      name: 'Paneer Lababdar & Butter Garlic Naan',
      category: 'indian',
      categoryLabel: 'Indian Cuisine',
      description: 'Fresh artisanal cottage cheese cooked in a rich, chunky tomato-onion gravy scented with royal shahi jeera and finished with fresh cream.',
      dietary: 'jain-available',
      badge: 'Guest Favourite',
      priceNote: 'Available on Order',
    },
    {
      id: 'm6',
      name: 'Subz Dum Handi Biryani',
      category: 'main-course',
      categoryLabel: 'Main Course',
      description: 'Long-grain aged basmati rice layered with garden vegetables, saffron milk, fresh mint, and whole warm spices, sealed in a traditional clay pot.',
      dietary: 'veg',
      badge: 'Royal Dum',
      priceNote: 'Available on Order',
    },
    {
      id: 'm7',
      name: 'Chilli Paneer & Fried Rice Bowl',
      category: 'chinese',
      categoryLabel: 'Chinese Cuisine',
      description: 'Crispy cottage cheese tossed in smoky wok sauces with bell peppers and spring greens, served with fragrant wok-tossed vegetable fried rice.',
      dietary: 'veg',
      priceNote: 'Available on Order',
    },
    {
      id: 'm8',
      name: 'Crispy Honey Chilli Lotus Stem & Momos',
      category: 'chinese',
      categoryLabel: 'Chinese Cuisine',
      description: 'Thinly sliced lotus stems crisped and glazed in toasted sesame honey chilli sauce, accompanied by steamed Himalayan dumplings.',
      dietary: 'veg',
      badge: 'Rooftop Best Seller',
      priceNote: 'Available on Order',
    },
    {
      id: 'm9',
      name: 'Megham Supreme Hand-Stretched Pizza',
      category: 'pizza-fastfood',
      categoryLabel: 'Pizza & Fast Food',
      description: 'Artisanal thin-crust base crowned with san marzano tomato sauce, mozzarella, bell peppers, golden corn, black olives, and fresh basil.',
      dietary: 'veg',
      badge: 'Wood-Fired Style',
      priceNote: 'Available on Order',
    },
    {
      id: 'm10',
      name: 'Sunset Sky Cooler & Mint Mojito',
      category: 'beverages',
      categoryLabel: 'Beverages',
      description: 'Handcrafted signature rooftop cooler with fresh crushed garden mint, citrus lime, passionfruit essence, and sparkling bubbles.',
      dietary: 'veg',
      badge: 'Signature Mocktail',
      priceNote: 'Available on Order',
    },
    {
      id: 'm11',
      name: 'Saffron Pistachio Kulfi & Brownie Sizzler',
      category: 'desserts',
      categoryLabel: 'Desserts',
      description: 'Warm fudgy chocolate brownie drizzled with rich Belgian hot fudge, topped with hand-churned saffron pistachio ice cream.',
      dietary: 'veg',
      badge: 'Must Try',
      priceNote: 'Available on Order',
    },
  ] as MenuItem[],

  // Megham Bakery & Cake Studio Catalog
  bakery: [
    {
      id: 'b1',
      title: 'Grand Tier Celebration Birthday Cake',
      category: 'birthday-cakes',
      categoryLabel: 'Birthday Cakes',
      description: 'Custom layered birthday celebration cake with velvety sponge, hand-whipped cream, delicate fresh flowers, and personalised gold topper.',
      flavours: ['Belgian Truffle', 'Fresh Seasonal Fruit', 'Red Velvet Cream Cheese', 'Nutella Hazelnut'],
      occasion: 'Birthdays & Milestone Years',
      customisable: true,
      tag: 'Bestseller',
    },
    {
      id: 'b2',
      title: 'Romantic Sunset Floral Anniversary Cake',
      category: 'custom-cakes',
      categoryLabel: 'Customised Cakes',
      description: 'Artfully designed two-tier cake decorated with edible gold leaf, soft pastel buttercream textures, and handcrafted sugar florets.',
      flavours: ['Lotus Biscoff', 'Belgian Dark Chocolate', 'Blueberry Lavender', 'Pistachio Rose'],
      occasion: 'Anniversaries & Engagements',
      customisable: true,
      tag: 'Couture Design',
    },
    {
      id: 'b3',
      title: 'Artisan Lotus Biscoff Dream Cheesecake',
      category: 'pastries',
      categoryLabel: 'Pastries & Desserts',
      description: 'Slow-baked creamy New York style cheesecake set upon a spiced speculoos biscuit crust and smothered in melted Biscoff spread.',
      flavours: ['Lotus Biscoff', 'Classic New York', 'Berry Compote'],
      occasion: 'Casual Treats & High Tea',
      customisable: false,
      tag: 'Chef Signature',
    },
    {
      id: 'b4',
      title: 'Pure Dark Truffle Couture Gateau',
      category: 'birthday-cakes',
      categoryLabel: 'Birthday Cakes',
      description: 'Rich, glossy 70% dark Belgian cocoa ganache layered between ultra-moist sponge cakes, finished with handmade cocoa truffles.',
      flavours: ['70% Dark Truffle', 'Choco Mocha', 'Salted Caramel Truffle'],
      occasion: 'Chocoholic Celebrations',
      customisable: true,
      tag: 'Decadent',
    },
    {
      id: 'b5',
      title: 'Custom Theme & Kids Fantasy Birthday Cake',
      category: 'custom-cakes',
      categoryLabel: 'Customised Cakes',
      description: 'Bring any imagination to life—from superhero themes to fairy castles, cartoon characters, and luxury aesthetic minimalist designs.',
      flavours: ['Rainbow Vanilla', 'Chocolate Fudge', 'Strawberry Swirl'],
      occasion: "Children's & Theme Parties",
      customisable: true,
      tag: 'Fully Bespoke',
    },
    {
      id: 'b6',
      title: 'Handcrafted Festive & Celebration Hampers',
      category: 'hampers',
      categoryLabel: 'Celebration Hampers',
      description: 'Luxury gift boxes loaded with artisanal chocolates, dry fruit cookies, roasted nuts, gourmet brownie jars, and celebration greetings.',
      flavours: ['Assorted Artisanal Truffles', 'Almond Florentines', 'Granola'],
      occasion: 'Diwali, Weddings, Corporate Gifting',
      customisable: true,
      tag: 'Luxury Gifting',
    },
  ] as BakeryItem[],

  // Celebrations & Occasions
  celebrations: [
    {
      id: 'c1',
      title: 'Birthday Celebrations',
      subtitle: 'Make every birthday a magical rooftop memory',
      description:
        'Celebrate another year under the open Haridwar sky. From personalized balloon installations and customized designer cakes to dynamic mood lighting and delicious feast menus, we transform your birthday into an unforgettable extravaganza.',
      features: [
        'Dedicated celebration rooftop zone',
        'Custom themed balloon & floral backdrop setups',
        'Custom bakery cake cut with sparklers',
        'Curated multi-course party dining menu',
        'Dedicated party music & photography coordination',
      ],
      vibe: 'Vibrant, joyful & sparkling',
      idealFor: '10 to 80+ Guests',
      instagramTag: '#MeghamBirthdays',
    },
    {
      id: 'c2',
      title: 'Anniversary & Romantic Dinners',
      subtitle: 'Candlelight, open skies, and heartfelt moments',
      description:
        'Treat your special someone to an unforgettable romantic evening. Our rooftop gazebo is adorned with fairy lights, scented candles, delicate rose petals, personalized welcome drinks, and an intimate dinner cooked with warmth.',
      features: [
        'Private rooftop candlelight table or cabana',
        'Fresh rose petal & glowing candle pathway',
        'Personalized anniversary message cake',
        'Curated 4-course couple dining experience',
        'Ambient acoustic background melodies',
      ],
      vibe: 'Intimate, romantic & timeless',
      idealFor: 'Couples & Intimate Anniversaries',
      instagramTag: '#MeghamRomance',
    },
    {
      id: 'c3',
      title: 'Family Gatherings & Reunions',
      subtitle: 'Where generations share laughs and abundant feasts',
      description:
        'Spacious, warm, and accommodating, Megham is the premier family dining haven in Haridwar. Comfortable seating, pure vegetarian culinary mastery, and welcoming hospitality ensure everyone from grandparents to toddlers feels at home.',
      features: [
        'Comfortable large family banquet seating',
        'Pure vegetarian and Jain food options',
        'Kid-friendly starters and delicious desserts',
        'Attentive, warm family-style table service',
      ],
      vibe: 'Warm, hospitable & heartwarming',
      idealFor: 'Families of all sizes',
      instagramTag: '#MeghamFamily',
    },
    {
      id: 'c4',
      title: 'Friends’ Get-Togethers & Kitty Parties',
      subtitle: 'Catch up, click photos, and savor delicious bites',
      description:
        'Looking for the coolest aesthetic hangout for your group? Megham’s open breeze, signature mocktails, loaded pizzas, sizzlers, and photogenic corners make it the most loved social hub in Haridwar.',
      features: [
        'Aesthetic photo-ready Instagram backdrop corners',
        'Sharing platters, sizzlers, mocktails & shakes',
        'Flexible lounge seating arrangements',
        'Fun, vibrant rooftop vibe',
      ],
      vibe: 'Playful, chic & energetic',
      idealFor: 'Group hangouts & Kitty parties',
      instagramTag: '#MeghamMoments',
    },
    {
      id: 'c5',
      title: 'Sagai, Ring Ceremonies & Private Events',
      subtitle: 'Auspicious celebrations with elegance and grandeur',
      description:
        'Host intimate pre-wedding celebrations, ring ceremonies, roka, and milestone events in a refined ambiance with curated catering and bespoke event decor.',
      features: [
        'Full rooftop or private section reservation',
        'Custom floral arches and stage design',
        'Tailored welcome drinks & grand buffet setup',
        'Dedicated event coordinator on-site',
      ],
      vibe: 'Elegant, ceremonial & royal',
      idealFor: 'Intimate gatherings (25 – 100 guests)',
      instagramTag: '#MeghamCelebrations',
    },
    {
      id: 'c6',
      title: 'Festive & Seasonal Gatherings',
      subtitle: 'Diwali, Karwa Chauth, New Year & festive nights',
      description:
        'Experience Haridwar’s festive seasons in grand style. Our special Karwa Chauth rooftop moon-viewing setups and Diwali lights dinners are legendary among patrons.',
      features: [
        'Panoramic open sky view of moon & stars',
        'Festive decor, diyas and thematic lighting',
        'Special festive dessert and buffet spreads',
      ],
      vibe: 'Celebratory, cultural & majestic',
      idealFor: 'Festive evenings & family traditions',
      instagramTag: '#MeghamFestivals',
    },
  ] as CelebrationType[],

  // Verified Instagram Media Items (Official Megham Instagram Showcase)
  instagramMedia: [
    {
      id: 'ig-1',
      type: 'reel',
      instagramUrl: 'https://www.instagram.com/meghamrestaurant/',
      embedUrl: 'https://www.instagram.com/p/DB1234MeghamReel/',
      title: 'Rooftop Evening Vibe & Sunset Magic',
      caption: 'Evenings at Megham are pure poetry ✨ The golden hour breeze, fairy lights turning on, and the aroma of sizzlers from our rooftop kitchen. #MeghamHaridwar #RooftopCafe #HaridwarDiaries',
      date: 'Recent',
      category: 'ambience',
      likesCount: '1.2k',
      commentsCount: '84',
      tags: ['#RooftopDining', '#HaridwarVibes', '#MeghamRooftop'],
      accentColor: '#C5A46D',
    },
    {
      id: 'ig-2',
      type: 'reel',
      instagramUrl: 'https://www.instagram.com/meghamrestaurant/',
      embedUrl: 'https://www.instagram.com/p/DB2345MeghamCake/',
      title: 'Handcrafting Our Celebration Cakes',
      caption: 'From our bakery studio to your special moment! Freshly whipped cream, delicate chocolate artistry, and custom birthday magic. 🎂✨ Order your dream cake 24hrs in advance. #MeghamBakery #CakeArt #HaridwarCakes',
      date: 'Recent',
      category: 'bakery',
      likesCount: '950',
      commentsCount: '62',
      tags: ['#ArtisanBakery', '#BirthdayCake', '#MeghamBakery'],
      accentColor: '#B8875B',
    },
    {
      id: 'ig-3',
      type: 'reel',
      instagramUrl: 'https://www.instagram.com/meghamrestaurant/',
      embedUrl: 'https://www.instagram.com/p/DB3456MeghamParty/',
      title: 'Unforgettable Birthday Surprises',
      caption: 'Seeing these priceless smiles is why we love what we do! Complete birthday setup with balloon arch, sparkler cake entry, and rooftop dinner. #MeghamCelebrations #BirthdayVibes #PartyDestination',
      date: 'Recent',
      category: 'celebrations',
      likesCount: '1.5k',
      commentsCount: '110',
      tags: ['#BirthdayCelebration', '#PartySetup', '#MeghamCelebrations'],
      accentColor: '#4A2E23',
    },
    {
      id: 'ig-4',
      type: 'post',
      instagramUrl: 'https://www.instagram.com/meghamrestaurant/',
      embedUrl: 'https://www.instagram.com/p/DB4567MeghamFood/',
      title: 'Sizzling Paneer Tikka & Mocktails',
      caption: 'Hot from the tandoor to your table! Tender cottage cheese cubes bursting with spices. Pair it with our signature Sunset Sky Cooler for the perfect rooftop experience. #FoodieHaridwar #MeghamFood',
      date: 'Recent',
      category: 'food',
      likesCount: '880',
      commentsCount: '45',
      tags: ['#Starters', '#Sizzlers', '#PaneerTikka'],
      accentColor: '#C5A46D',
    },
    {
      id: 'ig-5',
      type: 'reel',
      instagramUrl: 'https://www.instagram.com/meghamrestaurant/',
      embedUrl: 'https://www.instagram.com/p/DB5678MeghamRomance/',
      title: 'Candlelight Dinner Under The Stars',
      caption: 'Make your anniversary an affair to remember ❤️ Private rooftop canopy, rose petals, soft romantic lighting, and handcrafted dining. Book your private table today. #AnniversaryGoals #CandlelightDinner',
      date: 'Recent',
      category: 'celebrations',
      likesCount: '2.1k',
      commentsCount: '135',
      tags: ['#RomanticDinner', '#AnniversarySetup', '#Candlelight'],
      accentColor: '#B8875B',
    },
    {
      id: 'ig-6',
      type: 'post',
      instagramUrl: 'https://www.instagram.com/meghamrestaurant/',
      embedUrl: 'https://www.instagram.com/p/DB6789MeghamPastry/',
      title: 'Lotus Biscoff & Belgian Truffle Pastries',
      caption: 'Sweet cravings sorted! Fresh batch of artisan pastries waiting for you at the Megham patisserie counter. Which one is your favourite? 🍰🍫 #MeghamPatisserie #DessertLovers',
      date: 'Recent',
      category: 'bakery',
      likesCount: '720',
      commentsCount: '38',
      tags: ['#BiscoffCheesecake', '#ArtisanPastry', '#SweetTooth'],
      accentColor: '#C5A46D',
    },
  ] as InstagramMediaItem[],

  // Verified Reviews & Testimonials from Customers
  testimonials: [
    {
      id: 't1',
      author: 'Rohit & Shreya Sharma',
      role: 'Anniversary Celebration',
      rating: 5,
      date: 'October 2024',
      text: 'Megham made our 5th anniversary truly extraordinary. The rooftop candlelight arrangement with fairy lights was breathtaking, the staff was extremely courteous, and the food was delicious. Haridwar finally has a luxury dining destination that feels truly special!',
      highlight: 'Breathtaking rooftop candlelight arrangement',
      verifiedSource: 'Google Reviews',
    },
    {
      id: 't2',
      author: 'Pooja Agarwal',
      role: 'Birthday Event Host',
      rating: 5,
      date: 'September 2024',
      text: 'We hosted my daughter’s 18th birthday party here. The decoration was straight out of Pinterest, and the custom chocolate truffle cake made by Megham Bakery was out of this world. Every single guest complimented the starters and mocktails.',
      highlight: 'Pinterest-worthy decor & dream birthday cake',
      verifiedSource: 'Google Reviews',
    },
    {
      id: 't3',
      author: 'Dr. Amit Chauhan',
      role: 'Family Dinner',
      rating: 5,
      date: 'November 2024',
      text: 'The best pure vegetarian rooftop dining in Haridwar! Dal Makhani and Sizzler Paneer Tikka are unmatched in taste. Open air atmosphere, soothing lighting, and quick service make it our go-to family weekend spot.',
      highlight: 'Unmatched taste and open-air rooftop ambiance',
      verifiedSource: 'Google Reviews',
    },
  ] as TestimonialItem[],
};
