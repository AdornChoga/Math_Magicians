import { cleanup } from '@testing-library/react';
import calculator from '../calculate';

afterEach(cleanup);
describe('Tests when button name is AC', () => {
  test('Should return null values for all properties in obj', () => {
    const obj = {
      total: 5,
      next: 2,
      operation: '+',
    };
    const buttonName = 'AC';

    const response = calculator(obj, buttonName);

    expect(response.total).toBe(null);
    expect(response.next).toBe(null);
    expect(response.operation).toBe(null);
  });
});

describe('Tests when clicked button is a number', () => {
  test('When number is 0 should return an empty obj', () => {
    const obj = {
      total: null,
      next: '0',
      operation: null,
    };

    const buttonName = '0';

    const response = calculator(obj, buttonName);

    expect(response).toEqual({});
  });

  describe('If operation is present update next', () => {
    test('next should be equal to obj.next + buttonName', () => {
      const obj = {
        total: '8',
        next: '5',
        operation: '-',
      };

      const buttonName = '3';

      const response = calculator(obj, buttonName);

      expect(response.next).toEqual('53');
    });

    test('next should be equal to buttonName };', () => {
      const obj = {
        total: '8',
        next: null,
        operation: '-',
      };

      const buttonName = '3';

      const response = calculator(obj, buttonName);

      expect(response.next).toEqual(buttonName);
    });
  });

  test('If there is no operetion should  update next and clear the value', () => {
    const obj = {
      total: null,
      next: '4',
      operation: null,
    };

    const buttonName = '3';

    const response = calculator(obj, buttonName);

    expect(response.next).toEqual('43');
  });

  test('should return next as buttonName and total as null', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const buttonName = '3';

    const response = calculator(obj, buttonName);

    expect(response.next).toEqual(buttonName);
  });
});

describe('if button Nmae is a comma', () => {
  describe('If there is next value', () => {
    test('Should return a copy of the obj passed', () => {
      const obj = {
        total: null,
        next: '2.5',
        operation: null,
      };

      const buttonName = '.';

      const response = calculator(obj, buttonName);

      expect(response).toEqual(obj);
    });

    test('if next is whole number hhould make obj.next a decimal ', () => {
      const obj = {
        total: null,
        next: '5',
        operation: null,
      };

      const buttonName = '.';

      const response = calculator(obj, buttonName);

      expect(response.next).toEqual('5.');
    });
  });

  test('if operation and total are true make obj.next 0. ', () => {
    const obj = {
      total: '2',
      next: null,
      operation: '-',
    };

    const buttonName = '.';

    const response = calculator(obj, buttonName);

    expect(response.next).toEqual('0.');
  });

  describe('If they is a total ', () => {
    test('If total is decimal return empty object', () => {
      const obj = {
        total: '2.5',
        next: null,
        operation: null,
      };

      const buttonName = '.';

      const response = calculator(obj, buttonName);

      expect(response).toEqual({});
    });

    test('If total is whole number make it a decimal', () => {
      const obj = {
        total: '2',
        next: null,
        operation: null,
      };

      const buttonName = '.';

      const response = calculator(obj, buttonName);

      expect(response.total).toEqual('2.');
    });
  });

  test('If all obj properties values are null make total 0.', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const buttonName = '.';

    const response = calculator(obj, buttonName);

    expect(response.total).toEqual('0.');
  });
});

describe('Tests when = is clicked', () => {
  test('should return total and others as null', () => {
    const obj = {
      total: 5,
      next: 2,
      operation: '+',
    };

    const buttonName = '=';

    const response = calculator(obj, buttonName);

    expect(response.total).toBe('7');
    expect(response.next).toBe(null);
    expect(response.operation).toBe(null);
  });

  test('If no operation should return empty obj', () => {
    const obj = {
      total: null,
      next: 2,
      operation: null,
    };

    const buttonName = '=';

    const response = calculator(obj, buttonName);

    expect(response).toEqual({});
  });
});

describe('Tests when clicked button is -/+', () => {
  test('should return negation of next value ', () => {
    const obj = {
      total: null,
      next: '2',
      operation: null,
    };

    const buttonName = '+/-';

    const response = calculator(obj, buttonName);

    expect(response.next).toEqual('-2');
  });

  test('should return negation of total value', () => {
    const obj = {
      total: '2',
      next: null,
      operation: null,
    };

    const buttonName = '+/-';

    const response = calculator(obj, buttonName);

    expect(response.total).toEqual('-2');
  });

  test('should return empty obj', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const buttonName = '+/-';

    const response = calculator(obj, buttonName);

    expect(response).toEqual({});
  });
});

describe('Tests when user presses an operation after pressing =', () => {
  test('if operation is addition', () => {
    const obj = {
      total: '3',
      next: null,
      operation: null,
    };

    const buttonName = '+';

    const response = calculator(obj, buttonName);

    expect(response.operation).toEqual(buttonName);
  });

  test('if operation is subtraction', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const buttonName = '-';

    const response = calculator(obj, buttonName);

    expect(response.operation).toEqual(buttonName);
  });

  test('if operation is multiplication', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const buttonName = 'x';

    const response = calculator(obj, buttonName);

    expect(response.operation).toEqual(buttonName);
  });

  test('if operation is division', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const buttonName = '÷';

    const response = calculator(obj, buttonName);

    expect(response.operation).toEqual(buttonName);
  });

  test('if operation is modulus', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const buttonName = '%';

    const response = calculator(obj, buttonName);

    expect(response.operation).toEqual(buttonName);
  });
});

describe('Tests when user pressed an operation button and there is an existing operation', () => {
  test('should update operation ', () => {
    const obj = {
      total: '10',
      next: null,
      operation: '+',
    };

    const buttonName = 'x';

    const response = calculator(obj, buttonName);

    expect(response.operation).toEqual(buttonName);
  });

  test('should update operation after getting total value', () => {
    const obj = {
      total: '10',
      next: '3',
      operation: '+',
    };

    const buttonName = 'x';

    const response = calculator(obj, buttonName);

    expect(response.total).toEqual('13');
    expect(response.operation).toEqual(buttonName);
  });
});

describe('Tests when there is no operation yet, but the user typed one', () => {
  test('should  save the operation', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const buttonName = 'x';

    const response = calculator(obj, buttonName);
    expect(response.operation).toEqual(buttonName);
  });

  test('should shift next into total', () => {
    const obj = {
      total: null,
      next: '5',
      operation: null,
    };

    const buttonName = '%';

    const response = calculator(obj, buttonName);

    expect(response.total).toEqual(obj.next);
    expect(response.operation).toEqual(buttonName);
  });
});
