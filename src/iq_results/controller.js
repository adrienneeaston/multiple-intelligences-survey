// will likely replace with .env file
const pool = require('../../db');
const queries = require('./queries');

const getIqResults = (req, res) => {
  pool.query(queries.getIqResults, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
};

const getIqResultsById = (req, res) => {
  const id = parseInt(req.params.iq_results_id);
  pool.query(queries.getIqResultsById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
}

const addIqResults = (req, res) => {
  const { firstname, lastname } = req.body;
  pool.query(queries.checkFirstnameExists, [firstname], (error, results) => {
    if (results.rows.length) {
      res.send("firstname already exists");    
    }
  });
};

module.exports = {
  getIqResults,
  getIqResultsById,
  addIqResults,
};