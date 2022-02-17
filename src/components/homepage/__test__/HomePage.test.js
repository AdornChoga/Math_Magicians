import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import HomePage from '../HomePage';

afterEach(cleanup);

describe('Tests for  homepage rendering and snapshot matching', () => {
  test('is homepage rendered', () => {
    render(<HomePage />);
    const homepageElement = screen.getByTestId('homepage-container');
    expect(homepageElement).toBeInTheDocument();
  });

  test('is snapshot created/matched', () => {
    const tree = renderer.create(<HomePage />);
    expect(tree).toMatchSnapshot();
  });
});
