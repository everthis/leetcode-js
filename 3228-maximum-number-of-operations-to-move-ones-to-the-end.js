/**
 * @param {string} s
 * @return {number}
 */
var maxOperations = function(s) {
  let ss = ''
  for (let ch of s) {
    if (ss === '') {
      ss += ch
      continue
    }
    if (ch === '0' && ss[ss.length - 1] === '0') {
      continue
    } else {
      ss += ch
    }
  }
  s = ss
  let res = 0
  let cnt = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') {
      res += cnt
    } else {
      cnt += 1
    }
  }
  return res
};
