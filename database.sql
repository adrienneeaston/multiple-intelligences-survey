CREATE DATABASE iq_results_database;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(30),
  lastname VARCHAR(30)
);