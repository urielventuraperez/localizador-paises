import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../pages/home';
import Pais from '../pages/pais';

const Routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/pais/:nombre" component={Pais} />
    </Switch>
)

export default Routes