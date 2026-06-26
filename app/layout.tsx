import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadataBase = new URL('https://nexus-ai.io');

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: 'NEXUS AI - Intelligent Data Automation Platform',
    template: '%s | NEXUS AI',
  },
  description: 'Transform your business with AI-driven data automation. Connect, process, and analyze your data streams with unprecedented speed and accuracy. Enterprise-grade platform trusted by 500+ companies.',
  keywords: ['data automation', 'AI', 'machine learning', 'data pipeline', 'analytics', 'enterprise', 'ETL', 'data processing'],
  authors: [{ name: 'NEXUS AI' }],
  creator: 'NEXUS AI',
  publisher: 'NEXUS AI',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexus-ai.io',
    siteName: 'NEXUS AI',
    title: 'NEXUS AI - Intelligent Data Automation Platform',
    description: 'Transform your business with AI-driven data automation. Connect, process, and analyze your data streams with unprecedented speed and accuracy.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NEXUS AI - Data Automation Platform for Enterprise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nexusai',
    creator: '@nexusai',
    title: 'NEXUS AI - Intelligent Data Automation Platform',
    description: 'Transform your business with AI-driven data automation. Connect, process, and analyze your data streams.',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'google-verification-code',
  },
  alternates: {
    canonical: 'https://nexus-ai.io',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background`}>
        {children}
      </body>
    </html>
  );
}
