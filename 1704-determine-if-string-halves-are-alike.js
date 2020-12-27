/**
 * @param {string} s
 * @return {boolean}
 */
const halvesAreAlike = function(s) {
  const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  const n = s.length
  const mid = n / 2
  const first = s.slice(0, mid), second = s.slice(mid)
  return chk(first, set) === chk(second, set)
};

function chk(str, set) {
  let res = 0
  for(let i = 0, len = str.length; i < len; i++) {
    if(set.has(str[i])) res++
  }
  return res
}
