import React, { useState, useEffect } from "react";
import CartWidget from "./CartWidget";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const Navbar = () => {
  const [categorias, setCategorias] = useState([]);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  useEffect(() => {
    const obtenerCategorias = async () => {
      const db = getFirestore();
      const itemCollection = collection(db, "productos");
      const querySnapshot = await getDocs(itemCollection);
      const categorias = [...new Set(querySnapshot.docs.map((doc) => doc.data().categoria))];
      setCategorias(categorias);
    };
    obtenerCategorias();
  }, []);

  return (
    <header>
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" onClick={cerrarMenu}>
            <img src={Logo} alt="Mr. Sabueso - Tienda Online" />
          </Link>
        </div>
        <input type="checkbox" id="menu-bar" checked={menuAbierto} onChange={() => setMenuAbierto(!menuAbierto)} />
        <label htmlFor="menu-bar">
          <span className="material-symbols-outlined">menu</span>
        </label>
        <nav className="navbar" onClick={cerrarMenu}>
          <ul>
            <li>
              <Link to="/">inicio</Link>
            </li>
            <li>
              <Link to="/productos">productos</Link>
            </li>
            <li>
              <Link to="/productos">
                categorías
                <span className="material-symbols-outlined">expand_more</span>
              </Link>
              <ul>
                {categorias.map((categoria) => (
                  <li key={categoria}>
                    <Link to={`/categoria/${categoria}`}>{categoria}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link to="/cart">
                <CartWidget />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
