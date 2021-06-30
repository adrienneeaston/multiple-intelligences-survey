const express = require('express');
// const bodyParser = require('body-parser)');
const cors = require('cors');
const path = require('path');

const iqResultsRoutes = require('./src/iq_results/routes');

const app = express();

// app.use(bodyParser());
app.use(cors());

// app.use('views', path.join(__dirname, 'views'));
// app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { foo: 'bar' });
});

// app.get('/api/v1/iq_results/:id', (req, res) => {
//   res.render('index', { firstname : iq_results(req.params.id) });
// });

app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('This is home!');
// });

// app.get('/post', (req, res) => {
//   res.send('This is post!');
// });

app.use('/api/v1/iq_results', iqResultsRoutes);

app.listen(3000, () => {
  console.log('App is listening on port 3000')
});