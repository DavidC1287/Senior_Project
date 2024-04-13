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
  const [subscriptionOptions, setSubscriptionOptions] = useState([]); // subscriptionOptions to store subscription data and notification for managing notifications
  const [notification, setNotification] = useState(null);

  useEffect(() => {//  Executes a side effect when the component mounts. 
    const fetchData = async () => { // defines an asynchronous function fetchData to fetch subscription data and populate subscriptionOptions.
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
    const randomDay = Math.floor(Math.random() * 10) + 1; // get payment due dates
    const month = 5;
    const year = new Date().getFullYear();

    return `${month}/${randomDay}/${year}`;
  };

  const handleCancel = (subscriptionId) => { //subscriptionId parameter and updates subscriptionOptions by removing the subscription with that ID
    setSubscriptionOptions(prevOptions =>
      prevOptions.filter(option => option.id !== subscriptionId)
    );

    setNotification('Subscription successfully canceled'); //  sets a notification message for successful cancellation
  };

  const handleNotificationClose = () => {
    setNotification(null);  // clears notification message by setting notification to null
  };

  return (
    <div className="subscription-window"> {/*hold contents of the subscription window */}
      {notification && <Notification message={notification} onClose={handleNotificationClose} />} {/*render notification message */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" /> {/*render project logo(top right us css) */}
      </div>
      <div className="profile-container"> {/*contains users profile picture and name */}
        <Profile />
      </div>
      <div className="subscription-container"> {/*contains subscription items */}
        {subscriptionOptions.map((subscription) => (
          <div key={subscription.id} className="subscription-item">
            <img src={subscription.image} alt={subscription.name} className="subscription-image" /> {/*.map() to iterate over subscriptionOptions and render subscription items dynamically. 
                                                                                                        Each subscription item is represented by a div with the class name subscription-item,
                                                                                                        containing an image, details (name, due date, payment info), and a cancel button. */}
            <div className="subscription-details">
              <h2>{subscription.name}</h2>
              <p>Due Date: {getRandomDueDate()}</p>
              <p>Payment Card Info: **** **** **** 1234</p>
            </div>
            <button className="cancel-button" onClick={() => handleCancel(subscription.id)}> {/*cancel button that when clicked unrenders subscription */}
              Cancel
            </button>
          </div>
        ))}
      </div>
      <div className="about-us-container"> {/*simple about us to inform user about the project */}
        <AboutUs /> 
      </div>
    </div>
  );
}

export default Subwindow;
