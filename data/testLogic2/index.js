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

const vowelCount = (str) => {
  return str;
};

const runTests = () => {
  const testResults = [];
  testResults.push({
    test: 'User created a function called vowelCount.',
    passed: typeof vowelCount === 'function',
    result: typeof vowelCount,
  });
  testResults.push({
    test: 'Function returns a number',
    passed: typeof vowelCount('abcdefg') === 'number',
    result: typeof vowelCount('abcdefg'),
  });
  testResults.push({
    test: 'vowelCount("This is a test sentence.") returns 7 ',
    passed: vowelCount('This is a test sentence.') === 7,
    result: vowelCount('This is a test sentence.'),
  });
  testResults.push({
    test: 'vowelCount("If you have not checked out FreeCodeCamp, you should. It is Awesome!!!") returns 27',
    passed: vowelCount('If you have not checked out FreeCodeCamp, you should. It is Awesome!!!') === 27,
    result: vowelCount('If you have not checked out FreeCodeCamp, you should. It is Awesome!!!'),
  });
  testResults.push({
    test: 'vowelCount("THIS IS UPPER CASE. this is lowercase.") returns 12',
    passed: vowelCount('THIS IS UPPER CASE. this is lowercase.') === 12,
    result: vowelCount('THIS IS UPPER CASE. this is lowercase.'),
  });
  return testResults;
};

runTests();
