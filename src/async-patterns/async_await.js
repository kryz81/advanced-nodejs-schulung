const getUser = require(__dirname + '/getUser');
const getSkills = require(__dirname + '/getSkills');

const { promisify } = require('util');

const getUserPromisified = promisify(getUser);
const getSkillsPromisified = promisify(getSkills);

const get = async username => {
  const user = await getUserPromisified(username);
  const skills = await getSkillsPromisified(user.id);

  return skills;
};

(async () => {
  try {
    const skills = await get('Tim');
    console.log(skills);
  } catch (err) {
    console.log(err.message);
  }
})();
