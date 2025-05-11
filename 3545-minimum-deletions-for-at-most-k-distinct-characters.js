/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minDeletion = function(s, k) {
  const hash = {}
  for(let e of s) {
      if(hash[e] == null) hash[e] = 0
      hash[e]++
  }
  const arr = Object.entries(hash)
  arr.sort((a, b) => a[1] - b[1])
  if(arr.length <= k) return 0
  let res = 0
  while(arr.length > k) {
      const e = arr.shift()
      res += e[1]
  }
  
  return res
};
