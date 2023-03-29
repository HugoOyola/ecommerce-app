import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  // Calcular la cantidad total de productos en el carrito
  const totalQuantity = cart.reduce((total, item) => {
    if (typeof item.quantity === "number") {
      return total + item.quantity;
    } else {
      return total;
    }
  }, 0);

  return (
    <>
      <i className="material-icons">shopping_cart</i>
      <span className="cart-items">{totalQuantity}</span>
      Carrito
    </>
  );
};

export default CartWidget;
