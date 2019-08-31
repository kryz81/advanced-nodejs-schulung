const getSkills = require(`${__dirname}/getSkills`);
const getUser = require(`${__dirname}/getUser`);

const user = process.argv[2];

getUser(user, (err, result) => {
  if (err) {
    console.log(err.message);
    return;
  }
  getSkills(result.id, (error, skills) => {
    if (error) {
      console.log(error.message);
      return;
    }
    console.log(skills);
  });
});
