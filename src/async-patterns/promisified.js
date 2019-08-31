const getUser = require(`${__dirname}/getUser`);
const getSkills = require(`${__dirname}/getSkills`);

const { promisify } = require('util');

const getUserPromisified = promisify(getUser);
const getSkillsPromisified = promisify(getSkills);

const user = process.argv[2];

getUserPromisified(user)
  .then(({ id }) => getSkillsPromisified(id))
  .then(skills => console.log(skills))
  .catch(err => console.log(err.message)); // important to catch errors!
