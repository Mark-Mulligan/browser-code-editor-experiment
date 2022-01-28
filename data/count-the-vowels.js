const vowelCount = (str) => {
  // Add Code Below
  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  let strArr = str.toLowerCase().split('');

  strArr.forEach(char => {
    if (vowels.includes(char)) {
      count++;
    }
  })

  return count;
 // Add Code Above
}
const runTests = () => {
  const testResults = [];
  testResults.push({ test: 'User created a function called vowelCount.', passed: typeof vowelCount === 'function' });
  testResults.push({ test: 'Function returns a number', passed: typeof vowelCount('abcdefg') === 'number' });
  testResults.push({
    test: 'vowelCount("This is a test sentence.") returns 7 ',
    passed: vowelCount('This is a test sentence.') === 7,
  });
  testResults.push({
    test: 'vowelCount("If you have not checked out FreeCodeCamp, you should. It is Awesome!!!") returns 27',
    passed: vowelCount("If you have not checked out FreeCodeCamp, you should. It is Awesome!!!") === 27,
  });
  testResults.push({
    test: 'vowelCount("THIS IS UPPER CASE. this is lowercase.") returns 12',
    passed: vowelCount('THIS IS UPPER CASE. this is lowercase.') === 12,
  });
  return testResults;
};

runTests();