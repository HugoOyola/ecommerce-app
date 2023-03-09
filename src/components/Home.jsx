import React from "react";
import Portada from "../assets/images/portada.png";
import Logo from "../assets/images/logo.png";

const Home = () => {
  return (
    <>
      <img className="portada" src={Portada} alt="" />
      <div className="wrapper">
        <div className="container">
          <div className="container-left">
            <h1 className="container-title">Bienvenidos a Mr. Sabueso Store</h1>
            <p>
              Bienvenido a nuestra tienda en línea de productos para mascotas de la veterinaria. En nuestra tienda, ofrecemos una amplia variedad de productos de alta calidad para
              ayudar a mantener a su mascota saludable y feliz. Desde alimentos para perros y gatos hasta juguetes y accesorios, encontrará todo lo que necesita para cuidar de su
              mejor amigo peludo.
            </p>
            <p>
              Nos enorgullece ofrecer productos de marcas confiables y respetadas en la industria de cuidado de mascotas. Además, nuestro equipo de veterinarios y expertos en
              cuidado de mascotas están disponibles para responder a cualquier pregunta que pueda tener sobre los productos y para proporcionar recomendaciones personalizadas para
              ayudar a satisfacer las necesidades únicas de su mascota.
            </p>
            <p>
              La salud y el bienestar de su mascota son nuestra principal prioridad. Es por eso que solo ofrecemos productos de la más alta calidad para ayudar a mantener a su
              mascota en su mejor estado de salud. Desde la prevención de pulgas y garrapatas hasta el cuidado dental y la nutrición adecuada, nuestros productos están diseñados
              para ayudar a mantener a su mascota sana y feliz durante toda su vida.
            </p>
            <p>
              Gracias por elegir nuestra tienda en línea de productos para mascotas de la veterinaria. Esperamos poder ayudarlo a cuidar de su mascota y a brindarle una experiencia
              de compra en línea fácil y conveniente.
            </p>
          </div>
          <div className="container-right">
            <img src={Logo} alt="Logo de Mr. Sabueso" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
