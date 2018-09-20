const { multiply, absolute } = require('../src');

test('multiply', () => {
  const result = multiply([5, 6, 2, 3, 5], 2);
  const expected = [10, 12, 4, 6, 10];
  expect(result).toEqual(expected);
});

test('absolute', () => {
  const result = absolute([1, -1, 0]);
  const expected = [1, 1, 0];
  expect(result).toEqual(expected);
});
