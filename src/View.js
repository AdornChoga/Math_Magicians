import { Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator/Calculator';
import HomePage from './components/homepage/HomePage';
import Quote from './components/quote/Quote';

const View = () => (
  <Routes>
    <Route index element={<HomePage />} />
    <Route path="/">
      <Route path="calculator" element={<Calculator />} />
      <Route path="quote" element={<Quote />} />
    </Route>
  </Routes>
);

export default View;
