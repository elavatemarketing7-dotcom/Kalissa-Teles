
import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import LandingPage from './components/LandingPage';
import { EXPERT } from './constants';

type ViewState = 'initial' | 'quiz' | 'result' | 'site';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('initial');
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});

  const handleStartQuiz = () => setView('quiz');
  const handleGoDirectly = () => setView('site');
  
  const handleQuizComplete = (answers: Record<string, string>) => {
    setQuizAnswers(answers);
    setView('result');
  };

  const handleContinueToSite = () => setView('site');

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative">
      {/* Base Layer: The Main Landing Page is always there or replaced by the site view */}
      <LandingPage />

      {/* Initial Entry Overlay */}
      {view === 'initial' && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center p-6 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-gold-gradient opacity-10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-white opacity-5 blur-[100px] rounded-full"></div>

          <div className="z-10 text-center space-y-8 animate-fade-in w-full max-w-sm">
            <div className="space-y-2">
              <h1 className="text-4xl font-serif tracking-widest uppercase gold-text">{EXPERT.name}</h1>
              <p className="text-sm tracking-widest font-light text-gray-400 uppercase">{EXPERT.profession}</p>
            </div>
            
            <div className="relative w-48 h-48 mx-auto rounded-full p-1 border border-gold-gradient overflow-hidden shadow-2xl shadow-yellow-900/20 bg-gray-900">
               <img 
                 src={EXPERT.heroImage} 
                 alt={EXPERT.name} 
                 className="w-full h-full object-cover rounded-full"
                 fetchPriority="high"
               />
            </div>

            <p className="text-gray-300 italic font-serif text-lg">
              "Sua beleza natural, potencializada com exclusividade e segurança."
            </p>

            <div className="space-y-4 pt-4">
              <button 
                onClick={handleStartQuiz}
                className="w-full py-5 rounded-full gold-gradient text-black font-bold uppercase tracking-widest text-sm shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Fazer Avaliação Personalizada
              </button>
              <button 
                onClick={handleGoDirectly}
                className="w-full py-5 rounded-full border border-gray-700 text-white font-medium uppercase tracking-widest text-sm hover:bg-white/5 transition-all"
              >
                Ir Direto para o Site
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quiz Overlay */}
      {view === 'quiz' && (
        <Quiz 
          onComplete={handleQuizComplete} 
          onCancel={() => setView('initial')} 
        />
      )}

      {/* Result Overlay */}
      {view === 'result' && (
        <Result 
          answers={quizAnswers} 
          onContinue={handleContinueToSite} 
        />
      )}
    </div>
  );
};

export default App;
