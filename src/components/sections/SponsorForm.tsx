import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import Floating3DCard from '../3d/Floating3DCard';
import GenesisButton from '../ui/GenesisButton';
import { Send, Building, Mail, Phone, DollarSign } from 'lucide-react';

const Sponsor3DScene = () => {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={0.6} color="#8b5cf6" />
          <pointLight position={[-5, 5, 5]} intensity={0.4} color="#a855f7" />
          
          <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
            <Floating3DCard position={[-3, 2, -2]} color="#8b5cf6" scale={0.5} speed={0.8} />
          </Float>
          <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.2}>
            <Floating3DCard position={[3, -1, -3]} color="#a855f7" scale={0.6} speed={0.6} />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};

const SponsorForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    sponsorshipType: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  const sponsorshipTiers = [
    {
      name: "Platinum",
      price: "$10,000+",
      benefits: ["Logo on all materials", "Speaking opportunity", "Premium booth space", "VIP networking access"]
    },
    {
      name: "Gold",
      price: "$5,000+",
      benefits: ["Logo on event materials", "Standard booth space", "Networking access", "Social media mentions"]
    },
    {
      name: "Silver",
      price: "$2,500+",
      benefits: ["Logo on website", "Networking access", "Social media mentions", "Event swag inclusion"]
    },
    {
      name: "Bronze",
      price: "$1,000+",
      benefits: ["Website listing", "Social media mentions", "Event swag inclusion", "Community recognition"]
    }
  ];

  return (
    <section id="sponsor" className="relative min-h-screen py-20 bg-background overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-15">
        <Sponsor3DScene />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fade-in-up">
            Partner With Genesis
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Join us in shaping the future. Become a sponsor and connect with our vibrant community of innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sponsorship Tiers */}
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Sponsorship Tiers
            </h3>
            
            <div className="space-y-6">
              {sponsorshipTiers.map((tier, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-card border border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {tier.name}
                    </h4>
                    <span className="text-2xl font-bold text-primary">
                      {tier.price}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="p-8 rounded-3xl bg-card border border-primary/20 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-foreground mb-8">
                Get In Touch
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-genesis-surface border border-primary/20 focus:border-primary focus:ring-4 focus:ring-primary/20 text-foreground placeholder-muted-foreground transition-all duration-300"
                        placeholder="Your Company"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-genesis-surface border border-primary/20 focus:border-primary focus:ring-4 focus:ring-primary/20 text-foreground placeholder-muted-foreground transition-all duration-300"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-genesis-surface border border-primary/20 focus:border-primary focus:ring-4 focus:ring-primary/20 text-foreground placeholder-muted-foreground transition-all duration-300"
                        placeholder="your@company.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-genesis-surface border border-primary/20 focus:border-primary focus:ring-4 focus:ring-primary/20 text-foreground placeholder-muted-foreground transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Sponsorship Type
                    </label>
                    <select
                      name="sponsorshipType"
                      value={formData.sponsorshipType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-genesis-surface border border-primary/20 focus:border-primary focus:ring-4 focus:ring-primary/20 text-foreground transition-all duration-300"
                      required
                    >
                      <option value="">Select Tier</option>
                      <option value="platinum">Platinum ($10,000+)</option>
                      <option value="gold">Gold ($5,000+)</option>
                      <option value="silver">Silver ($2,500+)</option>
                      <option value="bronze">Bronze ($1,000+)</option>
                      <option value="custom">Custom Package</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Budget Range
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-genesis-surface border border-primary/20 focus:border-primary focus:ring-4 focus:ring-primary/20 text-foreground placeholder-muted-foreground transition-all duration-300"
                        placeholder="e.g., $5,000 - $10,000"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-genesis-surface border border-primary/20 focus:border-primary focus:ring-4 focus:ring-primary/20 text-foreground placeholder-muted-foreground transition-all duration-300 resize-none"
                    placeholder="Tell us about your goals and how you'd like to partner with Genesis..."
                  ></textarea>
                </div>

                <GenesisButton type="submit" variant="primary" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Sponsorship Inquiry
                </GenesisButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorForm;