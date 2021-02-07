/**
 * @param {string} s
 * @return {number}
 */
const minimumLength = function(s) {
  const n = s.length
  let l = 0, r = n - 1
  while(l < r && s[l] === s[r]) {
    while(l < r - 1 && s[r] === s[r - 1]) r--
    while(l + 1 < r && s[l] === s[l + 1]) l++
    l++
    r--
  }
  return r - l + 1
};
