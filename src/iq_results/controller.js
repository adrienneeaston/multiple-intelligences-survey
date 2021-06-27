// will likely replace with .env file
const pool = require('../../db');
const queries = require('./queries');

const getIqResults = (req, res) => {
  pool.query(queries.getIqResults, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getIqResultsById = (req, res) => {
  const id = parseInt(req.params.iq_results_id);
  pool.query(queries.getIqResultsById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addIqResults = (req, res) => {
  const { firstname, lastname } = req.body;
  pool.query(queries.checkFirstnameExists, [firstname], (error, results) => { 
    if (results.rows.length) {
      res.send("firstname already exists");    
    }

    pool.query(queries.addIqResults, [firstname, lastname], (error, results) => {
      if (error) throw error;
      res.status(201).send("Student created successfully.");
    });
  });
};

const deleteIqResults = (req, res) => {
  const id = parseInt(req.params.iq_results_id);

  pool.query(queries.getIqResultsById, [id], (error, results) => {
    const noIqResultsFound = !results.rows.length;
    if (noIqResultsFound) {
      res.send("IQ results do not exist in the database.");
    }

    pool.query(queries.deleteIqResults, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("IQ results removed successfully.");
    });
  });
};

const updateIqResults = (req, res) => {
  const id = parseInt(req.params.iq_results_id);
  const { firstname } = req.body;

  pool.query(queries.getIqResultsById, [id], (error, results) => {
    const noIqResultsFound = !results.rows.length;
    if (noIqResultsFound) {
      res.send("IQ results do not exist in the database.");
    }

    pool.query(queries.updateIqResults, [firstname, id], (error, results) => {
      console.log(error);
      if (error) throw error;
      res.status(200).send("IQ results updated successfully.");
    });
  })
}

module.exports = {
  getIqResults,
  getIqResultsById,
  addIqResults,
  deleteIqResults,
  updateIqResults,
};