const getUser = require(`${__dirname}/getUser`);
const getSkills = require(`${__dirname}/getSkills`);

const user = process.argv[2];

const getUserPromisified = username => {
  return new Promise((resolve, reject) => {
    getUser(username, (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

const getSkillsPromisified = id => {
  return new Promise((resolve, reject) => {
    getSkills(id, (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

getUserPromisified(user)
  .then(({ id }) => getSkillsPromisified(id))
  .then(skills => console.log(skills))
  .catch(err => console.log(err.message));
