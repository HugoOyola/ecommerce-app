import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a mi Tienda Online"} />
    </div>
  );
}

export default App;
