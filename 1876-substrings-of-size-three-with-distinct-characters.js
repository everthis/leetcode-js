/**
 * @param {string} s
 * @return {number}
 */
 const countGoodSubstrings = function(s) {
  let res = 0
  for(let i = 2; i < s.length; i++) {
    if(chk(s, i)) res++
  }
  
  return res
};

function chk(s, i) {
  return s[i - 2] !== s[i - 1] &&
    s[i - 2] !== s[i] &&
    s[i - 1] !== s[i]
}
