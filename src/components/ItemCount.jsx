import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemCount = ({ stock, initialCount, onAdd }) => {
  const [count, setCount] = useState(initialCount);
  const [stockCount, setStockCount] = useState(stock);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    const newCartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    setCartQuantity(newCartQuantity);
  }, [cart]);

  const handleIncrement = () => {
    if (count < stockCount) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    const totalQuantity = cartQuantity + count;
    if (totalQuantity > stockCount) {
      alert("No hay suficiente stock disponible.");
      return;
    }

    onAdd(count);
    setStockCount(stockCount - count);
    if (count === stockCount) {
      setIsButtonDisabled(true);
    }
  };

  return (
    <div className="item-count">
      <button className="buy-btn" onClick={handleDecrement}>
        -
      </button>
      <span className="count"> Cantidad: {count} </span>
      <button className="buy-btn" onClick={handleIncrement} disabled={count === stockCount || isButtonDisabled}>
        +
      </button>
      <button className="add-btn" onClick={handleAddToCart} disabled={count > stockCount || isButtonDisabled}>
        {count === stockCount ? "Sin stock" : "Agregar al carrito"}
      </button>
    </div>
  );
};

export default ItemCount;
