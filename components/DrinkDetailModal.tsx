import React, { useState } from 'react';
import type { Mood, Drink } from '../types';

interface MoodDetailProps {
  mood: Mood;
  onBack: () => void;
  age: number | null;
}

const DrinkCard: React.FC<{ drink: Drink; category: string; onClick: () => void }> = ({ drink, category, onClick }) => {
    let categoryColor = 'bg-brand-dark text-brand-light';
    if (category.toLowerCase().includes('non-alcoholic')) categoryColor = 'bg-green-800/80 text-green-200';
    if (category.toLowerCase().includes('indie')) categoryColor = 'bg-amber-800/80 text-amber-200';
    if (category.toLowerCase().includes('alcoholic')) categoryColor = 'bg-red-800/80 text-red-200';

    return (
        <div
            onClick={onClick}
            className="bg-base-200 rounded-lg p-4 shadow-md hover:shadow-lg hover:shadow-brand-primary/20 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full"
            style={{ minHeight: '160px' }}
        >
            <div>
                <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-brand-light text-lg pr-2">{drink.name}</h4>
                    <span className={`text-xs ${categoryColor} font-semibold px-2 py-1 rounded-full whitespace-nowrap`}>{category}</span>
                </div>
                <p className="text-slate-400 text-sm line-clamp-3">{drink.description}</p>
            </div>
            <div className="text-right text-xs text-brand-primary mt-2 font-semibold">Read more...</div>
        </div>
    );
};

const DrinkInfoModal: React.FC<{ drink: Drink | null; category: string; onClose: () => void; }> = ({ drink, category, onClose }) => {
    if (!drink) return null;
    
    let categoryColor = 'bg-brand-dark text-brand-light';
    if (category.toLowerCase().includes('non-alcoholic')) categoryColor = 'bg-green-800/80 text-green-200';
    if (category.toLowerCase().includes('indie')) categoryColor = 'bg-amber-800/80 text-amber-200';
    if (category.toLowerCase().includes('alcoholic')) categoryColor = 'bg-red-800/80 text-red-200';


    return (
        <div 
        className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 animate-fade-in-fast"
        onClick={onClose}
        >
        <div 
            className="bg-base-300 rounded-xl shadow-2xl w-full max-w-md p-6 sm:p-8 relative animate-slide-up-fast"
            onClick={(e) => e.stopPropagation()}
        >
            <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            aria-label="Close"
            >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
            <div className="flex justify-between items-start mb-4 gap-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-primary flex-1">{drink.name}</h2>
                <span className={`text-sm ${categoryColor} font-semibold px-3 py-1 rounded-full mt-1 whitespace-nowrap`}>{category}</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
            {drink.description}
            </p>
        </div>
        </div>
    );
};


const DrinkGrid: React.FC<{ title: string; drinks: Drink[]; category: string; titleColor: string; hasContent: boolean; onDrinkSelect: (drink: Drink, category: string) => void }> = ({ title, drinks, category, titleColor, hasContent, onDrinkSelect }) => {
  if (!hasContent) return null;

  return (
    <div className="bg-base-300/50 p-6 rounded-xl">
      <h3 className={`text-2xl font-bold mb-4 ${titleColor}`}>{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {drinks.map(drink => (
          <DrinkCard 
            key={drink.name} 
            drink={drink}
            category={category}
            onClick={() => onDrinkSelect(drink, category)} 
          />
        ))}
      </div>
    </div>
  );
};


const MoodDetail: React.FC<MoodDetailProps> = ({ mood, onBack, age }) => {
  const [selectedDrinkInfo, setSelectedDrinkInfo] = useState<{ drink: Drink; category: string } | null>(null);

  const isOfAge = age !== null && age >= 21;
  const hasAlcoholicDrinks = mood.beverages.alcoholic.length > 0;
  
  const imageUrl = `https://picsum.photos/seed/${mood.imageSeed}/800/400`;

  const handleSelectDrink = (drink: Drink, category: string) => {
    setSelectedDrinkInfo({ drink, category });
  };

  const handleCloseModal = () => {
    setSelectedDrinkInfo(null);
  };

  return (
    <>
      <div className="p-4 sm:p-8 animate-fade-in">
        <button
          onClick={onBack}
          className="bg-base-200 text-slate-300 font-semibold py-2 px-4 rounded-full hover:bg-base-300 transition-colors duration-300 mb-6 flex items-center space-x-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span>Back to Moods</span>
        </button>

        <div className="bg-base-200 rounded-2xl shadow-2xl w-full max-w-5xl mx-auto overflow-hidden">
          <img src={imageUrl} alt={mood.title} className="w-full h-48 sm:h-64 object-cover" />
          <div className="p-6 sm:p-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary mb-6">{mood.title}</h2>
            
            <div className="space-y-6">
              <DrinkGrid 
                title="Non-Alcoholic Drinks"
                drinks={mood.beverages.nonAlcoholic}
                category="Non-Alcoholic"
                titleColor="text-green-400"
                hasContent={mood.beverages.nonAlcoholic.length > 0}
                onDrinkSelect={handleSelectDrink}
              />

              <DrinkGrid
                title="Indie & Regional Drinks"
                drinks={mood.beverages.indie}
                category="Indie"
                titleColor="text-amber-400"
                hasContent={mood.beverages.indie.length > 0}
                onDrinkSelect={handleSelectDrink}
              />

              <DrinkGrid
                title="Alcoholic Drinks"
                drinks={mood.beverages.alcoholic}
                category="Alcoholic"
                titleColor="text-red-400"
                hasContent={isOfAge && hasAlcoholicDrinks}
                onDrinkSelect={handleSelectDrink}
              />
              
              {hasAlcoholicDrinks && (
                <div className={`mt-6 ${isOfAge ? 'bg-brand-dark/50 border-brand-secondary text-brand-light' : 'bg-red-900/50 border-red-700 text-red-300'} px-4 py-3 rounded-lg text-center`}>
                  <p>
                    <strong>{isOfAge ? 'Reminder:' : 'Note:'}</strong>
                    {isOfAge ? ' Please drink responsibly and be mindful of your feelings. For users 21 and over.' : ' Alcoholic beverage suggestions are available for users 21 and over.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <DrinkInfoModal 
        drink={selectedDrinkInfo?.drink ?? null}
        category={selectedDrinkInfo?.category ?? ''}
        onClose={handleCloseModal}
      />
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        @keyframes fade-in-fast {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-fast { animation: fade-in-fast 0.2s ease-out forwards; }
        @keyframes slide-up-fast {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up-fast { animation: slide-up-fast 0.2s ease-out forwards; }
        .line-clamp-3 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
        }
      `}</style>
    </>
  );
};

export default MoodDetail;