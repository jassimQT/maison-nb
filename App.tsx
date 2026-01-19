
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Heritage from './components/Heritage';
import Footer from './components/Footer';
import OpeningIntro from './components/OpeningIntro';
import CartDrawer from './components/CartDrawer';
import { Product, CartItem, ShopifyCartResponse } from './types';

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Charger le panier Shopify au démarrage
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await fetch('/cart.js');
      if (response.ok) {
        const data: ShopifyCartResponse = await response.json();
        syncWithShopify(data);
      }
    } catch (e) {
      console.warn("Mode démo: Shopify API non détectée.");
    }
  };

  const syncWithShopify = (data: ShopifyCartResponse) => {
    const items: CartItem[] = data.items.map(item => ({
      id: item.id.toString(),
      variantId: item.id,
      name: item.product_title,
      description: item.variant_title,
      price: item.price / 100,
      image: item.image,
      quantity: item.quantity,
      key: item.key
    }));
    setCartItems(items);
  };

  const addToCart = async (product: Product) => {
    setIsLoading(true);
    try {
      // Appel API Shopify Real
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: [{ id: product.variantId, quantity: 1 }]
        })
      });
      
      if (response.ok) {
        await fetchCart();
      } else {
        // Fallback démo si hors Shopify
        setCartItems(prev => {
          const existing = prev.find(item => item.variantId === product.variantId);
          if (existing) {
            return prev.map(item => item.variantId === product.variantId ? { ...item, quantity: item.quantity + 1 } : item);
          }
          return [...prev, { ...product, quantity: 1 }];
        });
      }
    } catch (e) {
      // Mode démo
      setCartItems(prev => [...prev, { ...product, quantity: 1 }]);
    } finally {
      setIsLoading(false);
      setIsCartOpen(true);
    }
  };

  const updateQuantity = async (id: string, delta: number) => {
    const item = cartItems.find(i => i.id === id);
    if (!item) return;

    const newQty = item.quantity + delta;
    if (newQty < 1) return removeFromCart(id);

    try {
      await fetch('/cart/change.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: item.key || item.variantId, quantity: newQty })
      });
      await fetchCart();
    } catch (e) {
      setCartItems(prev => prev.map(i => i.id === id ? { ...i, quantity: newQty } : i));
    }
  };

  const removeFromCart = async (id: string) => {
    const item = cartItems.find(i => i.id === id);
    try {
      await fetch('/cart/change.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: item?.key || id, quantity: 0 })
      });
      await fetchCart();
    } catch (e) {
      setCartItems(prev => prev.filter(i => i.id !== id));
    }
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className={`min-h-screen selection:bg-oasis selection:text-white bg-cream ${isCartOpen ? 'overflow-hidden' : ''}`}>
      {showIntro && <OpeningIntro onComplete={() => setShowIntro(false)} />}
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      <div className={`transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar onCartClick={() => setIsCartOpen(true)} cartCount={cartCount} />
        <main>
          <Hero />
          <div className="bg-cream h-24 flex items-center justify-center">
            <div className="w-[1px] h-full bg-oasis/10"></div>
          </div>
          <ProductGrid onAddToCart={addToCart} />
          <div className="bg-cream py-10 flex justify-center overflow-hidden">
             <span className="font-serif italic text-oasis/40 text-sm tracking-[0.5em] uppercase">Maison NB</span>
          </div>
          <Heritage />
          <section className="bg-cream py-32 px-8">
            <div className="max-w-3xl mx-auto text-center italic font-serif text-2xl md:text-3xl text-anthracite/70 leading-relaxed">
              "La beauté n'est pas une fin en soi, c'est un voyage intérieur nourri par les gestes oubliés de nos ancêtres."
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
