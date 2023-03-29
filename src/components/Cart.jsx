import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import SendOrder from "./SendOrder";
import EmptyCart from "../assets/images/empty-cart.png";

const Cart = () => {
  const { cart, addItem, removeItem, clear, getGroupedItems, removeOneItem } = useContext(CartContext);

  const groupedCart = getGroupedItems();
  const [showOrderForm, setShowOrderForm] = useState(false);

  const handleRemoveItem = (item) => {
    removeItem(item.id);
  };

  const handleAddItem = (item) => {
    const quantity = groupedCart[item.id]?.quantity || 0;
    const totalQuantity = quantity + 1;
    if (totalQuantity > item.stock) {
      alert("No hay suficiente stock disponible.");
      return;
    }
    addItem(item, 1);
  };

  const handleSubtractItem = (item) => {
    const quantity = groupedCart[item.id]?.quantity || 0;
    if (quantity === 1) {
      return;
    }
    removeOneItem(item.id);
  };

  const cartItems = Object.keys(groupedCart).map((id) => {
    const item = groupedCart[id].item;
    const quantity = groupedCart[id].quantity;
    const disableAddButton = item.stock === quantity || item.stock < quantity + 1;
    const disableSubtractButton = quantity === 1;
    return (
      <div className="cart-list" key={id}>
        <img src={item.imagen} alt={item.nombre} />
        <div className="item-title">
          <h3>{item.nombre}</h3>
          <p>Cantidad:</p>
          <button onClick={() => handleSubtractItem(item)} disabled={disableSubtractButton}>
            -
          </button>
          <span> {quantity} </span>
          <button onClick={() => handleAddItem(item)} disabled={disableAddButton}>
            +
          </button>
          <p>Precio: S/. {item.precio}</p>
        </div>
        <div className="item-subtotal">
          <span>Subtotal:</span>
          <p> S/. {(item.precio * quantity).toFixed(2)}</p>
        </div>
        <div className="item-btn-delete">
          <button onClick={() => handleRemoveItem(item)}>Quitar Producto</button>
        </div>
      </div>
    );
  });

  const totalPrice = cart.reduce((total, item) => {
    return total + item.precio * item.quantity;
  }, 0);

  return (
    <div className="cart wrapper">
      <div className="container-cart">
        <h2 className="container-cart-title">Carrito de compras</h2>
        {cart.length === 0 ? (
          <>
            <img src={EmptyCart} alt="Carrito Vacio" />
            <p>El carrito está vacío, no hay productos agregados</p>
          </>
        ) : (
          <>
            {cartItems}
            <div className="total-price">
              <p>Total: S/. {totalPrice.toFixed(2)}</p>
            </div>
            <di className="btn-options">
              <button className="btn-clear" onClick={() => clear()}>
                Vaciar carrito
              </button>
              <button className="btn-finish" onClick={() => setShowOrderForm(true)}>
                Finalizar compra
              </button>
            </di>
            {showOrderForm && <SendOrder groupedCart={groupedCart} totalPrice={totalPrice} clear={clear} />}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { CartContext } from "../context/CartContext";
// import SendOrder from "./SendOrder";

// const Cart = () => {
//   const { cart, removeItem, clear, getGroupedItems } = useContext(CartContext);

//   const groupedCart = getGroupedItems();

//   const handleRemoveItem = (item) => {
//     removeItem(item.id);
//   };

//   const cartItems = Object.keys(groupedCart).map((id) => {
//     const item = groupedCart[id].item;
//     const quantity = groupedCart[id].quantity;
//     return (
//       <div>
//         <div key={id}>
//           <h3>{item.nombre}</h3>
//           <p>Precio: {item.precio}</p>
//           <p>Cantidad: {quantity}</p>
//           {/* <button onClick={() => handleRemoveItem(id)}>Eliminar</button> */}
//           <button onClick={() => handleRemoveItem(item)}>Eliminar</button>
//           <hr />
//         </div>
//       </div>
//     );
//   });

//   const totalPrice = cart.reduce((total, item) => {
//     return total + item.precio * item.quantity;
//   }, 0);

//   return (
//     <>
//       {cart.length === 0 ? (
//         <div>
//           <p>No hay ítems en el carrito</p>
//           <Link to="/">Volver al catálogo</Link>
//         </div>
//       ) : (
//         <>
//           {cartItems}
//           <p>Total: {totalPrice}</p>
//           <button onClick={() => clear()}>Vaciar carrito</button>
//           <SendOrder />
//         </>
//       )}
//     </>
//   );
// };

// export default Cart;
