import React from "react";
import InputPaises from "../../components/buscar-paises";
import ListaPaises from "../../components/lista-paises";
import { Titulo } from "../../components/text";

const Home = () => {
  return (
    <div>
      <Titulo>Mi Localizador de Paises</Titulo>
      <InputPaises/>
      <ListaPaises />
    </div>
  );
};

export default Home;