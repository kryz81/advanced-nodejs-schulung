1. index.js reads a single skill from command line
2. then runs the skill finder and gives him the skill and employees array
3. The skill finder reads employee files and checks if each person has provided skill
4. The skill finder emits events:
    4.1 "employee_found" - when employee file with skills has been found
    4.2 "skill_found" - when the given skill has been found in the employee data
    4.3 "error" - on error (e.g. file with skills not found)
    4.4 "end" - when all employees have been checked and employee with skill collected

Run: node index.js Node.js
