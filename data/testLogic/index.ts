const sumTwoIntsTestScript = `const testCases = [
  { num1: 1, num2: 2, result: 3 },
  { num1: 5, num2: 10, result: 15 },
  { num1: -1, num2: -4, result: -5 },
];

describe('Sum 2 Numbers', () => {
  test('User created a function called sum', () => {
    expect(typeof sum).toBe('function');
  });

  test('Function returns a number', () => {
    expect(typeof sum(1, 2)).toBe('number');
  });

  test.each(testCases)('sum($num1, $num2) returns $result.', ({ num1, num2, result }) => {
    expect(sum(num1, num2)).toBe(result);
  });
});`;

const sortArrayIntsTestScript = `const testCases = [
  { numArr: [1, 2, 6, 4, 2], result: [1, 2, 2, 4, 6] },
  { numArr: [10, -3, 2, -1, 7, 9], result: [-3, -1, 2, 7, 9, 10] }
];

describe('Sort Array of Integers', () => {
  test('User created a function called sortArr', () => {
    expect(typeof sortArr).toBe('function');
  });

  test.each(testCases)('sortArr($numArr) returns $result.', ({ numArr, result }) => {
    let userResult = sortArr(numArr);

    userResult.forEach((item, index) => {
      expect(item).toBe(result[index]);
    })
  })
});`;

export const testScripts = {
  sumTwoIntsTestScript,
  sortArrayIntsTestScript,
};
