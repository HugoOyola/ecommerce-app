import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="card-container">
      {products?.map((p) => (
        <Item key={p.id} id={p.id} nombre={p.nombre} imagen={p.imagen} precio={p.precio} descripcion={p.descripcion} cantidad={p.cantidad} categoria={p.categoria} />
      ))}
    </div>
  );
};

export default ItemList;

// import React from "react";
// import Item from "./Item";

// const ItemList = ({ products }) => {
//   return (
//     <div className="card-container">
//       {Array.isArray(products) &&
//         products.map((p) => (
//           <Item key={p.id} id={p.id} nombre={p.nombre} imagen={p.imagen} precio={p.precio} descripcion={p.descripcion} cantidad={p.cantidad} categoria={p.categoria} />
//         ))}
//     </div>
//   );
// };

// export default ItemList;
