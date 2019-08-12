const express = require('express');
const addRequestId = require('express-request-id')();
const morgan = require('morgan');
const winston = require('winston');

const app = express();

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log', level: 'debug' }),
  ],
});

app.use(addRequestId);
app.use(morgan('tiny'));

app.get('/', (req, res) => res.send('home'));

app.get('/users/:id', (req, res) => {
  logger.debug(`User data requested, id: ${req.params.id}`);
  res.send(`User ${req.params.id}`);
});

app.listen(3000);
