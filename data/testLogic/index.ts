export const testScripts = {
  sumTwoIntsTestScript: `const runTests = () => {
    const testResults = [];
    testResults.push({
      test: 'User created a function called sum.',
      passed: typeof sum === 'function',
      result: typeof sum,
    });
    testResults.push({
      test: 'Function returns a number',
      passed: typeof sum(1, 2) === 'number',
      result: typeof sum(1, 2),
    });
    testResults.push({ test: 'sum(1, 2) returns 3', passed: sum(1, 2) === 3, result: sum(1, 2) });
    testResults.push({ test: 'sum(5, 10) returns 15', passed: sum(5, 10) === 15, result: sum(5, 10) });
    testResults.push({ test: 'sum(-1, -4) returns -5', passed: sum(-1, -4) === -5, result: sum(-1, -4) });
    return testResults;
  };
  
  runTests();`,

  sortArrayIntsTestScript: `const runTests = () => {
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
      result: JSON.stringify(sortArr([1, 2, 6, 4, 2])),
    });
    testResults.push({
      test: 'sortArr([10, -3, 2, -1, 7, 9]) returns [-3, -1, 2, 7, 9, 10]',
      passed: JSON.stringify(sortArr([10, -3, 2, -1, 7, 9])) === JSON.stringify([-3, -1, 2, 7, 9, 10]),
      result: JSON.stringify(sortArr([10, -3, 2, -1, 7, 9])),
    });
    testResults.push({
      test: 'sortArr([-1, 1000, 10, 22, -22, 3]) returns [-22, -1, 3, 10, 22, 1000]',
      passed: JSON.stringify(sortArr([-1, 1000, 10, 22, -22, 3])) === JSON.stringify([-22, -1, 3, 10, 22, 1000]),
      result: JSON.stringify(sortArr([-1, 1000, 10, 22, -22, 3])),
    });
    return testResults;
  };
  
  runTests();`,

  largestNumInArrayTestScript: `const runTests = () => {
    const testResults = [];
    testResults.push({ test: 'User created a function called largestNum.', passed: typeof largestNum === 'function', result: typeof largestNum });
    testResults.push({ test: 'Function returns a number', passed: typeof largestNum([1, 2, 3, 4]) === 'number', result: typeof largestNum([1, 2, 3, 4]) });
    testResults.push({
      test: 'largestNum([1, 8, 10, 5, 12]) returns 12',
      passed: largestNum([1, 8, 10, 5, 12]) === 12,
      result: largestNum([1, 8, 10, 5, 12])
    });
    testResults.push({
      test: 'largestNum([1, 8, 10, 5, 12]) returns 80',
      passed: largestNum([-4, 1, 80, 2, 1]) === 80,
      result: largestNum([-4, 1, 80, 2, 1])
    });
    testResults.push({
      test: 'largestNum([-5, -2, -1, -3, -20]) returns -1',
      passed: largestNum([-5, -2, -1, -3, -20]) === -1,
      result: largestNum([-5, -2, -1, -3, -20])
    });
    return testResults;
  };
  
  runTests();`,

  countTheVowelsTestScript: `const runTests = () => {
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
  
  runTests();`,

  sortTheDaysTestScript: `const runTests = () => {
    const testResults = [];
    testResults.push({
      test: 'User created a function called sortDays.',
      passed: typeof sortDays === 'function',
      result: typeof sortDays,
    });
    testResults.push({
      test: 'Function returns a string',
      passed: typeof sortDays('mon,wed,tues') === 'string',
      result: typeof sortDays('mon,wed,tues'),
    });
    testResults.push({
      test: 'sortDays("mon,wed,tues,sat") returns "mon,tues,wed,sat" ',
      passed: sortDays('mon,wed,tues,sat') === 'mon,tues,wed,sat',
      result: sortDays('mon,wed,tues,sat'),
    });
    testResults.push({
      test: 'sortDays("sun,sat,fri,thurs,wed,tues,mon") returns "mon,tues,wed,thurs,fri,sat,sun"',
      passed: sortDays('sun,sat,fri,thurs,wed,tues,mon') === 'mon,tues,wed,thurs,fri,sat,sun',
      result: sortDays('sun,sat,fri,thurs,wed,tues,mon'),
    });
    testResults.push({
      test: 'vowelCount("wed,tues,sat,fri") returns "tues,wed,fri,sat"',
      passed: sortDays('wed,tues,sat,fri') === 'tues,wed,fri,sat',
      result: sortDays('wed,tues,sat,fri'),
    });
    return testResults;
  };
  
  runTests();`,
  findTheIndex1TestScript: `const runTests = () => {
    const testResults = [];
    testResults.push({
      test: 'User created a function called findIndex.',
      passed: typeof findIndex === 'function',
      result: typeof findIndex,
    });
    testResults.push({
      test: 'Function returns a string',
      passed: typeof findIndex([1, 2, 3, 4]) === 'number',
      result: typeof findIndex([1, 2, 3, 4]),
    });
    testResults.push({
      test: 'findIndex([0, 2, 10, -10, 3], -10) returns 3',
      passed: findIndex([0, 2, 10, -10, 3], -10) === 3,
      result: findIndex([0, 2, 10, -10, 3], -10),
    });
    testResults.push({
      test: 'findIndex(["testing", "test", "tester", "tested"], "test") returns 1',
      passed: findIndex(['testing', 'test', 'tester', 'tested'], 'test') === 1,
      result: findIndex(['testing', 'test', 'tester', 'tested'], 'test'),
    });
    testResults.push({
      test: 'findIndex([], "something") returns -1',
      passed: findIndex([], 'something') === -1,
      result: findIndex([], 'something'),
    });
    testResults.push({
      test: 'findIndex([]) returns -1',
      passed: findIndex(['apple', 'orange', 'grape'], 'pineapple') === -1,
      result: findIndex(['apple', 'orange', 'grape'], 'pineapple'),
    });
    return testResults;
  };
  
  runTests();`,
};
