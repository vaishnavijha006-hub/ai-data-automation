export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: 'brain' | 'zap' | 'shield' | 'layers' | 'chart' | 'code';
  detail: string;
  stats?: { value: string; label: string }[];
}

export const features: Feature[] = [
  {
    id: 'ai-engine',
    title: 'AI Processing Engine',
    description: 'Advanced neural networks that understand your data patterns and automate transformations.',
    icon: 'brain',
    detail: 'Our proprietary AI engine processes millions of data points per second, learning from your workflow patterns to optimize performance over time.',
    stats: [
      { value: '99.7%', label: 'Accuracy Rate' },
      { value: '<50ms', label: 'Latency' },
    ],
  },
  {
    id: 'real-time',
    title: 'Real-Time Sync',
    description: 'Instant data synchronization across all your connected sources and destinations.',
    icon: 'zap',
    detail: 'Zero-lag data pipelines keep your systems in perfect sync. Automatic conflict resolution ensures data integrity at every step.',
    stats: [
      { value: '0ms', label: 'Sync Delay' },
      { value: '50+', label: 'Integrations' },
    ],
  },
  {
    id: 'security',
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance controls built into every layer.',
    icon: 'shield',
    detail: 'SOC 2 Type II certified with end-to-end encryption. Role-based access control and comprehensive audit logging.',
    stats: [
      { value: '256-bit', label: 'Encryption' },
      { value: '99.99%', label: 'Uptime' },
    ],
  },
  {
    id: 'pipelines',
    title: 'Visual Pipelines',
    description: 'Drag-and-drop pipeline builder for complex data transformations.',
    icon: 'layers',
    detail: 'Create sophisticated data workflows visually. No code required, yet fully customizable for advanced users.',
    stats: [
      { value: '100+', label: 'Transforms' },
      { value: '5 min', label: 'Setup Time' },
    ],
  },
  {
    id: 'analytics',
    title: 'Predictive Analytics',
    description: 'ML-powered insights that forecast trends and surface anomalies.',
    icon: 'chart',
    detail: 'Built-in machine learning models analyze historical data to predict future patterns and detect outliers automatically.',
    stats: [
      { value: '95%', label: 'Prediction Accuracy' },
      { value: '30+', label: 'ML Models' },
    ],
  },
  {
    id: 'api',
    title: 'Developer API',
    description: 'Full-featured REST and GraphQL APIs for custom integrations.',
    icon: 'code',
    detail: 'Comprehensive API coverage with SDKs for all major languages. Webhook support for event-driven architectures.',
    stats: [
      { value: '500+', label: 'Endpoints' },
      { value: '99.9%', label: 'API Uptime' },
    ],
  },
];

export const featureIcons = {
  brain: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.98-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.5-1.54" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.98-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.5-1.54" />
    </svg>
  ),
  zap: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  shield: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  layers: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  ),
  chart: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  ),
  code: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
};
