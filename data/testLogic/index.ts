const sumTwoIntsTestScript = `const runTests = () => {
  const testResults = [];
  testResults.push({ test: 'User created a function called sum.', passed: typeof sum === 'function' });
  testResults.push({ test: 'Function returns a number', passed: typeof sum(1, 2) === 'number' });
  testResults.push({ test: 'sum(1, 2) returns 3', passed: sum(1, 2) === 3 });
  testResults.push({ test: 'sum(5, 10) returns 15', passed: sum(5, 10) === 15 });
  testResults.push({ test: 'sum(-1, -4) returns -5', passed: sum(-1, -4) === -5 });
  return testResults;
};

runTests();`;

const sortArrayIntsTestScript = `const runTests = () => {
  const testResults = [];
  testResults.push({ test: 'User created a function called sortArr.', passed: typeof sortArr === 'function' });
  testResults.push({ test: 'Function returns an array', passed: Array.isArray(sortArr([1, 4, 3, 2]))});
  testResults.push({
    test: 'sortArr([1, 2, 6, 4, 2]) returns [1, 2, 2, 4, 6] ',
    passed: JSON.stringify(sortArr([1, 2, 6, 4, 2])) === JSON.stringify([1, 2, 2, 4, 6]),
  });
  testResults.push({
    test: 'sortArr([10, -3, 2, -1, 7, 9]) returns [-3, -1, 2, 7, 9, 10]',
    passed: JSON.stringify(sortArr([10, -3, 2, -1, 7, 9])) === JSON.stringify([-3, -1, 2, 7, 9, 10]),
  });
  testResults.push({
    test: 'sortArr([-1, 1000, 10, 22, -22, 3]) returns [-22, -1, 3, 10, 22, 1000]',
    passed: JSON.stringify(sortArr([-1, 1000, 10, 22, -22, 3])) === JSON.stringify([-22, -1, 3, 10, 22, 1000]),
  });
  return testResults;
};

runTests();`;

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

const countTheVowelsTestScript = `const runTests = () => {
  const testResults = [];
  testResults.push({ test: 'User created a function called vowelCount.', passed: typeof vowelCount === 'function' });
  testResults.push({ test: 'Function returns a number', passed: typeof vowelCount('abcdefg') === 'number' });
  testResults.push({
    test: 'vowelCount("This is a test sentence.") returns 7 ',
    passed: vowelCount('This is a test sentence.') === 7,
  });
  testResults.push({
    test: 'vowelCount("If you have not checked out FreeCodeCamp, you should. It\'s Awesome!!!") returns 26',
    passed: vowelCount("If you have not checked out FreeCodeCamp, you should. It's Awesome!!!") === 7,
  });
  testResults.push({
    test: 'vowelCount("THIS IS UPPER CASE. this is lowercase.") returns 12',
    passed: vowelCount('THIS IS UPPER CASE. this is lowercase.') === 7,
  });
  return testResults;
};

runTests();`;

const sortTheDaysTestScript = `const testCases = [
  { str: 'mon,wed,tues,sat', result: 'mon,tues,wed,sat' },
  { str: 'sun,sat,fri,thurs,wed,tues,mon', result: 'mon,tues,wed,thurs,fri,sat,sun' },
  { str: 'wed,tues,sat,fri', result: 'tues,wed,fri,sat' }
 ];
 
 describe('Sort The Days', () => {
  test('User created a function called sortDays', () => {
    expect(typeof sortDays).toBe('function');
  });

  test('sortDays returns a string', () => {
    expect(typeof sortDays('mon,wed,tues')).toBe('string')
  });

  test.each(testCases)('sortDays($str) returns $result.', ({ str, result }) => {
    expect(sortDays(str)).toBe(result);
  })
});`;

export const testScripts = {
  sumTwoIntsTestScript,
  sortArrayIntsTestScript,
  largestNumInArrayTestScript,
  countTheVowelsTestScript,
  sortTheDaysTestScript,
};
