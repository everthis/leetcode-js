/**
 * @param {string} num
 * @return {string}
 */
const largestOddNumber = function(num) {
  let idx= -1
  for(let i = 0, n = num.length; i < n; i++) {
    if((+num[i]) % 2 === 1) idx = i
  }
  return num.slice(0, idx+1)
};
