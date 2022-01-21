const sum = (num1, num2) => {
  // Add Code Below
  return num1 + num2;

  
  //Add Code Above
}
const testCases = [
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
});