const getIqResults = "SELECT * FROM iq_results";
const getIqResultsById = "SELECT * FROM iq_results WHERE iq_results_id = $1";

module.exports= {
  getIqResults,
  getIqResultsById,
}