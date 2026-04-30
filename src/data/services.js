// Service providers data for wedding marketplace
const baseServices = [

  // BUDGET & MORADABAD VENDORS
  {
    id: 'budget-venue-moradabad',
    slug: 'budget-venue-moradabad',
    name: 'Moradabad Grand Banquet',
    category: 'venues',
    description: 'Affordable yet elegant banquet hall in Moradabad. Perfect for medium-sized gatherings with all basic amenities provided.',
    shortDescription: 'Affordable & elegant banquet in Moradabad',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop'
    ],
    location: 'Moradabad',
    rating: 4.5,
    reviews: 120,
    priceRange: { min: 100000, max: 300000, unit: 'per day' },
    availability: ['2026-04-15', '2026-04-20', '2026-05-01', '2026-05-10', '2026-05-15'],
    services: ['Banquet Hall', 'In-house Catering', 'Basic Decor', 'Parking'],
    featured: true,
    established: 2015,
    eventsCompleted: 300,
    contact: { phone: '+91 98765 11111', email: 'info@moradabadgrand.com' }
  },
  {
    id: 'budget-caterer-moradabad',
    slug: 'budget-caterer-moradabad',
    name: 'Brass City Caterers',
    category: 'caterers',
    description: 'Authentic local cuisine with great taste and highly affordable pricing in Moradabad.',
    shortDescription: 'Authentic & affordable local cuisine',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop'
    ],
    location: 'Moradabad',
    rating: 4.6,
    reviews: 85,
    priceRange: { min: 300, max: 800, unit: 'per plate' },
    availability: ['2026-04-15', '2026-04-20', '2026-05-01', '2026-05-10', '2026-05-15'],
    services: ['Vegetarian', 'Local Delicacies', 'Dessert Counter'],
    featured: true,
    established: 2018,
    eventsCompleted: 150,
    contact: { phone: '+91 98765 22222', email: 'brasscitycaterers@gmail.com' }
  },

  // CATERERS
  {
    id: 'royal-caterers-delhi',
    slug: 'royal-caterers-delhi',
    name: 'Royal Caterers',
    category: 'caterers',
    description: 'Premium North Indian cuisine specialists with over 20 years of experience in grand wedding celebrations. Known for authentic flavors and impeccable presentation.',
    shortDescription: 'Premium North Indian cuisine for grand celebrations',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Delhi',
    rating: 4.8,
    reviews: 156,
    priceRange: { min: 800, max: 2000, unit: 'per plate' },
    availability: ['2026-04-15', '2026-04-20', '2026-05-01', '2026-05-10', '2026-05-15'],
    services: ['Vegetarian', 'Non-Vegetarian', 'Live Counters', 'Chaat Station', 'Dessert Counter'],
    featured: true,
    established: 2004,
    eventsCompleted: 500,
    contact: { phone: '+91 98765 43210', email: 'info@royalcaterers.com' }
  },
  {
    id: 'shubh-catering-mumbai',
    slug: 'shubh-catering-mumbai',
    name: 'Shubh Catering Services',
    category: 'caterers',
    description: 'Specializing in Gujarati and Maharashtrian cuisines with a modern twist. Perfect for traditional yet contemporary wedding feasts.',
    shortDescription: 'Gujarati & Maharashtrian cuisine specialists',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Mumbai',
    rating: 4.6,
    reviews: 98,
    priceRange: { min: 600, max: 1500, unit: 'per plate' },
    availability: ['2026-04-10', '2026-04-25', '2026-05-05', '2026-05-20'],
    services: ['Pure Vegetarian', 'Jain Food', 'Live Dosa Counter', 'Mithai Station'],
    featured: false,
    established: 2010,
    eventsCompleted: 320,
    contact: { phone: '+91 98765 43211', email: 'book@shubhcatering.com' }
  },
  {
    id: 'spice-route-bangalore',
    slug: 'spice-route-bangalore',
    name: 'Spice Route Caterers',
    category: 'caterers',
    description: 'South Indian culinary experts offering authentic Kerala, Tamil, and Karnataka cuisines. Famous for our traditional banana leaf service.',
    shortDescription: 'Authentic South Indian wedding specialists',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Bangalore',
    rating: 4.7,
    reviews: 142,
    priceRange: { min: 500, max: 1200, unit: 'per plate' },
    availability: ['2026-04-12', '2026-04-22', '2026-05-08', '2026-05-18'],
    services: ['South Indian', 'Chettinad', 'Kerala Sadya', 'Live Appam Counter'],
    featured: true,
    established: 2008,
    eventsCompleted: 450,
    contact: { phone: '+91 98765 43212', email: 'hello@spiceroute.in' }
  },

  // DECORATORS
  {
    id: 'dream-decor-delhi',
    slug: 'dream-decor-delhi',
    name: 'Dream Wedding Decor',
    category: 'decorators',
    description: 'Transform your venue into a magical wonderland. Specializing in floral arrangements, lighting design, and thematic decorations for Indian weddings.',
    shortDescription: 'Magical venue transformations & floral designs',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Delhi',
    rating: 4.9,
    reviews: 203,
    priceRange: { min: 150000, max: 800000, unit: 'per event' },
    availability: ['2026-04-14', '2026-04-21', '2026-05-02', '2026-05-12'],
    services: ['Mandap Design', 'Floral Arrangements', 'LED Walls', 'Theme Decor', 'Entry Gates'],
    featured: true,
    established: 2006,
    eventsCompleted: 380,
    contact: { phone: '+91 98765 43213', email: 'create@dreamdecor.in' }
  },
  {
    id: 'flora-fantasy-jaipur',
    slug: 'flora-fantasy-jaipur',
    name: 'Flora Fantasy',
    category: 'decorators',
    description: 'Rajasthani-inspired decorations with a royal touch. Expert in palace wedding setups, traditional mandaps, and heritage venue styling.',
    shortDescription: 'Royal Rajasthani wedding decorations',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Jaipur',
    rating: 4.7,
    reviews: 167,
    priceRange: { min: 200000, max: 1200000, unit: 'per event' },
    availability: ['2026-04-16', '2026-04-28', '2026-05-06', '2026-05-16'],
    services: ['Palace Setups', 'Traditional Mandap', 'Marigold Decor', 'Royal Entrance', 'Elephant Decoration'],
    featured: true,
    established: 2009,
    eventsCompleted: 290,
    contact: { phone: '+91 98765 43214', email: 'royal@florafantasy.com' }
  },
  {
    id: 'elegant-events-mumbai',
    slug: 'elegant-events-mumbai',
    name: 'Elegant Events Decor',
    category: 'decorators',
    description: 'Contemporary and minimalist wedding decorations for modern couples. Specialists in destination weddings and beach setups.',
    shortDescription: 'Modern & minimalist wedding aesthetics',
    image: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Mumbai',
    rating: 4.5,
    reviews: 89,
    priceRange: { min: 100000, max: 500000, unit: 'per event' },
    availability: ['2026-04-18', '2026-04-30', '2026-05-09', '2026-05-22'],
    services: ['Minimalist Decor', 'Beach Weddings', 'Photo Booth Setup', 'Ceiling Draping', 'Aisle Design'],
    featured: false,
    established: 2015,
    eventsCompleted: 150,
    contact: { phone: '+91 98765 43215', email: 'hello@elegantevents.in' }
  },

  // DJ & MUSIC
  {
    id: 'beats-unlimited-delhi',
    slug: 'beats-unlimited-delhi',
    name: 'Beats Unlimited',
    category: 'dj',
    description: 'High-energy DJ services with state-of-the-art sound systems. Specialists in Bollywood, Punjabi, and EDM mashups for sangeet and reception.',
    shortDescription: 'High-energy DJ with premium sound systems',
    image: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Delhi',
    rating: 4.8,
    reviews: 234,
    priceRange: { min: 50000, max: 200000, unit: 'per event' },
    availability: ['2026-04-13', '2026-04-23', '2026-05-03', '2026-05-13'],
    services: ['DJ Night', 'Sound System', 'LED Dance Floor', 'Fog Machine', 'Laser Lights'],
    featured: true,
    established: 2011,
    eventsCompleted: 600,
    contact: { phone: '+91 98765 43216', email: 'book@beatsunlimited.in' }
  },
  {
    id: 'rhythm-kings-mumbai',
    slug: 'rhythm-kings-mumbai',
    name: 'Rhythm Kings Entertainment',
    category: 'dj',
    description: 'Complete entertainment package with DJ, live band, and anchor services. Known for creating unforgettable sangeet nights.',
    shortDescription: 'Complete entertainment with DJ & live band',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Mumbai',
    rating: 4.6,
    reviews: 178,
    priceRange: { min: 75000, max: 300000, unit: 'per event' },
    availability: ['2026-04-17', '2026-04-27', '2026-05-07', '2026-05-17'],
    services: ['DJ Services', 'Live Band', 'Anchor', 'Choreography', 'Karaoke'],
    featured: false,
    established: 2013,
    eventsCompleted: 420,
    contact: { phone: '+91 98765 43217', email: 'party@rhythmkings.com' }
  },
  {
    id: 'soundwave-bangalore',
    slug: 'soundwave-bangalore',
    name: 'Soundwave Productions',
    category: 'dj',
    description: 'Professional audio-visual solutions for weddings. Premium JBL sound systems and Martin lighting rigs for concert-quality experiences.',
    shortDescription: 'Premium AV solutions & concert-quality sound',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Bangalore',
    rating: 4.7,
    reviews: 145,
    priceRange: { min: 60000, max: 250000, unit: 'per event' },
    availability: ['2026-04-19', '2026-04-29', '2026-05-11', '2026-05-21'],
    services: ['Premium Sound', 'Concert Lighting', 'Video Walls', 'Pyrotechnics', 'Silent DJ'],
    featured: true,
    established: 2012,
    eventsCompleted: 350,
    contact: { phone: '+91 98765 43218', email: 'info@soundwave.in' }
  },

  // VENUES
  {
    id: 'grand-palace-delhi',
    slug: 'grand-palace-delhi',
    name: 'The Grand Palace',
    category: 'venues',
    description: 'Luxurious 5-star wedding venue with multiple banquet halls, sprawling lawns, and royal suites. Capacity up to 2000 guests.',
    shortDescription: 'Luxurious 5-star venue for grand celebrations',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Delhi',
    rating: 4.9,
    reviews: 312,
    priceRange: { min: 500000, max: 2500000, unit: 'per day' },
    availability: ['2026-04-20', '2026-05-01', '2026-05-15', '2026-05-25'],
    services: ['Banquet Hall', 'Lawn', 'Bridal Suite', 'Valet Parking', 'In-house Catering'],
    featured: true,
    established: 1998,
    eventsCompleted: 1200,
    contact: { phone: '+91 98765 43219', email: 'events@grandpalace.in' }
  },
  {
    id: 'lake-view-udaipur',
    slug: 'lake-view-udaipur',
    name: 'Lake View Heritage Resort',
    category: 'venues',
    description: 'Stunning heritage property overlooking Lake Pichola. Perfect for intimate destination weddings with royal Rajasthani hospitality.',
    shortDescription: 'Heritage lakeside destination wedding venue',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Udaipur',
    rating: 4.8,
    reviews: 187,
    priceRange: { min: 800000, max: 3500000, unit: 'per day' },
    availability: ['2026-04-22', '2026-05-04', '2026-05-18', '2026-05-28'],
    services: ['Lake View Lawn', 'Poolside Area', 'Heritage Rooms', 'Boat Arrival', 'Fireworks Permission'],
    featured: true,
    established: 1985,
    eventsCompleted: 800,
    contact: { phone: '+91 98765 43220', email: 'weddings@lakeviewudaipur.com' }
  },
  {
    id: 'beachside-goa',
    slug: 'beachside-goa',
    name: 'Beachside Paradise Resort',
    category: 'venues',
    description: 'Dreamy beach wedding venue with private beach access, ocean-view rooms, and sunset ceremony spots. Intimate gatherings up to 300 guests.',
    shortDescription: 'Dreamy beachfront destination weddings',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Goa',
    rating: 4.6,
    reviews: 143,
    priceRange: { min: 400000, max: 1800000, unit: 'per day' },
    availability: ['2026-04-24', '2026-05-06', '2026-05-20', '2026-05-30'],
    services: ['Private Beach', 'Beach Mandap', 'Pool Party Area', 'Ocean View Rooms', 'Sunset Deck'],
    featured: false,
    established: 2010,
    eventsCompleted: 280,
    contact: { phone: '+91 98765 43221', email: 'book@beachsidegoa.in' }
  },
  {
    id: 'taj-mahal-palace-mumbai',
    slug: 'taj-mahal-palace-mumbai',
    name: 'Taj Mahal Palace',
    category: 'venues',
    description: 'Iconic heritage hotel with breathtaking views of the Arabian Sea and Gateway of India. Featuring opulent halls and world-class service.',
    shortDescription: 'Iconic heritage hotel with Arabian Sea views',
    image: 'https://images.unsplash.com/photo-1549488344-c78278f9f0ae?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1549488344-c78278f9f0ae?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Mumbai',
    rating: 4.9,
    reviews: 534,
    priceRange: { min: 1500000, max: 4500000, unit: 'per day' },
    availability: ['2026-04-20', '2026-05-15', '2026-05-30'],
    services: ['Sea View Halls', 'Crystal Pavilion', 'Luxury Suites', 'International Cuisine'],
    featured: true,
    established: 1903,
    eventsCompleted: 3500,
    contact: { phone: '+91 98765 43222', email: 'weddings@tajhotels.in' }
  },
  {
    id: 'rambagh-palace-jaipur',
    slug: 'rambagh-palace-jaipur',
    name: 'Rambagh Palace',
    category: 'venues',
    description: 'A genuine maharajal palace turned luxury hotel. Experience an authentic royal Rajasthani wedding amidst magnificent gardens.',
    shortDescription: 'Authentic royal palace for regal weddings',
    image: 'https://images.unsplash.com/photo-1585828068970-1b75b9de1f4c?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1585828068970-1b75b9de1f4c?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Jaipur',
    rating: 4.8,
    reviews: 320,
    priceRange: { min: 2000000, max: 5000000, unit: 'per day' },
    availability: ['2026-04-18', '2026-05-12', '2026-05-22'],
    services: ['Mughal Gardens', 'Palace Courtyard', 'Royal Dining', 'Elephant Procession'],
    featured: true,
    established: 1835,
    eventsCompleted: 900,
    contact: { phone: '+91 98765 43223', email: 'royal@rambagh.in' }
  },
  {
    id: 'itc-gardenia-bangalore',
    slug: 'itc-gardenia-bangalore',
    name: 'ITC Gardenia',
    category: 'venues',
    description: 'Eco-responsible luxury hotel featuring nature-inspired architecture. Offers a grand ballroom and a rooftop terrace with city views.',
    shortDescription: 'Eco-luxury hotel with nature-inspired design',
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Bangalore',
    rating: 4.7,
    reviews: 215,
    priceRange: { min: 1000000, max: 3000000, unit: 'per day' },
    availability: ['2026-04-26', '2026-05-08', '2026-05-25'],
    services: ['Mysore Hall', 'Rooftop Pavilion', 'Green Building', 'Helipad'],
    featured: false,
    established: 2009,
    eventsCompleted: 600,
    contact: { phone: '+91 98765 43224', email: 'events@itcgardenia.in' }
  },
  {
    id: 'fort-rajwada-jaisalmer',
    slug: 'fort-rajwada-jaisalmer',
    name: 'Fort Rajwada',
    category: 'venues',
    description: 'An architectural marvel combining Rajputana heritage with modern amenities. Offers stunning desert views and open-air courtyards.',
    shortDescription: 'Rajputana heritage fort with desert views',
    image: 'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Jaisalmer',
    rating: 4.6,
    reviews: 178,
    priceRange: { min: 600000, max: 2000000, unit: 'per day' },
    availability: ['2026-04-21', '2026-05-05', '2026-05-19'],
    services: ['Desert Camp', 'Fort Courtyard', 'Folk Performances', 'Camel Ride'],
    featured: false,
    established: 1999,
    eventsCompleted: 450,
    contact: { phone: '+91 98765 43225', email: 'weddings@fortrajwada.in' }
  },
  {
    id: 'leela-palace-chennai',
    slug: 'leela-palace-chennai',
    name: 'The Leela Palace',
    category: 'venues',
    description: 'Chennai’s only seafront city hotel, built in the grandiose style of the Chettinad dynasty. Majestic ballrooms for lavish celebrations.',
    shortDescription: 'Seafront luxury hotel in Chettinad style',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Chennai',
    rating: 4.8,
    reviews: 260,
    priceRange: { min: 1200000, max: 3500000, unit: 'per day' },
    availability: ['2026-04-23', '2026-05-11', '2026-05-27'],
    services: ['Grand Ballroom', 'Sea View Terrace', 'Royal Suites', 'Culinary Expertise'],
    featured: true,
    established: 2013,
    eventsCompleted: 500,
    contact: { phone: '+91 98765 43226', email: 'celebrations@leelachennai.in' }
  },
  {
    id: 'udai-kothi-udaipur',
    slug: 'udai-kothi-udaipur',
    name: 'Udai Kothi',
    category: 'venues',
    description: 'A boutique modern hotel characterized by tranquil waters, rooftop pools, and incredible Mewar architecture for intimate weddings.',
    shortDescription: 'Boutique heritage hotel with rooftop pools',
    image: 'https://images.unsplash.com/photo-1560662105-57f8ad6ae2d1?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1560662105-57f8ad6ae2d1?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Udaipur',
    rating: 4.5,
    reviews: 142,
    priceRange: { min: 400000, max: 1200000, unit: 'per day' },
    availability: ['2026-04-25', '2026-05-07', '2026-05-21'],
    services: ['Rooftop Pool Area', 'Boutique Rooms', 'Lake View', 'Traditional Decor'],
    featured: false,
    established: 2000,
    eventsCompleted: 350,
    contact: { phone: '+91 98765 43227', email: 'events@udaikothi.com' }
  },
  {
    id: 'marriot-resort-goa',
    slug: 'marriot-resort-goa',
    name: 'Goa Marriott Resort & Spa',
    category: 'venues',
    description: 'Situated on the edge of Miramar Beach, this resort offers spectacular sunset views and a variety of indoor and outdoor venues.',
    shortDescription: 'Beachside resort offering spectacular sunsets',
    image: 'https://images.unsplash.com/photo-1605808381189-ae0491fb3ecf?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1605808381189-ae0491fb3ecf?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Goa',
    rating: 4.7,
    reviews: 380,
    priceRange: { min: 800000, max: 2500000, unit: 'per day' },
    availability: ['2026-04-28', '2026-05-14', '2026-05-29'],
    services: ['Miramar Beach Access', 'Grand Central Hall', 'Spa Packages', 'Sunset Ceremonies'],
    featured: true,
    established: 1999,
    eventsCompleted: 950,
    contact: { phone: '+91 98765 43228', email: 'weddings@goamarriott.com' }
  },

  // PHOTOGRAPHY
  {
    id: 'memories-studio-delhi',
    slug: 'memories-studio-delhi',
    name: 'Memories Forever Studio',
    category: 'photography',
    description: 'Award-winning wedding photography team capturing candid moments and cinematic films. Specialists in pre-wedding shoots and drone coverage.',
    shortDescription: 'Award-winning candid & cinematic photography',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Delhi',
    rating: 4.9,
    reviews: 289,
    priceRange: { min: 150000, max: 500000, unit: 'per event' },
    availability: ['2026-04-14', '2026-04-24', '2026-05-04', '2026-05-14'],
    services: ['Candid Photography', 'Cinematic Video', 'Drone Shots', 'Pre-wedding Shoot', 'Same-day Edit'],
    featured: true,
    established: 2008,
    eventsCompleted: 700,
    contact: { phone: '+91 98765 43222', email: 'capture@memoriesforever.in' }
  },
  {
    id: 'lens-craft-mumbai',
    slug: 'lens-craft-mumbai',
    name: 'Lens Craft Photography',
    category: 'photography',
    description: 'Boutique photography studio known for artistic compositions and storytelling. Each wedding is treated as a unique visual narrative.',
    shortDescription: 'Artistic storytelling & boutique photography',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Mumbai',
    rating: 4.7,
    reviews: 156,
    priceRange: { min: 100000, max: 350000, unit: 'per event' },
    availability: ['2026-04-16', '2026-04-26', '2026-05-08', '2026-05-18'],
    services: ['Traditional Photos', 'Candid Shots', 'Video Coverage', 'Album Design', 'Photo Booth'],
    featured: false,
    established: 2012,
    eventsCompleted: 380,
    contact: { phone: '+91 98765 43223', email: 'hello@lenscraft.in' }
  },
  {
    id: 'pixel-perfect-bangalore',
    slug: 'pixel-perfect-bangalore',
    name: 'Pixel Perfect Studios',
    category: 'photography',
    description: 'Tech-savvy photography team with latest equipment including RED cameras and Hasselblad. Pioneers in 360° coverage and VR wedding experiences.',
    shortDescription: 'Tech-forward photography with 360° coverage',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Bangalore',
    rating: 4.8,
    reviews: 198,
    priceRange: { min: 200000, max: 600000, unit: 'per event' },
    availability: ['2026-04-18', '2026-04-28', '2026-05-10', '2026-05-20'],
    services: ['4K Cinematic', '360° VR', 'Aerial Coverage', 'Live Streaming', 'Instant Prints'],
    featured: true,
    established: 2014,
    eventsCompleted: 250,
    contact: { phone: '+91 98765 43224', email: 'studio@pixelperfect.in' }
  },

  // MEHNDI ARTISTS
  {
    id: 'henna-haven-delhi',
    slug: 'henna-haven-delhi',
    name: 'Henna Haven',
    category: 'mehndi',
    description: 'Master mehndi artists creating intricate bridal designs. Specialists in Rajasthani, Arabic, and fusion patterns with organic henna.',
    shortDescription: 'Intricate bridal mehndi by master artists',
    image: 'https://images.unsplash.com/photo-1595907934615-a4d03f3e4c77?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1595907934615-a4d03f3e4c77?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Delhi',
    rating: 4.9,
    reviews: 267,
    priceRange: { min: 15000, max: 50000, unit: 'per bride' },
    availability: ['2026-04-13', '2026-04-23', '2026-05-03', '2026-05-13'],
    services: ['Bridal Mehndi', 'Arabic Design', 'Rajasthani Pattern', 'Guest Mehndi', 'Groom Mehndi'],
    featured: true,
    established: 2005,
    eventsCompleted: 900,
    contact: { phone: '+91 98765 43225', email: 'book@hennahaven.in' }
  },
  {
    id: 'mehndi-magic-jaipur',
    slug: 'mehndi-magic-jaipur',
    name: 'Mehndi Magic by Suman',
    category: 'mehndi',
    description: 'Traditional Rajasthani mehndi artistry passed through generations. Known for bold designs and dark, long-lasting color.',
    shortDescription: 'Traditional Rajasthani mehndi artistry',
    image: 'https://images.unsplash.com/photo-1591122947157-26bad3a117d2?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1591122947157-26bad3a117d2?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Jaipur',
    rating: 4.7,
    reviews: 189,
    priceRange: { min: 10000, max: 35000, unit: 'per bride' },
    availability: ['2026-04-15', '2026-04-25', '2026-05-05', '2026-05-15'],
    services: ['Bridal Full Hands', 'Feet Design', 'Portrait Mehndi', 'Team for Guests', 'Organic Henna'],
    featured: false,
    established: 1998,
    eventsCompleted: 1500,
    contact: { phone: '+91 98765 43226', email: 'suman@mehndimagic.com' }
  },

  // MAKEUP ARTISTS
  {
    id: 'glam-studio-mumbai',
    slug: 'glam-studio-mumbai',
    name: 'Glam Studio by Priya',
    category: 'makeup',
    description: 'Celebrity makeup artist offering bridal makeovers. Experts in HD makeup, airbrush techniques, and South Indian bridal looks.',
    shortDescription: 'Celebrity makeup artist for bridal makeovers',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Mumbai',
    rating: 4.8,
    reviews: 234,
    priceRange: { min: 25000, max: 100000, unit: 'per look' },
    availability: ['2026-04-14', '2026-04-24', '2026-05-04', '2026-05-14'],
    services: ['Bridal Makeup', 'Hairstyling', 'Draping', 'Family Makeup', 'Airbrush Technique'],
    featured: true,
    established: 2010,
    eventsCompleted: 500,
    contact: { phone: '+91 98765 43227', email: 'priya@glamstudio.in' }
  },
  {
    id: 'beauty-bliss-delhi',
    slug: 'beauty-bliss-delhi',
    name: 'Beauty Bliss Academy',
    category: 'makeup',
    description: 'Team of trained makeup artists offering affordable bridal packages. Perfect for brides and their entire wedding party.',
    shortDescription: 'Affordable bridal packages for entire party',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Delhi',
    rating: 4.5,
    reviews: 156,
    priceRange: { min: 15000, max: 50000, unit: 'per look' },
    availability: ['2026-04-16', '2026-04-26', '2026-05-06', '2026-05-16'],
    services: ['Bridal Package', 'Engagement Look', 'Reception Look', 'Family Package', 'Trial Session'],
    featured: false,
    established: 2015,
    eventsCompleted: 300,
    contact: { phone: '+91 98765 43228', email: 'book@beautybliss.in' }
  },

  // PANDIT SERVICES
  {
    id: 'vedic-rituals-delhi',
    slug: 'vedic-rituals-delhi',
    name: 'Vedic Rituals Services',
    category: 'pandit',
    description: 'Experienced pandits conducting authentic Hindu wedding ceremonies. Specialists in North Indian, South Indian, and Bengali rituals.',
    shortDescription: 'Authentic Hindu wedding ceremonies',
    image: 'https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Delhi',
    rating: 4.9,
    reviews: 178,
    priceRange: { min: 21000, max: 75000, unit: 'per ceremony' },
    availability: ['2026-04-15', '2026-04-25', '2026-05-05', '2026-05-15'],
    services: ['Hindu Wedding', 'Engagement', 'Haldi Ceremony', 'Satyanarayan Puja', 'Griha Pravesh'],
    featured: true,
    established: 2000,
    eventsCompleted: 2000,
    contact: { phone: '+91 98765 43229', email: 'pandit@vedicrituals.in' }
  },

  // INVITATION CARDS
  {
    id: 'card-craft-delhi',
    slug: 'card-craft-delhi',
    name: 'Card Craft Invitations',
    category: 'invitations',
    description: 'Designer wedding invitations with custom illustrations, letterpress printing, and luxury packaging. Digital invites also available.',
    shortDescription: 'Designer invitations with luxury packaging',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    location: 'Delhi',
    rating: 4.7,
    reviews: 145,
    priceRange: { min: 50, max: 500, unit: 'per card' },
    availability: ['2026-04-10', '2026-04-20', '2026-05-01', '2026-05-10'],
    services: ['Designer Cards', 'Box Invites', 'Digital Invites', 'Save the Dates', 'Thank You Cards'],
    featured: false,
    established: 2012,
    eventsCompleted: 800,
    contact: { phone: '+91 98765 43230', email: 'design@cardcraft.in' }
  }
];

const targetCountByCategory = {
  caterers: 10,
  decorators: 10,
  dj: 10,
  venues: 10,
  photography: 10,
  mehndi: 10,
  makeup: 10,
  pandit: 10,
  invitations: 10
};

const generatedCategoryConfig = {
  caterers: {
    brand: 'Celebration Caterers',
    description: 'Wedding catering team with regional menus, live counters, and trained banquet staff.',
    shortDescription: 'Regional menus with live counters and banquet staff',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    priceRange: { min: 650, max: 1700, unit: 'per plate' },
    priceStepMin: 35,
    priceStepMax: 50,
    services: ['Regional Menus', 'Live Counters', 'Dessert Bar', 'Mocktail Station', 'Service Team'],
    establishedBase: 2007,
    eventsBase: 220,
    ratingBase: 4.4,
    reviewsBase: 70,
    phoneBase: 9000001000,
    emailPrefix: 'caterers-'
  },
  decorators: {
    brand: 'Signature Wedding Decor',
    description: 'Full-service decor company focused on floral styling, stage concepts, and wedding ambiance design.',
    shortDescription: 'Floral styling, stage concepts, and theme decor',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    priceRange: { min: 120000, max: 700000, unit: 'per event' },
    priceStepMin: 12000,
    priceStepMax: 30000,
    services: ['Mandap Decor', 'Stage Setup', 'Floral Styling', 'Entry Arch', 'Lighting Design'],
    establishedBase: 2008,
    eventsBase: 180,
    ratingBase: 4.5,
    reviewsBase: 65,
    phoneBase: 9000002000,
    emailPrefix: 'decor-'
  },
  dj: {
    brand: 'Pulse DJ Collective',
    description: 'Wedding entertainment crew with DJs, lighting engineers, and dance-floor production support.',
    shortDescription: 'Wedding DJs with sound, lights, and production support',
    image: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    priceRange: { min: 45000, max: 190000, unit: 'per event' },
    priceStepMin: 6000,
    priceStepMax: 12000,
    services: ['DJ Set', 'Sound Setup', 'Lighting Rig', 'Dance Floor Effects', 'MC Support'],
    establishedBase: 2010,
    eventsBase: 240,
    ratingBase: 4.4,
    reviewsBase: 90,
    phoneBase: 9000003000,
    emailPrefix: 'dj-'
  },
  venues: {
    brand: 'Celebration Venue Collection',
    description: 'Premium wedding venue network offering indoor and outdoor celebration spaces for all scales.',
    shortDescription: 'Premium venue spaces for intimate and grand weddings',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    priceRange: { min: 600000, max: 2600000, unit: 'per day' },
    priceStepMin: 50000,
    priceStepMax: 120000,
    services: ['Banquet Halls', 'Open Lawns', 'Bridal Rooms', 'Parking', 'Coordination Desk'],
    establishedBase: 2005,
    eventsBase: 420,
    ratingBase: 4.5,
    reviewsBase: 110,
    phoneBase: 9000004000,
    emailPrefix: 'venues-'
  },
  photography: {
    brand: 'Moments Capture Studio',
    description: 'Wedding photography and film team covering candid moments, portraits, and full-event storytelling.',
    shortDescription: 'Candid photography and cinematic wedding films',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    priceRange: { min: 90000, max: 380000, unit: 'per event' },
    priceStepMin: 8000,
    priceStepMax: 18000,
    services: ['Candid Photography', 'Cinematic Film', 'Drone Shots', 'Pre-wedding Shoot', 'Album Design'],
    establishedBase: 2011,
    eventsBase: 210,
    ratingBase: 4.5,
    reviewsBase: 85,
    phoneBase: 9000005000,
    emailPrefix: 'photo-'
  },
  mehndi: {
    brand: 'Royal Mehndi Artists',
    description: 'Bridal mehndi specialists creating intricate traditional and contemporary henna patterns.',
    shortDescription: 'Intricate bridal mehndi with guest artist teams',
    image: 'https://images.unsplash.com/photo-1595907934615-a4d03f3e4c77?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1595907934615-a4d03f3e4c77?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    priceRange: { min: 9000, max: 42000, unit: 'per bride' },
    priceStepMin: 1000,
    priceStepMax: 2200,
    services: ['Bridal Mehndi', 'Guest Mehndi', 'Arabic Pattern', 'Rajasthani Pattern', 'Aftercare Kit'],
    establishedBase: 2006,
    eventsBase: 300,
    ratingBase: 4.5,
    reviewsBase: 72,
    phoneBase: 9000006000,
    emailPrefix: 'mehndi-'
  },
  makeup: {
    brand: 'Bridal Glow Studio',
    description: 'Professional bridal beauty team for makeup, hairstyling, draping, and touch-up support.',
    shortDescription: 'Bridal makeup, hairstyling, and draping services',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    priceRange: { min: 14000, max: 70000, unit: 'per look' },
    priceStepMin: 1500,
    priceStepMax: 3500,
    services: ['Bridal Makeup', 'Hair Styling', 'Draping', 'Trial Session', 'Party Makeup'],
    establishedBase: 2012,
    eventsBase: 170,
    ratingBase: 4.4,
    reviewsBase: 60,
    phoneBase: 9000007000,
    emailPrefix: 'makeup-'
  },
  pandit: {
    brand: 'Shubh Vedic Pandit Seva',
    description: 'Experienced priests for complete wedding rituals with regional language and custom samagri support.',
    shortDescription: 'Complete wedding rituals with custom samagri support',
    image: 'https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    priceRange: { min: 18000, max: 65000, unit: 'per ceremony' },
    priceStepMin: 1800,
    priceStepMax: 3200,
    services: ['Wedding Ceremony', 'Engagement Puja', 'Ganesh Sthapana', 'Havan', 'Samagri Arrangement'],
    establishedBase: 2001,
    eventsBase: 450,
    ratingBase: 4.5,
    reviewsBase: 55,
    phoneBase: 9000008000,
    emailPrefix: 'pandit-'
  },
  invitations: {
    brand: 'Elegant Invite Works',
    description: 'Invitation design house crafting premium wedding cards, boxed invites, and digital stationery.',
    shortDescription: 'Premium card design, boxed invites, and digital stationery',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?w=800&h=600&fit=crop'
    ],
    priceRange: { min: 45, max: 420, unit: 'per card' },
    priceStepMin: 6,
    priceStepMax: 10,
    services: ['Custom Cards', 'Box Invites', 'Digital Invite', 'Save the Date', 'Thank You Notes'],
    establishedBase: 2010,
    eventsBase: 260,
    ratingBase: 4.4,
    reviewsBase: 50,
    phoneBase: 9000009000,
    emailPrefix: 'invites-'
  }
};

const locationCycle = ['Delhi', 'Mumbai', 'Bangalore', 'Jaipur', 'Udaipur', 'Goa', 'Chennai', 'Jaisalmer', 'Lucknow', 'Moradabad'];

const availabilitySlots = ['2026-06-02', '2026-06-09', '2026-06-16', '2026-06-23', '2026-06-30', '2026-07-07', '2026-07-14', '2026-07-21'];

function toSlug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function buildAvailability(offset) {
  return [0, 2, 4, 6].map(step => availabilitySlots[(offset + step) % availabilitySlots.length]);
}

function formatPhone(phoneNumber) {
  const normalized = String(phoneNumber).slice(-10);
  return `+91 ${normalized.slice(0, 5)} ${normalized.slice(5)}`;
}

const generatedServices = Object.entries(targetCountByCategory).flatMap(([category, targetCount]) => {
  const existingCount = baseServices.filter(service => service.category === category).length;
  const missingCount = Math.max(targetCount - existingCount, 0);

  if (!missingCount) {
    return [];
  }

  const config = generatedCategoryConfig[category];

  return Array.from({ length: missingCount }, (_, index) => {
    const sequence = existingCount + index + 1;
    const location = locationCycle[(existingCount + index) % locationCycle.length];
    const slug = `${category}-${toSlug(location)}-${sequence}`;

    return {
      id: slug,
      slug,
      name: `${config.brand} ${location} ${sequence}`,
      category,
      description: `${config.description} Popular for dependable execution in ${location} and nearby wedding destinations.`,
      shortDescription: config.shortDescription,
      image: config.image,
      gallery: config.gallery,
      location,
      rating: Number((config.ratingBase + (index % 5) * 0.1).toFixed(1)),
      reviews: config.reviewsBase + sequence * 12,
      priceRange: {
        min: config.priceRange.min + index * config.priceStepMin,
        max: config.priceRange.max + index * config.priceStepMax,
        unit: config.priceRange.unit
      },
      availability: buildAvailability(existingCount + index),
      services: config.services,
      featured: sequence % 5 === 0,
      established: config.establishedBase + (index % 7),
      eventsCompleted: config.eventsBase + sequence * 30,
      contact: {
        phone: formatPhone(config.phoneBase + sequence),
        email: `${config.emailPrefix}${toSlug(location)}-${sequence}@shadisaj.in`
      }
    };
  });
});

export const services = [...baseServices, ...generatedServices];

// Helper functions
export function getServiceBySlug(slug) {
  return services.find(s => s.slug === slug);
}

export function getServicesByCategory(category) {
  if (!category || category === 'all') return services;
  return services.filter(s => s.category === category);
}

export function getFeaturedServices() {
  return services.filter(s => s.featured);
}

export function getServicesByLocation(location) {
  return services.filter(s => s.location.toLowerCase() === location.toLowerCase());
}

export function filterServices({ category, minBudget, maxBudget, location, availability }) {
  return services.filter(service => {
    // Category filter
    if (category && category !== 'all' && service.category !== category) {
      return false;
    }
    
    // Budget filter (check if price range overlaps with filter range)
    if (minBudget && service.priceRange.max < minBudget) {
      return false;
    }
    if (maxBudget && service.priceRange.min > maxBudget) {
      return false;
    }
    
    // Location filter
    if (location && location !== 'all' && service.location.toLowerCase() !== location.toLowerCase()) {
      return false;
    }
    
    // Availability filter
    if (availability && !service.availability.includes(availability)) {
      return false;
    }
    
    return true;
  });
}

export const locations = Array.from(new Set(services.map(service => service.location)));
