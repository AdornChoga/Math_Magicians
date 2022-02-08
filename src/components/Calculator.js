import '../stylesheets/Calculator.css';
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <ul className="grid-container">
        <li id="display">0</li>
        <li>
          <button type="button">AC</button>
        </li>
        <li>
          <button type="button">+/-</button>
        </li>
        <li>
          <button type="button">%</button>
        </li>
        <li>
          <button type="button">+</button>
        </li>
        <li>
          <button type="button">7</button>
        </li>
        <li>
          <button type="button">8</button>
        </li>
        <li>
          <button type="button">9</button>
        </li>
        <li>
          <button type="button">x</button>
        </li>
        <li>
          <button type="button">4</button>
        </li>
        <li>
          <button type="button">5</button>
        </li>
        <li>
          <button type="button">6</button>
        </li>
        <li>
          <button type="button">-</button>
        </li>
        <li>
          <button type="button">1</button>
        </li>
        <li>
          <button type="button">2</button>
        </li>
        <li>
          <button type="button">3</button>
        </li>
        <li>
          <button type="button">+</button>
        </li>
        <li id="zero">
          <button type="button">0</button>
        </li>
        <li>
          <button type="button">.</button>
        </li>
        <li>
          <button type="button">=</button>
        </li>
      </ul>
    );
  }
}

export default Calculator;
