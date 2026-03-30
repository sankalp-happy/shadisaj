import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

const CART_KEY = 'shadisaj_cart';

// Helper to load from localStorage
function loadCart() {
  try {
    const saved = localStorage.getItem(CART_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

const CartContext = createContext(null);

export function CartProvider({ children }) {
  // Use lazy initialization
  const [items, setItems] = useState(() => loadCart());

  // Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = useCallback((service, options = {}) => {
    setItems(prev => {
      // Check if already in cart
      const existingIndex = prev.findIndex(item => item.id === service.id);
      if (existingIndex !== -1) {
        // Update existing item
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          ...options,
          updatedAt: new Date().toISOString()
        };
        return updated;
      }
      
      // Add new item
      return [...prev, {
        id: service.id,
        slug: service.slug,
        name: service.name,
        category: service.category,
        image: service.image,
        location: service.location,
        priceRange: service.priceRange,
        shortDescription: service.shortDescription,
        selectedDate: options.selectedDate || null,
        notes: options.notes || '',
        addedAt: new Date().toISOString()
      }];
    });
  }, []);

  const removeFromCart = useCallback((serviceId) => {
    setItems(prev => prev.filter(item => item.id !== serviceId));
  }, []);

  const isInCart = useCallback((serviceId) => {
    return items.some(item => item.id === serviceId);
  }, [items]);

  const updateCartItem = useCallback((serviceId, updates) => {
    setItems(prev => prev.map(item => 
      item.id === serviceId 
        ? { ...item, ...updates, updatedAt: new Date().toISOString() }
        : item
    ));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const getCartItem = useCallback((serviceId) => {
    return items.find(item => item.id === serviceId);
  }, [items]);

  // Calculate estimated total (using minimum prices)
  const estimatedTotal = useMemo(() => {
    return items.reduce((total, item) => {
      return total + (item.priceRange?.min || 0);
    }, 0);
  }, [items]);

  const value = {
    items,
    count: items.length,
    estimatedTotal,
    addToCart,
    removeFromCart,
    isInCart,
    updateCartItem,
    clearCart,
    getCartItem
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
