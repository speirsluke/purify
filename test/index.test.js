const {multiply} = require('../src')

test('multiply', () => {
    const result = multiply([5, 6, 2, 3, 5], 2);
    const expected = [10, 12, 4, 6, 10];
    expect(result).toEqual(expected); 
  });