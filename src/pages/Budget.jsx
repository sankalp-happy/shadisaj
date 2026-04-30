import { useState } from 'react';
import { IndianRupee, RotateCcw, TrendingUp, Users, MapPin } from 'lucide-react';
import { budgetCategories } from '../data/budgetCategories';
import { services } from '../data/services';
import { Link } from 'react-router-dom';

const LOCATIONS = ['Delhi NCR', 'Mumbai', 'Bangalore', 'Jaipur', 'Muradabad', 'Other'];
const PRESETS = [
  { label: '₹5 Lakh', value: 500000 },
  { label: '₹10 Lakh', value: 1000000 },
  { label: '₹20 Lakh', value: 2000000 },
  { label: '₹50 Lakh', value: 5000000 },
];

function formatINR(n) {
  if (!n) return '₹0';
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(1)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)} L`;
  if (n >= 1000) return `₹${(n / 1000).toFixed(1)}K`;
  return `₹${n}`;
}

export default function Budget() {
  const [budget, setBudget] = useState('');
  const [guests, setGuests] = useState('300');
  const [location, setLocation] = useState('Delhi NCR');
  const [submitted, setSubmitted] = useState(false);
  const [percentages, setPercentages] = useState(() =>
    Object.fromEntries(budgetCategories.map(c => [c.id, c.percentage]))
  );

  const total = parseInt(budget.replace(/,/g, ''), 10) || 0;
  const numGuests = parseInt(guests, 10) || 300;
  const totalPercent = Object.values(percentages).reduce((a, b) => a + b, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (total > 0) setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setBudget('');
    setPercentages(Object.fromEntries(budgetCategories.map(c => [c.id, c.percentage])));
  };

  const handlePercentChange = (id, val) => {
    setPercentages(prev => ({ ...prev, [id]: Number(val) }));
  };

  return (
    <div className="min-h-screen bg-background-main pb-16 md:pb-0">

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-primary/10 via-background-card to-brand-secondary/10 border-b-2 border-utility-border/30 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-interactive/10 rounded-2xl mb-4">
            <IndianRupee className="w-8 h-8 text-brand-interactive" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Wedding <span className="text-brand-interactive">Budget Planner</span>
          </h1>
          <p className="text-lg text-text-primary/80 max-w-xl mx-auto">
            Enter your total wedding budget and we&apos;ll create a smart category-wise breakdown for you.
          </p>
        </div>
      </section>

      {!submitted ? (
        /* Step 1 — Enter budget */
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-lg">
            <div className="bg-background-card rounded-2xl shadow-xl border-2 border-utility-border/30 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-text-primary mb-2 text-center">Enter Your Budget</h2>
              <p className="text-text-primary/60 text-center mb-8">We&apos;ll split it across essential wedding categories.</p>

              {/* Preset chips */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {PRESETS.map(p => (
                  <button key={p.value} onClick={() => setBudget(p.value.toString())}
                    className={`py-3 rounded-xl font-semibold border-2 transition-all duration-200 ${
                      parseInt(budget, 10) === p.value
                        ? 'bg-brand-interactive text-white border-brand-interactive shadow-lg scale-105'
                        : 'bg-background-main text-text-primary border-utility-border/30 hover:border-brand-interactive hover:text-brand-interactive'
                    }`}>
                    {p.label}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {/* Guest Count */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-text-primary mb-2">Number of Guests</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-interactive">
                      <Users className="w-5 h-5" />
                    </span>
                    <input
                      type="number"
                      min="10"
                      value={guests}
                      onChange={e => setGuests(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border-2 border-utility-border/50 rounded-xl bg-background-main text-text-primary font-semibold focus:outline-none focus:border-brand-interactive transition-colors"
                      placeholder="e.g. 300"
                      required
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-text-primary mb-2">Location</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-interactive">
                      <MapPin className="w-5 h-5" />
                    </span>
                    <select
                      value={location}
                      onChange={e => setLocation(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border-2 border-utility-border/50 rounded-xl bg-background-main text-text-primary font-semibold focus:outline-none focus:border-brand-interactive transition-colors appearance-none"
                    >
                      {LOCATIONS.map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <label className="block text-sm font-semibold text-text-primary mb-2">Total Budget Amount</label>
                <div className="relative mb-2">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-interactive font-bold text-lg">₹</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="e.g. 1500000"
                    value={budget}
                    onChange={e => setBudget(e.target.value)}
                    className="w-full pl-10 pr-4 py-4 border-2 border-utility-border/50 rounded-xl bg-background-main text-text-primary text-lg font-semibold focus:outline-none focus:border-brand-interactive transition-colors"
                  />
                </div>
                {budget && total > 0 && (
                  <p className="text-center text-brand-interactive font-semibold mb-4">{formatINR(total)}</p>
                )}
                <button type="submit"
                  disabled={!total}
                  className="w-full mt-4 bg-brand-interactive hover:bg-alternative-interactiveDark text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Create Budget Plan
                </button>
              </form>
            </div>
          </div>
        </section>
      ) : (
        /* Step 2 — Category breakdown */
        <section className="py-10">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-text-primary">Your Budget Breakdown</h2>
                <p className="text-text-primary/60">Total: <span className="font-bold text-brand-interactive text-xl">{formatINR(total)}</span></p>
              </div>
              <div className="flex gap-3">
                {totalPercent !== 100 && (
                  <span className={`self-center text-sm font-semibold px-3 py-1 rounded-full ${totalPercent > 100 ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-700'}`}>
                    {totalPercent}% allocated
                  </span>
                )}
                <button onClick={handleReset}
                  className="flex items-center gap-2 bg-background-card text-text-primary border-2 border-utility-border hover:border-brand-interactive hover:text-brand-interactive font-semibold px-4 py-2 rounded-xl transition-all duration-200">
                  <RotateCcw className="w-4 h-4" /> Recalculate
                </button>
              </div>
            </div>

            {/* Category cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              {budgetCategories.map(cat => {
                const pct = percentages[cat.id];
                const amount = Math.round((pct / 100) * total);
                return (
                  <div key={cat.id} className="bg-background-card rounded-2xl border-2 border-utility-border/30 hover:border-brand-interactive transition-colors p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{cat.icon || cat.emoji}</span>
                      <div className="flex-1">
                        <h3 className="font-bold text-text-primary">{cat.name}</h3>
                        <p className="text-xs text-text-primary/50">{cat.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-brand-interactive text-lg">{formatINR(amount)}</div>
                        <div className="text-xs text-text-primary/50">{pct}%</div>
                      </div>
                    </div>
                    {/* Progress bar */}
                    <div className="w-full bg-background-main rounded-full h-2 mb-3">
                      <div className="bg-brand-interactive h-2 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(pct, 100)}%` }}></div>
                    </div>
                    {/* Slider */}
                    <input
                      type="range" min="0" max="60" step="1"
                      value={pct}
                      onChange={e => handlePercentChange(cat.id, e.target.value)}
                      className="w-full accent-brand-interactive cursor-pointer"
                    />
                  </div>
                );
              })}
            </div>

            {/* Summary table */}
            <div className="bg-background-card rounded-2xl border-2 border-utility-border/30 overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-brand-logo to-brand-interactive px-6 py-4">
                <h3 className="text-white font-bold text-lg">Budget Summary</h3>
              </div>
              <div className="divide-y divide-utility-border/20">
                {budgetCategories.map(cat => {
                  const pct = percentages[cat.id];
                  const amount = Math.round((pct / 100) * total);
                  return (
                    <div key={cat.id} className="flex items-center justify-between px-6 py-3 hover:bg-background-main/50 transition-colors">
                      <span className="flex items-center gap-2 text-text-primary font-medium">
                        <span>{cat.icon || cat.emoji}</span> {cat.name}
                      </span>
                      <div className="flex items-center gap-4">
                        <span className="text-text-primary/50 text-sm w-10 text-right">{pct}%</span>
                        <span className="font-bold text-brand-interactive min-w-[80px] text-right">{formatINR(amount)}</span>
                      </div>
                    </div>
                  );
                })}
                <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-brand-logo/5 to-brand-interactive/5">
                  <span className="font-bold text-text-primary text-lg">Total Budget</span>
                  <span className="font-bold text-brand-interactive text-xl">{formatINR(total)}</span>
                </div>
              </div>
            </div>

            {/* Vendor Suggestions */}
            {submitted && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-text-primary mb-6">Suggested Vendors For Your Budget</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Suggestions for Venue */}
                  {(() => {
                    const venueBudget = Math.round((percentages['venue-catering'] / 100) * total);
                    // 70% of venue-catering budget goes to Venue
                    const venueTarget = venueBudget * 0.7;
                    // 30% of venue-catering budget goes to Catering
                    const catererTargetPerPlate = (venueBudget * 0.3) / numGuests;

                    const decoratorTarget = Math.round((percentages['decoration'] / 100) * total);
                    const photoTarget = Math.round((percentages['photography'] / 100) * total);
                    const djTarget = Math.round((percentages['dj-music'] / 100) * total);
                    
                    const beautyBudget = Math.round((percentages['attire-beauty'] / 100) * total);
                    const makeupTarget = beautyBudget * 0.5;
                    const mehndiTarget = beautyBudget * 0.2;

                    const getSuggestions = (cat, target) => {
                      let res = services
                        .filter(s => s.category === cat && s.priceRange.min <= target && (location === 'Other' || s.location.includes(location) || s.location.includes('Delhi') && location.includes('Delhi')))
                        .sort((a, b) => b.rating - a.rating)
                        .slice(0, 3);
                      if (res.length === 0) {
                        res = services
                          .filter(s => s.category === cat)
                          .sort((a, b) => a.priceRange.min - b.priceRange.min)
                          .slice(0, 3);
                      }
                      return res;
                    };

                    const vendorBlocks = [
                      { title: 'Matching Venues', icon: '🏛️', data: getSuggestions('venues', venueTarget), emptyMsg: 'No venues found within this budget.' },
                      { title: 'Matching Caterers', icon: '🍲', data: getSuggestions('caterers', catererTargetPerPlate), emptyMsg: 'No caterers found within this budget.' },
                      { title: 'Matching Decorators', icon: '🌺', data: getSuggestions('decorators', decoratorTarget), emptyMsg: 'No decorators found within this budget.' },
                      { title: 'Matching Photographers', icon: '📸', data: getSuggestions('photography', photoTarget), emptyMsg: 'No photographers found within this budget.' },
                      { title: 'Matching DJs', icon: '🎵', data: getSuggestions('dj', djTarget), emptyMsg: 'No DJs found within this budget.' },
                      { title: 'Matching Makeup Artists', icon: '💄', data: getSuggestions('makeup', makeupTarget), emptyMsg: 'No makeup artists found within this budget.' },
                      { title: 'Matching Mehndi Artists', icon: '✋', data: getSuggestions('mehndi', mehndiTarget), emptyMsg: 'No mehndi artists found within this budget.' }
                    ];

                    return (
                      <>
                        {vendorBlocks.map((block, idx) => (
                          <div key={idx} className="bg-background-card rounded-2xl border-2 border-utility-border/30 p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-lg mb-4 text-text-primary flex items-center gap-2">
                              <span>{block.icon}</span> {block.title}
                            </h4>
                            {block.data.length > 0 ? block.data.map(vendor => (
                              <div key={vendor.id} className="flex gap-4 mb-4 pb-4 border-b border-utility-border/10 last:border-0 last:pb-0 last:mb-0">
                                <img src={vendor.image} className="w-20 h-20 rounded-xl object-cover flex-shrink-0" alt={vendor.name} />
                                <div className="flex-1">
                                  <h5 className="font-bold text-text-primary text-sm line-clamp-1">{vendor.name}</h5>
                                  <p className="text-xs text-text-primary/60 mt-0.5">{vendor.location} • ₹{formatINR(vendor.priceRange.min)} {vendor.priceRange.unit}</p>
                                  <Link to={`/services/${vendor.slug}`} className="text-xs font-semibold text-brand-interactive hover:text-alternative-interactiveDark mt-2 inline-block">
                                    View Details &rarr;
                                  </Link>
                                </div>
                              </div>
                            )) : (
                              <p className="text-sm text-text-primary/60 bg-background-main p-4 rounded-xl">
                                {block.emptyMsg} Try adjusting the slider or total budget.
                              </p>
                            )}
                          </div>
                        ))}
                      </>
                    )
                  })()}
                </div>
              </div>
            )}

          </div>
        </section>
      )}

    </div>
  );
}
