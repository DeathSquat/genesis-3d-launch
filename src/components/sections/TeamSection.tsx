import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import Floating3DCard from '../3d/Floating3DCard';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Team3DScene = () => {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={0.5} color="#a855f7" />
          <pointLight position={[-5, -5, 5]} intensity={0.3} color="#c084fc" />
          
          <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
            <Floating3DCard position={[-3, 1, -2]} color="#8b5cf6" scale={0.6} speed={0.5} />
          </Float>
          <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
            <Floating3DCard position={[3, -1, -2]} color="#a855f7" scale={0.8} speed={0.7} />
          </Float>
          <Float speed={1.8} rotationIntensity={0.1} floatIntensity={0.25}>
            <Floating3DCard position={[0, 2, -3]} color="#c084fc" scale={0.5} speed={0.6} />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      image: "/api/placeholder/300/300",
      bio: "Visionary leader with 10+ years in tech innovation and community building.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Sarah Johnson", 
      role: "CTO",
      image: "/api/placeholder/300/300",
      bio: "Full-stack developer and architect of Genesis's technical infrastructure.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Community",
      image: "/api/placeholder/300/300", 
      bio: "Community strategist focused on creating meaningful connections and growth.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Elena Kim",
      role: "Creative Director",
      image: "/api/placeholder/300/300",
      bio: "Design enthusiast bringing visual storytelling and brand excellence to Genesis.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="team" className="relative min-h-screen py-20 bg-background overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-20">
        <Team3DScene />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fade-in-up">
            Meet Our Team
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            The passionate individuals driving Genesis forward and building the future together.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative p-6 rounded-3xl bg-card border border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-purple">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-primary p-1">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-4xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-glow-pulse"></div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={member.social.linkedin}
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-primary" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <Twitter className="w-4 h-4 text-primary" />
                  </a>
                  <a
                    href={member.social.github}
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <Github className="w-4 h-4 text-primary" />
                  </a>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-3xl bg-genesis-surface/30 border border-primary/20 backdrop-blur-sm">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              We're always looking for passionate individuals to help shape the future of Genesis.
            </p>
            <button className="px-8 py-3 bg-gradient-primary text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-purple">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;