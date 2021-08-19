/**
 * @param {number[]} arr
 * @return {number}
 */
const sumOddLengthSubarrays = function(arr) {
  const n = arr.length, pre = Array(n + 1).fill(0)
  for(let i = 0; i < n; i++) pre[i + 1] = pre[i] +  arr[i]
  
  let res = 0
  let len = 1
  while(len <= n) {
    for(let i = 0; i <= n - len; i++) {
      res += pre[i + len] - pre[i] // len === 1: 1 - 0, 2 - 1
                                   // len === 3: 3 - 0, 6 - 3
    }
    
    len += 2
  }
  
  return res
  
};
