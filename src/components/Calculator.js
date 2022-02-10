import '../stylesheets/Calculator.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function
const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  const { total, next, operation } = state;

  const handleClicks = (e) => {
    const display = document.querySelector('#number-input');
    const expression = document.querySelector('#expression');
    const btnName = e.target.textContent;
    const updatedState = calculate(state, btnName);
    setState(updatedState);
    if (!updatedState.total && !updatedState.operation) {
      if (btnName === '0' && display.innerHTML === '0') {
        display.innerHTML = btnName;
        return;
      }
      if (btnName === '0') {
        display.innerHTML += btnName;
      }
    }
    if (Number(btnName) || btnName === '.' || btnName === '+/-') {
      if (!total && !next) {
        display.innerHTML = btnName;
      } else if (!updatedState.total && !updatedState.operation) {
        display.innerHTML = updatedState.next;
      } else {
        display.innerHTML += btnName;
      }
    }
    if (btnName === '+/-' && updatedState.total && !updatedState.next) {
      display.innerHTML = updatedState.total;
    } else if (btnName === '+/-' && updatedState.total && updatedState.next) {
      display.innerHTML = updatedState.next;
    }
    if (Number(btnName) && total && !next && !operation) {
      expression.innerHTML = '';
      display.innerHTML = btnName;
    }
    if (!updatedState.total && !updatedState.next && !updatedState.operation) {
      expression.innerHTML = '';
      display.innerHTML = '0';
    }
    if (updatedState.total && updatedState.operation) {
      expression.innerHTML = `${updatedState.total} ${updatedState.operation}`;
      if (Number(btnName)) {
        display.innerHTML = '';
        display.innerHTML += updatedState.next;
      }
    }
    if (updatedState.operation && !updatedState.next && !updatedState.total) {
      setState({ total: '0' });
      expression.innerHTML = `0 ${updatedState.operation}`;
      if (Number(btnName)) {
        display.innerHTML = '';
        display.innerHTML += btnName;
      }
    }
    if (e.target.textContent === '=') {
      if (updatedState.total !== undefined) {
        display.innerHTML = updatedState.total;
      }
      if (total && next && operation) {
        expression.innerHTML = `${total} ${operation} ${next} =`;
      }
    }
  };
  return (
    <ul className="grid-container">
      <li id="display">
        <span id="expression" />
        <span id="number-input">0</span>
      </li>
      <Button buttonValue="AC" eventHandler={handleClicks} />
      <Button buttonValue="+/-" eventHandler={handleClicks} />
      <Button buttonValue="%" eventHandler={handleClicks} />
      <Button buttonValue="÷" eventHandler={handleClicks} />
      <Button buttonValue="7" eventHandler={handleClicks} />
      <Button buttonValue="8" eventHandler={handleClicks} />
      <Button buttonValue="9" eventHandler={handleClicks} />
      <Button buttonValue="x" eventHandler={handleClicks} />
      <Button buttonValue="4" eventHandler={handleClicks} />
      <Button buttonValue="5" eventHandler={handleClicks} />
      <Button buttonValue="6" eventHandler={handleClicks} />
      <Button buttonValue="-" eventHandler={handleClicks} />
      <Button buttonValue="1" eventHandler={handleClicks} />
      <Button buttonValue="2" eventHandler={handleClicks} />
      <Button buttonValue="3" eventHandler={handleClicks} />
      <Button buttonValue="+" eventHandler={handleClicks} />
      <Button buttonValue="0" eventHandler={handleClicks} />
      <Button buttonValue="." eventHandler={handleClicks} />
      <Button buttonValue="=" eventHandler={handleClicks} />
    </ul>
  );
};

export default Calculator;
