
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  color = 'nu-pink'
}) => {
  return (
    <div className="glass-card p-6 h-full transition-all duration-300 hover:translate-y-[-5px] group">
      <div className={`bg-${color}/10 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-${color}/20 transition-colors duration-300`}>
        <Icon size={24} className={`text-${color}`} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
