/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
  let res = 0
  const r = Math.max(a, b)
  for(let i = 1; i <= r; i++) {
    if(a % i === 0 && b % i === 0) res++
  }
  
  return res
};
