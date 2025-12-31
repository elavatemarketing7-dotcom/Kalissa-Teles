
import React from 'react';
import { EXPERT, QUIZ_QUESTIONS } from '../constants';

interface ResultProps {
  answers: Record<string, string>;
  onContinue: () => void;
}

const Result: React.FC<ResultProps> = ({ answers, onContinue }) => {
  const generateWhatsAppLink = () => {
    let messageText = `Olá Dra. Kalissa, acabei de fazer minha avaliação personalizada e quero saber mais!\n\n`;
    QUIZ_QUESTIONS.forEach(q => {
      messageText += `*${q.question}*\n- ${answers[q.id]}\n\n`;
    });
    
    // Verifica se a URL base já tem parâmetros
    const baseUrl = EXPERT.whatsapp;
    const separator = baseUrl.includes('?') ? '&' : '?';
    return `${baseUrl}${separator}text=${encodeURIComponent(messageText)}`;
  };

  return (
    <div className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-[380px] bg-white rounded-[2.5rem] p-8 flex flex-col items-center shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden text-center">
        
        {/* Background light effect */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-gold-gradient opacity-10 blur-3xl rounded-full"></div>

        {/* Profile Image & Header */}
        <div className="space-y-6 w-full z-10">
          <div className="relative w-36 h-36 mx-auto rounded-3xl p-[1.5px] bg-gold-gradient overflow-hidden shadow-2xl shadow-gold-900/20">
            <img src={EXPERT.heroImage} alt={EXPERT.name} className="w-full h-full object-cover rounded-3xl" />
          </div>
          <div className="space-y-1">
             <h2 className="text-[10px] tracking-[0.4em] font-bold text-gold-600 uppercase">Perfil Identificado</h2>
             <h1 className="text-2xl font-serif text-gray-900 leading-tight">Você está a um passo da sua <br/> melhor versão</h1>
          </div>
        </div>

        {/* Persuasion Text */}
        <div className="my-6 z-10 px-2">
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Analisamos suas respostas e o método da <span className="text-gray-900 font-semibold">Dra. {EXPERT.name}</span> é a solução ideal para os resultados de naturalidade que você busca.
          </p>
        </div>

        {/* Buttons */}
        <div className="w-full space-y-3 z-10">
          <a 
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 rounded-2xl gold-gradient text-black font-bold uppercase tracking-widest text-[11px] shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
          >
            Falar com a Especialista agora
          </a>
          
          <button 
            onClick={onContinue}
            className="block w-full py-4 rounded-2xl bg-gray-50 text-gray-900 font-semibold uppercase tracking-widest text-[11px] border border-gray-100 active:scale-95 transition-all hover:bg-gray-100"
          >
            Apenas ver o site agora
          </button>
        </div>

        {/* Signature */}
        <div className="mt-8 z-10">
          <h4 className="font-signature text-3xl gold-text">{EXPERT.name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Result;
