import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import SendOrder from "./SendOrder";
import EmptyCart from "../assets/images/empty-cart.png";

const Cart = () => {
  const { cart, addItem, removeItem, clear, getGroupedItems, removeOneItem } = useContext(CartContext);

  const groupedCart = getGroupedItems();
  const [showOrderForm, setShowOrderForm] = useState(false);

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const handleAddItem = (item) => {
    const quantity = groupedCart[item.id]?.quantity || 0;
    if (quantity >= item.stock) {
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
    if (quantity > item.stock) {
      alert("No hay suficiente stock disponible.");
      return;
    }
    removeOneItem(item.id);
  };

  const cartItems = Object.values(groupedCart).map(({ item, quantity }) => {
    const disableAddButton = item.stock === quantity || item.stock < quantity + 1;
    const disableSubtractButton = quantity === 1;
    return (
      <div className="cart-list" key={item.id}>
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
          <button onClick={() => handleRemoveItem(item.id)}>Quitar Producto</button>
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
            <div className="btn-options">
              <button className="btn-clear" onClick={() => clear()}>
                Vaciar carrito
              </button>
              <button className="btn-checkout" onClick={() => setShowOrderForm(true)}>
                Finalizar compra
              </button>
            </div>
            {showOrderForm && <SendOrder groupedCart={groupedCart} totalPrice={totalPrice} clear={clear} />}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
