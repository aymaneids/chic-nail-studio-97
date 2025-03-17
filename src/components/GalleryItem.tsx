
import React, { useState } from 'react';

interface GalleryItemProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, alt, className = '', onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden rounded-xl ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-xl"></div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-500 hover:scale-105 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default GalleryItem;
