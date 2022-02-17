import operate from '../operate';

describe('Tests for mathematical operations', () => {
  test('Operation for addition', () => {
    const numOne = 6;
    const numTwo = 3;
    const operation = '+';

    const response = operate(numOne, numTwo, operation);

    expect(response).toBe('9');
  });

  test('Operation for subtraction', () => {
    const numOne = 6;
    const numTwo = 3;
    const operation = '-';

    const response = operate(numOne, numTwo, operation);

    expect(response).toBe('3');
  });

  test('Operation for multiplication', () => {
    const numOne = 6;
    const numTwo = 3;
    const operation = 'x';

    const response = operate(numOne, numTwo, operation);

    expect(response).toBe('18');
  });

  test('Operation for division', () => {
    const numOne = 6;
    const numTwo = 3;
    const operation = '÷';

    const response = operate(numOne, numTwo, operation);

    expect(response).toBe('2');
  });

  test('operation for modulus', () => {
    const numOne = 6;
    const numTwo = 3;
    const operation = '%';

    const response = operate(numOne, numTwo, operation);

    expect(response).toBe('0');
  });
});
