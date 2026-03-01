import { Link } from 'react-router-dom';
import {
  Sparkles, ShoppingBag, Phone, CheckCircle, Package, Shield,
  TrendingUp, ArrowRight, Lightbulb, Music, Armchair,
  Camera, Flower, Users, Calculator
} from 'lucide-react';
import { blogs } from '../data/blogs';

const categories = [
  { slug: 'decorations', label: 'Decorations', bg: 'bg-pink-50 hover:bg-pink-100 border-pink-200', icon: Package },
  { slug: 'lighting', label: 'Lighting', bg: 'bg-yellow-50 hover:bg-yellow-100 border-yellow-200', icon: Lightbulb },
  { slug: 'audio-equipment', label: 'Audio Equipment', bg: 'bg-blue-50 hover:bg-blue-100 border-blue-200', icon: Music },
  { slug: 'furniture', label: 'Furniture', bg: 'bg-orange-50 hover:bg-orange-100 border-orange-200', icon: Armchair },
  { slug: 'catering-supplies', label: 'Catering Supplies', bg: 'bg-red-50 hover:bg-red-100 border-red-200', icon: Package },
  { slug: 'photography', label: 'Photography', bg: 'bg-purple-50 hover:bg-purple-100 border-purple-200', icon: Camera },
  { slug: 'stage-backdrop', label: 'Stage & Backdrop', bg: 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200', icon: Package },
  { slug: 'floral-supplies', label: 'Floral Supplies', bg: 'bg-green-50 hover:bg-green-100 border-green-200', icon: Flower },
];

export default function Home() {
  const featuredBlogs = blogs.slice(0, 2);

  return (
    <div className="min-h-screen bg-background-main">

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-brand-primary/10 via-background-card to-brand-secondary/10 border-b-2 border-utility-border overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-interactive/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="container mx-auto px-4 py-12 md:py-20 lg:py-28 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-interactive/20 text-text-primary px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-utility-border backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-brand-interactive" />
              India's #1 B2B Wedding Marketplace
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Grow Your Wedding Business with{' '}
              <span className="text-brand-interactive">Shadisaj</span>
            </h1>
            <p className="text-lg md:text-xl text-text-primary/80 mb-10 leading-relaxed max-w-3xl mx-auto">
              The trusted marketplace for wedding professionals. Source quality equipment at competitive prices.
              Connect with verified vendors across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/vendor/products"
                className="inline-flex items-center justify-center gap-2 bg-brand-interactive text-white px-8 py-4 rounded-2xl font-semibold hover:bg-alternative-interactiveDark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Browse Marketplace<ShoppingBag className="w-5 h-5" />
              </Link>
              <a
                href="tel:+918877777361"
                className="inline-flex items-center justify-center gap-2 bg-background-card text-text-primary px-8 py-4 rounded-2xl font-semibold border-2 border-utility-border hover:border-brand-interactive hover:text-brand-interactive transition-all duration-300 shadow-md"
              >
                <Phone className="w-5 h-5" />Talk to Sales
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-text-primary/60">
              {['Verified Vendors', 'Secure Payments', 'Pan-India Delivery'].map(t => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Why Wedding Vendors Choose Shadisaj</h2>
            <p className="text-text-primary/70 max-w-2xl mx-auto text-lg">Built by industry experts who understand your business needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="bg-background-card rounded-2xl p-8 border-2 border-utility-border/30 hover:border-brand-interactive hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-brand-interactive/20 text-brand-interactive rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Buy New Equipment</h3>
              <p className="text-text-primary/70 leading-relaxed mb-4">Access the latest wedding equipment directly from manufacturers. Premium quality with full warranties at wholesale prices.</p>
              <Link to="/vendor/products" className="inline-flex items-center text-brand-interactive font-semibold hover:gap-2 transition-all">
                Shop Now <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="bg-background-card rounded-2xl p-8 border-2 border-utility-border/30 hover:border-green-500 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-green-600/20 text-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Verified Suppliers</h3>
              <p className="text-text-primary/70 leading-relaxed mb-4">Every supplier on our platform is verified. Shop with confidence knowing you're getting authentic products from trusted sources.</p>
              <Link to="/vendor/products" className="inline-flex items-center text-green-700 font-semibold hover:gap-2 transition-all">
                Browse Products <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="bg-background-card rounded-2xl p-8 border-2 border-utility-border/30 hover:border-brand-primary/75 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-brand-primary/20 text-brand-logo rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Grow Your Business</h3>
              <p className="text-text-primary/70 leading-relaxed mb-4">Access bulk discounts, vendor-only deals, and business tools. Scale your wedding business efficiently with smart investments.</p>
              <Link to="/about" className="inline-flex items-center text-brand-primary/75 font-semibold hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUDGET PLANNER BANNER ── */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-brand-interactive/20 via-background-card to-brand-interactive/20 border-y-2 border-utility-border/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="w-20 h-20 bg-brand-interactive rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">Plan Your Wedding Budget</h2>
              <p className="text-text-primary/70 text-lg mb-4">Enter your total budget and get a smart category-wise breakdown — Venue, Catering, Décor, Photography & more.</p>
              <Link
                to="/budget"
                className="inline-flex items-center gap-2 bg-brand-interactive text-white px-8 py-3 rounded-2xl font-semibold hover:bg-alternative-interactiveDark transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                Open Budget Planner <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-16 md:py-24 bg-background-card border-y-2 border-utility-border/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Shop by Category</h2>
            <p className="text-text-primary/70 text-lg">Everything you need to run a successful wedding business</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {categories.map(({ slug, label, bg, icon: Icon }) => (
              <Link
                key={slug}
                to={`/vendor/products?category=${slug}`}
                className={`${bg} rounded-2xl p-6 text-center transition-all duration-300 cursor-pointer group border-2 hover:shadow-lg hover:-translate-y-1`}
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <Icon className="w-7 h-7 text-text-primary" />
                </div>
                <h3 className="font-semibold text-text-primary">{label}</h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/vendor/products"
              className="inline-flex items-center gap-2 bg-brand-interactive text-white px-8 py-4 rounded-2xl font-semibold hover:bg-alternative-interactiveDark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Products<ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">How It Works</h2>
            <p className="text-text-primary/70 max-w-2xl mx-auto text-lg">Start buying or selling in minutes</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                { step: '1', title: 'Create Account', desc: 'Sign up for free as a wedding vendor. Verify your business to unlock all features.' },
                { step: '2', title: 'Browse & Shop', desc: 'Explore thousands of products. Add to cart and checkout with secure payments.' },
                { step: '3', title: 'Get Delivered', desc: 'Receive your orders with tracked shipping. Grow your business with quality supplies.' },
              ].map(({ step, title, desc }, i) => (
                <div key={step} className="relative text-center">
                  <div className="w-16 h-16 bg-brand-interactive text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">{step}</div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{title}</h3>
                  <p className="text-text-primary/70">{desc}</p>
                  {i < 2 && <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-brand-interactive to-brand-interactive/30"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STATS ── */}
      <section className="py-16 md:py-24 bg-background-card border-y-2 border-utility-border/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              <div className="group">
                <div className="w-20 h-20 bg-blue-600/10 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 border-2 border-blue-600/30">
                  <Shield className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">100% Secure</h3>
                <p className="text-text-primary/70">Protected payments with PhonePe. Your money is safe until you confirm delivery.</p>
              </div>
              <div className="group">
                <div className="w-20 h-20 bg-green-600/10 text-green-700 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 border-2 border-green-600/30">
                  <Users className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">Verified Vendors</h3>
                <p className="text-text-primary/70">Every seller is verified. Trade with confidence in our trusted community.</p>
              </div>
              <div className="group">
                <div className="w-20 h-20 bg-brand-interactive/20 text-brand-interactive rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 border-2 border-utility-border">
                  <Package className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">Quality Assured</h3>
                <p className="text-text-primary/70">All products meet our quality standards. Easy returns if you're not satisfied.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Resources for Wedding Vendors</h2>
            <p className="text-text-primary/70 text-lg">Tips, guides, and insights to grow your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredBlogs.map((post, idx) => (
              <Link key={post.slug} to={`/blogs/${post.slug}`} className="group">
                <div className="bg-background-card rounded-2xl overflow-hidden shadow-lg border-2 border-utility-border/30 hover:border-brand-interactive hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-brand-interactive/20 to-brand-primary/10 flex items-center justify-center">
                    <span className="text-6xl">{idx === 0 ? '💡' : '📈'}</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className={`${idx === 0 ? 'bg-brand-interactive' : 'bg-green-600'} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-brand-interactive transition-colors">{post.title}</h3>
                    <p className="text-text-primary/70 mb-4">{post.excerpt}</p>
                    <span className="inline-flex items-center text-brand-interactive font-semibold">
                      Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blogs" className="inline-flex items-center gap-2 text-brand-interactive font-semibold text-lg hover:gap-3 transition-all">
              View All Articles<ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-logo to-brand-interactive relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Transform Your Wedding Business?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">Join wedding vendors who are growing their business with Shadisaj</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/vendor/products"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-interactive px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Start Shopping<ShoppingBag className="w-5 h-5" />
            </Link>
            <a
              href="tel:+918877777361"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-2xl font-semibold border-2 border-white hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />Call +91 8877777361
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
