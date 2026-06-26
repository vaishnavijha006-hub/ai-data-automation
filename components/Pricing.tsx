'use client';

import { useState, useCallback, useMemo, memo } from 'react';

type Currency = 'USD' | 'EUR' | 'INR';
type BillingCycle = 'monthly' | 'annual';

interface PricingMatrix {
  tiers: {
    id: string;
    name: string;
    description: string;
    features: string[];
    highlighted?: boolean;
    cta: string;
    badge?: string;
  }[];
  basePrices: Record<string, number>;
  regionalMultipliers: Record<Currency, number>;
  annualDiscount: number;
  currencySymbols: Record<Currency, string>;
}

const pricingMatrix: PricingMatrix = {
  tiers: [
    {
      id: 'basic',
      name: 'Basic',
      description: 'Perfect for small teams getting started with intelligent data automation.',
      features: [
        'Up to 10,000 data points/day',
        '5 pipeline connections',
        'Basic analytics dashboard',
        'Email support (48h response)',
        '7-day data retention',
        'Community access',
      ],
      cta: 'Get Started',
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'For growing teams that demand more power and flexibility.',
      features: [
        'Up to 500,000 data points/day',
        'Unlimited pipeline connections',
        'Advanced analytics & reporting',
        'Priority support (24h response)',
        '30-day data retention',
        'Custom transformations',
        'Full API access',
        'Team collaboration tools',
      ],
      highlighted: true,
      cta: 'Start Free Trial',
      badge: 'Most Popular',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Custom solutions for organizations operating at scale.',
      features: [
        'Unlimited data processing',
        'Unlimited integrations',
        'Dedicated success manager',
        '24/7 phone & chat support',
        'Unlimited data retention',
        'Custom SLA guarantees',
        'On-premise deployment',
        'SSO & SCIM provisioning',
      ],
      cta: 'Contact Sales',
    },
  ],
  basePrices: {
    basic: 49,
    pro: 149,
    enterprise: 0,
  },
  regionalMultipliers: {
    USD: 1.0,
    EUR: 0.92,
    INR: 83.0,
  },
  annualDiscount: 0.2,
  currencySymbols: {
    USD: '$',
    EUR: '\u20AC',
    INR: '\u20B9',
  },
};

function formatPrice(value: number, currency: Currency): string {
  const formatted = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.ceil(value));
  return `${pricingMatrix.currencySymbols[currency]}${formatted}`;
}

interface PriceDisplayProps {
  tierId: string;
  currency: Currency;
  cycle: BillingCycle;
}

const PriceDisplay = memo(function PriceDisplay({ tierId, currency, cycle }: PriceDisplayProps) {
  const price = useMemo(() => {
    const basePrice = pricingMatrix.basePrices[tierId];
    if (basePrice === 0) return null;

    const regionalPrice = basePrice * pricingMatrix.regionalMultipliers[currency];
    const discountedPrice = cycle === 'annual'
      ? regionalPrice * (1 - pricingMatrix.annualDiscount)
      : regionalPrice;

    return formatPrice(discountedPrice, currency);
  }, [tierId, currency, cycle]);

  const originalPrice = useMemo(() => {
    if (pricingMatrix.basePrices[tierId] === 0) return null;
    return formatPrice(
      pricingMatrix.basePrices[tierId] * pricingMatrix.regionalMultipliers[currency],
      currency
    );
  }, [tierId, currency]);

  const savings = useMemo(() => {
    if (pricingMatrix.basePrices[tierId] === 0) return null;

    const basePrice = pricingMatrix.basePrices[tierId];
    const monthlyTotal = basePrice * pricingMatrix.regionalMultipliers[currency] * 12;
    const annualTotal = monthlyTotal * (1 - pricingMatrix.annualDiscount);

    return formatPrice(monthlyTotal - annualTotal, currency);
  }, [tierId, currency]);

  if (pricingMatrix.basePrices[tierId] === 0) {
    return (
      <div className="flex flex-col items-center lg:items-start">
        <span className="text-5xl font-mono font-bold text-foreground">Custom</span>
        <span className="text-muted-foreground font-body mt-2">Contact us for pricing</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center lg:items-start">
      <div className="flex items-baseline gap-2">
        <span className="text-5xl font-mono font-bold text-foreground">{price}</span>
        <span className="text-muted-foreground font-body text-lg">
          /{cycle === 'annual' ? 'mo' : 'month'}
        </span>
      </div>
      {cycle === 'annual' && (
        <div className="mt-2">
          <span className="text-sm text-muted-foreground line-through mr-2">{originalPrice}</span>
          <span className="text-sm text-cyan-400 font-body">Save {savings}/year</span>
        </div>
      )}
      <span className="text-sm text-muted-foreground font-body mt-1">
        {cycle === 'annual' ? 'Billed annually' : 'Billed monthly'}
      </span>
    </div>
  );
});

interface PricingCardProps {
  tierId: string;
  currency: Currency;
  cycle: BillingCycle;
}

const PricingCard = memo(function PricingCard({ tierId, currency, cycle }: PricingCardProps) {
  const tier = useMemo(() => {
    return pricingMatrix.tiers.find(t => t.id === tierId)!;
  }, [tierId]);

  const isHighlighted = tier.highlighted;

  return (
    <article
      className={`
        relative rounded-3xl p-8 lg:p-10 h-full flex flex-col
        ${isHighlighted
          ? 'glass-hover scale-[1.02] z-10'
          : 'glass hover:border-white/15'
        }
        transition-all duration-350 ease-out
      `}
    >
      {/* Badge for highlighted tier */}
      {tier.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full text-sm font-semibold text-background shadow-lg shadow-sky-500/30">
          {tier.badge}
        </div>
      )}

      {/* Header */}
      <header className="mb-8">
        <h3 className="text-2xl font-semibold text-foreground mb-3">{tier.name}</h3>
        <p className="text-muted-foreground font-body leading-relaxed">{tier.description}</p>
      </header>

      {/* Price */}
      <div className="mb-8">
        <PriceDisplay tierId={tierId} currency={currency} cycle={cycle} />
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-10 flex-grow">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-muted-foreground font-body">
            <svg className={`h-5 w-5 flex-shrink-0 mt-0.5 ${isHighlighted ? 'text-cyan-400' : 'text-sky-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m5 12 5 5L20 7" />
            </svg>
            <span className="leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className={`
          w-full py-4 px-6 rounded-xl font-semibold font-body text-base
          transition-all duration-hover
          ${isHighlighted
            ? 'bg-gradient-to-r from-sky-500 via-cyan-400 to-teal-400 text-background shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02]'
            : 'glass border-2 border-white/10 text-foreground hover:border-white/25 hover:bg-white/5'
          }
        `}
      >
        {tier.cta}
      </button>
    </article>
  );
});

export default function Pricing() {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [cycle, setCycle] = useState<BillingCycle>('annual');

  const handleCurrencyChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value as Currency);
  }, []);

  const handleMonthlyClick = useCallback(() => setCycle('monthly'), []);
  const handleAnnualClick = useCallback(() => setCycle('annual'), []);

  const tierIds = useMemo(() => pricingMatrix.tiers.map(t => t.id), []);

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="section-header">
          <span className="section-badge">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            Pricing
          </span>
          <h2>
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-muted-foreground font-body mt-6">
            Choose the plan that scales with your needs. No hidden fees, no surprises.
            Cancel anytime.
          </p>
        </header>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          {/* Billing toggle */}
          <div className="glass rounded-full p-1.5 flex items-center">
            <button
              onClick={handleMonthlyClick}
              className={`px-6 py-3 rounded-full text-sm font-body transition-hover ${
                cycle === 'monthly'
                  ? 'bg-white/10 text-foreground font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={handleAnnualClick}
              className={`px-6 py-3 rounded-full text-sm font-body transition-hover flex items-center gap-2 ${
                cycle === 'annual'
                  ? 'bg-white/10 text-foreground font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Annual
              <span className="px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-400 text-xs font-medium">
                -{Math.round(pricingMatrix.annualDiscount * 100)}%
              </span>
            </button>
          </div>

          {/* Currency selector */}
          <div className="glass rounded-xl flex items-center px-4 py-3">
            <svg className="h-4 w-4 text-muted-foreground mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <select
              value={currency}
              onChange={handleCurrencyChange}
              className="bg-transparent text-foreground text-sm font-body outline-none cursor-pointer pr-4"
              aria-label="Select currency"
            >
              <option value="USD" className="bg-background">USD - {pricingMatrix.currencySymbols.USD}</option>
              <option value="EUR" className="bg-background">EUR - {pricingMatrix.currencySymbols.EUR}</option>
              <option value="INR" className="bg-background">INR - {pricingMatrix.currencySymbols.INR}</option>
            </select>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {tierIds.map((tierId) => (
            <PricingCard
              key={tierId}
              tierId={tierId}
              currency={currency}
              cycle={cycle}
            />
          ))}
        </div>

        {/* Trust message */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground font-body mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m5 12 5 5L20 7" />
              </svg>
              Cancel anytime
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m5 12 5 5L20 7" />
              </svg>
              No hidden fees
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m5 12 5 5L20 7" />
              </svg>
              30-day money back
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
