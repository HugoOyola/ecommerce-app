import React from "react";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "productos");
    const item = getDocs(itemCollection).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id === id) {
          setProduct({ id: doc.id, ...doc.data() });
        }
      });
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

// import React, { useState, useEffect } from "react";
// import ItemDetail from "./ItemDetail";
// import { useParams } from "react-router-dom";
// import Data from "../data.json";

// const ItemDetailContainer = () => {
//   const [product, setProduct] = useState({});
//   const { id } = useParams();

//   useEffect(() => {
//     const product = Data.find((product) => product.id === parseInt(id));
//     setProduct(product);
//   }, [id]);

//   return (
//     <div className="container-details-product">
//       <h2>Detalles del producto</h2>
//       <ItemDetail product={product} />
//     </div>
//   );
// };

// export default ItemDetailContainer;
