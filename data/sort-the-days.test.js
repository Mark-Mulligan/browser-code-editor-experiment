const sortDays = (dayStr) => {
  // Add Code Below
  const dayArr = dayStr.split(',');
  const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
  const placeholder = []
  const result = []
  
  dayArr.forEach(day => {
    placeholder.push({ day: day, value: days.indexOf(day)});
  })

  placeholder.sort((a, b) => a.value - b.value );

  placeholder.forEach(dayObj => {
    result.push(dayObj.day);
  })

  return result.join(',');

 // Add Code Above
}
const testCases = [
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
});