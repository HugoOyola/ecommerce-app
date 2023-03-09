import React, { useState } from "react";

const ItemCount = ({ initialCount, stock, onAdd }) => {
  const [count, setCount] = useState(initialCount);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count">
      <button className="buy-btn" onClick={handleSubtract}>
        -
      </button>
      <span>{count}</span>
      <button className="buy-btn" onClick={handleAdd}>
        +
      </button>
      <button className="buy-btn">Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
