//proof of life

const express = require('express');
const iqResultsRoutes = require('./src/iq_results/routes');
const app = express();
// const path = require('path');

// app.get('/', function(req,res) {
//   res.sendFile(path.join(__dirname+'/public/index.html'));
// });

app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.sendFile('./public', { root: __dirname });
// });

// app.get('/contact', (req, res) => {
//   res.sendFile('./landing-page/contact.html', { root: __dirname });
// });

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