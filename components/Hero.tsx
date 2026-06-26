'use client';

const stats = [
  { value: '50M+', label: 'Data Points Processed Daily' },
  { value: '99.9%', label: 'Enterprise Uptime' },
  { value: '150+', label: 'Global Enterprises' },
];

const trustBadges = [
  { name: 'SOC 2 Type II', icon: 'shield' },
  { name: 'ISO 27001', icon: 'badge-check' },
  { name: 'GDPR Compliant', icon: 'lock' },
];

function ShieldIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function BadgeCheckIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function NetworkDiagram() {
  return (
    <svg
      viewBox="0 0 500 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-label="AI data automation network visualization showing interconnected data nodes"
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(56, 189, 248, 0.4)" />
          <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
        </radialGradient>
        <radialGradient id="accentGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(20, 184, 166, 0.4)" />
          <stop offset="100%" stopColor="rgba(20, 184, 166, 0)" />
        </radialGradient>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
          <stop offset="100%" stopColor="rgba(20, 184, 166, 0.3)" />
        </linearGradient>
      </defs>

      {/* Central glow */}
      <circle cx="250" cy="200" r="120" fill="url(#nodeGlow)" opacity="0.5" />

      {/* Connection beams */}
      <g stroke="url(#lineGrad)" strokeWidth="1.5" opacity="0.6">
        <line x1="250" y1="200" x2="100" y2="100" />
        <line x1="250" y1="200" x2="400" y2="100" />
        <line x1="250" y1="200" x2="100" y2="300" />
        <line x1="250" y1="200" x2="400" y2="300" />
        <line x1="250" y1="200" x2="250" y2="50" />
        <line x1="250" y1="200" x2="250" y2="350" />
      </g>

      {/* Orbit ring */}
      <ellipse cx="250" cy="200" rx="150" ry="100" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" />
      <ellipse cx="250" cy="200" rx="100" ry="60" stroke="rgba(255,255,255,0.04)" strokeWidth="1" fill="none" />

      {/* Outer nodes */}
      <g>
        <circle cx="100" cy="100" r="24" fill="url(#accentGlow)" />
        <circle cx="100" cy="100" r="12" fill="rgba(20, 184, 166, 0.9)" />
        <circle cx="100" cy="100" r="5" fill="white" />
      </g>
      <g>
        <circle cx="400" cy="100" r="24" fill="url(#accentGlow)" />
        <circle cx="400" cy="100" r="12" fill="rgba(20, 184, 166, 0.9)" />
        <circle cx="400" cy="100" r="5" fill="white" />
      </g>
      <g>
        <circle cx="100" cy="300" r="24" fill="url(#accentGlow)" />
        <circle cx="100" cy="300" r="12" fill="rgba(20, 184, 166, 0.9)" />
        <circle cx="100" cy="300" r="5" fill="white" />
      </g>
      <g>
        <circle cx="400" cy="300" r="24" fill="url(#accentGlow)" />
        <circle cx="400" cy="300" r="12" fill="rgba(20, 184, 166, 0.9)" />
        <circle cx="400" cy="300" r="5" fill="white" />
      </g>

      {/* Top and bottom nodes */}
      <g>
        <circle cx="250" cy="50" r="16" fill="url(#nodeGlow)" />
        <circle cx="250" cy="50" r="8" fill="rgba(56, 189, 248, 0.8)" />
      </g>
      <g>
        <circle cx="250" cy="350" r="16" fill="url(#nodeGlow)" />
        <circle cx="250" cy="350" r="8" fill="rgba(56, 189, 248, 0.8)" />
      </g>

      {/* Central brain node */}
      <g>
        <circle cx="250" cy="200" r="48" fill="url(#nodeGlow)" />
        <circle cx="250" cy="200" r="28" fill="rgba(56, 189, 248, 0.85)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <circle cx="250" cy="200" r="12" fill="white" />
      </g>

      {/* Data particles */}
      <circle r="4" fill="rgba(56, 189, 248, 0.9)">
        <animateMotion dur="3s" repeatCount="indefinite" path="M250,200 L100,100" />
        <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle r="3" fill="rgba(20, 184, 166, 0.9)">
        <animateMotion dur="3s" repeatCount="indefinite" path="M250,200 L400,300" begin="0.5s" />
        <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" begin="0.5s" />
      </circle>
      <circle r="3" fill="rgba(56, 189, 248, 0.9)">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M250,200 L250,50" begin="1s" />
        <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite" begin="1s" />
      </circle>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-radial-glow" />

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-float animation-delay-400" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs uppercase tracking-widest text-muted-foreground mb-8 animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              Now with GPT-5 Integration
            </div>

            {/* Headline */}
            <h1 className="mb-8 animate-fade-up animation-delay-100">
              <span className="block text-foreground">Automate Your</span>
              <span className="block text-gradient-animated">Data Pipeline</span>
              <span className="block text-foreground">With Intelligence</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-up animation-delay-150 font-body">
              Connect, transform, and analyze your data streams in real-time.
              NEXUS AI learns your workflow patterns and automates complex operations with precision.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 animate-fade-up animation-delay-200">
              <a href="#pricing" className="btn-primary w-full sm:w-auto group">
                Start Free Trial
                <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a href="#features" className="btn-secondary w-full sm:w-auto">
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Watch Demo
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-12 animate-fade-up animation-delay-250">
              {trustBadges.map((badge) => (
                <div
                  key={badge.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-muted-foreground transition-hover hover:text-foreground"
                >
                  <span className="text-cyan-400">
                    {badge.icon === 'shield' && <ShieldIcon />}
                    {badge.icon === 'badge-check' && <BadgeCheckIcon />}
                    {badge.icon === 'lock' && <LockIcon />}
                  </span>
                  <span className="text-xs font-body">{badge.name}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 animate-fade-up animation-delay-300">
              {stats.map((stat, i) => (
                <div key={stat.label} className={`${i === 0 ? 'text-left' : i === 1 ? 'text-center' : 'text-right'} lg:text-left`}>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-body">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block animate-fade-up animation-delay-200">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-3xl glass overflow-hidden">
                <NetworkDiagram />
              </div>
              {/* Ambient glow */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-sky-500/10 via-cyan-400/5 to-teal-500/10 blur-3xl -z-10" />
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-400/10 blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-up animation-delay-400">
        <a
          href="#features"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-hover group"
          aria-label="Scroll to features section"
        >
          <span className="text-xs font-body uppercase tracking-widest">Explore</span>
          <div className="p-2 rounded-full glass">
            <svg className="h-4 w-4 animate-bounce-subtle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
}
