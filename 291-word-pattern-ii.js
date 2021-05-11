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

// another

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPatternMatch = function(pattern, s) {
  const obj = { res: false }
  const hash = {}
  helper(pattern, s, 0, 0, hash, obj)
  return obj.res
};

function helper(p, s, i, j, hash, obj) {
  if(obj.res) return
  if(i === p.length && j === s.length) {
    obj.res = true
    return
  }
  if(i >= p.length || j >= s.length) return
  for(let m = j; m < s.length && obj.res === false; m++) {
    const tmp = s.slice(j, m + 1)
    if(hash[p[i]]) {
      if(tmp === hash[p[i]]) {
        helper(p, s, i + 1, m + 1, hash, obj)
      }
    } else {
      const set = new Set(Object.values(hash))
      if (!set.has(tmp)) {
        hash[p[i]] = tmp
        helper(p, s, i + 1, m + 1, hash, obj)
        delete hash[p[i]]
      }
    }
  }
}
