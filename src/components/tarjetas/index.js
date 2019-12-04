import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { verPais } from "../../redux/actions/pais";

const Contenedor = styled.div`
  border: ${props => `1px solid white`};
  padding: 25px 12px 18px;
  background: ${props => `linear-gradient(
    45deg, red, white
  )`};
`;
const Titulo = styled.h2`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;
const Fecha = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
const Descripcion = styled.p`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;
const Acciones = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    & button {
      width: 100%;
      margin-bottom: 4px;
      font-size: 0.65rem;
    }
  }
`;
const Accion = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
  :active {
    background: red;
  }
`;
const Tarjeta = (props) => { 
    
    const {  titulo,
        fecha,
        descripcion,
        comentarios,
        likes,
        vistos,
        acciones } = props;

    const verPais = (nombre) => {
        props.verPais(nombre);
    }

    return(
    <Contenedor>
    <Titulo>{titulo}</Titulo>
    <Fecha>{fecha}</Fecha>
    <Descripcion>{descripcion}</Descripcion>
    <Acciones>
      <Accion>
        <Link onClick={()=>verPais(titulo)} to={{ pathname: `/pais/${titulo}` }}>Ver</Link>
      </Accion>
      <Accion>Compartir</Accion>
    </Acciones>
  </Contenedor>
)};

const mapDispatchToProps = (dispatch) => {
    return {
        verPais: nombre => {
           dispatch(verPais(nombre))
        } 
    }
}

export default connect(null, mapDispatchToProps)(Tarjeta);
