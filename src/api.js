const express = require('express');
require('express-async-errors');
const loginRouters = require('./routers/loginRouters');
const investmentRouters = require('./routers/investmentRouters');
const assetRouters = require('./routers/assetRouters');
const accountRouters = require('./routers/accountRouters');
const errorMiddleware = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

app.use('/login', loginRouters);
app.use('/investimentos', investmentRouters);
app.use('/ativos', assetRouters);
app.use('/conta', accountRouters);

app.use(errorMiddleware);

module.exports = app;
