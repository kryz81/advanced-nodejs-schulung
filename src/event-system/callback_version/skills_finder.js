const { readFile } = require('fs');

class SkillsFinder {
  constructor(skill, employees) {
    this.skill = skill;
    this.employees = employees;
  }

  find(cb) {
    let inProgress = 0;
    const employeesFound = [];

    this.employees.forEach(employee => {
      inProgress += 1;
      readFile(`${__dirname}/../data/${employee}.txt`, 'utf-8', (err, content) => {
        if (err) {
          cb(err);
          return;
        }

        inProgress -= 1;

        const skills = content
          .split(';')
          .filter(String)
          .map(item => item.toUpperCase());

        if (skills.includes(this.skill.toUpperCase())) {
          employeesFound.push(employee);
        }

        if (inProgress === 0) {
          cb(null, employeesFound);
        }
      });
    });
  }
}

module.exports = SkillsFinder;
