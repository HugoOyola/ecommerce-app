import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ product }) => {
  const { id, nombre, descripcion, precio, imagen, cantidad } = product;
  const { addItem } = useContext(CartContext);

  const handleAddToCart = (quantity) => {
    const item = {
      id,
      nombre,
      precio,
      cantidad: quantity,
      imagen,
    };
    addItem(item, quantity);
  };

  return (
    <div className="product-details-container" key={id}>
      <img className="product-details-thumb" src={imagen} alt={nombre} />
      <div className="product-details-info">
        <h2>{nombre}</h2>
        <span className="stock">Stock: {cantidad} unidades</span>
        <p>{descripcion}</p>
        <p className="product-details-price">S/. {precio}</p>
        <ItemCount stock={cantidad} initialCount={1} onAdd={handleAddToCart} />
      </div>
    </div>
  );
};

export default ItemDetail;
