import React from "react";
import { connect } from "react-redux";

const Pais = props => {
  return (
    <div>
        <h1>Pais Visitado</h1>
      {props.pais.map((item, key) => (
        <div key={key}>
        <p> {item.name} </p>
        <p> {item.capital} </p>
        <p> {item.region} </p>
        <p> {item.subregion} </p>
        <p> {item.demonym} </p>
        <p> {item.area} </p>
        <p> {item.population} </p>
        <p> {item.alpha2Code} </p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    pais: state.pais.pais
  };
};

export default connect(mapStateToProps, null)(Pais);
