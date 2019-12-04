import React from "react";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import Routes from "../routes";

const Home = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      {Routes}
    </ConnectedRouter>
  );
};

Home.propTypes = {
  history: PropTypes.object
};

export default Home;