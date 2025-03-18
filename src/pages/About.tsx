import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Sparkles, Award, Users, Heart } from 'lucide-react';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
          <img
            src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80"
            alt="Spa wellness treatment"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="section-container z-10 text-white">
          <AnimatedSection animation="slide-up" className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl mb-6 text-white/90">
              Discover the story behind SimelaSpa
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* About Content */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-right">
            <img
              src="https://images.unsplash.com/photo-1625203135815-13f645704afc?auto=format&fit=crop&q=80"
              alt="Nail spa interior"
              className="rounded-xl shadow-elegant"
            />
          </AnimatedSection>

          <AnimatedSection animation="slide-left">
            <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 inline-block">
              Our Story
            </span>
            <h2 className="text-3xl font-bold mb-6">Welcome to SimelaSpa</h2>
            <p className="text-muted-foreground mb-4">
              SimelaSpa was established with a simple mission: to provide exceptional massage therapy 
              and body sculpting services in a clean, relaxing environment. Located in River Edge, 
              New Jersey, we have quickly become a local favorite.
            </p>
            <p className="text-muted-foreground mb-4">
              Our team of skilled therapists is passionate about wellness and dedicated to delivering 
              personalized service that exceeds your expectations. We use only high-quality products to ensure 
              the best results for our clients.
            </p>
            <p className="text-muted-foreground">
              Whether you're looking for a therapeutic massage, body sculpting treatment, or a relaxing spa day, 
              SimelaSpa is your destination for wellness in River Edge.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-container bg-secondary/50 py-16">
        <AnimatedSection animation="fade-in" className="text-center">
          <span className="px-4 py-1 rounded-full bg-nu-purple/10 text-nu-purple text-sm font-medium mb-4 inline-block">
            Our Values
          </span>
          <h2 className="section-title">What Sets Us Apart</h2>
          <p className="section-subtitle">
            At SimelaSpa, we're committed to excellence in everything we do
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <AnimatedSection animation="slide-up" delay={100} className="text-center">
            <div className="glass-card p-6 h-full">
              <div className="bg-nu-pink/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Sparkles size={28} className="text-nu-pink" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-muted-foreground text-sm">
                We use premium products and tools to ensure the highest quality results for every client.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={200} className="text-center">
            <div className="glass-card p-6 h-full">
              <div className="bg-nu-purple/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award size={28} className="text-nu-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expertise</h3>
              <p className="text-muted-foreground text-sm">
                Our skilled therapists are trained in the latest techniques and trends in massage and body sculpting.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={300} className="text-center">
            <div className="glass-card p-6 h-full">
              <div className="bg-nu-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users size={28} className="text-nu-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-muted-foreground text-sm">
                We're proud to be part of the River Edge community and value our local clientele.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={400} className="text-center">
            <div className="glass-card p-6 h-full">
              <div className="bg-nu-coral/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart size={28} className="text-nu-coral" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Passion</h3>
              <p className="text-muted-foreground text-sm">
                We love what we do and are passionate about helping you look and feel your best.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-container">
        <AnimatedSection animation="fade-in" className="text-center">
          <span className="px-4 py-1 rounded-full bg-nu-teal/10 text-nu-teal text-sm font-medium mb-4 inline-block">
            Our Team
          </span>
          <h2 className="section-title">Meet Our Therapists</h2>
          <p className="section-subtitle">
            Skilled professionals dedicated to enhancing your well-being
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <AnimatedSection animation="fade-in" delay={100}>
            <div className="glass-card overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&q=80"
                  alt="Team member"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sophia Lee</h3>
                <p className="text-primary text-sm mb-3">Lead Massage Therapist</p>
                <p className="text-muted-foreground text-sm">
                  With over 10 years of experience, Sophia specializes in therapeutic and relaxation massage.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={200}>
            <div className="glass-card overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1611800065908-233b597db552?auto=format&fit=crop&q=80"
                  alt="Team member"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Jennifer Kim</h3>
                <p className="text-primary text-sm mb-3">Senior Body Sculpting Technician</p>
                <p className="text-muted-foreground text-sm">
                  Jennifer excels in body sculpting techniques, helping clients achieve their desired body shape.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={300}>
            <div className="glass-card overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?auto=format&fit=crop&q=80"
                  alt="Team member"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">David Nguyen</h3>
                <p className="text-primary text-sm mb-3">Massage Therapist</p>
                <p className="text-muted-foreground text-sm">
                  David is known for his deep tissue massage and personalized approach to client care.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-secondary/50 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Our Services?</h2>
            <p className="text-muted-foreground mb-8">
              Visit SimelaSpa today or call us to schedule your appointment.
              We look forward to welcoming you to our spa!
            </p>
            <a href="tel:7735615841" className="button-primary">
              Book Your Appointment
            </a>
          </AnimatedSection>
        </div>
      </section>
      {/* Add Footer */}
      <Footer />
    </div>
  );
};

export default About;
