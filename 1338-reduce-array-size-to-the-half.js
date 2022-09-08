/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
   const hash = {}
   for(const e of arr) {
     if(hash[e] == null)  hash[e] = 0
     hash[e]++
   }
   const n = arr.length
   const entries = Object.entries(hash)
   entries.sort((a, b) => b[1] - a[1])
  let res= 0
  let cnt = 0
  for(const [k, v] of entries) {
    cnt += v
    res++
    if(cnt >= n / 2) break
  }
  
  return res
};
