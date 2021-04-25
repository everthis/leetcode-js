/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const sumBase = function(n, k) {
  let str = n.toString(k)
  let res = 0
  for(let ch of str) res += +ch
  
  return res
};
