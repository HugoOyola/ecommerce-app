import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "productos");
    const item = getDocs(itemCollection)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id === id) {
            setProduct({ id: doc.id, ...doc.data() });
          }
        });
      })
      .catch((error) => {
        console.log("Error al obtener el documento:", error);
      });
  }, [id]);

  return (
    <div className="container-details-product wrapper">
      <h2>Detalles del producto</h2>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
