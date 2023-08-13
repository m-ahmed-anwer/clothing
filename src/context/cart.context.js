import React, { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((res) => res.id === productToAdd.id);

  if (existingCartItem) {
    const value = cartItems.map((res) =>
      res.id === productToAdd.id ? { ...res, quantity: res.quantity + 1 } : res,
    );

    return value;
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeItem = (cartItems, itemToRemoved) => {
  const value = cartItems.filter((item) => item.id !== itemToRemoved.id);
  return value;
};

const calculateTotal = (cartItems) => {
  if (cartItems.length === 0) {
    return 0;
  }
  let total = 0;
  cartItems.forEach((res) => (total += res.finalPrice * res.quantity));
  return total;
};

const calculateSubTotal = (cartItems) => {
  if (cartItems.length === 0) {
    return 0;
  }
  let total = 0;
  cartItems.forEach((res) => (total += res.originalPrice * res.quantity));
  return total;
};
const incrementQuantity = (cartItems, productToIncrement) => {
  const check = cartItems.find((res) => res.id === productToIncrement.id);

  if (check) {
    const value = cartItems.map((res) =>
      res.id === productToIncrement.id
        ? { ...res, quantity: res.quantity + 1 }
        : res,
    );
    return value;
  }

  return [...cartItems];
};

const decrementQuantity = (cartItems, productTodecrement) => {
  const check = cartItems.find((res) => res.id === productTodecrement.id);

  if (check) {
    const updatedItems = cartItems.map((res) =>
      res.id === productTodecrement.id
        ? { ...res, quantity: res.quantity - 1 }
        : res,
    );

    const itemToRemove = updatedItems.find(
      (item) => item.id === productTodecrement.id && item.quantity === 0,
    );

    if (itemToRemove) {
      const filteredItems = updatedItems.filter(
        (item) => item.id !== productTodecrement.id,
      );
      return filteredItems;
    }

    return updatedItems;
  }

  return [...cartItems];
};

const calculateFinal = (shipping, total, tax) => {
  if (tax === 0) {
    return total + tax;
  }
  return shipping + total + tax;
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  subTotal: 0,
  totalCalculation: 0,
  cartCount: 0,
  incrementItem: () => {},
  decrementItem: () => {},
  tax: 0,
  shipping: 0,
  finalToPay: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const shipping = 10;
  const [tax, setTax] = useState(0);
  const [finalToPay, setFinalToPay] = useState(0);

  useEffect(() => {
    const newCount = cartItems.reduce((total, res) => total + res.quantity, 0);
    setCartCount(newCount);
    calculateSubTotal(cartItems);
    calculateTotal(cartItems);
    setTax((totalCalculation * 5) / 100);
  }, [cartItems]);

  useEffect(() => {
    setFinalToPay(calculateFinal(shipping, totalCalculation, tax));
  }, [tax]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (itemToRemoved) => {
    setCartItems(removeItem(cartItems, itemToRemoved));
  };

  const incrementItem = (itemToIncrease) => {
    setCartItems(incrementQuantity(cartItems, itemToIncrease));
  };

  const decrementItem = (itemToDescrease) => {
    setCartItems(decrementQuantity(cartItems, itemToDescrease));
  };

  const totalCalculation = calculateTotal(cartItems);
  const subTotal = calculateSubTotal(cartItems);

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    removeItemFromCart,
    totalCalculation,
    cartCount,
    subTotal,
    decrementItem,
    incrementItem,
    tax,
    shipping,
    finalToPay,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
