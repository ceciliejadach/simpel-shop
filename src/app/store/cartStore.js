import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],

  // Tilføj et produkt til kurven
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        return {
          cart: state.cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)),
        };
      } else {
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }
    }),

  // Opdater produktmængden i kurven
  updateCartQuantity: (productId, newQuantity) =>
    set((state) => ({
      cart:
        newQuantity === 0
          ? state.cart.filter((product) => product.id !== productId) // Fjern produkt ved 0
          : state.cart.map((product) => (product.id === productId ? { ...product, quantity: newQuantity } : product)),
    })),

  // Tøm kurven
  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;
