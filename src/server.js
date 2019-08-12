const debug = require('debug')('myapp');
const { APP_PORT } = require('./config');
const app = require('./app');

debug('Server started');

// eslint-disable-next-line no-console
app.listen(APP_PORT, () => console.log(`Listening on ${APP_PORT}`));
