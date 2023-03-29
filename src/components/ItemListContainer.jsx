import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "productos");
    getDocs(itemsCollection)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(docs);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  const filterProducts = categoria ? products.filter((product) => product.categoria === categoria) : products;

  return (
    <div className="container-products wrapper">
      <h2 className="container-products-title">Catálogo de Productos</h2>
      <ItemList products={filterProducts} />
    </div>
  );
};

export default ItemListContainer;

// import Data from "../data";
// import ItemList from "./ItemList";
// import { useParams } from "react-router-dom";
// import Collection from "./Collection";

// const ItemListContainer = () => {
//   const { categoria } = useParams();

//   const filterProducts = categoria ? Data.filter((product) => product.categoria === categoria) : Data;
//   console.log(filterProducts);

//   return (
//     < className="container-products wrapper">
//       <h2 className="container-products-title">Catálogo de Productos</h2>
//       <ItemList products={filterProducts} />
//       <Collection/>
//     </div>
//   );
// };

// export default ItemListContainer;
