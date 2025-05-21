import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Templates from '@/components/Templates';
import Testimonials from '@/components/Testimonials';
import ComparisonTable from '@/components/ComparisonTable';
import Pricing from '@/components/Pricing';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <Templates />
      <Testimonials />
      <ComparisonTable />
      <Pricing />
      <CallToAction />
    </>
  );
}
