const service = require(`${__dirname}/service`);

service(10)
  .then(result => console.log(result))
  .catch(err => console.log(err.message));
