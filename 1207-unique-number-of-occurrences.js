/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function(arr) {
  const hash = {}
  for(let e of arr) {
    if(hash[e] == null) hash[e] = 0
    hash[e]++
  }
  const ks = new Set(Object.keys(hash)), vs = new Set(Object.values(hash))
  return ks.size === vs.size
};
