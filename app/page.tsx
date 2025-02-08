import React from 'react';
import HeroSection from './pages/landing/hero';
import PioneeringSection from './pages/landing/about';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Pioneering Innovation Section */}
      <PioneeringSection />
    </main>
  );
}
