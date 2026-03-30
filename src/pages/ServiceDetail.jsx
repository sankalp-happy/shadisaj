import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Star, MapPin, Heart, Phone, Mail, Calendar, Clock, 
  CheckCircle, ArrowLeft, Share2, ShoppingCart, Users
} from 'lucide-react';
import { getServiceBySlug } from '../data/services';
import { serviceCategories } from '../data/serviceCategories';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

// Format price for display
function formatPrice(price) {
  if (price >= 10000000) return `${(price / 10000000).toFixed(1)} Cr`;
  if (price >= 100000) return `${(price / 100000).toFixed(1)} L`;
  if (price >= 1000) return `${(price / 1000).toFixed(0)}K`;
  return price.toString();
}

// Format date for display
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-IN', { 
    day: 'numeric', 
    month: 'short', 
    year: 'numeric' 
  });
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart, isInCart } = useCart();

  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-background-main flex items-center justify-center px-4">
        <div className="bg-background-card rounded-2xl shadow-xl border-2 border-utility-border/30 p-12 text-center max-w-md w-full">
          <h1 className="text-2xl font-bold text-text-primary mb-3">Service Not Found</h1>
          <p className="text-text-primary/70 mb-8">The service you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-brand-interactive hover:bg-alternative-interactiveDark text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" /> Browse Services
          </Link>
        </div>
      </div>
    );
  }

  const categoryInfo = serviceCategories.find(c => c.id === service.category);

  const handleAddToCart = () => {
    addToCart(service);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: service.name,
          text: service.shortDescription,
          url: window.location.href,
        });
      } catch {
        // User cancelled or error
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-background-main pb-16 md:pb-0">
      {/* Breadcrumb */}
      <div className="bg-background-card border-b border-utility-border/20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-text-primary/60">
            <Link to="/" className="hover:text-brand-interactive transition">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-brand-interactive transition">Services</Link>
            <span>/</span>
            <Link to={`/services?category=${service.category}`} className="hover:text-brand-interactive transition">
              {categoryInfo?.name || service.category}
            </Link>
            <span>/</span>
            <span className="text-text-primary font-medium">{service.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={service.image} 
                alt={service.name}
                className="w-full h-64 md:h-96 object-cover"
              />
              {service.featured && (
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white text-sm font-semibold px-3 py-1.5 rounded-full">
                    Featured Vendor
                  </span>
                </div>
              )}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => toggleWishlist(service)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isInWishlist(service.id)
                      ? 'bg-brand-primary text-white'
                      : 'bg-white/90 text-text-primary hover:bg-brand-primary hover:text-white'
                  }`}
                >
                  <Heart className={`w-6 h-6 ${isInWishlist(service.id) ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={handleShare}
                  className="w-12 h-12 rounded-full bg-white/90 text-text-primary hover:bg-brand-interactive hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <Share2 className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Header info */}
            <div className="bg-background-card rounded-2xl border-2 border-utility-border/30 p-6">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{categoryInfo?.icon}</span>
                    <span className="bg-brand-interactive/10 text-brand-interactive text-sm font-semibold px-3 py-1 rounded-full">
                      {categoryInfo?.name || service.category}
                    </span>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-text-primary">{service.name}</h1>
                </div>
                <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-xl">
                  <Star className="w-6 h-6 text-green-600 fill-green-600" />
                  <div>
                    <span className="text-xl font-bold text-green-700">{service.rating}</span>
                    <p className="text-xs text-green-600">{service.reviews} reviews</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-text-primary/70 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-interactive" />
                  <span>{service.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand-interactive" />
                  <span>Since {service.established}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-brand-interactive" />
                  <span>{service.eventsCompleted}+ events</span>
                </div>
              </div>

              <p className="text-text-primary/80 leading-relaxed">{service.description}</p>
            </div>

            {/* Services offered */}
            <div className="bg-background-card rounded-2xl border-2 border-utility-border/30 p-6">
              <h2 className="text-xl font-bold text-text-primary mb-4">Services Offered</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {service.services.map((svc, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 bg-background-main rounded-xl px-4 py-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-text-primary">{svc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-background-card rounded-2xl border-2 border-utility-border/30 p-6">
              <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-brand-interactive" />
                Available Dates
              </h2>
              <div className="flex flex-wrap gap-3">
                {service.availability.map((date, idx) => (
                  <div 
                    key={idx}
                    className="bg-green-50 border border-green-200 rounded-xl px-4 py-2 text-sm font-medium text-green-700"
                  >
                    {formatDate(date)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-text-primary/60 mt-4">
                * More dates may be available. Contact the vendor for specific date inquiries.
              </p>
            </div>
          </div>

          {/* Sidebar - Booking card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Price card */}
              <div className="bg-background-card rounded-2xl border-2 border-utility-border/30 p-6 shadow-lg">
                <div className="mb-6">
                  <span className="text-sm text-text-primary/60">Starting from</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-brand-interactive">
                      ₹{formatPrice(service.priceRange.min)}
                    </span>
                    <span className="text-text-primary/60">- ₹{formatPrice(service.priceRange.max)}</span>
                  </div>
                  <span className="text-sm text-text-primary/60">{service.priceRange.unit}</span>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleAddToCart}
                    disabled={isInCart(service.id)}
                    className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      isInCart(service.id)
                        ? 'bg-green-100 text-green-700 border-2 border-green-200'
                        : 'bg-brand-interactive hover:bg-alternative-interactiveDark text-white shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {isInCart(service.id) ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => toggleWishlist(service)}
                    className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold border-2 transition-all duration-300 ${
                      isInWishlist(service.id)
                        ? 'bg-brand-primary/10 border-brand-primary text-brand-primary'
                        : 'border-utility-border/30 text-text-primary hover:border-brand-primary hover:text-brand-primary'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isInWishlist(service.id) ? 'fill-current' : ''}`} />
                    {isInWishlist(service.id) ? 'Saved to Wishlist' : 'Save to Wishlist'}
                  </button>
                </div>
              </div>

              {/* Contact card */}
              <div className="bg-background-card rounded-2xl border-2 border-utility-border/30 p-6">
                <h3 className="font-bold text-text-primary mb-4">Contact Vendor</h3>
                <div className="space-y-3">
                  <a
                    href={`tel:${service.contact.phone}`}
                    className="flex items-center gap-3 bg-green-50 hover:bg-green-100 rounded-xl px-4 py-3 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-xs text-green-600">Call Now</p>
                      <p className="font-semibold text-green-700">{service.contact.phone}</p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${service.contact.email}`}
                    className="flex items-center gap-3 bg-blue-50 hover:bg-blue-100 rounded-xl px-4 py-3 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-xs text-blue-600">Email</p>
                      <p className="font-semibold text-blue-700 text-sm">{service.contact.email}</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Back button */}
              <button
                onClick={() => navigate(-1)}
                className="w-full flex items-center justify-center gap-2 text-text-primary/70 hover:text-brand-interactive font-medium transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
