import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, Star, MapPin, ShoppingCart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { serviceCategories } from '../data/serviceCategories';

// Format price for display
function formatPrice(price) {
  if (price >= 10000000) return `${(price / 10000000).toFixed(1)}Cr`;
  if (price >= 100000) return `${(price / 100000).toFixed(1)}L`;
  if (price >= 1000) return `${(price / 1000).toFixed(0)}K`;
  return price.toString();
}

export default function Wishlist() {
  const { items, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart, isInCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  // Empty state
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background-main pb-16 md:pb-0 flex flex-col items-center justify-center px-4">
        <div className="bg-background-card rounded-2xl shadow-xl border-2 border-utility-border/30 p-12 text-center max-w-md w-full">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-interactive/10 rounded-full mb-6">
            <Heart className="w-10 h-10 text-brand-interactive" />
          </div>
          <h1 className="text-2xl font-bold text-text-primary mb-3">Your Wishlist is Empty</h1>
          <p className="text-text-primary/70 mb-8">Save vendors and services you love for later. Start exploring!</p>
          <Link to="/services"
            className="inline-flex items-center gap-2 bg-brand-interactive hover:bg-alternative-interactiveDark text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
            <ShoppingBag className="w-5 h-5" /> Explore Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-main pb-16 md:pb-0">
      {/* Header */}
      <div className="bg-background-card border-b-2 border-utility-border/30 py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-text-primary flex items-center gap-3">
                <Heart className="w-8 h-8 text-brand-primary" />
                My Wishlist
              </h1>
              <p className="text-text-primary/70 mt-1">{items.length} saved item{items.length !== 1 ? 's' : ''}</p>
            </div>
            <button
              onClick={clearWishlist}
              className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-red-50 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Clear All
            </button>
          </div>
        </div>
      </div>

      {/* Items grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(item => {
            const categoryInfo = serviceCategories.find(c => c.id === item.category);
            const inCart = isInCart(item.id);

            return (
              <div key={item.id} className="bg-background-card rounded-2xl border-2 border-utility-border/30 overflow-hidden hover:border-brand-interactive hover:shadow-xl transition-all duration-300 group">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Remove button */}
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 hover:bg-red-50 text-red-500 flex items-center justify-center transition-all duration-300"
                    title="Remove from wishlist"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                  {/* Category badge */}
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-brand-interactive text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {categoryInfo?.name || item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <Link 
                      to={`/services/${item.slug}`}
                      className="text-lg font-bold text-text-primary group-hover:text-brand-interactive transition-colors"
                    >
                      {item.name}
                    </Link>
                    {item.rating && (
                      <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-lg">
                        <Star className="w-4 h-4 text-green-600 fill-green-600" />
                        <span className="text-sm font-bold text-green-700">{item.rating}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-text-primary/60 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>

                  <p className="text-sm text-text-primary/70 mb-4 line-clamp-2">
                    {item.shortDescription}
                  </p>

                  {/* Price & Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-utility-border/20">
                    <div>
                      <span className="text-xs text-text-primary/50">Starting from</span>
                      <div className="text-lg font-bold text-brand-interactive">
                        ₹{formatPrice(item.priceRange?.min || 0)}
                      </div>
                    </div>
                    <button
                      onClick={() => handleAddToCart(item)}
                      disabled={inCart}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
                        inCart
                          ? 'bg-green-100 text-green-700'
                          : 'bg-brand-interactive hover:bg-alternative-interactiveDark text-white'
                      }`}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      {inCart ? 'In Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Continue shopping */}
        <div className="text-center mt-10">
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 text-brand-interactive hover:text-alternative-interactiveDark font-semibold transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            Continue Browsing Services
          </Link>
        </div>
      </div>
    </div>
  );
}
