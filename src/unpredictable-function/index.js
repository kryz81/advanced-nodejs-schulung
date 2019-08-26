const skillsReader = require(`${__dirname}/skills_reader`);

const reader = skillsReader('user1');

reader.onData(skills => {
  console.log(skills);

  const reader2 = skillsReader('user1');

  reader2.onData(skills2 => {
    console.log(skills2);
  });
});
