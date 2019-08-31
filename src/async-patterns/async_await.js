const getUser = require(`${__dirname}/getUser`);
const getSkills = require(`${__dirname}/getSkills`);

const { promisify } = require('util');

const getUserPromisified = promisify(getUser);
const getSkillsPromisified = promisify(getSkills);

const get = async username => {
  const user = await getUserPromisified(username);
  const skills = await getSkillsPromisified(user.id);

  return skills;
};

const user = process.argv[2];

(async () => {
  try {
    const skills = await get(user);
    console.log(skills);
  } catch (err) {
    console.log(err.message);
  }
})();
