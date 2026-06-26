'use client';

import { useState, useEffect } from 'react';
import { features, featureIcons, type Feature } from '@/lib/features';

function FeatureCard({ feature, isActive }: { feature: Feature; isActive: boolean }) {
  const iconEl = featureIcons[feature.icon];

  return (
    <div
      className={`
        card-glass h-full cursor-pointer group relative overflow-hidden
        ${isActive ? 'card-highlight' : ''}
      `}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-forsythia/5 to-saffron/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isActive ? 'opacity-100' : ''}`} />

      <div className="relative z-10">
        <div className={`
          inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6
          ${isActive
            ? 'bg-gradient-to-br from-forsythia to-saffron shadow-lg shadow-forsythia/30'
            : 'glass group-hover:border-white/20'
          }
          transition-all duration-300
        `}>
          <span className={`${isActive ? 'text-background' : 'text-forsythia'} transition-colors`}>
            {iconEl}
          </span>
        </div>

        <h3 className="text-xl font-semibold mb-3 text-foreground">
          {feature.title}
        </h3>

        <p className="text-muted-foreground mb-6 font-body leading-relaxed">
          {feature.description}
        </p>

        {feature.stats && (
          <div className="flex gap-8 pt-6 border-t border-white/10">
            {feature.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-mono font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-body">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function BentoGrid({ activeId, onActivate }: { activeId: string; onActivate: (id: string) => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature) => (
        <button
          key={feature.id}
          onClick={() => onActivate(feature.id)}
          onKeyDown={(e) => e.key === 'Enter' && onActivate(feature.id)}
          className={`
            text-left
            ${feature.id === 'ai-engine' || feature.id === 'security' ? 'md:col-span-1 lg:col-span-2' : ''}
          `}
        >
          <FeatureCard feature={feature} isActive={activeId === feature.id} />
        </button>
      ))}
    </div>
  );
}

function FeatureAccordion({ activeId, onActivate }: { activeId: string; onActivate: (id: string) => void }) {
  return (
    <div className="space-y-3">
      {features.map((feature) => {
        const isOpen = activeId === feature.id;
        const iconEl = featureIcons[feature.icon];

        return (
          <div
            key={feature.id}
            className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-forsythia/30' : ''}`}
          >
            <button
              type="button"
              onClick={() => onActivate(isOpen ? '' : feature.id)}
              className="w-full flex items-center justify-between p-6 text-left"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-4">
                <div className={`
                  flex items-center justify-center w-12 h-12 rounded-xl
                  ${isOpen ? 'bg-gradient-to-br from-forsythia to-saffron' : 'glass'}
                `}>
                  <span className={isOpen ? 'text-background' : 'text-forsythia'}>
                    {iconEl}
                  </span>
                </div>
                <span className="text-lg font-semibold text-foreground">
                  {feature.title}
                </span>
              </div>
              <svg
                className={`h-5 w-5 text-muted-foreground transition-layout ${isOpen ? 'rotate-180 text-forsythia' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              className={`grid transition-layout ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pt-2">
                  <p className="text-muted-foreground mb-6 font-body leading-relaxed">
                    {feature.detail}
                  </p>
                  {feature.stats && (
                    <div className="flex gap-8 flex-wrap">
                      {feature.stats.map((stat) => (
                        <div key={stat.label}>
                          <div className="text-xl font-mono font-bold text-gradient mb-1">
                            {stat.value}
                          </div>
                          <div className="text-sm text-muted-foreground font-body">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState('ai-engine');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-forsythia/8 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="section-header">
          <span className="section-badge">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            </svg>
            Features
          </span>
          <h2>
            Built for <span className="text-gradient">Scale</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body mt-6 max-w-2xl mx-auto">
            Enterprise-grade capabilities designed to handle millions of data points
            with precision, reliability, and unmatched performance.
          </p>
        </header>

        {isMobile ? (
          <FeatureAccordion activeId={activeFeature} onActivate={setActiveFeature} />
        ) : (
          <BentoGrid activeId={activeFeature} onActivate={setActiveFeature} />
        )}
      </div>
    </section>
  );
}
