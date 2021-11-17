/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
  const n = s.length
  const arr = Array(26).fill(0), a = 'a'.charCodeAt(0)
  for(const ch of s) {
    arr[ch.charCodeAt(0) - a]++
  }
  const set = new Set()
  for(const e of arr) {
    if(e !== 0) set.add(e)
    if(set.size > 1) return false
  }
  return true
};
