/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
const kthDistinct = function(arr, k) {
  let num = 0, hash = {}
  
  for(let str of arr) {
    if(hash[str] == null) hash[str] = 0
    hash[str]++    
  }
  for(let str of arr) {
    if(hash[str] > 1) continue
    num++
    if(num === k) return str
  }
  return ''
};
