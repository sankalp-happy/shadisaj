import { Link } from 'react-router-dom';
import { Heart, Shield, TrendingUp, Users, Phone, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background-main pb-16 md:pb-0">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-primary/10 via-background-card to-brand-secondary/10 border-b-2 border-utility-border/30 overflow-hidden py-16 md:py-24">
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-interactive/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-interactive/20 text-text-primary px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-utility-border">
            <Heart className="w-4 h-4 text-brand-interactive" />
            Our Story
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            About <span className="text-brand-interactive">Shadisaj</span>
          </h1>
          <p className="text-lg md:text-xl text-text-primary/80 max-w-3xl mx-auto leading-relaxed">
            India's trusted B2B marketplace connecting wedding professionals with quality equipment
            suppliers across the country.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-text-primary mb-4">Our Story</h2>
                <p className="text-text-primary/70 leading-relaxed mb-4">
                  Shadisaj was born from a simple observation: wedding vendors across India were struggling
                  to find reliable suppliers for quality equipment at fair prices.
                </p>
                <p className="text-text-primary/70 leading-relaxed mb-4">
                  Founded in 2023, we set out to create a dedicated B2B marketplace where wedding professionals
                  could source decorations, lighting, audio equipment, furniture, and everything else they
                  need — all in one place, with verified suppliers.
                </p>
                <p className="text-text-primary/70 leading-relaxed">
                  Today, Shadisaj serves thousands of wedding vendors across India, helping them build
                  successful businesses by connecting them with the best equipment suppliers.
                </p>
              </div>
              <div className="bg-gradient-to-br from-brand-interactive/20 to-brand-primary/10 rounded-2xl p-10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">💍</div>
                  <div className="text-3xl font-bold text-brand-interactive mb-1">5000+</div>
                  <div className="text-text-primary/70 font-medium">Vendors Served</div>
                  <div className="mt-6 text-3xl font-bold text-brand-interactive mb-1">Pan-India</div>
                  <div className="text-text-primary/70 font-medium">Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-background-card border-y-2 border-utility-border/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Our Mission</h2>
            <p className="text-text-primary/70 max-w-2xl mx-auto text-lg">Empowering wedding professionals across India with the right tools and partnerships</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: 'Trust & Transparency', desc: 'Every supplier is verified. Every transaction is secure. Build your business on a platform you can trust.', color: 'bg-blue-600/10 text-blue-700' },
              { icon: TrendingUp, title: 'Growth Focused', desc: 'We help wedding vendors scale their businesses with access to wholesale prices, bulk deals, and business tools.', color: 'bg-brand-interactive/20 text-brand-interactive' },
              { icon: Users, title: 'Community First', desc: 'Join a thriving community of wedding professionals. Share insights, discover trends, and grow together.', color: 'bg-green-600/10 text-green-700' },
            ].map(({ icon: IconComponent, title, desc, color }) => (
              <div key={title} className="bg-background-main rounded-2xl p-8 border-2 border-utility-border/30 hover:border-brand-interactive hover:shadow-xl transition-all duration-300 group">
                <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{title}</h3>
                <p className="text-text-primary/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { val: 'Integrity', desc: 'We operate with complete transparency. What you see is what you get — no hidden fees, no surprises.' },
              { val: 'Quality First', desc: 'We curate only the best suppliers. Every product on Shadisaj meets our rigorous quality standards.' },
              { val: 'Vendor Success', desc: "Your success is our success. We built Shadisaj to help wedding vendors thrive, not just survive." },
              { val: 'Innovation', desc: 'We continuously improve our platform based on vendor feedback to make your experience better every day.' },
            ].map(({ val, desc }) => (
              <div key={val} className="bg-background-card rounded-2xl p-6 border-l-4 border-brand-interactive shadow-sm hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-text-primary mb-2">{val}</h3>
                <p className="text-text-primary/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-logo to-brand-interactive relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join Shadisaj?</h2>
          <p className="text-lg text-white/90 mb-10 max-w-xl mx-auto">Start sourcing quality equipment and grow your wedding business today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/vendor/products" className="inline-flex items-center justify-center gap-2 bg-white text-brand-interactive px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:-translate-y-1">
              Browse Marketplace <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-2xl font-semibold border-2 border-white hover:bg-white/10 transition-all duration-300">
              <Phone className="w-5 h-5" />Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
