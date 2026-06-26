'use client';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarId: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'NEXUS AI transformed our data operations. We went from manual Excel sheets to fully automated pipelines in just two weeks. The ROI was immediate and measurable.',
    author: 'Sarah Chen',
    role: 'VP of Data Engineering',
    company: 'TechFlow Inc.',
    avatarId: '123456789',
    rating: 5,
  },
  {
    id: '2',
    quote: 'The predictive analytics feature alone saved us hundreds of engineering hours. We now catch anomalies before they become problems. Game changer.',
    author: 'Marcus Rodriguez',
    role: 'CTO',
    company: 'DataScale',
    avatarId: '234567890',
    rating: 5,
  },
  {
    id: '3',
    quote: 'Finally, a data platform that just works. The visual pipeline builder meant our analysts could create complex transformations without needing dev resources.',
    author: 'Emma Watson',
    role: 'Head of Analytics',
    company: 'FinanceFirst',
    avatarId: '345678901',
    rating: 5,
  },
  {
    id: '4',
    quote: 'We evaluated 12 different solutions. NEXUS AI was the only one that could handle our scale while keeping latency under 50ms. Absolutely incredible performance.',
    author: 'David Park',
    role: 'Director of Platform',
    company: 'StreamLabs',
    avatarId: '456789012',
    rating: 5,
  },
];

const logos = [
  { name: 'TechCorp', id: 'tech' },
  { name: 'DataSync', id: 'data' },
  { name: 'CloudBase', id: 'cloud' },
  { name: 'AIVentures', id: 'ai' },
  { name: 'ScaleUp', id: 'scale' },
  { name: 'Nextera', id: 'next' },
  { name: 'QuantumIO', id: 'quantum' },
  { name: 'DataPrime', id: 'prime' },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < rating ? 'text-forsythia' : 'text-muted-foreground/20'}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonial.author.split(' ').map(n => n[0]).join('');

  return (
    <article className="card-glass flex flex-col h-full group">
      {/* Rating */}
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Quote */}
      <blockquote className="mb-6 flex-grow">
        <p className="text-muted-foreground font-body leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>

      {/* Author */}
      <footer className="flex items-center gap-4 pt-6 border-t border-white/10">
        <div className="relative">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-forsythia to-saffron flex items-center justify-center text-background font-bold text-sm">
            {initials}
          </div>
          <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-emerald-500 border-2 border-background flex items-center justify-center">
            <svg className="h-2.5 w-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="m5 12 5 5L20 7" />
            </svg>
          </div>
        </div>
        <div>
          <div className="font-semibold text-foreground font-body">{testimonial.author}</div>
          <div className="text-sm text-muted-foreground font-body">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
      </footer>
    </article>
  );
}

function CompanyLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center h-12 px-6 opacity-40 hover:opacity-70 transition-hover">
      <span className="font-mono text-lg font-semibold tracking-tight text-muted-foreground whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute bottom-1/3 left-1/3 w-[600px] h-[600px] bg-saffron/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="section-header">
          <span className="section-badge">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Testimonials
          </span>
          <h2>
            Trusted by <span className="text-gradient">Innovators</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body mt-6">
            Join hundreds of forward-thinking companies transforming their data operations.
          </p>
        </header>

        {/* Company logos marquee */}
        <div className="relative mb-20 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((logo, i) => (
              <CompanyLogo key={`${logo.id}-${i}`} name={logo.name} />
            ))}
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-20 glass rounded-3xl p-8 lg:p-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-mono font-bold text-gradient mb-2">4.9/5</div>
              <div className="text-muted-foreground font-body">Average Rating</div>
            </div>
            <div className="text-center sm:border-l border-white/10">
              <div className="text-4xl lg:text-5xl font-mono font-bold text-gradient mb-2">500+</div>
              <div className="text-muted-foreground font-body">Happy Teams</div>
            </div>
            <div className="text-center sm:border-l border-white/10">
              <div className="text-4xl lg:text-5xl font-mono font-bold text-gradient mb-2">40%</div>
              <div className="text-muted-foreground font-body">Avg. Time Saved</div>
            </div>
            <div className="text-center sm:border-l border-white/10">
              <div className="text-4xl lg:text-5xl font-mono font-bold text-gradient mb-2">99.9%</div>
              <div className="text-muted-foreground font-body">Uptime SLA</div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center glass rounded-3xl p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-forsythia/5 via-transparent to-saffron/5" />
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4">
              Ready to Transform Your Data Operations?
            </h3>
            <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
              Join 500+ companies already using NEXUS AI to automate their data pipelines and drive business results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#pricing" className="btn-primary group">
                Start Free Trial
                <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a href="#" className="btn-secondary">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
