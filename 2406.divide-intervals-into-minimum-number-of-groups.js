/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function(intervals) {
    const hash = {}
  for(let [s, e] of intervals) {
    e = e + 1
    hash[s] = (hash[s] || 0) + 1
    hash[e] = (hash[e] || 0) - 1
  }
  let res = 0, cur = 0
  const keys = Object.keys(hash).map(e => +e)
  keys.sort((a, b) => a - b)
  for(const k of keys) {
    cur += hash[k]
    res = Math.max(res, cur)
  }
  return res
};
