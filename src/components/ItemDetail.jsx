import React from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const { id, nombre, descripcion, precio, imagen } = product;

  return (
    <div className="card" key={id}>
      <img src={imagen} alt="Producto 1" />
      <div className="info">
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <p className="price">S/. {precio}</p>
        <ItemCount stock={5} initialCount={1} />
      </div>
    </div>
  );
};

export default ItemDetail;
