const { EventEmitter } = require('events');
const { readFile } = require('fs');

class SkillsFinder extends EventEmitter {
  constructor(skill, employees) {
    super();
    this.skill = skill;
    this.employees = employees;
    this.run();
  }

  run() {
    let inProgress = 0;

    this.employees.forEach(employee => {
      inProgress += 1;

      readFile(`${__dirname}/../data/${employee}.txt`, 'utf-8', (err, content) => {
        if (err) {
          this.emit('error', err);
          return;
        }

        inProgress -= 1;

        this.emit('employee_checked', employee);

        const skills = content
          .split(';')
          .filter(String)
          .map(item => item.toUpperCase());

        if (skills.includes(this.skill.toUpperCase())) {
          this.emit('skill_found', employee);
        }

        if (inProgress === 0) {
          this.emit('end');
        }
      });
    });
  }
}

module.exports = SkillsFinder;
