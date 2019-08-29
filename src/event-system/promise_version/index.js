const SkillsFinder = require(`${__dirname}/skills_finder`);

const employees = ['leonie', 'lisa', 'tim'];
// const employees = ['leonie', 'lisa', 'tim', 'non-existing'];
const skill = process.argv[2];

const skillsFinder = new SkillsFinder(skill, employees);

(async () => {
  try {
    const result = await skillsFinder.find();
    // eslint-disable-next-line no-console
    console.log(`Employees with ${skill}: `, result);
  } catch (err) {
    console.log(`Cannot check skill: ${err.message}`);
  }
})();
