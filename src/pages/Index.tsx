
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
    <div className="min-h-screen bg-dark bg-data-pattern bg-fixed overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutUs />
      <OurSolution />
      <ContactSection />
      <ComingSoon />
      <Footer />
    </div>
  );
}
