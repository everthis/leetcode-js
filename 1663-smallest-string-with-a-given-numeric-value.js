/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getSmallestString = function(n, k) {
  let arr = Array(n).fill(1)
  k -= n 
  for(let i = n - 1; i >= 0; i--) {
    if(k > 0) {
      const delta = 26 - arr[i]
      if(k >= delta) {
        k -= delta
        arr[i] = arr[i] + delta
      } else {
        arr[i] = arr[i] + k
        k = 0
      }
    } else break
  }
  const str = 'abcdefghijklmnopqrstuvwxyz'
  const m = {}
  for(let i = 0; i < 26; i++) {
    m[i + 1] = str[i]
  }
  const res = []
  for(let i = 0; i < n; i++) {
    res[i] = m[arr[i]]
  }
  return res.join('')
};
