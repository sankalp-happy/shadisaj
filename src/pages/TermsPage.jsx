export default function TermsPage() {
  const sections = [
    {
      heading: '1. Acceptance of Terms',
      text: 'By accessing and using Shadisaj, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.',
    },
    {
      heading: '2. Use of the Platform',
      points: [
        'You must be at least 18 years old to use this platform',
        'You are responsible for maintaining the confidentiality of your account credentials',
        'You agree to provide accurate and complete information',
        'You must not use the platform for any unlawful purposes',
        'You must not attempt to interfere with the proper functioning of the platform',
      ],
    },
    {
      heading: '3. Vendor Listings',
      text: 'Shadisaj is a marketplace connecting wedding service providers with customers. We do not directly provide wedding services. Vendors are independent third parties and we do not guarantee the quality of their services. Users should conduct their own due diligence before booking.',
    },
    {
      heading: '4. Payments and Bookings',
      text: 'All payments made through our platform are subject to our payment terms. Refunds and cancellations are governed by the individual vendor\'s policies. Shadisaj may charge a service fee for facilitating bookings.',
    },
    {
      heading: '5. Intellectual Property',
      text: 'All content on this platform, including logos, text, graphics, and software, is the property of Shadisaj and is protected by applicable intellectual property laws. You may not reproduce or distribute any content without our written permission.',
    },
    {
      heading: '6. Limitation of Liability',
      text: 'Shadisaj shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform. Our total liability shall not exceed the amount you paid to us in the past six months.',
    },
    {
      heading: '7. Modifications',
      text: 'We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes your acceptance of the new terms. We will notify users of significant changes via email.',
    },
    {
      heading: '8. Governing Law',
      text: 'These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.',
    },
    {
      heading: '9. Contact',
      text: 'For any questions regarding these Terms of Service, please contact us at legal@shadisaj.com.',
    },
  ];

  return (
    <div className="min-h-screen bg-background-main pb-16 md:pb-0">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-primary/10 via-background-card to-brand-secondary/10 border-b-2 border-utility-border/30 py-12">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">Terms of Service</h1>
          <p className="text-text-primary/60">Last updated: January 2025</p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-3xl py-12">
        <div className="bg-background-card rounded-2xl shadow-xl border-2 border-utility-border/30 p-8 md:p-12">
          <p className="text-text-primary/80 mb-8 leading-relaxed">
            Welcome to Shadisaj. Please read these Terms of Service carefully before using our platform.
            These terms constitute a legally binding agreement between you and Shadisaj.
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
