import '../stylesheets/Calculator.css';
import React from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
  }

  events = (e) => {
    e.target.style.backgroundColor = 'blue';
  }

  handleClicks = (e) => {
    const display = document.querySelector('#number-input');
    const expression = document.querySelector('#expression');
    const { total, next, operation } = this.state;
    const btnName = e.target.textContent;
    const updatedState = calculate(this.state, btnName);
    this.setState(updatedState);
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
    if (btnName === '+/-' && updatedState.total) {
      display.innerHTML = updatedState.total;
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
      this.setState({ total: '0' });
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
  }

  render() {
    return (
      <ul className="grid-container">
        <li id="display">
          <span id="expression" />
          <span id="number-input">0</span>
        </li>
        <Button buttonValue="AC" eventHandler={this.handleClicks} />
        <Button buttonValue="+/-" eventHandler={this.handleClicks} />
        <Button buttonValue="%" eventHandler={this.handleClicks} />
        <Button buttonValue="÷" eventHandler={this.handleClicks} />
        <Button buttonValue="7" eventHandler={this.handleClicks} />
        <Button buttonValue="8" eventHandler={this.handleClicks} />
        <Button buttonValue="9" eventHandler={this.handleClicks} />
        <Button buttonValue="x" eventHandler={this.handleClicks} />
        <Button buttonValue="4" eventHandler={this.handleClicks} />
        <Button buttonValue="5" eventHandler={this.handleClicks} />
        <Button buttonValue="6" eventHandler={this.handleClicks} />
        <Button buttonValue="-" eventHandler={this.handleClicks} />
        <Button buttonValue="1" eventHandler={this.handleClicks} />
        <Button buttonValue="2" eventHandler={this.handleClicks} />
        <Button buttonValue="3" eventHandler={this.handleClicks} />
        <Button buttonValue="+" eventHandler={this.handleClicks} />
        <Button buttonValue="0" eventHandler={this.handleClicks} />
        <Button buttonValue="." eventHandler={this.handleClicks} />
        <Button buttonValue="=" eventHandler={this.handleClicks} />
      </ul>
    );
  }
}

export default Calculator;
