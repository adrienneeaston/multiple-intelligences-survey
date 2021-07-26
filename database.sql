CREATE DATABASE iq_results_database;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(30),
  lastname VARCHAR(30)
);

CREATE TABLE results(
  id SERIAL PRIMARY KEY,
  user_id INT, 
  linguist INT,
  logic INT, 
  musical INT, 
  bodily INT, 
  visual INT, 
  inter INT,
  intra INT, 
  CONSTRAINT fk_user
    FOREIGN KEY(user_id)
      REFERENCES users(id)
);