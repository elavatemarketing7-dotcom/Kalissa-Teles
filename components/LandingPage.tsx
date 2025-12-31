
import React, { useState } from 'react';
import { EXPERT, GALLERY_BEFORE_AFTER, GALLERY_SMILES } from '../constants';

const GalleryImage: React.FC<{ src: string; alt: string; onClick: () => void; isPriority?: boolean }> = ({ src, alt, onClick, isPriority }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (error) return null; // Opcional: retornar um placeholder de erro

  return (
    <div 
      className={`aspect-square rounded-2xl overflow-hidden glass border border-white/5 cursor-pointer group bg-gray-900 transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClick}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        loading={isPriority ? "eager" : "lazy"}
      />
    </div>
  );
};

const LandingPage: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const primaryButtonClass = "inline-block w-full text-center py-5 md:py-6 rounded-full gold-gradient text-black font-bold uppercase tracking-widest text-sm shadow-2xl shadow-gold-900/40 hover:scale-[1.05] active:scale-95 transition-all duration-300";

  return (
    <div className="w-full bg-[#0a0a0a] selection:bg-gold-500 selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-end p-6 pb-20 md:pb-32 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#0d0d0d]">
          <img 
            src={EXPERT.heroBackground} 
            alt={EXPERT.name} 
            className="w-full h-full object-cover object-top md:object-[center_15%] opacity-100 transition-opacity duration-1000"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/30 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 space-y-6 animate-fade-in max-w-2xl">
          <div className="space-y-2">
            <span className="text-[10px] md:text-xs tracking-[0.4em] font-semibold text-gold-500 uppercase drop-shadow-md">Estética de Alto Padrão em Gurupi</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-none drop-shadow-xl">
               Eu sou <br/> <span className="gold-text">Kalissa Teles</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-2xl font-light text-gray-100 leading-relaxed font-serif italic max-w-lg drop-shadow-md">
            "Transformo sorrisos em obras de arte, preservando sua essência e elevando sua autoestima através de um método exclusivo."
          </p>

          <div className="space-y-4 max-w-sm">
            <a 
              href={EXPERT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={primaryButtonClass}
            >
              Agendar Avaliação VIP
            </a>
            <p className="text-center text-[10px] md:text-[11px] uppercase tracking-widest text-gray-300 font-medium drop-shadow-md">Atendimento sob medida para você</p>
          </div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-24 px-6 md:px-12 bg-[#0d0d0d] relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
           <div className="relative w-full md:w-1/2">
              <img src={EXPERT.bioImage} alt="Dra. Kalissa Teles" className="w-full rounded-3xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700 shadow-2xl border border-white/5 bg-gray-900" />
              <div className="absolute -bottom-6 -right-4 glass p-4 rounded-2xl border border-white/10">
                 <p className="font-signature text-2xl md:text-3xl gold-text">K. Teles</p>
              </div>
           </div>

           <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-5xl font-serif text-white">Excelência além da técnica.</h2>
              <div className="space-y-4 text-gray-400 font-light leading-relaxed md:text-lg">
                <p>
                  Minha missão é muito mais que realizar procedimentos. Eu busco a harmonia perfeita entre o que você sente e o que o mundo vê.
                </p>
                <p>
                  Com anos de experiência em <strong>Lentes Dentais</strong> e <strong>Harmonização Facial</strong>, desenvolvi um olhar clínico que prioriza a naturalidade, fugindo dos resultados artificiais.
                </p>
              </div>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {["Atendimento 100% Personalizado", "Materiais de Altíssima Qualidade", "Foco em Naturalidade", "Avaliação Facial Integrada"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm md:text-base text-gray-200">
                    <div className="w-1.5 h-1.5 rounded-full gold-gradient flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
           </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-12">
           <div className="text-center space-y-2">
              <span className="text-[10px] md:text-xs tracking-[0.5em] text-gold-500 uppercase">Onde a mágica acontece</span>
              <h2 className="text-4xl md:text-6xl font-serif text-white">Casos de Sucesso</h2>
              <div className="w-12 h-[1px] gold-gradient mx-auto mt-4"></div>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              {GALLERY_BEFORE_AFTER.map((img, i) => (
                <GalleryImage 
                  key={i} 
                  src={img} 
                  alt={`Resultado Transformação ${i}`} 
                  onClick={() => setSelectedImg(img)} 
                  isPriority={i < 4}
                />
              ))}
           </div>
        </div>
      </section>

      {/* 4. HARMONIZAÇÃO E SORRISOS */}
      <section className="pb-24 pt-6 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-12">
           <div className="text-center space-y-2">
              <h2 className="text-3xl md:text-5xl font-serif text-white">Harmonização e Sorrisos</h2>
              <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-widest">A perfeição em cada ângulo</p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
              {GALLERY_SMILES.map((img, i) => (
                <GalleryImage 
                  key={i} 
                  src={img} 
                  alt={`Sorriso Transformado ${i}`} 
                  onClick={() => setSelectedImg(img)} 
                  isPriority={i < 7}
                />
              ))}
           </div>

           <div className="text-center">
              <p className="text-[10px] md:text-xs text-gray-600 uppercase tracking-widest italic">Nota: Resultados individuais podem variar.</p>
           </div>
        </div>
      </section>

      {/* 5. POR QUE CONFIAR */}
      <section className="py-24 px-6 md:px-12 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto space-y-12">
           <h2 className="text-3xl md:text-5xl font-serif text-center">Por que escolher o <br/><span className="gold-text">Meu Método</span></h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Avaliação Honesta", desc: "Só recomendo o que realmente trará benefícios reais à sua estética facial.", icon: "✨" },
                { title: "Mãos de Artista", desc: "Cada detalhe é esculpido pensando na proporção única do seu rosto.", icon: "🎨" },
                { title: "Conforto & Segurança", desc: "Procedimentos realizados com o máximo de cuidado e tecnologia.", icon: "🛡️" },
                { title: "Acompanhamento Próximo", desc: "Você nunca estará sozinha. Estarei presente em cada etapa.", icon: "🤝" }
              ].map((card, i) => (
                <div key={i} className="glass p-8 rounded-3xl border border-white/5 space-y-4 hover:border-gold-500/30 transition-all group hover:-translate-y-2 duration-300">
                   <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">{card.icon}</div>
                   <h3 className="text-xl font-serif text-white">{card.title}</h3>
                   <p className="text-sm text-gray-400 leading-relaxed font-light">{card.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 6. CTA INTERMEDIARIO */}
      <section className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-center relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-500/5 blur-[100px] rounded-full pointer-events-none"></div>
         <div className="max-w-2xl mx-auto space-y-8 relative z-10">
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">Pronta para viver sua melhor versão?</h3>
            <p className="text-sm md:text-lg font-light text-gray-400 italic">Não deixe para depois o cuidado que você merece hoje.</p>
            <div className="max-w-sm mx-auto">
              <a 
                href={EXPERT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={primaryButtonClass}
              >
                Falar com a Dra. Kalissa
              </a>
            </div>
         </div>
      </section>

      {/* 7. COMO FUNCIONA */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
           <h2 className="text-3xl md:text-5xl font-serif text-center">Jornada da Transformação</h2>
           
           <div className="space-y-12 relative">
              <div className="absolute left-6 md:left-1/2 md:-ml-px top-0 bottom-0 w-[1px] bg-white/10 z-0"></div>
              
              {[
                { step: "01", title: "Contato via WhatsApp", desc: "Clique no botão e envie uma mensagem rápida para nossa equipe." },
                { step: "02", title: "Agendamento Privado", desc: "Escolha o melhor horário para uma conversa exclusiva e detalhada." },
                { step: "03", title: "Avaliação & Plano", desc: "Analisaremos seu perfil e criaremos o planejamento do seu novo sorriso." }
              ].map((step, i) => (
                <div key={i} className={`flex gap-8 relative z-10 group ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                   <div className="w-12 h-12 flex-shrink-0 rounded-full bg-black border border-gold-500 flex items-center justify-center text-gold-500 font-serif font-bold text-lg group-hover:bg-gold-500 group-hover:text-black transition-all">
                      {step.step}
                   </div>
                   <div className={`space-y-2 flex-grow ${i % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <h4 className="text-xl md:text-2xl font-serif text-white">{step.title}</h4>
                      <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-md mx-auto md:mx-0">{step.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-32 px-6 md:px-12 text-center relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 md:w-[600px] h-96 md:h-[600px] bg-gold-gradient opacity-10 blur-[100px] rounded-full pointer-events-none"></div>

         <div className="max-w-3xl mx-auto space-y-10 relative z-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">Seu futuro começa com um <span className="gold-text">sim</span> para você.</h2>
              <p className="text-gray-400 font-light italic text-lg md:text-2xl leading-relaxed">
                "Não é sobre mudar quem você é, mas sobre deixar transparecer a sua melhor versão."
              </p>
            </div>

            <div className="space-y-4 max-w-sm mx-auto">
              <a 
                href={EXPERT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={primaryButtonClass}
              >
                Garantir Minha Avaliação
              </a>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Disponível para agendamento hoje
              </p>
            </div>

            <div className="pt-10">
               <h4 className="font-signature text-4xl md:text-6xl gold-text">{EXPERT.name}</h4>
            </div>
         </div>
      </section>

      {/* 9. RODAPE */}
      <footer className="py-12 px-6 md:px-12 border-t border-white/5 text-center space-y-6">
         <div className="space-y-2 opacity-60">
            <h3 className="text-sm font-semibold uppercase tracking-widest">{EXPERT.name}</h3>
            <p className="text-[10px] uppercase tracking-widest">{EXPERT.profession}</p>
         </div>
         
         <div className="text-[10px] md:text-xs text-gray-500 space-y-1 uppercase tracking-tighter">
            <p>{EXPERT.address}</p>
            <p>Gurupi - Tocantins</p>
         </div>

         <div className="flex justify-center gap-6 pt-4">
            <a href={EXPERT.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-widest border-b border-gray-800 pb-1">Instagram</a>
            <a href={EXPERT.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-widest border-b border-gray-800 pb-1">WhatsApp</a>
         </div>

         <p className="text-[9px] text-gray-700 pt-8 italic">© 2024 - Kalissa Teles. Todos os direitos reservados.</p>
      </footer>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-full max-h-full">
            <img src={selectedImg} alt="Resultado Ampliado" className="max-w-full max-h-[80vh] md:max-h-[90vh] rounded-lg shadow-2xl border border-white/10" />
            <button 
              className="absolute -top-12 right-0 md:top-4 md:-right-12 text-white text-4xl font-light p-2 hover:text-gold-500 transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
