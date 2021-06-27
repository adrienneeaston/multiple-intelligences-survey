const getIqResults = "SELECT * FROM iq_results";
const getIqResultsById = "SELECT * FROM iq_results WHERE iq_results_id = $1";
const checkFirstnameExists = "SELECT s FROM iq_results s WHERE s.firstname = $1";
const addIqResults = "INSERT INTO iq_results (firstname, lastname) VALUES ($1, $2)";
const deleteIqResults = "DELETE FROM iq_results WHERE iq_results_id = $1";
const updateIqResults = "UPDATE iq_results SET firstname = $1 WHERE iq_results_id = $2";

module.exports = {
  getIqResults,
  getIqResultsById,
  checkFirstnameExists,
  addIqResults,
  deleteIqResults,
  updateIqResults,
}