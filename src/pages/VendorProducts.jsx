import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Package, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';

const sidebarCategories = [
  { slug: 'all', label: 'All Products' },
  { slug: 'decorations', label: 'Decorations' },
  { slug: 'lighting', label: 'Lighting' },
  { slug: 'audio-equipment', label: 'Audio Equipment' },
  { slug: 'furniture', label: 'Furniture' },
  { slug: 'catering-supplies', label: 'Catering Supplies' },
  { slug: 'photography', label: 'Photography' },
  { slug: 'stage-backdrop', label: 'Stage & Backdrop' },
  { slug: 'floral-supplies', label: 'Floral Supplies' },
];

export default function VendorProducts() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const activeCategory = searchParams.get('category') || 'all';

  const setCategory = (slug) => {
    if (slug === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: slug });
    }
    setSidebarOpen(false);
  };

  const activeName = sidebarCategories.find(c => c.slug === activeCategory)?.label ?? 'All Products';

  return (
    <div className="min-h-screen bg-background-main pb-16 md:pb-0">

      {/* Page header */}
      <div className="bg-background-card border-b-2 border-utility-border/30 py-6 md:py-8">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-text-primary">Wedding Equipment Marketplace</h1>
            <p className="text-text-primary/70 mt-1">Quality supplies for wedding professionals</p>
          </div>
          <button
            className="md:hidden flex items-center gap-2 bg-brand-interactive text-white px-4 py-2 rounded-xl font-semibold text-sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <SlidersHorizontal className="w-4 h-4" />Filters
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-6">

          {/* Sidebar */}
          <aside className={`
            fixed inset-y-0 left-0 z-40 w-64 bg-background-card border-r-2 border-utility-border/30 transform transition-transform duration-300 md:static md:transform-none md:w-56 md:flex-shrink-0
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}>
            <div className="flex items-center justify-between p-4 border-b border-utility-border/20 md:hidden">
              <h3 className="font-bold text-text-primary">Categories</h3>
              <button onClick={() => setSidebarOpen(false)}><X className="w-5 h-5" /></button>
            </div>
            <div className="p-3">
              <h3 className="hidden md:block text-xs font-bold text-text-primary/50 uppercase tracking-wider px-3 mb-3">Categories</h3>
              {sidebarCategories.map(cat => (
                <button
                  key={cat.slug}
                  onClick={() => setCategory(cat.slug)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all mb-1
                    ${activeCategory === cat.slug
                      ? 'bg-brand-interactive text-white shadow-sm'
                      : 'text-text-primary hover:bg-brand-interactive/10 hover:text-brand-interactive'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </aside>

          {/* Overlay for mobile */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-30 bg-black/50 md:hidden" onClick={() => setSidebarOpen(false)} />
          )}

          {/* Main content */}
          <main className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-text-primary">{activeName}</h2>
            </div>

            {/* Empty state matching original site */}
            <div className="bg-background-card rounded-2xl border-2 border-utility-border/30 p-12 md:p-20 text-center">
              <div className="w-20 h-20 bg-brand-interactive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-10 h-10 text-brand-interactive" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-3">Products Coming Soon</h3>
              <p className="text-text-primary/70 mb-8 max-w-md mx-auto leading-relaxed">
                We're onboarding verified suppliers in the <strong>{activeName}</strong> category.
                Check back soon or{' '}
                <a href="tel:+918877777361" className="text-brand-interactive hover:underline font-medium">call us</a>{' '}
                to discuss your equipment needs directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+918877777361"
                  className="inline-flex items-center justify-center gap-2 bg-brand-interactive text-white px-6 py-3 rounded-2xl font-semibold hover:bg-alternative-interactiveDark transition-all duration-300 shadow-md"
                >
                  <Package className="w-5 h-5" />Talk to a Supplier
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-background-main text-text-primary px-6 py-3 rounded-2xl font-semibold border-2 border-utility-border/30 hover:border-brand-interactive hover:text-brand-interactive transition-all duration-300"
                >
                  Submit Requirement
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
