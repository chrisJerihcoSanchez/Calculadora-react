import React from 'react';
import displayStyles from '../css/display.module.css';

const Display = ({ display, previousValue, operator, darkMode, toggleDarkMode }) => {
  return (
    <div className={displayStyles.display}>
      <div className={displayStyles.mode}>
        <button 
          className={`${displayStyles.modeBtn} ${displayStyles.modeLight} ${!darkMode ? displayStyles.activeMode : ''}`}
          onClick={() => toggleDarkMode(false)}
        >
          ☀︎
        </button>
        <button 
          className={`${displayStyles.modeBtn} ${displayStyles.modeDark} ${darkMode ? displayStyles.activeMode : ''}`}
          onClick={() => toggleDarkMode(true)}
        >
          ☽
        </button>
      </div>
      <div className={displayStyles.operation}>
        {previousValue} {operator}
      </div>
      <div className={displayStyles.result}>
        {display}
      </div>
    </div>
  );
};

export default Display;