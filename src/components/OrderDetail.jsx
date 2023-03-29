import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const OrderDetail = ({ orderId }) => {
  const [order, setOrder] = useState(null);
  const db = getFirestore();
  const orderRef = doc(db, "orden", orderId);

  useEffect(() => {
    const fetchOrder = async () => {
      const docSnap = await getDoc(orderRef);
      if (docSnap.exists()) {
        setOrder(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    fetchOrder();
  }, [orderRef]);

  if (!order) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Detalles de la compra</h2>
      <p>Número de orden: {orderId}</p>
      <p>Nombre: {order.name}</p>
      <p>Teléfono: {order.phone}</p>
      <p>Correo Electrónico: {order.email}</p>
      <p>Fecha: {new Date(order.date).toLocaleString()}</p>
      <h3>Productos</h3>
      {Object.values(order.items).map((item) => (
        <div key={item.item.id}>
          <h4>{item.item.nombre}</h4>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio unitario: {item.item.precio}</p>
          <hr />
        </div>
      ))}
      <p>Total: {order.totalPrice}</p>
    </div>
  );
};

export default OrderDetail;
