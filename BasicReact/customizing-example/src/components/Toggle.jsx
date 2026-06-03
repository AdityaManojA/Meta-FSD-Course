import React, { useState } from 'react';

const ModeToggle = () => {
  const [darkModeOn, setDarkModeOn] = useState(true);

  const handleClick = () => {
    setDarkModeOn(!darkModeOn);
  };

  const containerStyle = {
    backgroundColor: darkModeOn ? '#222' : '#fff',
    color: darkModeOn ? '#fff' : '#222', 
    height: '100vh', 
    padding: '20px',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: 'inherit' }}>
        {darkModeOn ? 'Dark mode is On' : 'Light mode is On'}
      </h1>
      
      <button onClick={handleClick}>Click me to toggle</button>
    </div>
  );
};

export default ModeToggle;