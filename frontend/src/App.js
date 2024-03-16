import React, { useState } from 'react';
import logo from './S.png';
import './App.css';
import Sub from './Subwindow'; // Import the BlankPage component

function App() {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // Track login state

  const handleLogin = (event) => {
    event.preventDefault();
    // Make a GET request to your backend with loginData
    fetch(`/login?username=${loginData.username}&password=${loginData.password}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.success) {
          // Handle successful login
          console.log('Login successful');
          setLoggedIn(true); // Set login state to true upon successful login
          // Clear login error upon successful login
          setLoginError('');

          // Change the URL using pushState
          window.history.pushState({ page: 'Subscriptions' }, 'Subscriptions', '/Subscriptions');
        } else {
          // Handle unsuccessful login
          setLoginError('Invalid username or password. Please try again.');
        }
      })
      .catch(error => {
        // Handle network error
        console.error('Login error:', error);
        setLoginError('Invalid username or password. Please try again.');
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <div className="App">
      <header className="App-header">
        {!loggedIn && (
          <>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Welcome To Sub-Tracker</h1>
            <p>Manage all your subscriptions in one place</p>
          </>
        )}
        {!loggedIn ? (
          <div>
            <input type="text" name="username" value={loginData.username} onChange={handleInputChange} placeholder="Username" />
            <input type="password" name="password" value={loginData.password} onChange={handleInputChange} placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
            {loginError && <p className="error">{loginError}</p>}
          </div>
        ) : (
          <Sub />
        )}
      </header>
    </div>
  );
}

export default App;
