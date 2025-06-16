// register.js
const pool = require('./db');
const bcrypt = require('bcrypt');

async function registerUser(username, password) {
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const res = await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2)',
      [username, hashedPassword]
    );
    console.log("User registered successfully.");
  } catch (err) {
    console.error("Registration error:", err.message);
  }
}

// Example usage:
registerUser('john_doe', 'mypassword123');

