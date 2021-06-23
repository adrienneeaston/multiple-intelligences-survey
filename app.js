//proof of life

const express = require('express');
const app = express();

// will likely replace with .env file
const pool = require('/db');

app.use(express.json());

//get all results

//get a result

//create a result

app.post('/iq_results', async (req, res) => {
  try {
    const (firstname) = req.body;
    const newIqResults = await pool.query("INSERT INTO iq_results (firstname) VALUES ($1) RETURNING *", (firstname));

    res.json(newIqResults);
  } catch (err) {
    console.error(err.message);
  }
});

//update a result

//delete a result

app.get('/', (req, res) => {
  res.send('This is home!');
});

app.get('/post', (req, res) => {
  res.send('This is post!');
});

app.listen(3000, () => {
  console.log('App is listening on port 3000')
});