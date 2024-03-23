const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory user data (for demo purposes, will not use actual card information)
const users = [{ username: 'user', password: '123' }];

app.get('/login', (req, res) => {
  //  username and password from the request query parameters
  const { username, password } = req.query;

  // the user in the users array
  const user = users.find(u => u.username === username && u.password === password);

  // check if the user exists
  if (user) {
    // if credentials are correct, send a success response
    res.json({ success: true });
  } else {
    // if credentials are incorrect, send an error response
    res.status(401).json({ success: false, message: 'Invalid username or password' });
  }
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
