import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

const faqs = [
  { q: 'How do I become a verified vendor?', a: 'Register on Shadisaj, submit your business documents (GST, trade license), and our team verifies your account within 24-48 hours.' },
  { q: 'What payment methods are accepted?', a: 'We accept PhonePe, UPI, Net Banking, and all major credit/debit cards. All payments are secured and encrypted.' },
  { q: 'Is there a minimum order quantity?', a: 'Minimum order quantities vary by supplier and product. Each product listing clearly shows the MOQ.' },
  { q: 'What is the return policy?', a: 'We offer a 7-day return window for damaged or defective products. Raise a return request through your dashboard.' },
  { q: 'Do you ship pan-India?', a: 'Yes, we deliver across India. Shipping rates and timelines vary by location and supplier.' },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background-main pb-16 md:pb-0">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-primary/10 via-background-card to-brand-secondary/10 border-b-2 border-utility-border/30 overflow-hidden py-16 md:py-24">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">Get in Touch</h1>
          <p className="text-lg md:text-xl text-text-primary/80 max-w-2xl mx-auto">
            We're here to help. Reach out to our team for vendor support, business enquiries, or just to say hello.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {[
              { icon: Phone, title: 'Call Us', lines: ['+91 88777 77361', 'Mon–Sat, 9 AM–7 PM'], href: 'tel:+918877777361', color: 'text-green-700 bg-green-600/10' },
              { icon: Mail, title: 'Email Us', lines: ['support@shadisaj.in', 'We reply within 24 hrs'], href: 'mailto:support@shadisaj.in', color: 'text-brand-interactive bg-brand-interactive/10' },
              { icon: MapPin, title: 'Visit Us', lines: ['123 Wedding Market', 'New Delhi, 110001'], href: null, color: 'text-brand-primary/75 bg-brand-primary/10' },
            ].map(({ icon: Icon, title, lines, href, color }) => (
              <div key={title} className="bg-background-card rounded-2xl p-8 border-2 border-utility-border/30 hover:border-brand-interactive hover:shadow-xl transition-all duration-300 text-center group">
                <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{title}</h3>
                {lines.map(line => (
                  href ? (
                    <a key={line} href={href} className="block text-text-primary/70 hover:text-brand-interactive transition text-sm">{line}</a>
                  ) : (
                    <p key={line} className="text-text-primary/70 text-sm">{line}</p>
                  )
                ))}
              </div>
            ))}
          </div>

          {/* Business Hours */}
          <div className="max-w-5xl mx-auto mb-16 bg-background-card rounded-2xl border-2 border-utility-border/30 overflow-hidden">
            <div className="p-6 border-b border-utility-border/20">
              <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-interactive" />Business Hours
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-utility-border/20">
              {[
                { day: 'Monday – Friday', hours: '9:00 AM – 7:00 PM' },
                { day: 'Saturday', hours: '10:00 AM – 5:00 PM' },
                { day: 'Sunday', hours: 'Closed' },
                { day: 'Public Holidays', hours: 'Emergency support only' },
              ].map(({ day, hours }) => (
                <div key={day} className="flex justify-between items-center p-4">
                  <span className="font-medium text-text-primary">{day}</span>
                  <span className={`text-sm font-semibold ${hours === 'Closed' ? 'text-red-500' : 'text-green-600'}`}>{hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form + FAQ side by side */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Form */}
            <div className="bg-background-card rounded-2xl p-8 border-2 border-utility-border/30 shadow-lg">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Send a Message</h3>
              {submitted && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium">
                  ✅ Message sent! We'll get back to you within 24 hours.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Raj Sharma' },
                  { key: 'email', label: 'Email', type: 'email', placeholder: 'raj@example.com' },
                  { key: 'phone', label: 'Phone (optional)', type: 'tel', placeholder: '+91 98765 43210' },
                  { key: 'subject', label: 'Subject', type: 'text', placeholder: 'How can we help?' },
                ].map(({ key, label, type, placeholder }) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-text-primary mb-1">{label}</label>
                    <input
                      type={type}
                      value={formData[key]}
                      onChange={e => setFormData(p => ({ ...p, [key]: e.target.value }))}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 bg-background-main border-2 border-utility-border/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-interactive focus:border-transparent transition text-text-primary placeholder-text-primary/40"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1">Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 bg-background-main border-2 border-utility-border/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-interactive focus:border-transparent transition text-text-primary placeholder-text-primary/40 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-brand-interactive text-white px-8 py-4 rounded-2xl font-semibold hover:bg-alternative-interactiveDark transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Send Message <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group bg-background-card border-2 border-utility-border/30 rounded-2xl overflow-hidden"
                    onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-text-primary hover:text-brand-interactive transition-colors list-none">
                      <span>{faq.q}</span>
                      <ChevronDown className="w-5 h-5 flex-shrink-0 group-open:rotate-180 transition-transform duration-300" />
                    </summary>
                    <div className="px-5 pb-4 text-text-primary/70 leading-relaxed border-t border-utility-border/20 pt-3">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
