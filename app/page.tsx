import React from 'react';
import HeroSection from './pages/landing/hero';
import PioneeringSection from './pages/landing/about';
import SolutionsSection from './pages/landing/innovative';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      <PioneeringSection />

      <SolutionsSection />
    </main>
  );
}
