
import React from 'react';

const Heritage: React.FC = () => {
  return (
    <section className="bg-sand py-24 px-8 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -top-10 -left-10 w-full h-full border border-oasis/10 z-0"></div>
          <img 
            src="https://picsum.photos/id/111/1000/1200" 
            alt="Héritage Maison NB" 
            className="relative z-10 w-full aspect-[4/5] object-cover grayscale-[0.4]"
          />
        </div>
        
        <div className="w-full md:w-1/2">
          <span className="text-oasis text-[10px] uppercase tracking-[0.4em] mb-6 block">Transmission & Secret</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
            Des Confins du Maroc aux <br className="hidden lg:block"/> Terres d'Arabie
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed font-light">
            <p>
              Maison NB naît d'une promesse : celle de préserver l'immatériel. Entre les rituels purificateurs du Maghreb et les onguents précieux de la péninsule Arabique, nous avons tissé un lien sacré.
            </p>
            <p>
              Chaque poudre, chaque huile, chaque texture est le fruit d'une transmission orale, de gestes répétés depuis des siècles, sublimés aujourd'hui pour la femme moderne en quête de sens et de pureté.
            </p>
          </div>
          <button className="mt-10 group flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-medium text-oasis hover:text-terracotta transition-colors">
            Lire notre manifeste
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Heritage;
