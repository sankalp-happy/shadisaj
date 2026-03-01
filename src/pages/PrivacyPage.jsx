export default function PrivacyPage() {
  const sections = [
    {
      heading: '1. Information We Collect',
      text: 'We collect information you provide directly to us, such as when you create an account, make a booking, contact us, or sign up for newsletters. This may include your name, email address, phone number, and location.',
    },
    {
      heading: '2. How We Use Your Information',
      points: [
        'To provide, maintain, and improve our services',
        'To process bookings and send related confirmations',
        'To send promotional communications (with your consent)',
        'To respond to your comments and questions',
        'To monitor and analyze trends and usage',
      ],
    },
    {
      heading: '3. Sharing Your Information',
      text: 'We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted vendors and service providers who assist in operating our platform, provided they agree to keep it confidential.',
    },
    {
      heading: '4. Data Security',
      text: 'We implement industry-standard security measures to protect your personal data. However, no method of transmission over the internet is 100% secure and we cannot guarantee absolute security.',
    },
    {
      heading: '5. Cookies',
      text: 'We use cookies and similar tracking technologies to enhance your experience, analyze site traffic, and serve personalized content. You can instruct your browser to refuse all cookies, but some features may not function properly.',
    },
    {
      heading: '6. Your Rights',
      points: [
        'Access to your personal data',
        'Correction of inaccurate data',
        'Deletion of your personal data',
        'Objection to processing of your data',
        'Data portability',
      ],
    },
    {
      heading: '7. Contact Us',
      text: 'If you have any questions about this Privacy Policy, please contact us at privacy@shadisaj.com or through our Contact page.',
    },
  ];

  return (
    <div className="min-h-screen bg-background-main pb-16 md:pb-0">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-primary/10 via-background-card to-brand-secondary/10 border-b-2 border-utility-border/30 py-12">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">Privacy Policy</h1>
          <p className="text-text-primary/60">Last updated: January 2025</p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-3xl py-12">
        <div className="bg-background-card rounded-2xl shadow-xl border-2 border-utility-border/30 p-8 md:p-12">
          <p className="text-text-primary/80 mb-8 leading-relaxed">
            Shadisaj (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
          </p>
          {sections.map((s, i) => (
            <div key={i} className="mb-8">
              <h2 className="text-xl font-bold text-text-primary mb-3">{s.heading}</h2>
              {s.text && <p className="text-text-primary/80 leading-relaxed">{s.text}</p>}
              {s.points && (
                <ul className="space-y-2">
                  {s.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-text-primary/80">
                      <span className="text-brand-interactive mt-1">•</span> {p}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
