
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  rating: number;
  text: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, rating, text, className = '' }) => {
  return (
    <div className={`glass-card p-6 h-full ${className}`}>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < rating ? 'text-nu-coral fill-nu-coral' : 'text-muted-foreground'
            }`}
          />
        ))}
      </div>
      <p className="text-muted-foreground text-sm mb-4 italic">"{text}"</p>
      <p className="font-semibold text-sm">{name}</p>
    </div>
  );
};

export default TestimonialCard;
