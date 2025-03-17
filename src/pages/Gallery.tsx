
import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import GalleryItem from '../components/GalleryItem';

const Gallery = () => {
  // Categories for gallery filtering
  const categories = [
    'All',
    'Manicures',
    'Pedicures',
    'Nail Art',
    'Acrylics',
    'Gel',
  ];

  const [activeCategory, setActiveCategory] = useState('All');

  // Gallery images with categories (in a real website, these would be from a database)
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371',
      categories: ['Manicures', 'Nail Art'],
    },
    {
      src: 'https://images.unsplash.com/photo-1632344572612-46c00c29e21e',
      categories: ['Manicures', 'Gel'],
    },
    {
      src: 'https://images.unsplash.com/photo-1601746882168-2d80ddd19151',
      categories: ['Nail Art', 'Gel'],
    },
    {
      src: 'https://images.unsplash.com/photo-1607779097040-29a04f47fdea',
      categories: ['Nail Art'],
    },
    {
      src: 'https://images.unsplash.com/photo-1610314586186-84e0f91ef3bd',
      categories: ['Manicures', 'Acrylics'],
    },
    {
      src: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067',
      categories: ['Pedicures'],
    },
    {
      src: 'https://images.unsplash.com/photo-1600428948440-f9591bf0fd8b',
      categories: ['Nail Art', 'Gel'],
    },
    {
      src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b',
      categories: ['Manicures'],
    },
    {
      src: 'https://images.unsplash.com/photo-1602951165330-5b2b3c64d662',
      categories: ['Pedicures', 'Nail Art'],
    },
    {
      src: 'https://images.unsplash.com/photo-1600428958896-84791dc523af',
      categories: ['Nail Art', 'Acrylics'],
    },
    {
      src: 'https://images.unsplash.com/photo-1608743049056-53c4975cc8d7',
      categories: ['Manicures', 'Gel'],
    },
    {
      src: 'https://images.unsplash.com/photo-1610992013792-55e56e83e8da',
      categories: ['Nail Art'],
    },
  ];

  // Filter images based on active category
  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.categories.includes(activeCategory));

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
          <img
            src="https://images.unsplash.com/photo-1583319782680-2c8795fbebfa?auto=format&fit=crop&q=80"
            alt="Nail art showcase"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="section-container z-10 text-white">
          <AnimatedSection animation="slide-up" className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
            <p className="text-lg md:text-xl mb-6 text-white/90">
              Explore our portfolio of beautiful nail designs
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-container">
        <AnimatedSection animation="fade-in" className="text-center max-w-3xl mx-auto">
          <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 inline-block">
            Our Work
          </span>
          <h2 className="text-3xl font-bold mb-6">Browse Our Nail Art Collection</h2>
          <p className="text-muted-foreground mb-8">
            At Nu Image Nails Spa, we take pride in creating beautiful, unique nail designs. 
            Here's a selection of our work to inspire your next visit.
          </p>
        </AnimatedSection>

        {/* Category Filters */}
        <AnimatedSection animation="slide-up" className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-secondary hover:bg-secondary/80 text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </AnimatedSection>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredImages.map((image, index) => (
            <AnimatedSection 
              key={index} 
              animation="fade-in" 
              delay={index * 50}
              className="aspect-square"
            >
              <GalleryItem
                src={`${image.src}?w=600&h=600&fit=crop`}
                alt={`Nail design in categories: ${image.categories.join(', ')}`}
                className="h-full"
              />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-secondary/50 py-16 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Love What You See?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us today to schedule your appointment and let our talented nail artists
              create a beautiful design just for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:7735615841" className="button-primary">
                Book Your Appointment
              </a>
              <a href="/services" className="button-secondary">
                View Our Services
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="section-container">
        <AnimatedSection animation="fade-in" className="text-center max-w-3xl mx-auto">
          <span className="px-4 py-1 rounded-full bg-nu-purple/10 text-nu-purple text-sm font-medium mb-4 inline-block">
            Follow Us
          </span>
          <h2 className="text-3xl font-bold mb-6">Connect With Us On Instagram</h2>
          <p className="text-muted-foreground mb-8">
            Follow us @nuimagenailsspa for daily inspiration and updates on our latest designs.
          </p>
          <a
            href="https://www.instagram.com/nuimagenailsspa/"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            Visit Our Instagram
          </a>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Gallery;
