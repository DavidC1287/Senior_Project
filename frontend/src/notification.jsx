import React, { useEffect } from 'react';
import './notification.css';

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Close the notification after 5 seconds
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return <div className="notification">{message}</div>;
};

export default Notification;
