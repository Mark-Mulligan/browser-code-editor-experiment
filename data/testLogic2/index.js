const sum = (num1, num2) => {
  return num1 + num2;
};

const runTests = () => {
  const testResults = [];
  testResults.push({ test: 'User created a function called sum.', passed: typeof sum === 'function' });
  testResults.push({ test: 'Function returns a number', passed: typeof sum(1, 2) === 'number' });
  testResults.push({ test: 'sum(1, 2) returns 3', passed: sum(1, 2) === 3 });
  testResults.push({ test: 'sum(5, 10) returns 15', passed: sum(5, 10) === 15 });
  testResults.push({ test: 'sum(-1, -4) returns -5', passed: sum(-1, -4) === -5 });
  return testResults;
};
