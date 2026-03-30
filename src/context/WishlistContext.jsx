import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const WISHLIST_KEY = 'shadisaj_wishlist';

// Helper to load from localStorage
function loadWishlist() {
  try {
    const saved = localStorage.getItem(WISHLIST_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  // Use lazy initialization
  const [items, setItems] = useState(() => loadWishlist());

  // Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(items));
  }, [items]);

  const addToWishlist = useCallback((service) => {
    setItems(prev => {
      // Check if already in wishlist
      if (prev.find(item => item.id === service.id)) {
        return prev;
      }
      return [...prev, {
        id: service.id,
        slug: service.slug,
        name: service.name,
        category: service.category,
        image: service.image,
        location: service.location,
        rating: service.rating,
        priceRange: service.priceRange,
        shortDescription: service.shortDescription,
        addedAt: new Date().toISOString()
      }];
    });
  }, []);

  const removeFromWishlist = useCallback((serviceId) => {
    setItems(prev => prev.filter(item => item.id !== serviceId));
  }, []);

  const isInWishlist = useCallback((serviceId) => {
    return items.some(item => item.id === serviceId);
  }, [items]);

  const toggleWishlist = useCallback((service) => {
    if (items.some(item => item.id === service.id)) {
      setItems(prev => prev.filter(item => item.id !== service.id));
    } else {
      setItems(prev => [...prev, {
        id: service.id,
        slug: service.slug,
        name: service.name,
        category: service.category,
        image: service.image,
        location: service.location,
        rating: service.rating,
        priceRange: service.priceRange,
        shortDescription: service.shortDescription,
        addedAt: new Date().toISOString()
      }]);
    }
  }, [items]);

  const clearWishlist = useCallback(() => {
    setItems([]);
  }, []);

  const value = {
    items,
    count: items.length,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    toggleWishlist,
    clearWishlist
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
