const sortArr = (numArr) => {
  // Add Code Below
  return numArr.sort((a, b) => a - b)

  // Add Code Above
}
const testCases = [
  { numArr: [1, 2, 6, 4, 2], result: [1, 2, 2, 4, 6] },
  { numArr: [10, -3, 2, -1, 7, 9], result: [-3, -1, 2, 7, 9, 10] }
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
});