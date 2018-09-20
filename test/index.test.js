const {
  multiply,
  absolute,
  concatNames,
  numbersToStrings,
  sortByLength,
  lastTwo,
  incrementYear,
  totalSales,
  swapKeysAndValues
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

test('increment year', () => {
  const result = incrementYear([
    {
      make: 'Vauxhall',
      model: 'Astra',
      year: 1992
    },
    {
      make: 'Ford',
      model: 'Focus',
      year: 1998
    },
    {
      make: 'Vauxhall',
      model: 'Astra',
      year: 2016
    }
  ]);
  const expected = [
    {
      make: 'Vauxhall',
      model: 'Astra',
      year: 1993
    },
    {
      make: 'Ford',
      model: 'Focus',
      year: 1999
    },
    {
      make: 'Vauxhall',
      model: 'Astra',
      year: 2017
    }
  ];
  expect(result).toEqual(expected);
});

test('total sales', () => {
  const result = totalSales({
    Mary: [1, 2, 3, 4],
    Dave: [3, 4, 5]
  });
  const expected = {
    Mary: 10,
    Dave: 12
  };
  expect(result).toEqual(expected);
});

test.only('swap keys and values', () => {
    const result = swapKeysAndValues({
        a: 'b',
        c: 'd'
    });
    const expected = {
        b: 'a', 
        d: 'c'
    };
    expect(result).toEqual(expected);
})