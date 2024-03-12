import React, { useState } from 'react';
import logo from './image.png';
import './App.css';
import axios from 'axios'; // Import Axios for making HTTP requests
import LoginPage from './loginpage';

function App() {
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleLogin = () => {
    // Make a POST request to your backend with loginData
    axios.post('http://localhost:8080/login', loginData)
      .then(response => {
        // Handle successful login response
        console.log('Login successful:', response.data);
      })
      .catch(error => {
        // Handle login error
        console.error('Login error:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome To Sub-Tracker</h1>
        <p>Manage all your subscriptions in one place.</p>
        <LoginPage
          loginData={loginData}
          onInputChange={handleInputChange}
          onLogin={handleLogin}
        />
      </header>
    </div>
  );
}

export default App;
