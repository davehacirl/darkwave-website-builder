
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/home/Hero';
import AboutUs from '@/components/home/AboutUs';
import OurSolution from '@/components/home/OurSolution';
import ContactSection from '@/components/home/ContactSection';
import ComingSoon from '@/components/home/ComingSoon';
import Footer from '@/components/home/Footer';

export default function Index() {
  useEffect(() => {
    document.title = "Data Intelligence | Advanced Analytics Solutions";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <OurSolution />
        <ContactSection />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  );
}
