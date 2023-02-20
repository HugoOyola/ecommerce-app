import React from "react";

const CartWidget = ({ count }) => {
  return (
    <a href="#" className="cart">
      <i className="material-icons">shopping_cart</i>
      <span className="cart-items">{count}</span>
    </a>
  );
};

export default CartWidget;
