import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sparkles, ShoppingBag, Phone, CheckCircle, Package, Shield,
  TrendingUp, ArrowRight, Lightbulb, Music, Armchair,
  Camera, Flower, Users, Calculator, Search, MapPin, Calendar, User, IndianRupee
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
  const navigate = useNavigate();

  const [searchState, setSearchState] = useState({
    location: 'all',
    eventType: 'all',
    guests: 'all',
    budget: 'all'
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchState.location !== 'all') params.set('location', searchState.location);
    if (searchState.eventType !== 'all') params.set('eventType', searchState.eventType);
    if (searchState.guests !== 'all') params.set('guests', searchState.guests);
    
    if (searchState.budget !== 'all') {
       if (searchState.budget === 'under-50k') params.set('maxBudget', '50000');
       else if (searchState.budget === '50k-2l') { params.set('minBudget', '50000'); params.set('maxBudget', '200000'); }
       else if (searchState.budget === '2l-5l') { params.set('minBudget', '200000'); params.set('maxBudget', '500000'); }
       else if (searchState.budget === '5l+') params.set('minBudget', '500000');
    }
    
    navigate(`/services?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-background-main">

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-brand-primary/10 via-background-card to-brand-secondary/10 border-b-2 border-utility-border overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-interactive/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-interactive/20 text-text-primary px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-utility-border backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-brand-interactive" />
              India's One-Stop Wedding Business Hub
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              All Your Wedding Business Needs, <span className="text-brand-interactive">Under One Roof</span>
            </h1>
            <p className="text-lg md:text-xl text-text-primary/80 mb-10 leading-relaxed max-w-3xl mx-auto">
              Browse our curated catalogue, place your order, and we handle the rest — quality-checked and delivered straight to you. Or discover top venues and vendors.
            </p>
            
            {/* ── HERO SEARCH BAR ── */}
            <div className="bg-background-card p-4 rounded-3xl border-2 border-utility-border/30 shadow-xl mb-12 max-w-4xl mx-auto">
              <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative flex items-center border-b-2 md:border-b-0 md:border-r-2 border-utility-border/30 pb-4 md:pb-0 md:pr-4">
                  <MapPin className="absolute left-3 w-5 h-5 text-brand-interactive" />
                  <select 
                    className="w-full pl-10 pr-4 py-2 bg-transparent text-text-primary focus:outline-none appearance-none font-medium cursor-pointer"
                    value={searchState.location}
                    onChange={(e) => setSearchState(prev => ({ ...prev, location: e.target.value }))}
                  >
                    <option value="all">All Locations</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Udaipur">Udaipur</option>
                    <option value="Goa">Goa</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Jaisalmer">Jaisalmer</option>
                    <option value="Moradabad">Moradabad</option>
                  </select>
                </div>
                
                <div className="flex-1 relative flex items-center border-b-2 md:border-b-0 md:border-r-2 border-utility-border/30 pb-4 md:pb-0 md:pr-4">
                  <Calendar className="absolute left-3 w-5 h-5 text-brand-interactive" />
                  <select 
                    className="w-full pl-10 pr-4 py-2 bg-transparent text-text-primary focus:outline-none appearance-none font-medium cursor-pointer"
                    value={searchState.eventType}
                    onChange={(e) => setSearchState(prev => ({ ...prev, eventType: e.target.value }))}
                  >
                    <option value="all">Event Type</option>
                    <option value="wedding">Wedding</option>
                    <option value="pre-wedding">Pre-Wedding / Haldi</option>
                    <option value="reception">Reception</option>
                    <option value="engagement">Engagement</option>
                  </select>
                </div>
                
                <div className="flex-1 relative flex items-center border-b-2 md:border-b-0 md:border-r-2 border-utility-border/30 pb-4 md:pb-0 md:pr-4">
                  <Users className="absolute left-3 w-5 h-5 text-brand-interactive" />
                  <select 
                    className="w-full pl-10 pr-4 py-2 bg-transparent text-text-primary focus:outline-none appearance-none font-medium cursor-pointer"
                    value={searchState.guests}
                    onChange={(e) => setSearchState(prev => ({ ...prev, guests: e.target.value }))}
                  >
                    <option value="all">No. of Guests</option>
                    <option value="under-100">Under 100</option>
                    <option value="100-300">100 - 300</option>
                    <option value="300-500">300 - 500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>
                
                <div className="flex-1 relative flex items-center">
                  <IndianRupee className="absolute left-3 w-5 h-5 text-brand-interactive" />
                  <select 
                    className="w-full pl-10 pr-4 py-2 bg-transparent text-text-primary focus:outline-none appearance-none font-medium cursor-pointer"
                    value={searchState.budget}
                    onChange={(e) => setSearchState(prev => ({ ...prev, budget: e.target.value }))}
                  >
                    <option value="all">Budget Range</option>
                    <option value="under-50k">Under ₹50K</option>
                    <option value="50k-2l">₹50K - ₹2L</option>
                    <option value="2l-5l">₹2L - ₹5L</option>
                    <option value="5l+">₹5L+</option>
                  </select>
                </div>
                
                <button 
                  type="submit"
                  className="bg-brand-interactive hover:bg-alternative-interactiveDark text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-md flex items-center justify-center gap-2 md:w-auto w-full flex-shrink-0"
                >
                  <Search className="w-5 h-5" />
                  <span className="md:hidden lg:inline">Find Services</span>
                </button>
              </form>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-text-primary/60">
              {['Curated Catalogue', 'Secure Payments', 'Quality Assured'].map(t => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Why Wedding Professionals Choose Shadisaj</h2>
            <p className="text-text-primary/70 max-w-2xl mx-auto text-lg">One platform that does the heavy lifting for your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="bg-background-card rounded-2xl p-8 border-2 border-utility-border/30 hover:border-brand-interactive hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-brand-interactive/20 text-brand-interactive rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Curated Catalogue</h3>
              <p className="text-text-primary/70 leading-relaxed mb-4">Browse thousands of hand-picked wedding products. Order once — we handle sourcing, so you don't have to juggle multiple suppliers.</p>
              <Link to="/vendor/products" className="inline-flex items-center text-brand-interactive font-semibold hover:gap-2 transition-all">
                Shop Now <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="bg-background-card rounded-2xl p-8 border-2 border-utility-border/30 hover:border-green-500 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-green-600/20 text-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Sourced & Verified</h3>
              <p className="text-text-primary/70 leading-relaxed mb-4">Every item is quality-checked and authenticated. We vet every source so you receive authentic, quality products every time.</p>
              <Link to="/vendor/products" className="inline-flex items-center text-green-700 font-semibold hover:gap-2 transition-all">
                Browse Products <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="bg-background-card rounded-2xl p-8 border-2 border-utility-border/30 hover:border-brand-primary/75 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-brand-primary/20 text-brand-logo rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Scale With Confidence</h3>
              <p className="text-text-primary/70 leading-relaxed mb-4">Competitive pricing, business-focused tools, and a reliable supply chain — everything you need to grow your wedding business efficiently.</p>
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
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              return (
              <Link
                key={cat.slug}
                to={`/vendor/products?category=${cat.slug}`}
                className={`${cat.bg} rounded-2xl p-6 text-center transition-all duration-300 cursor-pointer group border-2 hover:shadow-lg hover:-translate-y-1`}
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <IconComponent className="w-7 h-7 text-text-primary" />
                </div>
                <h3 className="font-semibold text-text-primary">{cat.label}</h3>
              </Link>
            )})}
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
            <p className="text-text-primary/70 max-w-2xl mx-auto text-lg">Simple, transparent, and built around your workflow</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                { step: '1', title: 'Browse & Order', desc: 'Explore our curated catalogue. Pick what you need and check out in minutes with secure payments.' },
                { step: '2', title: 'We Source It', desc: 'We source directly from certified manufacturers at competitive rates. You get quality without the complexity.' },
                { step: '3', title: 'Delivered to You', desc: 'Your order arrives with tracked shipping, ready to go. Focus on your clients — we handle the supply chain.' },
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
