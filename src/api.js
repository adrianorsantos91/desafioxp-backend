const express = require('express');
// require('express-async-errors');
const investmentRouters = require('./routers/investmentRouters');
const clientRouters = require('./routers/clienteRouters');
const assetRouters = require('./routers/assetRouters');
const accountRouters = require('./routers/accountRouters');

const app = express();

app.use(express.json());

app.use('/investimentos', investmentRouters);
app.use('/clientes', clientRouters);
app.use('/assets', assetRouters);
app.use('/conta', accountRouters);

module.exports = app;
