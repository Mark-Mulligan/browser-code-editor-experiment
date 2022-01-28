const sortDays = (dayStr) => {
  // Add Code Below
  const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
  const dayArr = dayStr.split(',');
  const dayObjs = [];
  const result = [];

  dayArr.forEach(day => {
    dayObjs.push({ day: day, value: days.indexOf(day) });
  });

  dayObjs.sort((a, b) => a.value - b.value);

  dayObjs.forEach(dayObj => {
    result.push(dayObj.day);
  });

  return result.join(',');
  

  // Add Code Above
}
const runTests = () => {
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

runTests();