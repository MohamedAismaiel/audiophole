import React, { useEffect, useReducer } from "react";

export const CartContext = React.createContext({
  totalPrice: 0,
  items: [],
});

const cartInitial = { items: [], totalPrice: 0 };
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalPrice =
      state.totalPrice + action.item.price * action.item.amount;

    const existingCartItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItem = state.items[existingCartItem];

    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItem] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    localStorage.setItem("items", JSON.stringify(updatedItems));
    localStorage.setItem("price", JSON.stringify(updatedTotalPrice));

    localStorage.setItem("doneItems", JSON.stringify(updatedItems));
    localStorage.setItem("donePrice", JSON.stringify(updatedTotalPrice));

    return { totalPrice: updatedTotalPrice, items: updatedItems };
  }
  if (action.type === "REMOVE_ITEM") {
    const existingCartIemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const exsitingItem = state.items[existingCartIemIndex];

    const updatedTotalAmount = state.totalPrice - exsitingItem.price;

    let updatedItems;
    if (exsitingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...exsitingItem, amount: exsitingItem.amount - 1 };
      updatedItems = state.items;
      updatedItems[existingCartIemIndex] = updatedItem;
    }
    localStorage.setItem("items", JSON.stringify(updatedItems));
    localStorage.setItem("price", JSON.stringify(Math.abs(updatedTotalAmount)));
    localStorage.setItem("doneItems", JSON.stringify(updatedItems));
    localStorage.setItem("donePrice", JSON.stringify(updatedTotalAmount));

    if (JSON.parse(localStorage.getItem("items")).length === 0) {
      localStorage.removeItem("items");
      localStorage.removeItem("price");
      localStorage.removeItem("doneItems");
      localStorage.removeItem("donePrice");
    }
    return { items: updatedItems, totalPrice: Math.abs(updatedTotalAmount) };
  }
  if (action.type === "REMOVE_ALL") {
    let updatedItems;
    updatedItems = [];
    let totalPrice = 0;
    localStorage.removeItem("items");
    localStorage.removeItem("price");
    return { items: updatedItems, totalPrice };
  }
};

const CartContextProvider = (props) => {
  useEffect(() => {
    if (localStorage.getItem("items")) {
      cartInitial.items = JSON.parse(localStorage.getItem("items"));
      cartInitial.totalPrice = JSON.parse(localStorage.getItem("price"));
    } else return;
  }, []);

  const [cart, dispatchCart] = useReducer(cartReducer, cartInitial);

  const addItemToHandler = (item) => {
    dispatchCart({ type: "ADD_ITEM", item: item });
  };

  const removeIemFromHandler = (id) => {
    dispatchCart({ type: "REMOVE_ITEM", id: id });
  };
  const removeAllHandler = (item) => {
    dispatchCart({ type: "REMOVE_ALL", item: item });
  };
  const cartContext = {
    items: cart.items,
    totalPrice: cart.totalPrice,
    addItem: addItemToHandler,
    removeItem: removeIemFromHandler,
    removeAll: removeAllHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
