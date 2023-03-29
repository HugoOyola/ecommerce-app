import React, { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const SendOrder = ({ groupedCart, totalPrice, clear }) => {
  const { cart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [orderSent, setOrderSent] = useState(false);

  const db = getFirestore();
  const orderCollection = collection(db, "orden");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      alert("Por favor, completa todos los campos");
      return;
    }
    const order = {
      name,
      phone,
      email,
      items: groupedCart,
      totalPrice: totalPrice,
      date: new Date().toISOString(),
    };
    try {
      const docRef = await addDoc(orderCollection, order);
      setOrderId(docRef.id);
      setOrderSent(true);
    } catch (error) {
      console.error("Error al enviar orden: ", error);
    }
  };

  const handleClear = () => {
    clear();
    setOrderSent(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Registra tus datos para completar la compra.</h2>
        <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type="email" placeholder="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="btn-success" type="button" disabled={!cart.length} onClick={handleSubmit}>
          Enviar orden
        </button>
      </form>
      {orderSent && (
        <p>
          Número de orden: {orderId}. Su orden será enviada en unos segundos...
          {setTimeout(handleClear, 5000)}
        </p>
      )}
    </div>
  );
};

export default SendOrder;
