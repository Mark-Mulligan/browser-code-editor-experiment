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

const sortArr = (numArr) => {
  return numArr;
};

const runTests = () => {
  const testResults = [];
  testResults.push({
    test: 'User created a function called sortArr.',
    passed: typeof sortArr === 'function',
    result: typeof sortArr,
  });
  testResults.push({
    test: 'Function returns an array',
    passed: Array.isArray(sortArr([1, 4, 3, 2])),
    result: JSON.stringify(sortArr([1, 4, 3, 2])),
  });
  testResults.push({
    test: 'sortArr([1, 2, 6, 4, 2]) returns [1, 2, 2, 4, 6] ',
    passed: JSON.stringify(sortArr([1, 2, 6, 4, 2])) === JSON.stringify([1, 2, 2, 4, 6]),
    result: sortArr([1, 2, 6, 4, 2]),
  });
  testResults.push({
    test: 'sortArr([10, -3, 2, -1, 7, 9]) returns [-3, -1, 2, 7, 9, 10]',
    passed: JSON.stringify(sortArr([10, -3, 2, -1, 7, 9])) === JSON.stringify([-3, -1, 2, 7, 9, 10]),
    result: sortArr([10, -3, 2, -1, 7, 9]),
  });
  testResults.push({
    test: 'sortArr([-1, 1000, 10, 22, -22, 3]) returns [-22, -1, 3, 10, 22, 1000]',
    passed: JSON.stringify(sortArr([-1, 1000, 10, 22, -22, 3])) === JSON.stringify([-22, -1, 3, 10, 22, 1000]),
    result: sortArr([-1, 1000, 10, 22, -22, 3]),
  });
  return testResults;
};

runTests();
