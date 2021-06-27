CREATE DATABASE iq_results_database;

CREATE TABLE iq_results(
  iq_results_id SERIAL PRIMARY KEY,
  firstname VARCHAR(30),
  lastname VARCHAR(30)
);