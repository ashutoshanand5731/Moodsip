import React, { useState } from 'react';
import { NON_ALCOHOLIC_DRINKS, ALCOHOLIC_DRINKS, INDIE_DRINKS } from '../constants';
import type { AlcoholicDrinkCategory, Drink } from '../types';

interface ExplorePageProps {
  type: 'non-alcoholic' | 'alcoholic' | 'indie';
  onBack: () => void;
  age: number | null;
}

const DrinkCard: React.FC<{ drink: Drink; category: string; onClick: () => void }> = ({ drink, category, onClick }) => {
    let categoryColor = 'bg-brand-dark text-brand-light';
    if (category.toLowerCase().includes('non-alcoholic')) categoryColor = 'bg-green-800/80 text-green-200';
    if (category.toLowerCase().includes('indie')) categoryColor = 'bg-amber-800/80 text-amber-200';
    
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


const ExplorePage: React.FC<ExplorePageProps> = ({ type, onBack, age }) => {
  const [selectedDrinkInfo, setSelectedDrinkInfo] = useState<{ drink: Drink; category: string } | null>(null);
  
  const isAlcoholic = type === 'alcoholic';
  const isIndie = type === 'indie';

  const getTitle = () => {
    if (isAlcoholic) return 'Explore Alcoholic Drinks';
    if (isIndie) return 'Explore Indie Drinks';
    return 'Explore Non-Alcoholic Drinks';
  };

  const handleSelectDrink = (drink: Drink, category: string) => {
    setSelectedDrinkInfo({ drink, category });
  };

  const handleCloseModal = () => {
    setSelectedDrinkInfo(null);
  };

  const renderAlcoholicCategory = (category: AlcoholicDrinkCategory) => (
     <div key={category.name} className="bg-base-200 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-brand-light mb-3">{category.name}</h3>
        <p className="text-slate-400 mb-4">{category.description}</p>
        {category.serving && <p className="text-slate-400 mb-2"><strong className="text-slate-200">Serving:</strong> {category.serving}</p>}
        {category.dosage && <p className="text-slate-400 mb-4"><strong className="text-slate-200">Dosage:</strong> {category.dosage}</p>}
        {category.dos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-green-400 mb-2">Do:</h4>
              <ul className="list-disc list-inside space-y-1 text-slate-400">
                {category.dos.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-400 mb-2">Don't:</h4>
              <ul className="list-disc list-inside space-y-1 text-slate-400">
                {category.donts.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          </div>
        )}
      </div>
  );


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
        <span>Back to Categories</span>
      </button>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary mb-6">
        {getTitle()}
      </h2>

      <div className="space-y-6">
        {isIndie ? (
          <>
            <img src="https://fastly.picsum.photos/id/326/4928/3264.jpg?hmac=lJA_LBhuSUZpPbFFE6vjjSjIWzpaqjZpR9vV9MkZfJw" alt="A unique indie drink in a cozy setting" className="w-full h-48 object-cover rounded-lg mb-6 shadow-lg" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {INDIE_DRINKS.map((drink) => (
                 <DrinkCard key={drink.name} drink={drink} category="Indie" onClick={() => handleSelectDrink(drink, 'Indie')} />
              ))}
            </div>
          </>
        ) : isAlcoholic ? (
          <>
            <img src="https://fastly.picsum.photos/id/274/3824/2520.jpg?hmac=OOl_w8LX_psogyruUe1z986AuqeS_TY7rLxAFgG4wrc" alt="A classic bar with a selection of alcoholic drinks" className="w-full h-48 object-cover rounded-lg mb-6 shadow-lg" />
            {ALCOHOLIC_DRINKS.map(renderAlcoholicCategory)}
            <div className="mt-6 bg-brand-dark/50 border border-brand-secondary text-brand-light px-4 py-3 rounded-lg text-center">
              <p><strong>Responsible Tip:</strong> Only for 21+ users. Please stay hydrated, eat before drinking, and never drink and drive.</p>
            </div>
          </>
        ) : (
          <>
            <img src="https://fastly.picsum.photos/id/103/2592/1936.jpg?hmac=aC1FT3vX9bCVMIT-KXjHLhP6vImAcsyGCH49vVkAjPQ" alt="A colorful array of non-alcoholic drinks" className="w-full h-48 object-cover rounded-lg mb-6 shadow-lg" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {NON_ALCOHOLIC_DRINKS.map((drink) => (
                <DrinkCard key={drink.name} drink={drink} category="Non-Alcoholic" onClick={() => handleSelectDrink(drink, 'Non-Alcoholic')} />
              ))}
            </div>
          </>
        )}
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

export default ExplorePage;