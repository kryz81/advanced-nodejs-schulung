const express = require('express');

const bootstrap = require(`${__dirname}/bootstrap`);

const app = express();

bootstrap(app);

module.exports = app;
