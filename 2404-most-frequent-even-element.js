/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
  const hash = {}
  for(const e of nums) {
    if(e % 2 === 0) {
      if(hash[e] == null) hash[e] = 0
      hash[e]++
    }
  }
  const entries = Object.entries(hash)
  if(entries.length === 0) return -1
  entries.sort((a, b) => b[1] - a[1])
  const v = entries[0][1]
  const keys = Object.keys(hash).map(e => +e).sort((a, b) => a - b)
// console.log(hash)
  for(const k of keys) {
    if(hash[k] === v) return k
  }
  
  return -1
};
