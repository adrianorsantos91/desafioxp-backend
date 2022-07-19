const express = require('express');
// require('express-async-errors');
const investmentRouters = require('./routers/investmentRouters');

const app = express();

app.use(express.json());

app.use('/investimentos', investmentRouters);

module.exports = app;
