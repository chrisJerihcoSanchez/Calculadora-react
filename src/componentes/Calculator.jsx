import React, { useState } from 'react';
import styles from '../css/calculator.module.css';
import buttonStyles from '../css/button.module.css';
import Display from './Display';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [currentValue, setCurrentValue] = useState('');
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Funciones básicas
  const handleNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(num);
      setCurrentValue(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
      setCurrentValue(display === '0' ? num : display + num);
    }
  };

  const handleOperator = (op) => {
    const inputValue = parseFloat(display);
    
    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operator) {
      const result = calculate(previousValue, inputValue, operator);
      setDisplay(String(result));
      setPreviousValue(result);
    }
    
    setWaitingForOperand(true);
    setOperator(op);
  };

  const calculate = (num1, num2, op) => {
    if (isNaN(num1) || isNaN(num2)) return num2;
    
    switch (op) {
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case 'x': return num1 * num2;
      case '÷': return num2 === 0 ? 'Error' : num1 / num2;
      default: return num2;
    }
  };

  const handleEqual = () => {
    if (operator === null || previousValue === null) return;
    
    const inputValue = parseFloat(display);
    const result = calculate(previousValue, inputValue, operator);
    
    setDisplay(String(result));
    setPreviousValue(null);
    setOperator(null);
    setCurrentValue(String(result));
    setWaitingForOperand(true);
  };

  const handleClear = () => {
    setDisplay('0');
    setCurrentValue('');
    setOperator(null);
    setPreviousValue(null);
    setWaitingForOperand(false);
  };

  const toggleSign = () => {
    setDisplay(display.startsWith('-') ? display.substring(1) : '-' + display);
    setCurrentValue(display.startsWith('-') ? display.substring(1) : '-' + display);
  };

  const handlePercentage = () => {
    const value = parseFloat(display) / 100;
    setDisplay(String(value));
    setCurrentValue(String(value));
  };

  const handleDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setCurrentValue('0.');
      setWaitingForOperand(false);
      return;
    }
    
    if (!display.includes('.')) {
      setDisplay(display + '.');
      setCurrentValue(display + '.');
    }
  };

  const undoLast = () => {
    if (display.length === 1) {
      setDisplay('0');
      setCurrentValue('');
    } else {
      setDisplay(display.slice(0, -1));
      setCurrentValue(display.slice(0, -1));
    }
  };

  // Definición de botones exactamente como los necesitas
  const buttons = [
    { color: "g", dato: "AC", action: handleClear },
    { color: "g", dato: "+/-", action: toggleSign },
    { color: "g", dato: "%", action: handlePercentage },
    { color: "r", dato: "÷", action: () => handleOperator('÷') },
    { color: "w", dato: 7, action: () => handleNumber('7') },
    { color: "w", dato: 8, action: () => handleNumber('8') },
    { color: "w", dato: 9, action: () => handleNumber('9') },
    { color: "r", dato: "x", action: () => handleOperator('x') },
    { color: "w", dato: 4, action: () => handleNumber('4') },
    { color: "w", dato: 5, action: () => handleNumber('5') },
    { color: "w", dato: 6, action: () => handleNumber('6') },
    { color: "r", dato: "-", action: () => handleOperator('-') },
    { color: "w", dato: 1, action: () => handleNumber('1') },
    { color: "w", dato: 2, action: () => handleNumber('2') },
    { color: "w", dato: 3, action: () => handleNumber('3') },
    { color: "r", dato: "+", action: () => handleOperator('+') },
    { color: "w", dato: "⭮", action: undoLast },
    { color: "w", dato: "0", action: () => handleNumber('0') },
    { color: "w", dato: "•", action: handleDecimal },
    { color: "r", dato: "=", action: handleEqual }
  ];

  const getButtonClass = (color) => {
    switch(color) {
      case "g": return `${buttonStyles.btn} ${buttonStyles.btnGreen}`;
      case "r": return `${buttonStyles.btn} ${buttonStyles.btnRed}`;
      default: return `${buttonStyles.btn} ${buttonStyles.btnWhite}`;
    }
  };

  return (
    <div className={darkMode ? styles.calculatorDark : styles.calculator}>
      <Display 
        display={display}
        previousValue={previousValue}
        operator={operator}
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />
      
      <div className={styles.buttons}>
        {buttons.map((button, index) => (
          <button
            key={index}
            className={getButtonClass(button.color)}
            onClick={button.action}
          >
            {button.dato}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;