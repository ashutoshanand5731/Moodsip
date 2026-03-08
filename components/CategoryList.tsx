import React from 'react';

interface WelcomePageProps {
  onGetStarted: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onGetStarted }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center animate-fade-in">
        <img src="https://fastly.picsum.photos/id/249/3000/2000.jpg?hmac=U2oOCXdXUwt6ftKMC4icF6eS8dGDUZJM_0-qi0JEqjk" alt="Uplifting beverage" className="rounded-full shadow-lg mb-8 animate-pulse-glow" />
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
        <span className="text-slate-100">Welcome to </span>
        <span className="text-brand-primary">MoodSip</span>
      </h1>
      <p className="max-w-2xl mx-auto text-slate-400 mb-8 leading-relaxed">
        Discover how the right drink at the right time can boost your well-being. Coffee's caffeine can delay fatigue and sharpen focus, while green tea’s antioxidants can support brain function and overall health. Let's find the perfect drink for you.
      </p>
      <button
        onClick={onGetStarted}
        className="bg-brand-primary text-white font-bold py-3 px-8 rounded-full hover:bg-brand-secondary transition-colors duration-300 shadow-lg text-lg"
      >
        Get Started
      </button>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 15px rgba(20, 184, 166, 0.4); }
          50% { box-shadow: 0 0 30px rgba(20, 184, 166, 0.7); }
        }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default WelcomePage;