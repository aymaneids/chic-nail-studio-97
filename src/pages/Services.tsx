import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import ServiceCategory from '../components/ServiceCategory';
import { Sparkles } from 'lucide-react';
import Footer from '../components/Footer';

const Services = () => {
  // Service categories and their offerings
  const serviceCategories = [
    {
      name: 'Manicures',
      items: [
        { service: 'Classic Manicure', price: '$20' },
        { service: 'Gel Manicure', price: '$35' },
        { service: 'Spa Manicure', price: '$30' },
        { service: 'Deluxe Manicure', price: '$40' },
        { service: 'Polish Change (Hands)', price: '$12' },
      ],
    },
    {
      name: 'Pedicures',
      items: [
        { service: 'Classic Pedicure', price: '$35' },
        { service: 'Gel Pedicure', price: '$50' },
        { service: 'Spa Pedicure', price: '$45' },
        { service: 'Deluxe Pedicure', price: '$55' },
        { service: 'Polish Change (Feet)', price: '$15' },
      ],
    },
    {
      name: 'Nail Enhancements',
      items: [
        { service: 'Acrylic Full Set', price: '$40+' },
        { service: 'Acrylic Fill', price: '$30+' },
        { service: 'Gel Full Set', price: '$45+' },
        { service: 'Gel Fill', price: '$35+' },
        { service: 'Dip Powder', price: '$40+' },
        { service: 'Nail Repair (per nail)', price: '$5' },
      ],
    },
    {
      name: 'Nail Art & Add-Ons',
      items: [
        { service: 'Simple Design (per nail)', price: '$5+' },
        { service: 'Complex Design (per nail)', price: '$8+' },
        { service: 'French Tips', price: '$10' },
        { service: 'Gems/Rhinestones', price: '$5+' },
        { service: 'Chrome/Holographic', price: '$10' },
        { service: 'Hand/Foot Massage (10 min)', price: '$15' },
      ],
    },
    {
      name: 'Packages',
      items: [
        { service: 'Classic Mani-Pedi Combo', price: '$50' },
        { service: 'Gel Mani-Pedi Combo', price: '$80' },
        { service: 'Deluxe Spa Package', price: '$90' },
        { service: 'Bridal Package', price: '$100+' },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
          <img
            src="https://mountainsidespa.com/wp-content/uploads/2021/02/Top-7-Factors-to-Consider-When-Choosing-a-Spa.jpg"
            alt="Body sculpting service"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="section-container z-10 text-white">
          <AnimatedSection animation="slide-up" className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg md:text-xl mb-6 text-white/90">
              Discover our comprehensive range of massage and body sculpting services
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="section-container">
        <AnimatedSection animation="fade-in" className="text-center max-w-3xl mx-auto">
          <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 inline-block">
            Nail Services
          </span>
          <h2 className="text-3xl font-bold mb-6">Experience Premium Nail Care</h2>
          <p className="text-muted-foreground">
            At Nu Image Nails Spa, we offer a wide range of nail services to meet your needs.
            From basic manicures and pedicures to intricate nail art and luxurious spa treatments,
            our skilled technicians are dedicated to providing you with the best nail care experience.
          </p>
        </AnimatedSection>
      </section>

      {/* Service List */}
      <section className="section-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {serviceCategories.map((category, index) => (
            <ServiceCategory 
              key={category.name} 
              name={category.name} 
              items={category.items} 
              index={index} 
            />
          ))}
        </div>
      </section>

      {/* Additional Information */}
      <section className="section-container bg-secondary/50 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-right">
            <img
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80"
              alt="Nail art example"
              className="rounded-xl shadow-elegant"
            />
          </AnimatedSection>

          <AnimatedSection animation="slide-left">
            <h2 className="text-3xl font-bold mb-6">Custom Nail Art</h2>
            <p className="text-muted-foreground mb-4">
              Express your unique style with our custom nail art services. Our talented nail artists
              can create virtually any design you desire, from simple patterns to elaborate,
              hand-painted masterpieces.
            </p>
            <p className="text-muted-foreground mb-4">
              Whether you're looking for seasonal designs, special occasion nails, or something
              completely unique, we can bring your vision to life. Pricing varies based on complexity
              and time required.
            </p>
            <div className="mt-6">
              <a href="tel:7735615841" className="button-primary">
                Book Your Appointment
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Policies */}
      <section className="section-container">
        <AnimatedSection animation="fade-in" className="text-center max-w-3xl mx-auto">
          <span className="px-4 py-1 rounded-full bg-nu-blue/10 text-nu-blue text-sm font-medium mb-4 inline-block">
            Good to Know
          </span>
          <h2 className="text-3xl font-bold mb-6">Service Policies</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <AnimatedSection animation="slide-up">
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-3">Appointment Information</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• We accept both appointments and walk-ins</li>
                <li>• Call (773) 561-5841 to schedule your appointment</li>
                <li>• Please arrive 5-10 minutes early for your appointment</li>
                <li>• 24-hour notice is appreciated for cancellations</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={100}>
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-3">Payment & Gratuity</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• We accept cash and all major credit cards</li>
                <li>• Prices may vary based on nail length and design complexity</li>
                <li>• Gift certificates are available for purchase</li>
                <li>• Gratuity is not included in service prices</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-secondary/50 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Beautiful Nails?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us today to schedule your appointment at Nu Image Nails Spa.
              We look forward to serving you!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:7735615841" className="button-primary">
                Call to Book
              </a>
              <a href="/appointments" className="button-secondary">
                View Hours & Booking Info
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Add Footer */}
      <Footer />
    </div>
  );
};

export default Services;
