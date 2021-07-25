const pool = require('../../db');
const queries = require('./queries');

const getUser = (req, res) => {
  pool.query(queries.getUser, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getUserById, [id], (error, results) => {
    // if (error) throw error;
    if (error) throw 'getUserById error';
    res.status(200).json(results.rows);
  });
};

const addUser = (req, res) => {
  const { firstname, lastname } = req.body;

  pool.query(queries.checkFirstnameExists, [firstname], (error, results) => { 
    if (results.rows.length) {
      res.send("firstname already exists");    
    }

    pool.query(queries.addUser, [firstname, lastname], (error, results) => {
      if (error) throw error;
      res.status(201).send("Student created successfully.");
    });
  });
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getUserById, [id], (error, results) => {
    const noIqResultsFound = !results.rows.length;

    if (noIqResultsFound) {
      res.send("IQ results do not exist in the database.");
    }

    pool.query(queries.deleteUser, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("IQ results removed successfully.");
    });
  });
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { firstname } = req.body;

  pool.query(queries.getUserById, [id], (error, results) => {
    const noIqResultsFound = !results.rows.length;
    if (noIqResultsFound) {
      res.send("IQ results do not exist in the database.");
    }

    pool.query(queries.updateUser, [firstname, id], (error, results) => {
      if (error) throw error;
      res.status(200).send("IQ results updated successfully.");
    });
  })
}

module.exports = {
  getUser,
  getUserById,
  addUser,
  deleteUser,
  updateUser,
};