/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
  const hash = {}
  const a = 'a'.charCodeAt(0)
  const n = s.length
  for(let i = 0; i < n; i++) {
    if(hash[s[i]] == null) hash[s[i]] = []
    hash[s[i]].push(i)
  }
  const keys = Object.keys(hash)
  for(let i = 0; i < keys.length; i++) {
    const k = keys[i]
    const idx = k.charCodeAt(0) - a
    if(hash[k][1] - hash[k][0] !== distance[idx] + 1) return false
  }
  return true
};
