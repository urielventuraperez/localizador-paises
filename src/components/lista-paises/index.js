import React from "react";
import { connect } from "react-redux";
import Tarjeta from "../tarjetas";
import { Peligro } from "../text";

const listaPaises = props => {
  return (
    <div>
      Lista de Paises
      {props.paisesEncontrados.length ? (
        <div>
          {props.paisesEncontrados.map(( pais, key ) => (
            <Tarjeta key={key} titulo={pais.name} fecha={pais.nativeName} descripcion={pais.region} />
          ))}
        </div>
      ) : (
        <Peligro>No tengo</Peligro>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    paisesEncontrados: state.pais.paises
  };
};

export default connect(mapStateToProps, null)(listaPaises);
