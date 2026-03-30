import { Link, useLocation } from 'react-router-dom';
import { Heart, ShoppingCart, Menu, X, Search, MapPin, Home, ShoppingBag, Calculator, User, LogOut, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();
  const { count: wishlistCount } = useWishlist();
  const { count: cartCount } = useCart();

  const handleLogout = () => {
    logout();
    setProfileOpen(false);
  };

  return (
    <>
      <nav className="bg-background-main text-text-primary shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center">
          {/* Mobile hamburger */}
          <div className="flex items-center">
            <div className="md:hidden mr-3 mt-0.5">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen
                  ? <X className="w-5 h-5 text-text-primary" />
                  : <Menu className="w-5 h-5 text-text-primary" />}
              </button>
            </div>
            {/* Logo */}
            <div className="flex-1 md:flex-none">
              <Link to="/" className="text-2xl md:text-3xl font-bold text-brand-logo inline-block tracking-wide font-logo">
                Shadisaj
              </Link>
            </div>
          </div>

          {/* Desktop: location + search */}
          <div className="hidden md:flex items-center space-x-4 ml-8 flex-1 max-w-2xl">
            <div className="relative">
              <button className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                <MapPin className="w-4 h-4 text-brand-interactive" />
                <span className="text-sm font-medium">Delhi</span>
              </button>
            </div>
            <div className="flex-1 relative">
              <form className="relative">
                <input
                  type="text"
                  placeholder="Search vendors, venues, services..."
                  className="w-full px-4 py-2 pl-10 bg-white rounded-lg shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-interactive focus:border-transparent transition"
                  autoComplete="off"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </form>
            </div>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            <Link to="/services" className="text-text-primary hover:text-brand-interactive transition font-medium flex items-center gap-1">
              <Sparkles className="w-4 h-4" />
              Services
            </Link>
            <Link to="/vendor/products" className="text-text-primary hover:text-brand-interactive transition font-medium">Products</Link>
            <Link to="/budget" className="text-text-primary hover:text-brand-interactive transition font-medium">Budget</Link>
            <Link to="/blogs" className="text-text-primary hover:text-brand-interactive transition font-medium">Blog</Link>
            <div className="h-6 w-px bg-gray-300"></div>
            
            {/* Wishlist with badge */}
            <Link to="/wishlist" className="relative hover:text-brand-interactive transition">
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-brand-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {wishlistCount > 9 ? '9+' : wishlistCount}
                </span>
              )}
            </Link>
            
            {/* Cart with badge */}
            <Link to="/cart" className="relative hover:text-brand-interactive transition">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-brand-interactive text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </Link>

            {/* Auth section */}
            {isAuthenticated ? (
              <div className="relative">
                <button 
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 bg-brand-interactive/10 hover:bg-brand-interactive/20 text-brand-interactive px-3 py-2 rounded-xl transition-colors"
                >
                  <div className="w-8 h-8 bg-brand-interactive text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    {user?.name?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <span className="font-medium hidden lg:block">{user?.name?.split(' ')[0]}</span>
                </button>
                
                {/* Profile dropdown */}
                {profileOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setProfileOpen(false)} />
                    <div className="absolute right-0 mt-2 w-56 bg-background-card rounded-xl shadow-xl border-2 border-utility-border/30 py-2 z-50">
                      <div className="px-4 py-3 border-b border-utility-border/20">
                        <p className="font-semibold text-text-primary">{user?.name}</p>
                        <p className="text-sm text-text-primary/60">{user?.email}</p>
                      </div>
                      <Link 
                        to="/wishlist" 
                        className="flex items-center gap-3 px-4 py-2 hover:bg-background-main transition-colors"
                        onClick={() => setProfileOpen(false)}
                      >
                        <Heart className="w-4 h-4" />
                        <span>My Wishlist</span>
                        {wishlistCount > 0 && (
                          <span className="ml-auto bg-brand-primary/10 text-brand-primary text-xs font-semibold px-2 py-0.5 rounded-full">
                            {wishlistCount}
                          </span>
                        )}
                      </Link>
                      <Link 
                        to="/cart" 
                        className="flex items-center gap-3 px-4 py-2 hover:bg-background-main transition-colors"
                        onClick={() => setProfileOpen(false)}
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>My Cart</span>
                        {cartCount > 0 && (
                          <span className="ml-auto bg-brand-interactive/10 text-brand-interactive text-xs font-semibold px-2 py-0.5 rounded-full">
                            {cartCount}
                          </span>
                        )}
                      </Link>
                      <div className="border-t border-utility-border/20 mt-2 pt-2">
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-3 px-4 py-2 w-full text-left text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <Link 
                to="/login"
                className="flex items-center gap-2 bg-brand-interactive hover:bg-alternative-interactiveDark text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300"
              >
                <User className="w-4 h-4" />
                Login
              </Link>
            )}
          </div>

          {/* Mobile: search + icons */}
          <div className="flex md:hidden items-center space-x-3 ml-auto">
            <button><Search className="w-5 h-5 text-text-primary" /></button>
            <Link to="/wishlist" className="relative">
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {wishlistCount > 9 ? '9+' : wishlistCount}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-interactive text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-background-card border-t border-utility-border/30 px-4 py-3 space-y-1">
            <Link to="/" className="block py-2 text-text-primary hover:text-brand-interactive font-medium" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/services" className="block py-2 text-text-primary hover:text-brand-interactive font-medium flex items-center gap-2" onClick={() => setMenuOpen(false)}>
              <Sparkles className="w-4 h-4" />
              Services
            </Link>
            <Link to="/vendor/products" className="block py-2 text-text-primary hover:text-brand-interactive font-medium" onClick={() => setMenuOpen(false)}>Products</Link>
            <Link to="/budget" className="block py-2 text-text-primary hover:text-brand-interactive font-medium" onClick={() => setMenuOpen(false)}>Budget Planner</Link>
            <Link to="/blogs" className="block py-2 text-text-primary hover:text-brand-interactive font-medium" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link to="/about" className="block py-2 text-text-primary hover:text-brand-interactive font-medium" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" className="block py-2 text-text-primary hover:text-brand-interactive font-medium" onClick={() => setMenuOpen(false)}>Contact</Link>
            
            <div className="border-t border-utility-border/30 pt-3 mt-3">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center gap-3 py-2">
                    <div className="w-10 h-10 bg-brand-interactive text-white rounded-full flex items-center justify-center font-semibold">
                      {user?.name?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary">{user?.name}</p>
                      <p className="text-sm text-text-primary/60">{user?.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => { handleLogout(); setMenuOpen(false); }}
                    className="flex items-center gap-2 py-2 text-red-600 font-medium w-full"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </>
              ) : (
                <Link 
                  to="/login" 
                  className="flex items-center justify-center gap-2 bg-brand-interactive text-white py-3 rounded-xl font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  <User className="w-4 h-4" />
                  Login / Register
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg border-t border-gray-200 z-50">
        <div className="flex justify-around items-center px-2 py-2">
          <Link to="/" className={`flex flex-col items-center text-xs transition ${location.pathname === '/' ? 'text-brand-interactive' : 'text-gray-500 hover:text-gray-700'}`}>
            <Home className="w-6 h-6 mb-1" />Home
          </Link>
          <Link to="/services" className={`flex flex-col items-center text-xs transition ${location.pathname.startsWith('/services') ? 'text-brand-interactive' : 'text-gray-500 hover:text-gray-700'}`}>
            <Sparkles className="w-6 h-6 mb-1" />Services
          </Link>
          <Link to="/budget" className={`flex flex-col items-center text-xs transition ${location.pathname === '/budget' ? 'text-brand-interactive' : 'text-gray-500 hover:text-gray-700'}`}>
            <Calculator className="w-6 h-6 mb-1" />Budget
          </Link>
          <Link to="/wishlist" className={`flex flex-col items-center text-xs transition relative ${location.pathname === '/wishlist' ? 'text-brand-interactive' : 'text-gray-500 hover:text-gray-700'}`}>
            <Heart className="w-6 h-6 mb-1" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 right-1 w-4 h-4 bg-brand-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                {wishlistCount > 9 ? '9+' : wishlistCount}
              </span>
            )}
            Wishlist
          </Link>
          <Link to="/cart" className={`flex flex-col items-center text-xs transition relative ${location.pathname === '/cart' ? 'text-brand-interactive' : 'text-gray-500 hover:text-gray-700'}`}>
            <ShoppingCart className="w-6 h-6 mb-1" />
            {cartCount > 0 && (
              <span className="absolute -top-1 right-1 w-4 h-4 bg-brand-interactive text-white text-xs font-bold rounded-full flex items-center justify-center">
                {cartCount > 9 ? '9+' : cartCount}
              </span>
            )}
            Cart
          </Link>
        </div>
      </nav>
    </>
  );
}
