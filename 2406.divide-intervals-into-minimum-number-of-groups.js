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

// another

/**
 * @param {number[][]} intervals
 * @return {number}
 */
const minGroups = function(intervals) {
  const hash = {}
  for(const [s, e] of intervals) {
    if(hash[s] == null) hash[s] = 0
    if(hash[e + 1] == null) hash[e + 1] = 0
    hash[s]++
    hash[e + 1]--
  }
  const keys = Object.keys(hash)
  keys.sort((a, b) => a - b)
  const n = keys.length

  const arr = Array(n).fill(0)
  arr[0] = hash[keys[0]]
  let res = arr[0]
  for(let i = 1; i < n; i++) {
     arr[i] = hash[keys[i]] + arr[i - 1]
     res = Math.max(res, arr[i])
  }
  return res
};
