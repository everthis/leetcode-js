/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
const checkPalindromeFormation = function(a, b) {
  return helper(a, b) || helper(b, a)
};

function helper(A, B) {
  const str_len = A.length
  let idx = 0
  while(A[idx] === B[str_len - idx - 1]) {
    idx += 1
  }
  console.log(idx)
  if (idx > Math.floor(str_len / 2) ) return true
  else if (chk(A.slice(idx + 1, str_len - idx - 2 + 1))) return true
  else if (chk(B.slice(idx + 1, str_len - idx - 2 + 1))) return true
  else return false
} 

function chk(s) {
  let l = 0, r = s.length - 1
  while(l < r) {
    if(s[l] !== s[r]) return false
    l++
    r--
  }
  return true
}
