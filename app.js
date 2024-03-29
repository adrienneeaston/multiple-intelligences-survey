const express = require('express');
const cors = require('cors');
const path = require('path');
const controller = require('./src/iq_results/controller');

// const iqResultsRoutes = require('./src/iq_results/routes');

const app = express();

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded());

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

app.get('/user', (req, res) => {
  res.render('./pages/user', { user: 'User Page'});
});

// These three are all equivelant

// const renderSurvey = (req, res) => {
//   res.render('./pages/survey', { survey: 'Survey Page' });
// };

// function renderSurvey(req, res) {
//   res.render('./pages/survey', { survey: 'Survey Page' });
// }

// app.get('/survey', (req, res) => {
//   res.render('./pages/survey', { survey: 'Survey Page' });
// }); 

app.get('/survey', (req, res) => {
  res.render('./pages/survey', { survey: 'Survey Page' });
}); 

//action routes
// app.get('/', controller.getUser);
app.post('/user', controller.addUser);
app.post('/survey', controller.addResult);
// app.get('/user/:id', controller.getUserById);
// app.put('/user/:id', controller.updateUser);
// app.delete('/user/:id', controller.deleteUser);

// app.get('/api/v1/iq_results/:id', (req, res) => {
//   res.render('index', { firstname : iq_results(req.params.id) });
// });

// app.use('/api/v1/iq_results', iqResultsRoutes);

app.listen(3000, () => {
  console.log('App is listening on port 3000')
});