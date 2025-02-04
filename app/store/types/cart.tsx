// types/cart.ts
export interface CartItem {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    size?: string;
    color?: string;
  }
  
  export interface CartState {
    items: CartItem[];
    totalQuantity: number;
    totalAmount: number;
    isLoading: boolean;
    error: string | null;
  }