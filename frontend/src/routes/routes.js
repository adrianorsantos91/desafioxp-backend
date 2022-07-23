import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Assets, { AssetsByClient } from '../pages/Ativos'
import NotFound from '../pages/NotFound';

const Routes = () => (
  <Switch>
    <Route path="/ativos/clientes/:id" component={ AssetsByClient }/>
    <Route path="/ativos/:id" component={ Assets } />
    <Route path="/login"/>
    <Route path="/conta/:id"/>
    <Route path="/investimentos" />
    <Route path="*" component={ NotFound } />
  </Switch>
)

export default Routes;
