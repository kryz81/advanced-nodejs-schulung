const db = require(`${__dirname}/db`);
const service = require(`${__dirname}/service`);

service(10, db)
  .then(result => console.log(result))
  .catch(err => console.log(err.message));
