import { useState, useEffect } from "react";
import Scene3D from "../3d/Scene3D";
import GenesisButton from "../ui/GenesisButton";
import { ChevronDown, Users, Zap, Globe } from "lucide-react";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero">
      {/* 3D Scene Background */}
      <Scene3D />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="w-full p-6 lg:p-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/699b8e14-8095-46ca-a14f-09ff0f1eb5be.png" 
                alt="Genesis Logo" 
                className="w-10 h-10 lg:w-12 lg:h-12 animate-glow-pulse"
              />
              <span className="text-2xl lg:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Genesis
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#community" className="text-foreground/80 hover:text-primary transition-colors">
                Community
              </a>
              <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
                Features
              </a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
                About
              </a>
              <GenesisButton variant="secondary" size="sm">
                Join Now
              </GenesisButton>
            </div>
          </div>
        </nav>

        {/* Main Hero Content */}
        <div className="flex-1 flex items-center justify-center px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className={`space-y-8 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Powered by Innovation
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="block text-foreground mb-2">Welcome to</span>
                <span className="block bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse">
                  Genesis
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl lg:text-3xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
                A revolutionary community where innovation meets connection. 
                <span className="block mt-2 text-primary font-semibold">
                  Join the future of collaborative excellence.
                </span>
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mt-12">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-foreground/60">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-foreground/60">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-foreground/60">Community Support</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                <GenesisButton variant="primary" size="lg" className="w-full sm:w-auto">
                  <Users className="w-5 h-5 mr-2" />
                  Join Genesis
                </GenesisButton>
                <GenesisButton variant="ghost" size="lg" className="w-full sm:w-auto">
                  <Globe className="w-5 h-5 mr-2" />
                  Explore Features
                </GenesisButton>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToContent}
            className="p-2 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors"
            aria-label="Scroll to content"
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-accent/10 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default HeroSection;