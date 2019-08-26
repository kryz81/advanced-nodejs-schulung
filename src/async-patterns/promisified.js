const getUser = require(__dirname + '/getUser');
const getSkills = require(__dirname + '/getSkills');

const { promisify } = require('util');

const getUserPromisified = promisify(getUser);
const getSkillsPromisified = promisify(getSkills);

getUserPromisified('Paula')
  .then(user => getSkillsPromisified(user.id))
  .then(skills => console.log(skills))
  .catch(err => console.log(err.message));
