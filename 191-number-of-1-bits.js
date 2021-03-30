/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function(n) {
  let res = 0
  while(n > 0) {
    if(n & 1) res++
    n = n >>> 1
  }
  return res
};

// another

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
