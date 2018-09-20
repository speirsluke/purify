const {
  multiply,
  absolute,
  concatNames,
  numbersToStrings,
  sortByLength,
  lastTwo
} = require('../src');

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

test('number to strings', () => {
  const result = numbersToStrings([1, 2, 3]);
  const expected = ['1', '2', '3'];
  expect(result).toEqual(expected);
});

test('sort by length', () => {
  const result = sortByLength(['a', 'abc', 'ab']);
  const expected = ['a', 'ab', 'abc'];
  expect(result).toEqual(expected);
});

test('last two', () => {
  const result = lastTwo([1, 2, 3, 4]);
  const expected = [3, 4];
  expect(result).toEqual(expected);
});
