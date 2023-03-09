import React from "react";
import CartWidget from "./CartWidget";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import Data from "../data.json";

const Navbar = () => {
  const categorias = [...new Set(Data.map((producto) => producto.categoria))];
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Mr. Sabueso - Clinica Veterinaria" />
        </Link>
      </div>
      <ul>
        <li className="after-transform">
          <Link to="/">Inicio</Link>
        </li>
        <li className="after-transform">
          <Link to="/productos">Productos</Link>
        </li>
        <li className="dropdown">
          <a href="#">Categorías</a>
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
            <CartWidget count="3" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
