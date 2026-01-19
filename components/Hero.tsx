
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#E8DED1]">
      {/* Background Image - Matching the aesthetic of the provided image (stone tiles, soft leaf shadows) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2000&auto=format&fit=crop" 
          alt="Maison NB Sidr Ritual" 
          className="w-full h-full object-cover filter brightness-[0.98]"
        />
        {/* Subtle gradient overlay to ensure text legibility while keeping the "sunlight" feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl fade-in">
        <span className="text-white text-[11px] uppercase tracking-[0.5em] mb-6 block drop-shadow-sm font-semibold">
          L'Éveil des Sens & De l'Héritage
        </span>
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-10 leading-tight drop-shadow-md">
          Sidr Hemma <br/> <span className="italic text-3xl md:text-5xl lg:text-6xl opacity-90 block mt-2 font-light">Le Rituel Purificateur</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="bg-white text-anthracite hover:bg-oasis hover:text-white px-12 py-4 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 ease-in-out shadow-2xl">
            Découvrir le Sidr
          </button>
          <button className="bg-transparent text-white border border-white/40 hover:border-white px-12 py-4 text-[10px] uppercase tracking-[0.3em] font-medium transition-all duration-500 ease-in-out backdrop-blur-[2px]">
            Voir la Collection
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[9px] text-white/70 uppercase tracking-[0.4em] font-medium">Explorer</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/60 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
