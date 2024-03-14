import React from 'react'
import './App.css';
//import SubscriptionWindow from './SubscriptionWindow'; // Import SubscriptionWindow component

function App() {
    const subscriptionOptions = [
        { id: 1, name: "Spotify", image: ".png" },
        { id: 2, name: "UberEats", image: ".png" },
        { id: 3, name: "Chegg", image: ".png" },
        { id: 4, name: "DoorDash", image: ".png" },

    ];

    return (
        <div className="App">
            <header className="App-header">
                <img src="logo.svg" className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <SubscriptionWindow subscriptionOptions={subscriptionOptions} /> {/* */}
        </div>
    );
}

export default App;