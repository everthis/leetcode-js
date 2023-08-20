/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const minimumSum = function(n, k) {
  let res = 0
  const set = new Set()
  for(let i = 1; set.size < n; i++) {
    if(!set.has(k - i)) {
      set.add(i)
      res += i
    }
  }
  
  return res
};
