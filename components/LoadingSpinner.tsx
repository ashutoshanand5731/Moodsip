import React from 'react';

interface CardProps {
  title: string;
  imageSeed: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, imageSeed, onClick }) => {
  const imageUrl = `https://picsum.photos/seed/${imageSeed}/400/300`;

  return (
    <div
      onClick={onClick}
      className="bg-base-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-brand-primary/30 transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
    >
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <h3 className="absolute bottom-0 left-0 p-4 text-xl font-bold text-white group-hover:text-brand-light transition-colors duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Card;