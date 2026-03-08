import React, { useState } from 'react';
import { MOODS } from './constants';
import type { Mood } from './types';

import AgeGate from './components/SearchBar'; // Repurposed as AgeGate
import WelcomePage from './components/CategoryList'; // Repurposed as WelcomePage
import MoodCategories from './components/DrinkGrid'; // Repurposed as MoodCategories
import MoodDetail from './components/DrinkDetailModal'; // Repurposed as MoodDetail
import ExplorePage from './components/DrinkCard'; // Repurposed as ExplorePage
import Chatbot from './components/Chatbot';

type View = 'AGE_GATE' | 'WELCOME' | 'MOODS' | 'MOOD_DETAIL' | 'EXPLORE' | 'CHATBOT';

const App: React.FC = () => {
  const [view, setView] = useState<View>('AGE_GATE');
  const [age, setAge] = useState<number | null>(null);
  const [selectedMoodId, setSelectedMoodId] = useState<Mood['id'] | null>(null);
  const [exploreType, setExploreType] = useState<'non-alcoholic' | 'alcoholic' | 'indie' | null>(null);

  const handleAgeSubmit = (submittedAge: number) => {
    setAge(submittedAge);
    setView('WELCOME');
  };
  
  const handleSelectMood = (moodId: Mood['id']) => {
    setSelectedMoodId(moodId);
    setView('MOOD_DETAIL');
  };

  const handleSelectExplore = (type: 'non-alcoholic' | 'alcoholic' | 'indie') => {
    setExploreType(type);
    setView('EXPLORE');
  }

  const handleBackToMoods = () => {
    setView('MOODS');
    setSelectedMoodId(null);
    setExploreType(null);
  }

  const renderView = () => {
    switch(view) {
      case 'AGE_GATE':
        return <AgeGate onSubmit={handleAgeSubmit} />;
      case 'WELCOME':
        return <WelcomePage onGetStarted={() => setView('MOODS')} />;
      case 'MOODS':
        return (
          <div className="min-h-screen bg-base-100 font-sans py-10">
            <MoodCategories 
              moods={MOODS} 
              age={age}
              onSelectMood={handleSelectMood} 
              onSelectExplore={handleSelectExplore}
              onGoToChat={() => setView('CHATBOT')}
            />
          </div>
        );
      case 'MOOD_DETAIL':
        const selectedMood = MOODS.find(m => m.id === selectedMoodId);
        if (!selectedMood) {
            setView('MOODS'); // Failsafe
            return null;
        }
        return (
             <div className="min-h-screen bg-base-100 font-sans py-10">
                <MoodDetail mood={selectedMood} onBack={handleBackToMoods} age={age} />
             </div>
        );
      case 'EXPLORE':
        if (!exploreType) {
            setView('MOODS'); // Failsafe
            return null;
        }
        return (
            <div className="min-h-screen bg-base-100 font-sans py-10">
                <ExplorePage type={exploreType} onBack={handleBackToMoods} age={age} />
            </div>
        );
      case 'CHATBOT':
        return (
           <div className="min-h-screen bg-base-100 font-sans p-4 sm:p-8 flex flex-col items-center">
              <div className="w-full max-w-4xl">
                   <button
                      onClick={handleBackToMoods}
                      className="bg-base-200 text-slate-300 font-semibold py-2 px-4 rounded-full hover:bg-base-300 transition-colors duration-300 mb-6 flex items-center space-x-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Back to Moods</span>
                    </button>
                  <Chatbot />
              </div>
          </div>
        );
      default:
        return <AgeGate onSubmit={handleAgeSubmit} />;
    }
  };

  return (
    <>
      {renderView()}
    </>
  );
};

export default App;
