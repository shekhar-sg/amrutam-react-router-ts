import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  cart: {
    id: string;
    quantity: number;
  }[];
}

const initialState: UserState = {
  cart: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      const product = state.cart.find((item) => item.id === action.payload);
      if (!product) {
        state.cart.push({ id: action.payload, quantity: 1 });
      } else {
        product.quantity += 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const product = state.cart.find((item) => item.id === action.payload);
      if (product) {
        product.quantity -= 1;
        if (product.quantity === 0) {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
        }
      }
    },
    deleteFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});
export default userSlice;

export const { addToCart, removeFromCart, deleteFromCart } = userSlice.actions;
