import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Trash2, MapPin, Phone, Calendar, IndianRupee, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { serviceCategories } from '../data/serviceCategories';

// Format price for display
function formatPrice(price) {
  if (price >= 10000000) return `${(price / 10000000).toFixed(1)} Cr`;
  if (price >= 100000) return `${(price / 100000).toFixed(1)} L`;
  if (price >= 1000) return `${(price / 1000).toFixed(0)}K`;
  return price.toString();
}

export default function Cart() {
  const { items, removeFromCart, clearCart, estimatedTotal } = useCart();

  // Empty state
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background-main pb-16 md:pb-0 flex flex-col items-center justify-center px-4">
        <div className="bg-background-card rounded-2xl shadow-xl border-2 border-utility-border/30 p-12 text-center max-w-md w-full">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-interactive/10 rounded-full mb-6">
            <ShoppingCart className="w-10 h-10 text-brand-interactive" />
          </div>
          <h1 className="text-2xl font-bold text-text-primary mb-3">Your Cart is Empty</h1>
          <p className="text-text-primary/70 mb-8">Add services from vendors to start planning your perfect wedding.</p>
          <Link to="/services"
            className="inline-flex items-center gap-2 bg-brand-interactive hover:bg-alternative-interactiveDark text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
            <ArrowLeft className="w-5 h-5" /> Browse Services
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
                <ShoppingCart className="w-8 h-8 text-brand-interactive" />
                My Cart
              </h1>
              <p className="text-text-primary/70 mt-1">{items.length} service{items.length !== 1 ? 's' : ''} selected</p>
            </div>
            <button
              onClick={clearCart}
              className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-red-50 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Clear Cart
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => {
              const categoryInfo = serviceCategories.find(c => c.id === item.category);

              return (
                <div key={item.id} className="bg-background-card rounded-2xl border-2 border-utility-border/30 p-4 md:p-6 flex flex-col md:flex-row gap-4">
                  {/* Image */}
                  <div className="w-full md:w-40 h-32 md:h-28 flex-shrink-0 rounded-xl overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-xs font-semibold text-brand-interactive bg-brand-interactive/10 px-2 py-1 rounded-full">
                          {categoryInfo?.name || item.category}
                        </span>
                        <Link 
                          to={`/services/${item.slug}`}
                          className="block mt-2 text-lg font-bold text-text-primary hover:text-brand-interactive transition-colors"
                        >
                          {item.name}
                        </Link>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors"
                        title="Remove from cart"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-4 mt-2 text-sm text-text-primary/60">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-utility-border/20">
                      <div className="text-lg font-bold text-brand-interactive">
                        ₹{formatPrice(item.priceRange?.min || 0)}
                        <span className="text-xs font-normal text-text-primary/50 ml-1">
                          {item.priceRange?.unit}
                        </span>
                      </div>
                      <Link
                        to={`/services/${item.slug}`}
                        className="text-sm font-semibold text-brand-interactive hover:text-alternative-interactiveDark"
                      >
                        View Details &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-background-card rounded-2xl border-2 border-utility-border/30 p-6 shadow-lg">
                <h2 className="text-xl font-bold text-text-primary mb-6">Order Summary</h2>
                
                {/* Items summary */}
                <div className="space-y-3 mb-6">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-text-primary/70 truncate flex-1 mr-4">{item.name}</span>
                      <span className="font-semibold text-text-primary">₹{formatPrice(item.priceRange?.min || 0)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-utility-border/20 pt-4 mb-6">
                  <div className="flex justify-between text-lg">
                    <span className="font-bold text-text-primary">Estimated Total</span>
                    <span className="font-bold text-brand-interactive">₹{formatPrice(estimatedTotal)}</span>
                  </div>
                  <p className="text-xs text-text-primary/50 mt-2">
                    * Final pricing will be confirmed by vendors based on your requirements
                  </p>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <a
                    href="tel:+918877777361"
                    className="w-full flex items-center justify-center gap-2 bg-brand-interactive hover:bg-alternative-interactiveDark text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Phone className="w-5 h-5" />
                    Contact to Book
                  </a>
                  <p className="text-center text-xs text-text-primary/60">
                    Call us to confirm availability and get personalized quotes
                  </p>
                </div>

                {/* Help text */}
                <div className="mt-6 pt-6 border-t border-utility-border/20">
                  <h3 className="font-semibold text-text-primary mb-2">What happens next?</h3>
                  <ul className="text-sm text-text-primary/70 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-brand-interactive/10 text-brand-interactive rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                      <span>Our team will contact you within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-brand-interactive/10 text-brand-interactive rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                      <span>We&apos;ll check vendor availability for your dates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-brand-interactive/10 text-brand-interactive rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                      <span>Receive customized quotes and book with confidence</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Continue shopping */}
              <div className="text-center mt-6">
                <Link 
                  to="/services"
                  className="inline-flex items-center gap-2 text-text-primary/70 hover:text-brand-interactive font-medium transition-colors"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Continue Browsing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
