//proof of life

const express = require('express');
const iqResultsRoutes = require('./src/iq_results/routes');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('This is home!');
});

app.get('/post', (req, res) => {
  res.send('This is post!');
});

app.use('/api/v1/iq_results', iqResultsRoutes);

app.listen(3000, () => {
  console.log('App is listening on port 3000')
});