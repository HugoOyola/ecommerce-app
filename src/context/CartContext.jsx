import React, { createContext, useState, useEffect, useCallback } from "react";

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      return JSON.parse(savedCart);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateQuantity = useCallback((itemId, quantity) => {
    setCart((prevCart) => {
      const itemToUpdate = prevCart.find((i) => i.id === itemId);
      if (!itemToUpdate) {
        return prevCart;
      }

      const newQuantity = itemToUpdate.quantity + quantity;
      if (newQuantity > itemToUpdate.stock) {
        return prevCart;
      }

      return prevCart.map((i) => {
        if (i.id === itemId) {
          return {
            ...i,
            quantity: newQuantity,
          };
        }
        return i;
      });
    });
  }, []);

  const removeOneItem = useCallback((itemId) => {
    setCart((prevCart) => {
      const itemToRemove = prevCart.find((i) => i.id === itemId);
      if (!itemToRemove) {
        return prevCart;
      }

      if (itemToRemove.quantity > 1) {
        return prevCart.map((i) => {
          if (i.id === itemId) {
            return {
              ...i,
              quantity: i.quantity - 1,
            };
          }
          return i;
        });
      }

      return prevCart.filter((i) => i.id !== itemId);
    });
  }, []);

  const addItem = useCallback((item, quantity = 1) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((i) => i.id === item.id);

      if (existingItemIndex >= 0) {
        const newCart = [...prevCart];
        const newQuantity = newCart[existingItemIndex].quantity + quantity;
        if (newQuantity > item.stock) {
          newCart[existingItemIndex].quantity = item.stock;
        } else {
          newCart[existingItemIndex].quantity = newQuantity;
        }
        return newCart;
      }

      if (quantity > item.stock) {
        quantity = item.stock;
      }

      return [...prevCart, { ...item, quantity }];
    });
  }, []);

  const removeItem = useCallback((itemId) => {
    setCart((prevCart) => prevCart.filter((i) => i.id !== itemId));
  }, []);

  const clear = useCallback(() => {
    setCart([]);
  }, []);

  const isInCart = useCallback(
    (id) => {
      return cart.some((i) => i.id === id);
    },
    [cart]
  );

  const getTotalPrice = useCallback(() => {
    return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
  }, [cart]);

  const getGroupedItems = useCallback(() => {
    return cart.reduce((groups, item) => {
      if (!groups[item.id]) {
        groups[item.id] = {
          item: item,
          quantity: 0,
        };
      }
      groups[item.id].quantity += item.quantity;
      return groups;
    }, {});
  }, [cart]);

  const contextValue = {
    cart,
    addItem,
    removeItem,
    clear,
    isInCart,
    getTotalPrice,
    getGroupedItems,
    updateQuantity,
    removeOneItem,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
