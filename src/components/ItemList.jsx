import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="card-container">
      {Array.isArray(products) && products.map((p) => <Item key={p.id} id={p.id} nombre={p.nombre} imagen={p.imagen} precio={p.precio} descripcion={p.descripcion} />)}
    </div>
  );
};

export default ItemList;
