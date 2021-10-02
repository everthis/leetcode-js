/**
 * @param {string} s
 * @return {number}
 */
const removePalindromeSub = function(s) {
  if(s == null || s === '') return 0
  if(chk(s)) return 1
  return 2
};

function chk(s) {
  let l = 0, r = s.length - 1
  while(l < r) {
    if(s[l] !== s[r]) return false
    l++
    r--
  }
  
  return true
}
