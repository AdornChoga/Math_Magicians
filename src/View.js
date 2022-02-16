import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import HomePage from './components/HomePage';
import Quote from './components/Quote';

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
