
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground font-playfair">
                Nu Image
              </span>
              <span className="text-xl text-nu-pink font-bold">
                Nails Spa
              </span>
            </div>
            <p className="text-muted-foreground text-sm mt-2">
              Your destination for stunning nails in Lincoln Square, Chicago. Expert nail artistry, impeccable service, beautiful results.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <a
                href="https://www.instagram.com/nuimagenailsspa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-nu-pink transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                About Us
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Services
              </Link>
              <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Gallery
              </Link>
              <Link to="/appointments" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Appointments
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="tel:7735615841"
                className="flex items-start space-x-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone size={18} className="mt-0.5 group-hover:text-primary transition-colors" />
                <span className="text-sm">(773) 561-5841</span>
              </a>
              <a
                href="https://maps.google.com/?q=1931+W+Foster+Ave,+Chicago,+IL+60640"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <MapPin size={18} className="mt-0.5 group-hover:text-primary transition-colors" />
                <span className="text-sm">1931 W Foster Ave, Chicago, IL 60640</span>
              </a>
              <div className="flex items-start space-x-3 text-muted-foreground">
                <Clock size={18} className="mt-0.5" />
                <div className="text-sm">
                  <p>Monday - Saturday: 10 AM - 7 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Nu Image Nails Spa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
