import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, MapPin, Heart, SlidersHorizontal, X, Search, IndianRupee, Calendar } from 'lucide-react';
import { filterServices, locations } from '../data/services';
import { serviceCategories } from '../data/serviceCategories';
import { useWishlist } from '../context/WishlistContext';

// Format price for display
function formatPrice(price) {
  if (price >= 10000000) return `${(price / 10000000).toFixed(1)}Cr`;
  if (price >= 100000) return `${(price / 100000).toFixed(1)}L`;
  if (price >= 1000) return `${(price / 1000).toFixed(0)}K`;
  return price.toString();
}

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('recommended');
  const { isInWishlist, toggleWishlist } = useWishlist();

  // Get filter values from URL
  const activeCategory = searchParams.get('category') || 'all';
  const activeLocation = searchParams.get('location') || 'all';
  const activeEventType = searchParams.get('eventType') || 'all';
  const activeGuests = searchParams.get('guests') || 'all';
  const minBudget = searchParams.get('minBudget') ? parseInt(searchParams.get('minBudget')) : null;
  const maxBudget = searchParams.get('maxBudget') ? parseInt(searchParams.get('maxBudget')) : null;

  // Budget presets
  const budgetPresets = [
    { label: 'All Budgets', min: null, max: null },
    { label: 'Under 50K', min: null, max: 50000 },
    { label: '50K - 2L', min: 50000, max: 200000 },
    { label: '2L - 5L', min: 200000, max: 500000 },
    { label: '5L+', min: 500000, max: null },
  ];

  // Filter services
  const filteredServices = useMemo(() => {
    let result = filterServices({
      category: activeCategory,
      minBudget,
      maxBudget,
      location: activeLocation
    });

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(s => 
        s.name.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query) ||
        s.services.some(svc => svc.toLowerCase().includes(query))
      );
    }
    
    // Apply sorting
    if (sortOrder === 'price-asc') {
      result.sort((a, b) => a.priceRange.min - b.priceRange.min);
    } else if (sortOrder === 'price-desc') {
      result.sort((a, b) => b.priceRange.min - a.priceRange.min);
    } else if (sortOrder === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, activeLocation, minBudget, maxBudget, searchQuery, sortOrder]);

  // Update filters
  const setCategory = (slug) => {
    const params = new URLSearchParams(searchParams);
    if (slug === 'all') {
      params.delete('category');
    } else {
      params.set('category', slug);
    }
    setSearchParams(params);
    setSidebarOpen(false);
  };

  const setLocation = (loc) => {
    const params = new URLSearchParams(searchParams);
    if (loc === 'all') {
      params.delete('location');
    } else {
      params.set('location', loc);
    }
    setSearchParams(params);
  };

  const setEventType = (type) => {
    const params = new URLSearchParams(searchParams);
    if (type === 'all') {
      params.delete('eventType');
    } else {
      params.set('eventType', type);
    }
    setSearchParams(params);
  };

  const setGuests = (count) => {
    const params = new URLSearchParams(searchParams);
    if (count === 'all') {
      params.delete('guests');
    } else {
      params.set('guests', count);
    }
    setSearchParams(params);
  };

  const setBudget = (min, max) => {
    const params = new URLSearchParams(searchParams);
    if (min) {
      params.set('minBudget', min.toString());
    } else {
      params.delete('minBudget');
    }
    if (max) {
      params.set('maxBudget', max.toString());
    } else {
      params.delete('maxBudget');
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSearchQuery('');
  };

  const activeCategoryName = activeCategory === 'all' 
    ? 'All Services' 
    : serviceCategories.find(c => c.id === activeCategory)?.name || 'All Services';

  const hasActiveFilters = activeCategory !== 'all' || activeLocation !== 'all' || activeEventType !== 'all' || activeGuests !== 'all' || minBudget || maxBudget;

  return (
    <div className="min-h-screen bg-background-main pb-16 md:pb-0">
      {/* Page header */}
      <div className="bg-background-card border-b-2 border-utility-border/30 py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-text-primary">Wedding Services</h1>
              <p className="text-text-primary/70 mt-1">Find the perfect vendors for your special day</p>
            </div>
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative flex-1 md:w-64">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border-2 border-utility-border/30 rounded-xl bg-background-main text-text-primary focus:outline-none focus:border-brand-interactive transition-colors"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-primary/50" />
              </div>
              
              {/* Sort Dropdown */}
              <div className="relative hidden md:block">
                <select 
                  value={sortOrder} 
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="pl-4 pr-10 py-2 border-2 border-utility-border/30 rounded-xl bg-background-main text-text-primary focus:outline-none focus:border-brand-interactive transition-colors appearance-none font-medium"
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-primary/50">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>

              {/* Mobile filter toggle */}
              <button
                className="md:hidden flex items-center gap-2 bg-brand-interactive text-white px-4 py-2 rounded-xl font-semibold text-sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <SlidersHorizontal className="w-4 h-4" />Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className={`
            fixed inset-y-0 left-0 z-40 w-72 bg-background-card border-r-2 border-utility-border/30 transform transition-transform duration-300 md:static md:transform-none md:w-64 md:flex-shrink-0 overflow-y-auto
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}>
            <div className="flex items-center justify-between p-4 border-b border-utility-border/20 md:hidden">
              <h3 className="font-bold text-text-primary">Filters</h3>
              <button onClick={() => setSidebarOpen(false)}><X className="w-5 h-5" /></button>
            </div>
            
            <div className="p-4 space-y-6">
              {/* Clear filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="w-full text-sm text-brand-interactive hover:text-alternative-interactiveDark font-medium flex items-center justify-center gap-2 py-2 border border-brand-interactive/30 rounded-xl hover:bg-brand-interactive/5 transition-colors"
                >
                  <X className="w-4 h-4" /> Clear All Filters
                </button>
              )}

              {/* Categories */}
              <div>
                <h3 className="text-xs font-bold text-text-primary/50 uppercase tracking-wider mb-3">Categories</h3>
                <button
                  onClick={() => setCategory('all')}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all mb-1
                    ${activeCategory === 'all'
                      ? 'bg-brand-interactive text-white shadow-sm'
                      : 'text-text-primary hover:bg-brand-interactive/10 hover:text-brand-interactive'
                    }`}
                >
                  All Services
                </button>
                {serviceCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all mb-1 flex items-center gap-2
                      ${activeCategory === cat.id
                        ? 'bg-brand-interactive text-white shadow-sm'
                        : 'text-text-primary hover:bg-brand-interactive/10 hover:text-brand-interactive'
                      }`}
                  >
                    <span>{cat.icon}</span> {cat.name}
                  </button>
                ))}
              </div>

              {/* Location */}
              <div>
                <h3 className="text-xs font-bold text-text-primary/50 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Location
                </h3>
                <select
                  value={activeLocation}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl text-sm font-medium border-2 border-utility-border/30 bg-background-main text-text-primary focus:outline-none focus:border-brand-interactive transition-colors"
                >
                  <option value="all">All Locations</option>
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              {/* Event Type */}
              <div>
                <h3 className="text-xs font-bold text-text-primary/50 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Event Type
                </h3>
                <select
                  value={activeEventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl text-sm font-medium border-2 border-utility-border/30 bg-background-main text-text-primary focus:outline-none focus:border-brand-interactive transition-colors"
                >
                  <option value="all">All Events</option>
                  <option value="wedding">Wedding</option>
                  <option value="pre-wedding">Pre-Wedding / Haldi</option>
                  <option value="reception">Reception</option>
                  <option value="engagement">Engagement</option>
                </select>
              </div>

              {/* Guests */}
              <div>
                <h3 className="text-xs font-bold text-text-primary/50 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-4 h-4 inline-flex items-center justify-center">👥</span> No. of Guests
                </h3>
                <select
                  value={activeGuests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl text-sm font-medium border-2 border-utility-border/30 bg-background-main text-text-primary focus:outline-none focus:border-brand-interactive transition-colors"
                >
                  <option value="all">Any Guest Count</option>
                  <option value="under-100">Under 100</option>
                  <option value="100-300">100 - 300</option>
                  <option value="300-500">300 - 500</option>
                  <option value="500+">500+</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <h3 className="text-xs font-bold text-text-primary/50 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <IndianRupee className="w-4 h-4" /> Budget
                </h3>
                <div className="space-y-1">
                  {budgetPresets.map((preset, idx) => {
                    const isActive = minBudget === preset.min && maxBudget === preset.max;
                    return (
                      <button
                        key={idx}
                        onClick={() => setBudget(preset.min, preset.max)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-all
                          ${isActive
                            ? 'bg-brand-interactive text-white shadow-sm'
                            : 'text-text-primary hover:bg-brand-interactive/10 hover:text-brand-interactive'
                          }`}
                      >
                        {preset.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Sort */}
              <div className="md:hidden">
                <h3 className="text-xs font-bold text-text-primary/50 uppercase tracking-wider mb-3">Sort By</h3>
                <select 
                  value={sortOrder} 
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl text-sm font-medium border-2 border-utility-border/30 bg-background-main text-text-primary focus:outline-none focus:border-brand-interactive transition-colors"
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Overlay for mobile */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-30 bg-black/50 md:hidden" onClick={() => setSidebarOpen(false)} />
          )}

          {/* Main content */}
          <main className="flex-1 min-w-0">
            {/* Results header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-text-primary">{activeCategoryName}</h2>
                <p className="text-sm text-text-primary/60">{filteredServices.length} services found</p>
              </div>
            </div>

            {/* Service cards grid */}
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map(service => (
                  <div key={service.id} className="bg-background-card rounded-2xl border-2 border-utility-border/30 overflow-hidden hover:border-brand-interactive hover:shadow-xl transition-all duration-300 group">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Wishlist button */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleWishlist(service);
                        }}
                        className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isInWishlist(service.id)
                            ? 'bg-brand-primary text-white'
                            : 'bg-white/90 text-text-primary hover:bg-brand-primary hover:text-white'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${isInWishlist(service.id) ? 'fill-current' : ''}`} />
                      </button>
                      {/* Category badge */}
                      <div className="absolute bottom-3 left-3">
                        <span className="bg-brand-interactive text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {serviceCategories.find(c => c.id === service.category)?.name || service.category}
                        </span>
                      </div>
                      {/* Featured badge */}
                      {service.featured && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-text-primary group-hover:text-brand-interactive transition-colors">
                          {service.name}
                        </h3>
                        <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-lg">
                          <Star className="w-4 h-4 text-green-600 fill-green-600" />
                          <span className="text-sm font-bold text-green-700">{service.rating}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-text-primary/60 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>{service.location}</span>
                        <span className="text-text-primary/30">|</span>
                        <span>{service.reviews} reviews</span>
                      </div>

                      <p className="text-sm text-text-primary/70 mb-4 line-clamp-2">
                        {service.shortDescription}
                      </p>

                      {/* Price */}
                      <div className="flex items-center justify-between pt-4 border-t border-utility-border/20">
                        <div>
                          <span className="text-xs text-text-primary/50">Starting from</span>
                          <div className="text-lg font-bold text-brand-interactive">
                            ₹{formatPrice(service.priceRange.min)}
                            <span className="text-xs font-normal text-text-primary/50 ml-1">
                              {service.priceRange.unit}
                            </span>
                          </div>
                        </div>
                        <Link
                          to={`/services/${service.slug}`}
                          className="bg-brand-interactive hover:bg-alternative-interactiveDark text-white px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Empty state */
              <div className="bg-background-card rounded-2xl border-2 border-utility-border/30 p-12 md:p-20 text-center">
                <div className="w-20 h-20 bg-brand-interactive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-brand-interactive" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-3">No Services Found</h3>
                <p className="text-text-primary/70 mb-8 max-w-md mx-auto leading-relaxed">
                  We couldn&apos;t find any services matching your filters. Try adjusting your search criteria or browse all categories.
                </p>
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center justify-center gap-2 bg-brand-interactive text-white px-6 py-3 rounded-2xl font-semibold hover:bg-alternative-interactiveDark transition-all duration-300 shadow-md"
                >
                  <X className="w-5 h-5" /> Clear Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
