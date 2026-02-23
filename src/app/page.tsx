import SEOPageLayout from '../components/SEOPageLayout';
import Hero from '../components/Hero';
import WhatIs from '../components/WhatIs';
import Features from '../components/Features';
import VoiceDemo from '../components/VoiceDemo';
import CallDemos from '../components/CallDemos';
import WhatsAppDemos from '../components/WhatsAppDemos';
import Integrations from '../components/Integrations';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <SEOPageLayout lang="he" alternateUrl="/en">
      <Hero />
      <WhatIs />
      <Features />
      <VoiceDemo />
      <CallDemos />
      <WhatsAppDemos />
      <Integrations />
      <FAQ />
      <Contact />
    </SEOPageLayout>
  );
}
