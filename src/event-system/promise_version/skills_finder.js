const { readFile } = require('fs');

class SkillsFinder {
  constructor(skill, employees) {
    this.skill = skill;
    this.employees = employees;
  }

  find() {
    let inProgress = 0;
    const employeesFound = [];

    return new Promise((resolve, reject) => {
      this.employees.forEach(employee => {
        inProgress += 1;
        readFile(`${__dirname}/../data/${employee}.txt`, 'utf-8', (err, content) => {
          if (err) {
            reject(err);
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
            resolve(employeesFound);
          }
        });
      });
    });
  }
}

module.exports = SkillsFinder;
