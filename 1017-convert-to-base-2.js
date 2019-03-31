/**
 * @param {number} N
 * @return {string}
 */
const baseNeg2 = function(N) {
  if (N === 0) return "0"; 
  let res = ''
  while(N !== 0) {
    res = (N & 1) + res
    N = -(N >> 1)
  }
  return res; 
};
