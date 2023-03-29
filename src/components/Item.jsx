import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, imagen, precio, descripcion, cantidad, categoria }) => {
  return (
    <div className="product-card" key={id}>
      <div className="product-thumb">
        <img src={imagen} alt={nombre} />
      </div>
      <div className="product-details">
        <h3 className="product-title">
          <Link to={`/item/${id}`}>{nombre}</Link>
        </h3>
        <span className="product-category">{categoria}</span>
        <p>{descripcion}</p>
        <div className="product-bottom-details">
          <p className="product-price">S/. {precio}</p>
          <Link to={`/item/${id}`}>
            <button className="product-details-btn">Ver detalle</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
