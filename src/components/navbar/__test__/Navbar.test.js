import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../Navbar';

afterEach(cleanup);

describe('Tests for nav bar rendering and snapshot matching.', () => {
  test('Is navbar rendered?', () => {
    render(<Router><Navbar /></Router>);
    const navElement = screen.getByTestId('nav');
    expect(navElement).toBeInTheDocument();
  });

  test('Is navbar snapshot created/matched?', () => {
    const tree = renderer.create(<Router><Navbar /></Router>);
    expect(tree).toMatchSnapshot();
  });
});
