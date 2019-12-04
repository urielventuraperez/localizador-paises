import React from "react";
import { connect } from "react-redux";

const listaPaises = props => {
  return (
    <div>
      Lista de Paises
      {props.paisesEncontrados.length ? (
        <div>Tengo</div>
      ) : (
        <div>No tengo</div>
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
