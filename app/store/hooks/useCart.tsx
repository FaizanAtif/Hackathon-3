import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/app/store/store';
import {
  addItem, // Ensure this matches the exported action name
  removeItem,
  updateQuantity,
  clearCart,
} from '@/app/store/feature/cart'; // Ensure this path is correct
import { CartItem } from '@/app/store/types/cart';

export const useCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => dispatch(addItem(item));
  const removeFromCart = (id: string) => dispatch(removeItem(id));
  const updateItemQuantity = (id: string, quantity: number) =>
    dispatch(updateQuantity({ id, quantity }));
  const clearAllCart = () => dispatch(clearCart());

  return {
    items: cart.items,
    totalQuantity: cart.totalQuantity,
    totalAmount: cart.totalAmount,
    addToCart,
    removeFromCart,
    updateItemQuantity,
    clearCart: clearAllCart,
  };
};