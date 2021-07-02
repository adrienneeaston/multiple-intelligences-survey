const express = require('express');
// const bodyParser = require('body-parser)');
const cors = require('cors');
const path = require('path');

const iqResultsRoutes = require('./src/iq_results/routes');

const app = express();

// app.use(bodyParser());
app.use(cors());

app.use('/', express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('./pages/index', { main: 'Main Page' });
});

app.get('/about', (req, res) => {
  res.render('./pages/about', { about: 'About Page' });
});

app.get('/iqtypes', (req, res) => {
  res.render('./pages/iqtypes', { iqtypes: 'Iqtypes Page' });
});

app.get('/survey', (req, res) => {
  res.render('./pages/survey', { survey: 'Survey Page' });
});

// app.get('/api/v1/iq_results/:id', (req, res) => {
//   res.render('index', { firstname : iq_results(req.params.id) });
// });

app.use(express.json());

app.use('/api/v1/iq_results', iqResultsRoutes);

app.listen(3000, () => {
  console.log('App is listening on port 3000')
});