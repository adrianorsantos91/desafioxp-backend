import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Assets, { AssetsByClient } from '../pages/Ativos'
import Client from '../pages/Profile'
import NotFound from '../pages/NotFound';
import Purchase, { Sale } from '../pages/Investimento';

const Routes = () => (
  <Switch>
    <Route exact path="/ativos/clientes/:id" component={ AssetsByClient }/>
    <Route path="/ativos/:id" component={ Assets } />
    <Route path="/conta/:id" component={ Client }/>
    <Route path="/investimentos/comprar" component={ Purchase }/>
    <Route path="/investimentos/vender" component={ Sale }/>
    <Route path="/login"/>
    <Route path="*" component={ NotFound } />
  </Switch>
)

export default Routes;
