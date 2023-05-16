const http = require('http');
const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  writeHead(200, { 'Content-Type': 'text/plain' });

  const { url } = req;

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.end('This is the list of our students\n');
    try {
      const students = await countStudents(args[0]); 
      res.write(`Number of students: ${students.count}\n`);
    } catch (error) {
      res.end(error.message);
    }
  }
  res.statusCode = 404;
  res.end();
});

app.listen(1245, '0.0.0.0', () => {
  console.log('Listening on port 1245');
});

module.exports = app;