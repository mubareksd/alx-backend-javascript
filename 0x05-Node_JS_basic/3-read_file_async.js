const fs = require('fs');

const countStudents = async (path) => {
  try {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) reject(Error('Cannot load the database'));
        if (data) {
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
          resolve();
        }
      });
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
