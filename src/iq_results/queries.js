const getUser = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE id = $1";
const checkFirstnameExists = "SELECT s FROM users s WHERE s.firstname = $1";
const addUser = "INSERT INTO users (firstname, lastname) VALUES ($1, $2)";
const deleteUser = "DELETE FROM users WHERE id = $1";
const updateUser = "UPDATE users SET firstname = $1 WHERE id = $2";



module.exports = {
  getUser,
  getUserById,
  checkFirstnameExists,
  addUser,
  deleteUser,
  updateUser,
}