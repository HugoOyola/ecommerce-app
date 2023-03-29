import React from "react";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";

const Document = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const oneItem = doc(db, "productos", `${id}`);

    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const docs = snapshot.data();
        setProduct(docs);
      } else {
        console.log("No such document!");
      }
    });
  }, []);
  return (
    <div>
      <h1>Producto</h1>
      {
        <div>
          <h4>{product.nombre}</h4>
          <p>{product.descripcion}</p>
        </div>
      }
    </div>
  );
};

export default Document;
