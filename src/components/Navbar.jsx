import { Link, useLocation } from 'react-router-dom';
import { Heart, ShoppingCart, Menu, X, Search, MapPin, Home, ShoppingBag, Calculator } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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
            <Link to="/vendor/products" className="text-text-primary hover:text-brand-interactive transition font-medium">Explore</Link>
            <Link to="/budget" className="text-text-primary hover:text-brand-interactive transition font-medium">Budget</Link>
            <Link to="/blogs" className="text-text-primary hover:text-brand-interactive transition font-medium">Blog</Link>
            <Link to="/about" className="text-text-primary hover:text-brand-interactive transition font-medium">About</Link>
            <Link to="/contact" className="text-text-primary hover:text-brand-interactive transition font-medium">Contact</Link>
            <div className="h-6 w-px bg-gray-300"></div>
            <Link to="/wishlist" className="relative hover:text-brand-interactive transition">
              <Heart className="w-5 h-5" />
            </Link>
            <Link to="/cart" className="relative hover:text-brand-interactive transition">
              <ShoppingCart className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile: search + icons */}
          <div className="flex md:hidden items-center space-x-3 ml-auto">
            <button><Search className="w-5 h-5 text-text-primary" /></button>
            <Link to="/wishlist" className="relative"><Heart className="w-5 h-5" /></Link>
            <Link to="/cart" className="relative"><ShoppingCart className="w-5 h-5" /></Link>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-background-card border-t border-utility-border/30 px-4 py-3 space-y-1">
            <Link to="/" className="block py-2 text-text-primary hover:text-brand-interactive font-medium" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/vendor/products" className="block py-2 text-text-primary hover:text-brand-interactive font-medium" onClick={() => setMenuOpen(false)}>Explore</Link>
            <Link to="/budget" className="block py-2 text-text-primary hover:text-brand-interactive font-medium" onClick={() => setMenuOpen(false)}>Budget Planner</Link>
            <Link to="/blogs" className="block py-2 text-text-primary hover:text-brand-interactive font-medium" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link to="/about" className="block py-2 text-text-primary hover:text-brand-interactive font-medium" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" className="block py-2 text-text-primary hover:text-brand-interactive font-medium" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </nav>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg border-t border-gray-200 z-50">
        <div className="flex justify-around items-center px-2 py-2">
          <Link to="/" className={`flex flex-col items-center text-xs transition ${location.pathname === '/' ? 'text-brand-interactive' : 'text-gray-500 hover:text-gray-700'}`}>
            <Home className="w-6 h-6 mb-1" />Home
          </Link>
          <Link to="/vendor/products" className={`flex flex-col items-center text-xs transition ${location.pathname.startsWith('/vendor') ? 'text-brand-interactive' : 'text-gray-500 hover:text-gray-700'}`}>
            <ShoppingBag className="w-6 h-6 mb-1" />Shop
          </Link>
          <Link to="/budget" className={`flex flex-col items-center text-xs transition ${location.pathname === '/budget' ? 'text-brand-interactive' : 'text-gray-500 hover:text-gray-700'}`}>
            <Calculator className="w-6 h-6 mb-1" />Budget
          </Link>
          <Link to="/wishlist" className={`flex flex-col items-center text-xs transition ${location.pathname === '/wishlist' ? 'text-brand-interactive' : 'text-gray-500 hover:text-gray-700'}`}>
            <Heart className="w-6 h-6 mb-1" />Wishlist
          </Link>
          <Link to="/cart" className={`flex flex-col items-center text-xs transition ${location.pathname === '/cart' ? 'text-brand-interactive' : 'text-gray-500 hover:text-gray-700'}`}>
            <ShoppingCart className="w-6 h-6 mb-1" />Cart
          </Link>
        </div>
      </nav>
    </>
  );
}