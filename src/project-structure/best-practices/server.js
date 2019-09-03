const app = require(`${__dirname}/app`);
const { APP_PORT } = require(`${__dirname}/config/env`);

// eslint-disable-next-line no-console
app.listen(APP_PORT, () => console.log(`Listening on ${APP_PORT}...`));
