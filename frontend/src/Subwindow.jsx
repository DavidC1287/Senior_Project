import React, { useState, useEffect } from 'react';
import Profile from './userprofile';
import Notification from './notification';
import AboutUs from './aboutus'; 
import './Subwindow.css';
import logo from './S.png';
import Spotify from './Spotify.png';
import Chegg from './chegg.png';
import DoorDash from './doordash.png';
import UberEats from './UberEats.png';
import YT from './YT_TV.png';
import Disneyplus from './Disney+.png';
import Crunch from './Crunch.png';
import AP from './AmazonPrime.png';
import './subpagelogo.css';

function Subwindow() {
  const [subscriptionOptions, setSubscriptionOptions] = useState([]);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { id: 1, name: 'Spotify', image: Spotify },
        { id: 2, name: 'UberEats', image: UberEats },
        { id: 3, name: 'Chegg', image: Chegg },
        { id: 4, name: 'DoorDash', image: DoorDash },
        { id: 5, name: 'YouTube TV', image: YT },
        { id: 6, name: 'Disney+', image: Disneyplus },
        { id: 7, name: 'Crunch Fitness', image: Crunch },
        { id: 8, name: 'Amazon Prime', image: AP },
      ];
      setSubscriptionOptions(data);
    };

    fetchData();
  }, []);

  const getRandomDueDate = () => {
    const randomDay = Math.floor(Math.random() * 10) + 1;
    const month = 5;
    const year = new Date().getFullYear();

    return `${month}/${randomDay}/${year}`;
  };

  const handleCancel = (subscriptionId) => {
    setSubscriptionOptions(prevOptions =>
      prevOptions.filter(option => option.id !== subscriptionId)
    );

    setNotification('Subscription successfully canceled');
  };

  const handleNotificationClose = () => {
    setNotification(null);
  };

  return (
    <div className="subscription-window">
      {notification && <Notification message={notification} onClose={handleNotificationClose} />}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="profile-container">
        <Profile />
      </div>
      <div className="subscription-container">
        {subscriptionOptions.map((subscription) => (
          <div key={subscription.id} className="subscription-item">
            <img src={subscription.image} alt={subscription.name} className="subscription-image" />
            <div className="subscription-details">
              <h2>{subscription.name}</h2>
              <p>Due Date: {getRandomDueDate()}</p>
              <p>Payment Card Info: **** **** **** 1234</p>
            </div>
            <button className="cancel-button" onClick={() => handleCancel(subscription.id)}>
              Cancel
            </button>
          </div>
        ))}
      </div>
      <div className="about-us-container"> {/* Add a container for the About Us component */}
        <AboutUs /> {/* Render the AboutUs component */}
      </div>
    </div>
  );
}

export default Subwindow;
