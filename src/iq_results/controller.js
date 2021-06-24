// will likely replace with .env file
const pool = require('../../db');

const getIqResults = (req, res) => {
  pool.query("SELECT * FROM iq_results", (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
};

module.exports = {
  getIqResults,
};