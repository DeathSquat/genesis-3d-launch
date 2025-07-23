import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github, 
  Youtube,
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer = () => {
  const { scrollToSection, scrollToTop } = useSmoothScroll();

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About", action: () => scrollToSection('about') },
        { name: "Team", action: () => scrollToSection('team') },
        { name: "Events", action: () => scrollToSection('events') },
        { name: "Careers", action: () => console.log('Navigate to careers') }
      ]
    },
    {
      title: "Community",
      links: [
        { name: "Join Genesis", action: () => console.log('Join community') },
        { name: "Discord Server", action: () => console.log('Open Discord') },
        { name: "Member Portal", action: () => console.log('Member portal') },
        { name: "Support", action: () => console.log('Support') }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", action: () => console.log('Docs') },
        { name: "Blog", action: () => console.log('Blog') },
        { name: "Newsletter", action: () => console.log('Newsletter') },
        { name: "Press Kit", action: () => console.log('Press kit') }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", action: () => console.log('Privacy') },
        { name: "Terms of Service", action: () => console.log('Terms') },
        { name: "Cookie Policy", action: () => console.log('Cookies') },
        { name: "GDPR", action: () => console.log('GDPR') }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="relative bg-genesis-dark border-t border-primary/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-accent/20 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/lovable-uploads/699b8e14-8095-46ca-a14f-09ff0f1eb5be.png" 
                  alt="Genesis Logo" 
                  className="w-12 h-12 animate-glow-pulse"
                />
                <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Genesis
                </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Building the future through innovation, collaboration, and community. 
                Join us in shaping tomorrow's possibilities.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>hello@genesis.community</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section, index) => (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="text-foreground font-semibold mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <button
                          onClick={link.action}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-t border-primary/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Stay Connected
              </h3>
              <p className="text-muted-foreground">
                Get the latest updates, events, and community news delivered to your inbox.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-genesis-surface border border-primary/20 focus:border-primary focus:ring-4 focus:ring-primary/20 text-foreground placeholder-muted-foreground transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-primary text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-purple">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <span>© 2024 Genesis Community. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-glow-pulse" />
              <span>by our team</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;