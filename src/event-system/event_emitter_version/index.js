const SkillsFinder = require(`${__dirname}/skills_finder`);

const employees = ['leonie', 'lisa', 'tim'];
// const employees = ['leonie', 'lisa', 'tim', 'non-existing'];
let employeesChecked = 0;
const employeesWithSkill = [];
const skill = 'react';

const skillsFinder = new SkillsFinder(skill, employees);

skillsFinder.on('employee_checked', () => {
  employeesChecked += 1;
});

skillsFinder.on('error', err => {
  // eslint-disable-next-line no-console
  console.log(`Cannot check skill: ${err.message}`);
});

skillsFinder.on('skill_found', employee => {
  employeesWithSkill.push(employee);
});

skillsFinder.on('end', () => {
  // eslint-disable-next-line no-console
  console.log(`Scanned ${employeesChecked} employees`);
  // eslint-disable-next-line no-console
  console.log(`Employees with ${skill}: `, employeesWithSkill);
});
