
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-anthracite text-cream py-20 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
        {/* Brand */}
        <div className="col-span-1">
          <h2 className="font-serif text-3xl tracking-[0.2em] mb-8">MAISON NB</h2>
          <p className="text-xs text-gray-400 font-light leading-loose max-w-[200px]">
            L'excellence cosmétique de niche, inspirée par les rituels de beauté les plus anciens du monde.
          </p>
        </div>

        {/* Links */}
        <div className="col-span-1">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-8 text-gray-500">Navigation</h4>
          <ul className="space-y-4 text-xs font-light tracking-wide">
            <li><a href="#" className="hover:text-oasis transition-colors">Notre Boutique</a></li>
            <li><a href="#" className="hover:text-oasis transition-colors">Les Rituels</a></li>
            <li><a href="#" className="hover:text-oasis transition-colors">Notre Histoire</a></li>
            <li><a href="#" className="hover:text-oasis transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Links 2 */}
        <div className="col-span-1">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-8 text-gray-500">Informations</h4>
          <ul className="space-y-4 text-xs font-light tracking-wide">
            <li><a href="#" className="hover:text-oasis transition-colors">Livraison & Retours</a></li>
            <li><a href="#" className="hover:text-oasis transition-colors">Mentions Légales</a></li>
            <li><a href="#" className="hover:text-oasis transition-colors">CGV</a></li>
            <li><a href="#" className="hover:text-oasis transition-colors">Presse</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="col-span-1">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-8 text-gray-500">Rejoindre le cercle</h4>
          <p className="text-xs font-light mb-6 text-gray-400">Inscrivez-vous pour recevoir nos invitations exclusives et nouveaux rituels.</p>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="VOTRE EMAIL" 
              className="bg-transparent border-b border-gray-700 w-full py-2 text-[10px] tracking-widest focus:outline-none focus:border-oasis transition-colors placeholder:text-gray-600"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2">
              <svg className="w-4 h-4 text-gray-500 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>
          <div className="flex gap-6 mt-10">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <span className="sr-only">Pinterest</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[9px] uppercase tracking-widest text-gray-600">© 2025 Maison NB. Tous droits réservés.</p>
        <div className="flex gap-8 text-[9px] uppercase tracking-widest text-gray-600">
          <a href="#" className="hover:text-white transition-colors">Expédition</a>
          <a href="#" className="hover:text-white transition-colors">Privacité</a>
          <a href="#" className="hover:text-white transition-colors">Accessibilité</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
