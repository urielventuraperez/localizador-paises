import React from "react";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import Routes from "../../routes";
import InputPaises from "../../components/buscar-paises";
import ListaPaises from "../../components/lista-paises";

const Home = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      {Routes}
      <InputPaises/>
      <ListaPaises />
    </ConnectedRouter>
  );
};

Home.propTypes = {
  history: PropTypes.object
};

export default Home;