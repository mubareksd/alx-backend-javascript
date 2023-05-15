const http = require('http');

const app = http.createServer((req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(1245, '0.0.0.0', () => {
  console.log('Listening on port 1245');
});
