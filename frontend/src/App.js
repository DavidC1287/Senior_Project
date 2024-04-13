import React, { useState } from 'react';
import logo from './S.png';
import './App.css';
import Sub from './Subwindow'; 

function App() {
  const [loginData, setLoginData] = useState({ username: '', password: '' }); // uses the useState hook to create a state variable loginData with initial values for username and password. The setLoginData function is used to update this state variable.
  const [loginError, setLoginError] = useState(''); // uses the useState hook to create a state variable loginError with an initial value of an empty string. The setLoginError function updates this state variable.
  const [loggedIn, setLoggedIn] = useState(false); // Track login state
 
  const handleLogin = (event) => { //takes an event object as a parameter.  used to handle the login process.
    event.preventDefault(); //prevents the default behavior of form submission when the login button is clicked
    // Make a GET request to  backend with loginData
    fetch(`/login?username=${loginData.username}&password=${loginData.password}`)
      .then(response => {
        if (!response.ok) { // checks if the response from the server is not okay
          throw new Error('Network response was not ok');
        }
        return response.json(); // it parses the response as JSON
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

  const handleInputChange = (e) => { //  takes an event object as a parameter. It's used to handle input changes in the username and password fields
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value }); // extracts the name and value properties from the event target and updates the loginData
  };

  return (
    <div className="App"> 
      <header className="App-header">
        {!loggedIn && (
          <>
            <img src={logo} className="App-logo" alt="logo" />   {/* user is not logged in, it shows the logo, a heading, and a description. */}
            <h1>Welcome To Sub-Tracker</h1>
            <p>Manage all your subscriptions in one place</p>
          </>
        )}
        {!loggedIn ? (
          <div>
            <input type="text" name="username" value={loginData.username} onChange={handleInputChange} placeholder="Username" />
            <input type="password" name="password" value={loginData.password} onChange={handleInputChange} placeholder="Password" />
            <button onClick={handleLogin}>Login</button>  {/* displays the log in menu*/}
            {loginError && <p className="error">{loginError}</p>} 
            {/*once correct log in is entered render in subpage as shown below*/}
          </div> 
        ) : (
          <Sub />  
        )}
      </header>
    </div>
  );
}

export default App;
