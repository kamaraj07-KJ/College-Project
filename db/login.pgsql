-- Create the database (only once)
CREATE DATABASE login_db;

-- Connect to the database
 login_db

-- Create a table for storing user credentials
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
