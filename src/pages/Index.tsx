import HeroSection from "../components/hero/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      {/* Additional Content Sections */}
      <section id="community" className="min-h-screen bg-card flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Our Community</h2>
          <p className="text-xl text-muted-foreground">
            Connect with like-minded innovators and build the future together.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
