
import React, { useState } from 'react';
import { EXPERT, QUIZ_QUESTIONS } from '../constants';

interface QuizProps {
  onComplete: (answers: Record<string, string>) => void;
  onCancel: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleOptionSelect = (option: string) => {
    const newAnswers = { ...answers, [QUIZ_QUESTIONS[currentStep].id]: option };
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center p-4 overflow-hidden animate-fade-in">
      
      {/* Main Quiz Container - White & Premium */}
      <div className="w-full max-w-[380px] bg-white rounded-[2.5rem] p-8 relative flex flex-col items-center shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        
        {/* Floating Hero Info Header */}
        <div className="w-full flex justify-between items-center mb-8 animate-fade-in">
           <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full border-2 border-gold-gradient overflow-hidden shadow-lg shadow-gold-500/10 flex-shrink-0 bg-gray-100">
                 <img 
                   src={EXPERT.heroImage} 
                   alt={EXPERT.name} 
                   className="w-full h-full object-cover" 
                   fetchPriority="high"
                 />
              </div>
              <div className="overflow-hidden">
                 <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest whitespace-nowrap">{EXPERT.name}</h3>
                 <p className="text-[9px] text-gray-500 uppercase tracking-tighter">Avaliação Exclusiva</p>
              </div>
           </div>
           <button onClick={onCancel} className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
           </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-100 h-1 rounded-full mb-8 overflow-hidden">
          <div 
            className="h-full gold-gradient transition-all duration-500 ease-out shadow-[0_0_10px_rgba(212,175,55,0.3)]" 
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question Area */}
        <div className="w-full flex flex-col items-center animate-fade-in min-h-[300px]">
          <span className="text-gold-600 text-[9px] uppercase tracking-[0.2em] mb-3 font-bold">Etapa {currentStep + 1} de {QUIZ_QUESTIONS.length}</span>
          <h2 className="text-xl font-serif text-center mb-8 leading-snug px-2 text-gray-900 font-medium">
            {QUIZ_QUESTIONS[currentStep].question}
          </h2>

          <div className="w-full space-y-3">
            {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(option)}
                className="w-full py-4 px-5 bg-gray-50 rounded-2xl text-left text-[13px] font-medium border border-gray-100 hover:border-gold-gradient/50 hover:bg-white hover:shadow-md transition-all group active:scale-[0.98] flex items-center justify-between"
              >
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{option}</span>
                <div className="w-3.5 h-3.5 rounded-full border border-gray-300 group-hover:border-gold-gradient transition-colors flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-gradient scale-0 group-hover:scale-100 transition-transform"></div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer Signature Style */}
        <div className="mt-8">
           <p className="font-signature text-xl gold-text">{EXPERT.name}</p>
        </div>
      </div>

      {/* Decorative Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white opacity-10 blur-[120px] rounded-full pointer-events-none z-[-1]"></div>
    </div>
  );
};

export default Quiz;
