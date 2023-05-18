const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.listen(7865, '0.0.0.0', () => { 
  console.log('API available on localhost port 7865');
});

module.exports = app;