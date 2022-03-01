import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      state.totalQuantity++;

      const item = action.payload;
      const existingItem = state.items.find(
        (items) => items.productId === item.productId
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.price = existingItem.price + item.price;
      } else {
        state.items = [
          ...state.items,
          {
            productId: item.productId,
            productName: item.ProductName,
            price: item.price,
            quantity: item.quantity,
          },
        ];
      }
    },

    cartIncreaseHandler(state, action) {
      const item = action.payload;
      const cartItem = state.items.find(
        (product) => product.productId === item.productId
      );
      cartItem.price = cartItem.price + cartItem.price / cartItem.quantity;
      cartItem.quantity++;
      state.totalQuantity++;
    },

    cartDecreaseHandler(state, action) {
      const item = action.payload;
      const cartItem = state.items.find(
        (product) => product.productId === item.productId
      );
      if (cartItem.quantity > 1) {
        cartItem.price = cartItem.price - cartItem.price / cartItem.quantity;
        cartItem.quantity--;
        state.totalQuantity--;
      } else {
        const updatedCart = state.items.filter(
          (product) => product.productId !== item.productId
        );
        state.items = updatedCart;
        state.totalQuantity = state.totalQuantity - cartItem.quantity;
      }
    },

    removeItemFromCart(state, action) {
      const item = action.payload;
      const itemToBeRemoved = state.items.find(
        (product) => product.productId === item.productId
      );
      const updatedCart = state.items.filter(
        (product) => product.productId !== item.productId
      );
      state.items = updatedCart;
      state.totalQuantity = state.totalQuantity - itemToBeRemoved.quantity;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
