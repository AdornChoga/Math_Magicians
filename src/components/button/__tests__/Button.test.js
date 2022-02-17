import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from '../Button';

afterEach(cleanup);
describe('Tests button rendering and snapshot matching', () => {
  test('button should contain passed value', () => {
    const handleClicks = () => (5 + 3);
    render(<Button buttonValue="-" eventHandler={handleClicks} id="minus" />);
    const btnElement = screen.getByTestId('minus');
    expect(btnElement).toBeInTheDocument();
    expect(btnElement).toHaveTextContent('-');
  });

  test('is button snapshot created', () => {
    const handleClicks = () => (5 + 2);
    const tree = renderer.create(<Button buttonValue="-" eventHandler={handleClicks} id="minus" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Tests for click events on button', () => {
  test('is click event captured', (done) => {
    const handleClicks = (evt) => {
      expect(evt.target.value).toBe('-');
      done();
    };
    const { getByText } = render(<Button buttonValue="-" eventHandler={handleClicks} id="minus" />);
    const node = getByText('-');
    fireEvent.click(node, { target: { value: '-' } });
  });
});
