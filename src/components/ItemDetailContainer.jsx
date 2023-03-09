import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Data from "../data.json";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const product = Data.find((product) => product.id === parseInt(id));
    setProduct(product);
  }, [id]);

  return (
    <div>
      <h2>Detalles del producto</h2>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
