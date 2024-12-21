import React, { createContext, useState, useContext } from "react";

const BasketContext = createContext();

export const useBasket = () => {
  return useContext(BasketContext);
};

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [orderDetails, setOrderDetails] = useState(null);

  const addToBasket = (product) => {
    setBasket((prevBasket) => {
      const existingItem = prevBasket.find((item) => item.id === product.id);
      if (existingItem) {
        return prevBasket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevBasket, { ...product, quantity: 1 }];
    });
  };

  const updateBasket = (itemId, action) => {
    setBasket((prevBasket) => {
      return prevBasket.map((item) => {
        if (item.id === itemId) {
          if (action === "increment") {
            return { ...item, quantity: item.quantity + 1 };
          } else if (action === "decrement" && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      });
    });
  };

  const removeItem = (itemId) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== itemId));
  };

  const clearBasket = () => {
    setBasket([]);
  };

  const calculateTotalPrice = () => {
    return basket.reduce((total, item) => {
      if (typeof item.price === "number" && typeof item.quantity === "number") {
        return total + item.price * item.quantity;
      }
      return total;
    }, 0);
  };

  // New function to save order details
  const placeOrder = (address, cardDetails) => {
    setOrderDetails({
      address,
      cardDetails,
      items: [...basket],
      totalPrice: calculateTotalPrice(),
    });
    clearBasket(); // Clear the basket after placing the order
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        orderDetails, // Provide order details to the context
        addToBasket,
        updateBasket,
        removeItem,
        clearBasket,
        placeOrder, // Provide placeOrder function to the context
        totalPrice: calculateTotalPrice(),
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
