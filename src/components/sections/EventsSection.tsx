import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import Floating3DCard from '../3d/Floating3DCard';
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react';

const Events3DScene = () => {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[8, 8, 8]} intensity={0.6} color="#8b5cf6" />
          <pointLight position={[-8, -8, 8]} intensity={0.4} color="#a855f7" />
          
          <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.2}>
            <Floating3DCard position={[-4, 2, -3]} color="#8b5cf6" scale={0.4} speed={0.6} />
          </Float>
          <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.3}>
            <Floating3DCard position={[4, -1, -2]} color="#a855f7" scale={0.5} speed={0.8} />
          </Float>
          <Float speed={1.8} rotationIntensity={0.05} floatIntensity={0.25}>
            <Floating3DCard position={[0, 3, -4]} color="#c084fc" scale={0.3} speed={0.7} />
          </Float>
          <Float speed={1.1} rotationIntensity={0.05} floatIntensity={0.2}>
            <Floating3DCard position={[-2, -2, -3]} color="#ddd6fe" scale={0.4} speed={0.5} />
          </Float>
          
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

const EventsSection = () => {
  const events = [
    {
      title: "Genesis Global Summit 2024",
      date: "March 15-17, 2024",
      location: "San Francisco, CA",
      attendees: "500+",
      type: "Conference",
      description: "Our flagship annual event bringing together innovators from around the world.",
      status: "upcoming",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Innovation Workshop Series",
      date: "Every Saturday",
      location: "Online & Local Chapters",
      attendees: "150+",
      type: "Workshop",
      description: "Weekly hands-on sessions focused on emerging technologies and methodologies.",
      status: "recurring",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Community Hackathon",
      date: "January 20-22, 2024",
      location: "Austin, TX",
      attendees: "300+",
      type: "Hackathon",
      description: "48-hour collaborative coding event with exciting prizes and networking.",
      status: "past",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Leadership Masterclass",
      date: "February 10, 2024",
      location: "New York, NY",
      attendees: "100+",
      type: "Masterclass",
      description: "Exclusive session with industry leaders sharing insights and strategies.",
      status: "upcoming",
      image: "/api/placeholder/400/250"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'recurring': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'past': return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
      default: return 'text-primary bg-primary/10 border-primary/20';
    }
  };

  return (
    <section id="events" className="relative min-h-screen py-20 bg-genesis-surface overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-20">
        <Events3DScene />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fade-in-up">
            Organized Events
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Join our exciting events, workshops, and conferences designed to inspire, educate, and connect our community.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative p-6 rounded-3xl bg-card border border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-purple">
                {/* Event Image Placeholder */}
                <div className="relative mb-6 h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(event.status)}`}>
                      {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                    </span>
                  </div>
                </div>

                {/* Event Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Event Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{event.attendees} Attendees</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{event.type}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <button className="group/btn flex items-center space-x-2 text-primary hover:text-primary-foreground hover:bg-primary px-4 py-2 rounded-xl transition-all duration-300">
                      <span className="font-semibold">
                        {event.status === 'upcoming' ? 'Register Now' : 
                         event.status === 'recurring' ? 'Join Next Session' : 'View Highlights'}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Event Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { number: "50+", label: "Events Organized" },
            { number: "10K+", label: "Total Attendees" },
            { number: "25+", label: "Countries Reached" },
            { number: "95%", label: "Satisfaction Rate" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card/50 border border-primary/10 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;