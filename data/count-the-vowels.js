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
undefined