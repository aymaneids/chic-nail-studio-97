
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Scissors, Sparkles } from 'lucide-react';

interface ServiceItem {
  service: string;
  price: string;
}

interface ServiceCategoryProps {
  name: string;
  items: ServiceItem[];
  index: number;
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ name, items, index }) => {
  return (
    <AnimatedSection animation="slide-up" delay={index * 100}>
      <div className="glass-card p-8">
        <div className="flex items-center mb-6">
          {index % 2 === 0 ? (
            <Scissors size={24} className="text-primary mr-3" />
          ) : (
            <Sparkles size={24} className="text-primary mr-3" />
          )}
          <h3 className="text-2xl font-bold">{name}</h3>
        </div>
        
        <div className="space-y-4">
          {items.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center pb-2 border-b border-border">
              <span className="font-medium">{item.service}</span>
              <span className="text-primary font-semibold">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServiceCategory;
