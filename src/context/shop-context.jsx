import { createContext, useState } from "react";
import { PRODUCTS } from "../products";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};

  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }

  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getCartSubtotal = () => {
    let subtotal = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        subtotal += cartItems[item] * itemInfo.price;
      }
    }
    return subtotal.toFixed(2);
  };

  const cartItemsCount = () => {
    const count = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);
    return count;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getCartSubtotal,
    cartItemsCount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
