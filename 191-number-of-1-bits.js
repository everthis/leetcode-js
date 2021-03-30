/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function(n) {
  const str = (n >>> 0).toString(2)
  let res = 0
  for(let c of str) {
    if(c === '1') res++
  }
  return res
};
