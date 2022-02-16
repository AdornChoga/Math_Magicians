import React from 'react';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

// eslint-disable-next-line react/prefer-stateless-function
const App = () => (
  <>
    <Navbar />
    <HomePage />
    <Calculator />
  </>
);

export default App;
