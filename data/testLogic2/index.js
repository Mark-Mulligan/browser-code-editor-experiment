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

const vowelCount = (str) => {
  return str;
};

const runTests = () => {
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

runTests();
