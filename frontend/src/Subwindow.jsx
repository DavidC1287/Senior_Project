import React, { useState, useEffect } from 'react';
import Profile from './userprofile'; // Import the Profile component
import Spotify from './Spotify.png';
import Chegg from './chegg.png';
import DoorDash from './doordash.png';
import UberEats from './UberEats.png';
import YT from './YT_TV.png';
import Disneyplus from './Disney+.png';
import Crunch from './Crunch.png';
import AP from './AmazonPrime.png';
import './Subwindow.css';
import logo from './S.png'; // Import the logo
import './subpagelogo.css'
function Subwindow() {
  const [subscriptionOptions, setSubscriptionOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { id: 1, name: "Spotify", image: Spotify },
        { id: 2, name: "UberEats", image: UberEats },
        { id: 3, name: "Chegg", image: Chegg },
        { id: 4, name: "DoorDash", image: DoorDash },
        { id: 5, name: "YouTube TV", image: YT },
        { id: 6, name: "Disney+", image: Disneyplus },
        { id: 7, name: "Crunch Fitness", image: Crunch },
        { id: 8, name: "Amazon Prime", image: AP },
      ];
      setSubscriptionOptions(data);
    };

    fetchData();
  }, []);

  const getRandomDueDate = () => {
    const randomDay = Math.floor(Math.random() * 10) + 1; // Random day between 1 and 10 for early May
    const month = 5; // May
    const year = new Date().getFullYear(); // Current year

    return `${month}/${randomDay}/${year}`;
  };

  return (
    <div className="subscription-window">
      <img src={logo} alt="Logo" className="logo" /> {/* Include the logo here */}
      <Profile /> {/* Include the Profile component here */}
      <div className="subscription-container">
        {subscriptionOptions.map(subscription => (
          <div key={subscription.id} className="subscription-item">
            <img src={subscription.image} alt={subscription.name} className="subscription-image" />
            <div className="subscription-details">
              <h2>{subscription.name}</h2>
              <p>Due Date: {getRandomDueDate()}</p>
              <p>Payment Card Info: 1234 1234 1234 1234</p>
            </div>
            <button className="cancel-button">Cancel</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subwindow;
