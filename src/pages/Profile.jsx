import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { 
  Heart, 
  ShoppingCart, 
  Package, 
  FileText, 
  HelpCircle, 
  Shield, 
  Mail, 
  Phone, 
  Star, 
  LogOut, 
  ChevronRight,
  MapPin
} from 'lucide-react';

export default function Profile() {
  const { user, isAuthenticated, logout } = useAuth();
  const { count: wishlistCount } = useWishlist();
  const { count: cartCount } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[calc(100vh-64px)] bg-background-main flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md text-center">
          <h1 className="text-4xl md:text-5xl text-brand-logo mb-2 font-logo italic">Welcome Back!</h1>
          <p className="text-text-primary text-lg mb-8">Sign in to continue planning your dream wedding</p>

          <div className="bg-background-card rounded-3xl p-8 shadow-sm border border-utility-border/10 mb-8">
            <Link 
              to="/login"
              className="flex items-center justify-center gap-3 w-full border border-gray-300 rounded-xl py-3 px-4 hover:bg-gray-50 transition-colors mb-6"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span className="font-semibold text-gray-700">Continue with Google</span>
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-px bg-gray-200 flex-1"></div>
              <span className="text-gray-400 text-sm">More options coming soon</span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>

            <p className="text-sm text-gray-500">
              By signing in, you agree to our <Link to="/terms/tos" className="text-brand-primary hover:underline">Terms of Service</Link> and <Link to="/terms/privacy-policy" className="text-brand-primary hover:underline">Privacy Policy</Link>
            </p>
          </div>

          <p className="text-text-primary">
            New to Shadisaj? <Link to="/services" className="text-brand-primary font-semibold hover:underline">Explore our services</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-main pb-24 md:pb-12">
      {/* Top Banner section */}
      <div className="relative bg-gradient-to-b from-[#6b4c3a] to-[#8b654e] pt-12 pb-24 px-4 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 bg-brand-interactive rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg ring-4 ring-white/20 mb-4">
            {user?.name?.charAt(0).toUpperCase() || 'U'}
          </div>
          <h2 className="text-2xl font-bold text-white mb-1">{user?.name || 'User'}</h2>
          <p className="text-white/80 border-b border-white/30 pb-1 inline-block">{user?.email || 'user@example.com'}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl -mt-10 relative z-20">
        {/* Stats Strip */}
        <div className="bg-background-card rounded-2xl shadow-md border border-utility-border/10 p-4 flex justify-between items-center text-center mb-6">
          <div className="flex-1 border-r border-gray-100">
            <p className="text-xl font-bold text-text-primary mb-1">0</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Orders</p>
          </div>
          <div className="flex-1 border-r border-gray-100">
            <p className="text-xl font-bold text-text-primary mb-1">{wishlistCount}</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Wishlist</p>
          </div>
          <div className="flex-1">
            <p className="text-xl font-bold text-text-primary mb-1">{cartCount}</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Cart</p>
          </div>
        </div>

        {/* My Activity */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 pl-2">My Activity</h3>
          <div className="bg-background-card rounded-2xl shadow-sm border border-utility-border/10 overflow-hidden">
            <Link to="/profile" className="flex items-center p-4 hover:bg-gray-50 transition-colors border-b border-gray-50">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mr-4">
                <Package className="w-5 h-5 text-blue-500" />
              </div>
              <span className="flex-1 font-medium text-text-primary">My Orders</span>
              <ChevronRight className="w-5 h-5 text-gray-300" />
            </Link>
            <Link to="/wishlist" className="flex items-center p-4 hover:bg-gray-50 transition-colors border-b border-gray-50">
              <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center mr-4">
                <Heart className="w-5 h-5 text-pink-500" />
              </div>
              <span className="flex-1 font-medium text-text-primary">Wishlist</span>
              <ChevronRight className="w-5 h-5 text-gray-300" />
            </Link>
            <Link to="/cart" className="flex items-center p-4 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mr-4">
                <ShoppingCart className="w-5 h-5 text-purple-500" />
              </div>
              <span className="flex-1 font-medium text-text-primary">Cart</span>
              <ChevronRight className="w-5 h-5 text-gray-300" />
            </Link>
          </div>
        </div>

        {/* Account */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 pl-2">Account</h3>
          <div className="bg-background-card rounded-2xl shadow-sm border border-utility-border/10 overflow-hidden">
            <Link to="/profile" className="flex items-center p-4 hover:bg-gray-50 transition-colors border-b border-gray-50">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mr-4">
                <FileText className="w-5 h-5 text-orange-500" />
              </div>
              <span className="flex-1 font-medium text-text-primary">Invoices & Receipts</span>
              <ChevronRight className="w-5 h-5 text-gray-300" />
            </Link>
            <Link to="/contact" className="flex items-center p-4 hover:bg-gray-50 transition-colors border-b border-gray-50">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center mr-4">
                <HelpCircle className="w-5 h-5 text-cyan-500" />
              </div>
              <span className="flex-1 font-medium text-text-primary">Help & Support</span>
              <ChevronRight className="w-5 h-5 text-gray-300" />
            </Link>
            <Link to="/terms/privacy-policy" className="flex items-center p-4 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mr-4">
                <Shield className="w-5 h-5 text-gray-600" />
              </div>
              <span className="flex-1 font-medium text-text-primary">Terms & Privacy</span>
              <ChevronRight className="w-5 h-5 text-gray-300" />
            </Link>
          </div>
        </div>

        {/* Get In Touch */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 pl-2">Get In Touch</h3>
          <div className="bg-background-card rounded-2xl shadow-sm border border-utility-border/10 p-2">
            <a href="mailto:rrgroupshamli@gmail.com" className="flex items-center p-3 hover:bg-gray-50 rounded-xl transition-colors">
              <div className="w-10 h-10 flex items-center justify-center mr-3">
                <Mail className="w-5 h-5 text-brand-interactive" />
              </div>
              <span className="font-medium text-brand-interactive">rrgroupshamli@gmail.com</span>
            </a>
            <a href="tel:+918877777361" className="flex items-center p-3 hover:bg-gray-50 rounded-xl transition-colors">
              <div className="w-10 h-10 flex items-center justify-center mr-3">
                <Phone className="w-5 h-5 text-brand-interactive" />
              </div>
              <span className="font-medium text-text-primary">+91 88777 77361</span>
            </a>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-4 mb-8">
          <button className="w-full bg-background-card rounded-2xl shadow-sm border border-utility-border/10 p-4 flex items-center hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center mr-4">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
            </div>
            <span className="flex-1 text-left font-medium text-text-primary">Rate Shadisaj</span>
            <ChevronRight className="w-5 h-5 text-gray-300" />
          </button>

          <button onClick={handleLogout} className="w-full bg-background-card rounded-2xl shadow-sm border border-utility-border/10 p-4 flex items-center justify-center hover:bg-red-50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mr-4">
              <LogOut className="w-5 h-5 text-brand-primary" />
            </div>
            <span className="flex-1 text-left font-bold text-brand-primary">Sign Out</span>
          </button>
        </div>

        <div className="text-center pb-8">
          <p className="text-sm text-gray-400">Shadisaj — Sundarbuns Innovation Pvt. Ltd.</p>
        </div>
      </div>
    </div>
  );
}
