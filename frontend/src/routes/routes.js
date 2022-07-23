import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Assets, { AssetsByClient } from '../pages/Ativos'
import Client from '../pages/Profile'
import NotFound from '../pages/NotFound';

const Routes = () => (
  <Switch>
    <Route path="/ativos/clientes/:id" component={ AssetsByClient }/>
    <Route path="/ativos/:id" component={ Assets } />
    <Route path="/conta/:id" component={ Client }/>
    <Route path="/investimentos" />
    <Route path="/login"/>
    <Route path="*" component={ NotFound } />
  </Switch>
)

export default Routes;
