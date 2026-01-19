
import React, { useState, useEffect } from 'react';

const OpeningIntro: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Séquence d'animation 3D cinématographique
    const timer1 = setTimeout(() => setStage(1), 100); 
    const timer2 = setTimeout(() => setStage(2), 2800); 
    const timer3 = setTimeout(() => {
      onComplete();
    }, 4000); 

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-anthracite flex items-center justify-center transition-all duration-1000 ease-in-out ${stage === 2 ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'}`}>
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2D4032_0%,_transparent_70%)]"></div>
      </div>

      <div 
        style={{
          perspective: '1200px',
          transformStyle: 'preserve-3d',
        }}
        className="relative text-center"
      >
        <h1 
          className={`font-serif text-white text-4xl md:text-7xl tracking-[0.6em] font-extralight transition-all duration-[2.5s] ease-out
            ${stage === 0 ? 'opacity-0 scale-50 blur-xl' : 'opacity-100 scale-100 blur-0'}
          `}
          style={{
            transform: stage >= 1 ? 'translateZ(60px) rotateX(0deg)' : 'translateZ(-200px) rotateX(20deg)',
            textShadow: '0 0 40px rgba(255,255,255,0.15)'
          }}
        >
          MAISON NB
        </h1>

        <div 
          className="h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent mt-8 transition-all duration-[2s] ease-in-out"
          style={{
            width: stage >= 1 ? '120px' : '0%',
            margin: '0 auto',
            opacity: stage >= 1 ? 0.6 : 0,
            transform: 'translateZ(30px)'
          }}
        />
      </div>

      <div 
        className={`absolute bottom-20 transition-all duration-1000 delay-500
          ${stage === 1 ? 'opacity-40 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
      >
        <p className="text-[9px] text-white uppercase tracking-[0.6em] font-light">
          L'Excellence du Rituel
        </p>
      </div>
    </div>
  );
};

export default OpeningIntro;
