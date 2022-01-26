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
  { numArr: [10, -3, 2, -1, 7, 9], result: [-3, -1, 2, 7, 9, 10] },
  { numArr: [-1, 1000, 10, 22, -22, 3], result: [-22, -1, 3, 10, 22, 1000] }
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

const largestNumInArrayTestScript = `const testCases = [
  { numArr: [1, 8, 10, 5, 12], result: 12 },
  { numArr: [-4, 1, 80, 2, 1], result: 80 },
  { numArr: [-5, -2, -1, -3, -20], result: -1}
 ];
 
 describe('Find Largets Integer in an Array', () => {
  test('User created a function called largestNum', () => {
    expect(typeof largestNum).toBe('function');
  });

  test('largestNum returns a single number', () => {
    expect(typeof largestNum([1, 2, 3])).toBe('number')
  });

  test.each(testCases)('largestNum($numArr) returns $result.', ({ numArr, result }) => {
    expect(largestNum(numArr)).toBe(result);
  })
});`;

const countTheVowelsTestScript = `const testCases = [
  { str: 'This is a test sentence.', result: 7 },
  { str: "If you have not checked out FreeCodeCamp, you should. It's Awesome!!!", result: 26 },
  { str: 'THIS IS UPPER CASE. this is lowercase.', result: 12}
 ];
 
 describe('Count The Vowels', () => {
  test('User created a function called vowelCount', () => {
    expect(typeof vowelCount).toBe('function');
  });

  test('vowelCount returns a number', () => {
    expect(typeof vowelCount('test')).toBe('number')
  });

  test.each(testCases)('vowelCount($str) returns $result.', ({ str, result }) => {
    expect(vowelCount(str)).toBe(result);
  })
});`;

export const testScripts = {
  sumTwoIntsTestScript,
  sortArrayIntsTestScript,
  largestNumInArrayTestScript,
  countTheVowelsTestScript,
};
