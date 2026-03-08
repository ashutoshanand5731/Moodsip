import React, { useState } from 'react';

interface AgeGateProps {
  onSubmit: (age: number) => void;
}

const AgeGate: React.FC<AgeGateProps> = ({ onSubmit }) => {
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ageNum = parseInt(age, 10);
    if (isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
      setError('Please enter a valid age.');
      return;
    }
    setError('');
    onSubmit(ageNum);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-base-100">
        <div className="w-full max-w-sm">
            <h1 className="text-3xl font-bold text-slate-100 mb-2">Welcome!</h1>
            <p className="text-slate-400 mb-6">
                Please enter your age to continue. Users under 21 will only see non-alcoholic options.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
                className="w-full bg-base-200 text-slate-200 placeholder-slate-400 border-2 border-base-300 rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors text-center"
                aria-label="Enter your age"
                />
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button
                type="submit"
                className="w-full bg-brand-primary text-white font-bold py-3 px-8 rounded-full hover:bg-brand-secondary transition-colors duration-300 shadow-lg text-lg"
                >
                Continue
                </button>
            </form>
        </div>
    </div>
  );
};

export default AgeGate;
