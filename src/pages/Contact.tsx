
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
          <img
            src="https://images.unsplash.com/photo-1631214505544-0f80335804e4?auto=format&fit=crop&q=80"
            alt="Nail salon contact"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="section-container z-10 text-white">
          <AnimatedSection animation="slide-up" className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl mb-6 text-white/90">
              We'd love to hear from you
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <AnimatedSection animation="slide-right">
            <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 inline-block">
              Get in Touch
            </span>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="text-muted-foreground mb-8">
              Have questions about our services or want to book an appointment? Reach out to us using any of the methods below.
              We look forward to hearing from you!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground mb-1">Call us to book an appointment or ask questions</p>
                  <a href="tel:7735615841" className="text-primary font-medium hover:underline">
                    (773) 561-5841
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Address</h3>
                  <p className="text-muted-foreground mb-1">Visit our salon in Lincoln Square</p>
                  <a 
                    href="https://maps.google.com/?q=1931+W+Foster+Ave,+Chicago,+IL+60640" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline"
                  >
                    1931 W Foster Ave, Chicago, IL 60640
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Instagram size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Social Media</h3>
                  <p className="text-muted-foreground mb-1">Follow us for nail inspiration and updates</p>
                  <a 
                    href="https://www.instagram.com/nuimagenailsspa/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline"
                  >
                    @nuimagenailsspa
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-left">
            <div className="glass-card p-0 overflow-hidden rounded-xl h-[450px] shadow-elegant">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.2184115892647!2d-87.6787209!3d41.9762752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd1fd01c3d619%3A0x509c3569d8eb3f1b!2s1931%20W%20Foster%20Ave%2C%20Chicago%2C%20IL%2060640!5e0!3m2!1sen!2sus!4v1653443862975!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nu Image Nails Spa Location"
              ></iframe>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container py-16 bg-secondary/50 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Schedule Your Visit?</h2>
            <p className="text-muted-foreground mb-8">
              We can't wait to welcome you to Nu Image Nails Spa. Call us today or stop by our salon.
            </p>
            <a href="tel:7735615841" className="button-primary">
              Call to Book Now
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
