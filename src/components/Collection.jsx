import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const Collection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "productos");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(docs);
    });
  }, []);

  return (
    <div className="card-container">
      <h2>Productos</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.nombre}</h4>
          <img src={product.imagen} alt="" />
          <p>{product.descripcion}</p>
          <p>{product.id}</p>
        </div>
      ))}
    </div>
  );
};

export default Collection;

// import React from "react";
// import { useEffect, useState } from "react";
// import { collection, getDocs, getFirestore } from "firebase/firestore";

// const Collection = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const db = getFirestore();
//     const itemsCollection = collection(db, "productos");
//     getDocs(itemsCollection).then((snapshot) => {
//       const docs = snapshot.docs.map((doc) => doc.data(), doc.id);
//       setProducts(docs);
//     });
//   }, []);

//   return (
//     <div className="card-container">
//       <h2>Productos</h2>
//       {products.map((product) => (
//         <div key={product.id}>
//           <h4>{product.nombre}</h4>
//           <img src={product.imagen} alt="" />
//           <p>{product.descripcion}</p>
//           <p>{product.id}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Collection;
