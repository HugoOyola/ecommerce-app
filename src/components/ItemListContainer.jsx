import Data from "../data";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { categoria } = useParams();

  const filterProducts = categoria ? Data.filter((product) => product.categoria === categoria) : Data;
  console.log(filterProducts);

  return (
    <div>
      <h2 className="center">Catálogo de Productos</h2>
      <ItemList products={filterProducts} />
    </div>
  );
};

export default ItemListContainer;
