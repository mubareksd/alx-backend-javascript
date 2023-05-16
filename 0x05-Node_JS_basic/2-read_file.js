const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split(/\r?\n/).slice(1);
    let count = 0;
    const fields = {};
    const students = {};
    for (const line of lines) {
      if (line !== '') {
        count += 1;
        const student = line.split(',');
        if (!fields[student[3]]) {
          fields[student[3]] = [];
        }
        fields[student[3]].push(student[0]);
        students[student[3]] = fields[student[3]].length;
      }
    }
    console.log(`Number of students: ${count}`);
    for (const field in fields) {
      if (field) {
        const list = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${students[field]}. List: ${list}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
