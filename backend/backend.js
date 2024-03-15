const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory user data (for demo purposes, replace with database in a real project)
const users = [{ username: 'user', password: '123' }];

app.get('/login', (req, res) => {
  // Extract username and password from the request query parameters
  const { username, password } = req.query;

  // Find the user in the users array
  const user = users.find(u => u.username === username && u.password === password);

  // Check if the user exists
  if (user) {
    // If credentials are correct, send a success response
    res.json({ success: true });
  } else {
    // If credentials are incorrect, send an error response
    res.status(401).json({ success: false, message: 'Invalid username or password' });
  }
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
