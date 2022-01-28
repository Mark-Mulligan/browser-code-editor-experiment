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

const sortArr = (numArr) => {
  return numArr.sort((a, b) => a - b);
};

const runTests = () => {
  const testResults = [];
  testResults.push({ test: 'User created a function called sortArr.', passed: typeof sortArr === 'function' });
  testResults.push({ test: 'Function returns an array', passed: typeof sortArr(1, 2) === 'array' });
  testResults.push({
    test: 'sortArr([1, 2, 6, 4, 2]) returns [1, 2, 2, 4, 6] ',
    passed: JSON.stringify(sum([1, 2, 6, 4, 2])) === JSON.stringify([1, 2, 2, 4, 6]),
  });
  testResults.push({
    test: 'sortArr([10, -3, 2, -1, 7, 9]) returns [-3, -1, 2, 7, 9, 10]',
    passed: JSON.stringify(sum([10, -3, 2, -1, 7, 9])) === JSON.stringify([-3, -1, 2, 7, 9, 10]),
  });
  testResults.push({
    test: 'sortArr([-1, 1000, 10, 22, -22, 3]) returns [-22, -1, 3, 10, 22, 1000]',
    passed: JSON.stringify(sum([-1, 1000, 10, 22, -22, 3])) === JSON.stringify([-22, -1, 3, 10, 22, 1000]),
  });
  return testResults;
};

runTests();
