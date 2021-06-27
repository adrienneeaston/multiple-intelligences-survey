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

//get all results

//get a result

//create a result

// app.post('/iq_results', async (req, res) => {
//   try {
//     const firstname = req.body;
//     const newIqResults = await pool.query("INSERT INTO iq_results (firstname) VALUES ($1) RETURNING *", (firstname));

//     res.json(newIqResults);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

//update a result

//delete a result

app.listen(3000, () => {
  console.log('App is listening on port 3000')
});