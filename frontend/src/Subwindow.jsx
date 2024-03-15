import React, { useState, useEffect } from 'react';
//import userprofile from './userprofile'
import Spotify from './Spotify.png';
import Chegg from './chegg.png';
import DoorDash from './doordash.png';
import UberEats from './UberEats.png';
import './Subwindow.css'; 
function Subwindow() {
  const [subscriptionOptions, setSubscriptionOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { id: 1, name: "Spotify", image: Spotify },
        { id: 2, name: "UberEats", image: UberEats },
        { id: 3, name: "Chegg", image: Chegg },
        { id: 4, name: "DoorDash", image: DoorDash },
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
      <div className="subscription-container">
        {subscriptionOptions.map(subscription => (
          <div key={subscription.id} className="subscription-item">
            <img src={subscription.image} alt={subscription.name} className="subscription-image" />
            <div className="subscription-details">
              <h2>{subscription.name}</h2>
              <p>Due Date: {getRandomDueDate()}</p>
              <p>Payment Card Info: **** **** **** 1234</p>
            </div>
            <button className="cancel-button">Cancel</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subwindow;
