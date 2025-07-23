import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Floating3DCard from '../3d/Floating3DCard';
import { Shield, Users, Rocket, Target } from 'lucide-react';

const About3DScene = () => {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.6} color="#8b5cf6" />
          
          <Floating3DCard position={[-2, 0, 0]} color="#8b5cf6" speed={0.8} />
          <Floating3DCard position={[2, 0, 0]} color="#a855f7" speed={1.2} />
          
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            autoRotate
            autoRotateSpeed={1}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

const AboutSection = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Innovation",
      description: "Leading the way in cutting-edge technology and creative solutions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Building strong connections and fostering collaborative growth."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Growth",
      description: "Accelerating personal and professional development for all members."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "Committed to delivering exceptional results and experiences."
    }
  ];

  return (
    <section id="about" className="relative min-h-screen py-20 bg-card overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <About3DScene />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fade-in-up">
            About Genesis
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Genesis is more than just a community—it's a movement. We're pioneering the future of 
            collaborative innovation, bringing together visionaries, creators, and leaders to shape tomorrow.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-genesis-surface/50 border border-primary/20 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our Story
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded on the principles of innovation and collaboration, Genesis began as a vision 
              to create a space where ideas flourish and connections thrive. Today, we stand as a 
              beacon for those who dare to dream and build the impossible.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our community spans across continents, bringing together diverse perspectives and 
              expertise to tackle the world's most challenging problems while fostering personal 
              growth and meaningful relationships.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-primary/20 backdrop-blur-sm border border-primary/30 p-8 animate-glow-pulse">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl lg:text-6xl font-bold text-primary mb-4">10K+</div>
                  <div className="text-xl text-foreground font-semibold">Active Members</div>
                  <div className="text-muted-foreground mt-2">Worldwide Community</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;