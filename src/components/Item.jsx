import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, imagen, precio, descripcion }) => {
  return (
    <div className="card" key={id}>
      <img src={imagen} alt={nombre} />
      <div className="info">
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <p className="price">S/. {precio}</p>
        <button className="buy-btn">
          <Link to={`/item/${id}`}>Detalle del Producto</Link>
        </button>
      </div>
    </div>
  );
};

export default Item;
