/**
 * @param {string} s
 * @return {boolean}
 */
const checkPartitioning = function(s) {
  for(let i = 1, len = s.length; i < len - 1; i++) {
    for(let j = i + 1; j < len; j++) {
      const s1 = s.slice(0, i), s2 = s.slice(i, j), s3 = s.slice(j)
      if(chk(s1) && chk(s2) && chk(s3)) return true
    }
  }
  return false
};

function chk(s) {
  let l = 0, r = s.length - 1
  for(;l <= r;) {
    if(s[l] === s[r]) {
      l++
      r--
    } else return false
  }
  return true
}
