/**
 * @param {string} s
 * @return {number}
 */
const numSteps = function(s) {
  let res = 0
  let carry = 0
  for(let i = s.length - 1; i > 0; i--) {
    res++
    if(s[i] === '1' && carry === 0) {
      res++
      carry = 1
    }else if(s[i] === '0' && carry === 1) {
      res++
      carry = 1
    }
  }
  return res + carry
};
