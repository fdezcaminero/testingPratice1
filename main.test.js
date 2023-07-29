const { stringLength, reverseStr, Calculator, capString } = require('./main');

describe('string length', () => {
  test('string length of hello world, returns 11', () => {
    expect(stringLength('hey')).toBe(3);
  });
  
  test('empty string, returns error', () => {
    expect(stringLength('')).toBe('error');
  });
  
  test('string longer than 10 characters, returns error', () => {
    expect(stringLength('string is longer than 10 chars')).toBe('error');
  });  
});

test('string reverse of good afternoon, returns noonretfa doog', () => {
  expect(reverseStr('good afternoon')).toBe('noonretfa doog');
});

const superCalc = new Calculator();

describe('Test the calculator class', () => {
  describe('Test the add method', () => {
    test('add 2 plus 3, returns 5', () => {
      expect(superCalc.add(2, 3)).toBe(5);
    });
    test('add 12 plus 8, returns 20', () => {
      expect(superCalc.add(12, 8)).toBe(20);
    });
    test('add 20 plus 80, returns 100', () => {
      expect(superCalc.add(20, 80)).toBe(100);
    });
  });
  describe('Test the subtract method', () => {
    test('3 minus 2, returns 1', () => {
      expect(superCalc.subtract(3, 2)).toBe(1);
    });
    test('12 minus 8, returns 4', () => {
      expect(superCalc.subtract(12, 8)).toBe(4);
    });
    test('80 minus 70, returns 10', () => {
      expect(superCalc.subtract(80, 70)).toBe(10);
    });
  });
  describe('Test the multiply method', () => {
    test('3 times 2, returns 6', () => {
      expect(superCalc.multiply(3, 2)).toBe(6);
    });
    test('12 times 10, returns 120', () => {
      expect(superCalc.multiply(12, 10)).toBe(120);
    });
    test('7 times 7, returns 49', () => {
      expect(superCalc.multiply(7, 7)).toBe(49);
    });
  });
  describe('Test the divide method', () => {
    test('6 divided by 2, returns 3', () => {
      expect(superCalc.divide(6, 2)).toBe(3);
    });
    test('100 divided by 10, returns 10', () => {
      expect(superCalc.divide(100, 10)).toBe(10);
    });
    test('64 divided by 8, returns 8', () => {
      expect(superCalc.divide(64, 8)).toBe(8);
    });
  });
});

test('Capitalize string', () => {
  expect(capString('hello')).toBe('Hello');
});
