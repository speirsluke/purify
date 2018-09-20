const { multiply, absolute, concatNames, numbersToStrings } = require('../src');

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

test('concat names', () => {
  const result = concatNames([
    {
      firstName: 'Alan',
      lastName: 'Sugar'
    },
    {
      firstName: 'John',
      lastName: 'Smith'
    }
  ]);
  const expected = ['Alan Sugar', 'John Smith'];
  expect(result).toEqual(expected);
});

test.only('number to strings', () => {
  const result = numbersToStrings([1, 2, 3]);
  const expected = ['1', '2', '3'];
  expect(result).toEqual(expected);
});
