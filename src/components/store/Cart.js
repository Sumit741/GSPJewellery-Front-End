import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  totalQuantity: 0,
};

const getTotalQuantity = (storageName) => {
  let quantity = 0;
  const items = JSON.parse(localStorage.getItem(storageName));
  if (items.length > 0) {
    const totalQuantity = items.map((item) => (quantity += item.quantity));
    return totalQuantity.pop();
  } else {
    return quantity;
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      const itemReceived = action.payload;
      const items = JSON.parse(localStorage.getItem("cart"));

      if (items) {
        state.items = items;
        const existingItem = state.items.find(
          (item) => item.productId === itemReceived.productId
        );
        if (existingItem) {
          existingItem.quantity += itemReceived.quantity;
          existingItem.price = existingItem.price + itemReceived.price;
          localStorage.setItem("cart", JSON.stringify(state.items));
        } else {
          state.items = [...state.items, itemReceived];
          localStorage.setItem("cart", JSON.stringify(state.items));
        }

        state.totalQuantity = getTotalQuantity("cart");
        console.log(state.totalQuantity);
      } else {
        // state.items = [];
        state.items = [
          ...state.items,
          {
            productId: itemReceived.productId,
            ProductName: itemReceived.ProductName,
            NetWeight: itemReceived.NetWeight,
            Element: itemReceived.Element,
            Category: itemReceived.Category,
            price: itemReceived.price,
            quantity: itemReceived.quantity,
          },
        ];
        localStorage.setItem("cart", JSON.stringify(state.items));
        state.totalQuantity = getTotalQuantity("cart");
      }
      console.log(state.items);

      // state.totalQuantity++;
      // const item = action.payload;
      // const existingItem = state.items.find(
      //   (items) => items.productId === item.productId
      // );
      // if (existingItem) {
      //   existingItem.quantity++;
      //   existingItem.price = existingItem.price + item.price;
      // } else {
      //   state.items = [
      //     ...state.items,
      //     {
      //       productId: item.productId,
      //       productName: item.ProductName,
      //       price: item.price,
      //       quantity: item.quantity,
      //     },
      //   ];
      // }
    },
    setTotalQuantityInitially(state, action) {
      const item = JSON.parse(localStorage.getItem("cart"));
      if (item) {
        state.totalQuantity = getTotalQuantity("cart");
      } else {
        state.totalQuantity = 0;
      }
    },
    cartIncreaseHandler(state, action) {
      const item = action.payload;
      const storageItems = JSON.parse(localStorage.getItem("cart"));
      state.items = storageItems;
      const cartItem = state.items.find(
        (product) => product.productId === item.productId
      );
      cartItem.price = cartItem.price + cartItem.price / cartItem.quantity;
      cartItem.quantity++;
      localStorage.setItem("cart", JSON.stringify(state.items));
      state.totalQuantity = getTotalQuantity("cart");
    },

    cartDecreaseHandler(state, action) {
      const item = action.payload;
      const storageItems = JSON.parse(localStorage.getItem("cart"));
      state.items = storageItems;

      const cartItem = state.items.find(
        (product) => product.productId === item.productId
      );
      if (cartItem.quantity <= 1) {
        const updatedCart = state.items.filter(
          (product) => product.productId !== item.productId
        );
        state.items = updatedCart;
        localStorage.setItem("cart", JSON.stringify(state.items));
        console.log(state.items);
        state.totalQuantity = getTotalQuantity("cart");
      } else {
        cartItem.price = cartItem.price - cartItem.price / cartItem.quantity;
        cartItem.quantity--;
        localStorage.setItem("cart", JSON.stringify(state.items));
        console.log(state.items);

        state.totalQuantity = getTotalQuantity("cart");
      }
    },

    removeItemFromCart(state, action) {
      const item = action.payload;
      const updatedCart = state.items.filter(
        (product) => product.productId !== item.productId
      );
      state.items = updatedCart;
      localStorage.setItem("cart", JSON.stringify(state.items));
      console.log(state.items);
      state.totalQuantity = getTotalQuantity("cart");
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
