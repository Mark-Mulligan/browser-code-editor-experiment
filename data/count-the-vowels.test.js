const vowelCount = (str) => {
  // Add Code Below
  let strArr = str.toLowerCase().split('');
  let vowelCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y']

  strArr.forEach(letter => {
    if (vowels.includes(letter)) {
      vowelCount++;
    };
  });

  return vowelCount;

 // Add Code Above
}
const testCases = [
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
});