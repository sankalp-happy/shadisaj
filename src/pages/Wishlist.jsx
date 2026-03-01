import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';

export default function Wishlist() {
  return (
    <div className="min-h-screen bg-background-main pb-16 md:pb-0 flex flex-col items-center justify-center px-4">
      <div className="bg-background-card rounded-2xl shadow-xl border-2 border-utility-border/30 p-12 text-center max-w-md w-full">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-interactive/10 rounded-full mb-6">
          <Heart className="w-10 h-10 text-brand-interactive" />
        </div>
        <h1 className="text-2xl font-bold text-text-primary mb-3">Your Wishlist is Empty</h1>
        <p className="text-text-primary/70 mb-8">Save vendors and products you love for later. Start exploring!</p>
        <Link to="/"
          className="inline-flex items-center gap-2 bg-brand-interactive hover:bg-alternative-interactiveDark text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
          <ShoppingBag className="w-5 h-5" /> Explore Vendors
        </Link>
      </div>
    </div>
  );
}
