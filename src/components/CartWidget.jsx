import React from "react";

const CartWidget = ({ count }) => {
  return (
    <div className="cart">
      <i className="material-icons">shopping_cart</i>
      <span className="cart-items">{count}</span>
    </div>
  );
};

export default CartWidget;
