import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Routes = () => {
  <Switch>
    <Route exact path="/login"/>
    <Route exact path="/ativos/clientes/:id"/>
    <Route exact path="/ativos/:id"/>
    <Route exact path="/conta/:id"/>
    <Route exact path="/extra" />
  </Switch>
}

export default Routes;
