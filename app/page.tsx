import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureShowcase from '@/components/FeatureShowcase';
import Pricing from '@/components/Pricing';
import SocialProof from '@/components/SocialProof';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeatureShowcase />
      <Pricing />
      <SocialProof />
      <Footer />
    </main>
  );
}
