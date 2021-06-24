// will likely replace with .env file
const pool = require('../../db');
const queries = require('./queries');

const getIqResults = (req, res) => {
  pool.query(queries.getIqResults, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
};

module.exports = {
  getIqResults,
};