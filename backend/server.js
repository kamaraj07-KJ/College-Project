// Register route
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Check if user already exists
      const userCheck = await pool.query(
        'SELECT * FROM users WHERE username = $1',
        [username]
      );
  
      if (userCheck.rows.length > 0) {
        return res.json({ success: false, message: 'Username already exists.' });
      }
  
      // Insert new user
      await pool.query(
        'INSERT INTO users (username, password) VALUES ($1, $2)',
        [username, password]
      );
  
      res.json({ success: true, message: 'Account created successfully!' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });
  