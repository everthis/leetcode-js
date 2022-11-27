/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
  const sum = (1 + n) * n / 2
  let tmp = 0
  for(let i = 1; i <= n; i++) {
    tmp += i
    if(tmp === sum - tmp + i)  return i
  }
  
  return -1
};
