const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.status(200).send(`Payment methods for cart ${req.params.id}`);
});

app.listen(7865, '0.0.0.0', () => { 
  console.log('API available on localhost port 7865');
});

module.exports = app;