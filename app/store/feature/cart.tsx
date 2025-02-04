import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number; // Total number of items in the cart
  totalAmount: number; // Total price of all items in the cart
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add an item to the cart or increment its quantity if it already exists
    addItem: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      // Update total quantity and total amount
      state.totalQuantity += 1;
      state.totalAmount += action.payload.price;
    },

    // Remove an item from the cart
    removeItem: (state, action: PayloadAction<string>) => {
      const itemToRemove = state.items.find((item) => item.id === action.payload);

      if (itemToRemove) {
        state.totalQuantity -= itemToRemove.quantity;
        state.totalAmount -= itemToRemove.price * itemToRemove.quantity;
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },

    // Update the quantity of a specific item in the cart
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);

      if (itemToUpdate) {
        // Adjust total quantity and total amount based on the difference in quantity
        state.totalQuantity += quantity - itemToUpdate.quantity;
        state.totalAmount += itemToUpdate.price * (quantity - itemToUpdate.quantity);
        itemToUpdate.quantity = quantity;
      }
    },

    // Clear all items from the cart
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;