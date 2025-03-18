import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Phone, Clock, Calendar, Users, Info, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';

const Appointments = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
          <img
            src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80"
            alt="Spa appointment booking"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="section-container z-10 text-white">
          <AnimatedSection animation="slide-up" className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Appointments</h1>
            <p className="text-lg md:text-xl mb-6 text-white/90">
              Book your massage therapy or body sculpting appointment with us
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Appointment Info */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-right">
            <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 inline-block">
              Booking
            </span>
            <h2 className="text-3xl font-bold mb-6">How to Book Your Appointment</h2>
            <p className="text-muted-foreground mb-8">
              We offer both appointments and walk-in services at Nu Image Nails Spa. For the best
              experience and to ensure availability, we recommend scheduling an appointment in advance,
              especially for weekends and group appointments.
            </p>
            
            <div className="glass-card p-6 mb-6 flex items-start space-x-4">
              <Phone size={24} className="text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Call to Book</h3>
                <p className="text-muted-foreground mb-3">
                  The easiest way to schedule your appointment is to call us directly:
                </p>
                <a 
                  href="tel:7735615841" 
                  className="text-xl font-bold text-primary hover:underline"
                >
                  (773) 561-5841
                </a>
              </div>
            </div>
            
            <div className="glass-card p-6 flex items-start space-x-4">
              <Users size={24} className="text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Walk-Ins Welcome</h3>
                <p className="text-muted-foreground">
                  We welcome walk-in clients! However, appointments take priority, so there may be a
                  wait during busy times. Call ahead to check our current wait time.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-left">
            <div className="glass-card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Clock size={24} className="text-primary" />
                <h3 className="text-2xl font-bold">Business Hours</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="font-medium">Monday</span>
                  <span className="text-muted-foreground">10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="font-medium">Tuesday</span>
                  <span className="text-muted-foreground">10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="font-medium">Wednesday</span>
                  <span className="text-muted-foreground">10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="font-medium">Thursday</span>
                  <span className="text-muted-foreground">10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="font-medium">Friday</span>
                  <span className="text-muted-foreground">10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="font-medium">Saturday</span>
                  <span className="text-muted-foreground">10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Appointment Policies */}
      <section className="section-container py-16 bg-secondary/50">
        <AnimatedSection animation="fade-in" className="text-center max-w-3xl mx-auto">
          <span className="px-4 py-1 rounded-full bg-nu-blue/10 text-nu-blue text-sm font-medium mb-4 inline-block">
            Policies
          </span>
          <h2 className="section-title">Appointment Policies</h2>
          <p className="section-subtitle">
            To ensure the best experience for all our clients, please review our appointment policies
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <AnimatedSection animation="slide-up" delay={100}>
            <div className="glass-card p-6 h-full">
              <div className="flex items-start space-x-3 mb-4">
                <Clock size={20} className="text-primary mt-1" />
                <h3 className="text-xl font-semibold">Arrival Time</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Please arrive 5-10 minutes before your scheduled appointment time. If you're 
                more than 15 minutes late, we may need to reschedule your appointment or 
                adjust the services to fit within the remaining time.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={200}>
            <div className="glass-card p-6 h-full">
              <div className="flex items-start space-x-3 mb-4">
                <Calendar size={20} className="text-primary mt-1" />
                <h3 className="text-xl font-semibold">Cancellations</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                We appreciate 24-hour notice for cancellations. This allows us to offer the appointment
                time to other clients. Repeated no-shows may require a deposit for future bookings.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={300}>
            <div className="glass-card p-6 h-full">
              <div className="flex items-start space-x-3 mb-4">
                <Users size={20} className="text-primary mt-1" />
                <h3 className="text-xl font-semibold">Group Appointments</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                For groups of 3 or more, please book at least one week in advance. A 50% deposit may
                be required for large group bookings. Please call us directly to arrange group appointments.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={400}>
            <div className="glass-card p-6 h-full">
              <div className="flex items-start space-x-3 mb-4">
                <Info size={20} className="text-primary mt-1" />
                <h3 className="text-xl font-semibold">Special Requests</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                If you have specific preferences for technicians or services, please mention this when
                booking. We'll do our best to accommodate your requests based on availability.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-right" className="order-2 md:order-1">
            <span className="px-4 py-1 rounded-full bg-nu-coral/10 text-nu-coral text-sm font-medium mb-4 inline-block">
              Your Visit
            </span>
            <h2 className="text-3xl font-bold mb-6">What to Expect</h2>
            <p className="text-muted-foreground mb-6">
              At Nu Image Nails Spa, we strive to provide a relaxing and enjoyable experience for every client.
              Here's what you can expect during your visit with us:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle size={20} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Consultation</h3>
                  <p className="text-muted-foreground text-sm">
                    Your technician will discuss your preferences and recommend services based on your needs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle size={20} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Nail Preparation</h3>
                  <p className="text-muted-foreground text-sm">
                    We'll prepare your nails by removing old polish, trimming, shaping, and buffing.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle size={20} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Customized Service</h3>
                  <p className="text-muted-foreground text-sm">
                    We'll provide the selected service with attention to detail and precision.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle size={20} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Final Touches</h3>
                  <p className="text-muted-foreground text-sm">
                    We'll apply any finishing touches and ensure you're completely satisfied with the results.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-left" className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1560707854-fe3ee4aff14e?auto=format&fit=crop&q=80"
              alt="Nail technician working"
              className="rounded-xl shadow-elegant"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container py-16 bg-secondary/50">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Appointment?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us today to schedule your visit to Nu Image Nails Spa.
              We look forward to pampering you!
            </p>
            <a 
              href="tel:7735615841" 
              className="button-primary text-lg px-8 py-4"
            >
              Call (773) 561-5841
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Add Footer */}
      <Footer />
    </div>
  );
};

export default Appointments;
