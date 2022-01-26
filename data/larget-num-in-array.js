const largestNum = (numArr) => {
  // Add Code Below
  let max = numArr[0];

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > max) {
      max = numArr[i];
    }
  }

  return max;

  // Add Code Above
};
largestNum([1, 2, 3]);

console.log(typeof largestNum([1, 2, 3]));
