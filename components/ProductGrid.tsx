
import React from 'react';
import { Product } from '../types';

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const PRODUCTS: Product[] = [
  {
    id: 'sidr-hemma',
    variantId: 441234567890, // Exemple de Variant ID Shopify
    name: 'Sidr Hemma',
    description: 'Poudre de Sidr Royale purifiée, issue des feuilles de Jujubier sauvage.',
    price: 42,
    image: 'https://images.unsplash.com/photo-1590156206657-3474340767cc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'mushat-vert',
    variantId: 441234567891,
    name: 'Mushat Vert',
    description: 'Complexe botanique ancestral pour la force et la densité capillaire.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'mushat-rouge',
    variantId: 441234567892,
    name: 'Mushat Rouge',
    description: 'Soin éclat intense aux extraits de racines sahariennes précieuses.',
    price: 48,
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800&auto=format&fit=crop'
  }
];

const ProductGrid: React.FC<ProductGridProps> = ({ onAddToCart }) => {
  return (
    <section id="shop" className="py-24 px-8 md:px-16 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-oasis text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">Botanique d'Exception</span>
            <h3 className="font-serif text-4xl md:text-5xl tracking-wide text-anthracite leading-tight">Nos Rituels Signatures</h3>
          </div>
          <a href="#" className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-oasis pb-2 hover:text-oasis transition-all duration-300">
            Tout Explorer
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-700">
              <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-sand/30">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-oasis/0 group-hover:bg-oasis/5 transition-colors duration-700"></div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                    className="bg-anthracite text-white px-10 py-4 text-[9px] uppercase tracking-[0.3em] font-bold whitespace-nowrap shadow-2xl hover:bg-oasis transition-colors"
                  >
                    Ajouter au Panier
                  </button>
                </div>
              </div>
              <div className="text-center px-6">
                <h4 className="font-serif text-2xl md:text-3xl mb-3 group-hover:text-oasis transition-colors font-medium">{product.name}</h4>
                <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-6 font-light leading-relaxed h-10 line-clamp-2 italic">{product.description}</p>
                <div className="flex items-center justify-center gap-6">
                   <div className="h-[1px] w-8 bg-gray-100"></div>
                   <span className="text-sm font-bold tracking-[0.2em]">{product.price},00€</span>
                   <div className="h-[1px] w-8 bg-gray-100"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
