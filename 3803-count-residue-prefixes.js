/**
 * @param {string} s
 * @return {number}
 */
var residuePrefixes = function(s) {
    const set = new Set()
  const n = s.length

  let res = 0

  for(let i = 0; i < n; i++) {
    const e = s[i]
    set.add(e)
    const size = set.size
    if(size === (i + 1) % 3) res++
  }


  return res
};
