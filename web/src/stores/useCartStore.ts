import type { Cart } from 'types/cart';
import { create } from 'zustand';

type CartState = {
  carts: Cart[];
};

type CartAction = {
  setCarts: (cart: Cart) => void;
};

const useCartStore = create<CartState & CartAction>((set) => ({
  carts: [],
  setCarts: (cart) => set((state) => ({ carts: [...state.carts, cart] })),
}));

export default useCartStore;
