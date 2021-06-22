const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('This is home!');
});

app.listen(3000);