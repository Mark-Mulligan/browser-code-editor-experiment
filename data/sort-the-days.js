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
sortDays('mon,wed,tues')