import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/common/Footer';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
