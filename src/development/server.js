require('dotenv').config(); // dotenv won't overwrite an already set variable

const app = require(`${__dirname}/app`);
const { APP_PORT, DB_PASSWORD } = require(`${__dirname}/config/env`);

// eslint-disable-next-line no-console
console.log(DB_PASSWORD);

// eslint-disable-next-line no-console
app.listen(APP_PORT, () => console.log(`Listening on ${APP_PORT}...`));
