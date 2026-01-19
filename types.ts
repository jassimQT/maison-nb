
export interface Product {
  id: string;
  variantId: number; // Requis pour l'API Shopify
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
}

export interface CartItem extends Product {
  quantity: number;
  key?: string; // Clé unique Shopify pour l'item dans le panier
}

export interface NavLink {
  label: string;
  href: string;
}

// Format de réponse Shopify AJAX
export interface ShopifyCartResponse {
  token: string;
  note: string;
  attributes: Record<string, any>;
  original_total_price: number;
  total_price: number;
  total_discount: number;
  total_weight: number;
  item_count: number;
  items: Array<{
    id: number;
    key: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
    product_title: string;
    variant_title: string;
  }>;
}
