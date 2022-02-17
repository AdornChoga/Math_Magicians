import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

afterEach(cleanup);
describe('Tests for rendering and snapshot matching', () => {
  test('does calculator output a button component', () => {
    render(<Calculator />);
    const container = screen.getByTestId('calc-page-cont');
    expect(container).toBeInTheDocument();
  });

  test('is snapshot of calculator component created and matched', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
