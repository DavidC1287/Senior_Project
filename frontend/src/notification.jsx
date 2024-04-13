import React, { useEffect } from 'react';
import './notification.css';

const Notification = ({ message, onClose }) => {
  useEffect(() => { // sets up a side effect using the useEffect
    const timer = setTimeout(() => { //creates a timer using setTimeout
      onClose(); // Close the notification after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // cleanup function for useEffect. It clears the timer using clearTimeout when onClose changes
  }, [onClose]); //dependency list for useEffect. Will run whenever onClose changes.

  return <div className="notification">{message}</div>; // renders notification message
};

export default Notification;
