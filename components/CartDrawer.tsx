
import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // Redirection standard Shopify
    window.location.href = '/checkout';
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[110] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[120] shadow-2xl transition-transform duration-700 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-8 border-b border-gray-100 flex justify-between items-center">
            <h2 className="font-serif text-2xl tracking-widest uppercase">Votre Panier</h2>
            <button onClick={onClose} className="text-anthracite hover:rotate-90 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-8">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                <p className="font-serif italic text-gray-400">Votre rituel commence ici...</p>
                <button onClick={onClose} className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-anthracite pb-2">Continuer mes achats</button>
              </div>
            ) : (
              <div className="space-y-8">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-6 group">
                    <div className="w-24 h-32 bg-sand overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <div className="flex flex-col justify-between py-1">
                      <div>
                        <h3 className="font-serif text-lg tracking-wide">{item.name}</h3>
                        <p className="text-[9px] uppercase tracking-widest text-gray-400 mt-1">{item.price},00€</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex border border-gray-200 px-3 py-1 items-center gap-4">
                          <button onClick={() => onUpdateQuantity(item.id, -1)} className="text-xs hover:text-oasis">-</button>
                          <span className="text-xs font-medium w-4 text-center">{item.quantity}</span>
                          <button onClick={() => onUpdateQuantity(item.id, 1)} className="text-xs hover:text-oasis">+</button>
                        </div>
                        <button onClick={() => onRemove(item.id)} className="text-[9px] uppercase tracking-widest text-gray-300 hover:text-anthracite transition-colors">Supprimer</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="p-8 bg-gray-50 space-y-6">
              <div className="flex justify-between items-end border-b border-gray-200 pb-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Sous-total</span>
                <span className="font-serif text-2xl">{subtotal},00€</span>
              </div>
              <p className="text-[9px] text-gray-400 italic">Taxes et frais d'expédition calculés lors du paiement.</p>
              <button 
                onClick={handleCheckout}
                className="w-full bg-anthracite text-white py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-oasis transition-all duration-500 shadow-xl"
              >
                Procéder au Paiement
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
