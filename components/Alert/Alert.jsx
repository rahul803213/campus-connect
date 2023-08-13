import React from 'react';
import './Alert.css'; // Import the CSS file

const Alert = ({ type, message }) => {
  return (
    <div className={`alert ${type}`}>
      {message}
    </div>
  );
};

export default Alert;