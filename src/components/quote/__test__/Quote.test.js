import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quote from '../Quote';

afterEach(cleanup);

describe('Tests for Quote rendering and snapshot matching.', () => {
  test('Is Quote rendered?', () => {
    render(<Quote />);
    const quoteElement = screen.getByTestId('quote-page');
    expect(quoteElement).toBeInTheDocument();
  });

  test('Is Quote snapshot created/matched?', () => {
    const tree = renderer.create(<Quote />);
    expect(tree).toMatchSnapshot();
  });
});
