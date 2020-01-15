/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const wordPatternMatch = function(pattern, str) {
  const map = new Map()
  const set = new Set()
  return isMatch(str, 0, pattern, 0, map, set)
};
function isMatch(str, i, pat, j, map, set) {
  if(i === str.length && j === pat.length) return true
  if(i === str.length || j === pat.length) return false
  let c = pat.charAt(j)
  if(map.has(c)) {
    let s = map.get(c)
    if(!str.startsWith(s, i)) return false
    return isMatch(str, i + s.length, pat, j + 1, map, set)
  }
  for(let k = i; k < str.length; k++) {
    let p = str.slice(i, k + 1)
    if(set.has(p)) continue
    map.set(c, p)
    set.add(p)
    if(isMatch(str, k + 1, pat, j + 1, map, set)) return true
    map.delete(c)
    set.delete(p)
  }
  return false
}
