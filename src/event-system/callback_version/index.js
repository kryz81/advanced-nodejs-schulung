const SkillsFinder = require(`${__dirname}/skills_finder`);

const employees = ['leonie', 'lisa', 'tim'];
// const employees = ['leonie', 'lisa', 'tim', 'non-existing'];
const skill = 'node.js';

const skillsFinder = new SkillsFinder(skill, employees);

skillsFinder.find((err, result) => {
  if (err) {
    console.log(`Cannot check skill: ${err.message}`);
    return;
  }

  // eslint-disable-next-line no-console
  console.log(`Employees with ${skill}: `, result);
});
