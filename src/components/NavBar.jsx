import React from "react";
import CartWidget from "./CartWidget";
import Logo from "../assets/images/logo.jpg";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="Logo de la tienda" />
      </div>
      <ul>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Categorías</a>
        </li>
        <li>
          <a href="#">Ofertas</a>
        </li>
        <li>
          <a href="#">Mi Cuenta</a>
        </li>
        <li>
          <CartWidget count="3" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
