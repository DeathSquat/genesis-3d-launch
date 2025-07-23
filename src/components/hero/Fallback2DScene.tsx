import { useEffect, useState } from "react";

const Fallback2DScene = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 opacity-30">
          <div className="w-full h-full border-8 border-primary/40 rounded-full animate-float"></div>
        </div>
        
        <div className="absolute top-40 right-32 w-24 h-24 opacity-20" style={{ animationDelay: '1s' }}>
          <div className="w-full h-full border-6 border-secondary/60 rounded-full animate-float"></div>
        </div>
        
        <div className="absolute bottom-32 left-40 w-20 h-20 opacity-25" style={{ animationDelay: '2s' }}>
          <div className="w-full h-full border-4 border-accent/50 rounded-full animate-float"></div>
        </div>
        
        <div className="absolute bottom-20 right-20 w-36 h-36 opacity-15" style={{ animationDelay: '3s' }}>
          <div className="w-full h-full border-8 border-primary/30 rounded-full animate-float"></div>
        </div>

        {/* Center Logo Area with Chain-like Effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`relative ${mounted ? 'animate-scale-in' : 'opacity-0'}`}>
            {/* Main Chain Links */}
            <div className="relative w-48 h-48">
              {/* First Chain Link */}
              <div 
                className="absolute w-24 h-24 border-8 border-primary rounded-full shadow-glow animate-rotate-slow"
                style={{ 
                  top: '20%', 
                  left: '20%',
                  transform: 'rotate(45deg)',
                  background: 'linear-gradient(135deg, hsl(268 100% 60% / 0.3), hsl(258 100% 45% / 0.2))'
                }}
              />
              
              {/* Second Chain Link */}
              <div 
                className="absolute w-24 h-24 border-8 border-secondary rounded-full shadow-purple animate-rotate-slow"
                style={{ 
                  bottom: '20%', 
                  right: '20%',
                  transform: 'rotate(-45deg)',
                  background: 'linear-gradient(135deg, hsl(258 100% 45% / 0.3), hsl(280 100% 70% / 0.2))',
                  animationDirection: 'reverse',
                  animationDuration: '25s'
                }}
              />
              
              {/* Connecting Element */}
              <div 
                className="absolute w-16 h-16 border-6 border-accent rounded-full animate-glow-pulse"
                style={{ 
                  top: '50%', 
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'linear-gradient(135deg, hsl(280 100% 70% / 0.4), hsl(268 100% 60% / 0.3))'
                }}
              />
            </div>
          </div>
        </div>

        {/* Particle-like dots */}
        {mounted && Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Fallback2DScene;