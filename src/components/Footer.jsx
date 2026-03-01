import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-text-primary text-background-main mt-10 pb-16 md:pb-0 border-t-2 border-brand-interactive/40">
      {/* Full footer — desktop */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-background-main mb-2 font-logo">Shadisaj</div>
            <p className="text-sm text-background-main/70 mb-2">India's #1 B2B Wedding Marketplace</p>
            <p className="text-sm text-background-main/60 leading-relaxed mb-4">
              The trusted marketplace for wedding professionals. Source quality equipment at
              competitive prices. Connect with verified vendors across India.
            </p>
            <a href="tel:+918877777361" className="text-brand-interactive hover:text-brand-interactive/80 transition text-sm font-medium">
              📞 +91 88777 77361
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-background-main mb-3">Quick Links</h4>
            <div className="space-y-2">
              {[['/', 'Home'], ['/vendor/products', 'Explore'], ['/blogs', 'Blog'], ['/about', 'About'], ['/budget', 'Budget Planner'], ['/contact', 'Contact']].map(([to, label]) => (
                <Link key={to} to={to} className="block text-sm text-background-main/70 hover:text-brand-interactive transition">{label}</Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-background-main mb-3">Categories</h4>
            <div className="space-y-2">
              {[['decorations', 'Decorations'], ['lighting', 'Lighting'], ['audio-equipment', 'Audio Equipment'], ['furniture', 'Furniture'], ['photography', 'Photography'], ['stage-backdrop', 'Stage & Backdrop']].map(([cat, label]) => (
                <Link key={cat} to={`/vendor/products?category=${cat}`} className="block text-sm text-background-main/70 hover:text-brand-interactive transition">{label}</Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-background-main mb-3">Resources</h4>
            <div className="space-y-2">
              {[['/blogs/budget-planning', 'Smart Procurement'], ['/blogs/vendor-selection', '2026 Trends'], ['/blogs/planning-your-dream-wedding', 'Wedding Planning'], ['/blogs/budget-friendly-wedding-ideas', 'Budget Ideas'], ['/wishlist', 'Wishlist'], ['/cart', 'Cart']].map(([to, label]) => (
                <Link key={to} to={to} className="block text-sm text-background-main/70 hover:text-brand-interactive transition">{label}</Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-interactive/30 py-4">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-sm text-background-main/70">© 2026 Shadisaj. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link to="/terms/privacy-policy" className="text-sm text-background-main/70 hover:text-brand-interactive transition">Privacy Policy</Link>
              <Link to="/terms/tos" className="text-sm text-background-main/70 hover:text-brand-interactive transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal footer — mobile (shown above bottom nav) */}
      <div className="md:hidden py-4 border-t border-brand-interactive/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-background-main/60">© 2026 Shadisaj. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-1">
            <Link to="/terms/privacy-policy" className="text-xs text-background-main/60 hover:text-brand-interactive transition">Privacy Policy</Link>
            <Link to="/terms/tos" className="text-xs text-background-main/60 hover:text-brand-interactive transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

