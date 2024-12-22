import React, { useContext } from 'react';
import { Usertheme } from '../App';  // Importing the context

const Child3 = () => {
  const { theme, setTheme } = useContext(Usertheme);  // Destructure both theme and setTheme

  // Function to toggle theme
  function handleClick() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <div>
      <button onClick={handleClick}>
        Change Theme
      </button>
      <p>Current theme: {theme}</p>
    </div>
  );
};

export default Child3;
