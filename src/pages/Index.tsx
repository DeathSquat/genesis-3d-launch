import { useEffect } from "react";
import HeroSection from "../components/hero/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import TeamSection from "../components/sections/TeamSection";
import EventsSection from "../components/sections/EventsSection";
import SponsorForm from "../components/sections/SponsorForm";
import Footer from "../components/sections/Footer";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

const Index = () => {
  const { } = useSmoothScroll(); // Initialize smooth scrolling

  useEffect(() => {
    // Add intersection observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Events Section */}
      <EventsSection />
      
      {/* Sponsor Form */}
      <SponsorForm />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
