/**
 * @param {string} s
 * @return {number}
 */
const numberOfWays = function(s) {
  let one = 0, zero = 0
  for(const ch of s) {
    if(ch === '1') one++
    else zero++
  }
  let preOne = 0, preZero = 0
  let res = 0
  
  for(const ch of s) {
    if(ch === '1') {
      res += preZero * zero
      preOne++
      one--
    } else {
      res += preOne * one
      preZero++
      zero--
    }
  }
  
  return res
};
