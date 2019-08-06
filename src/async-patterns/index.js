const getSkills = require(__dirname + '/getSkills');
const getUser = require(__dirname + '/getUser');

getUser('Tim', (err, result) => {
  if (err) {
    console.log(err.message);
    return;
  }
  getSkills(result.id, (err, skills) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log(skills);
  });
});
