/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const makeSubKSumEqual = function(arr, k) {
  let res = 0
  const n =  arr.length
  for(let i = 0; i < n; i++) {
    const tmp = []
    for(let j = i; arr[j] !== 0; j = (j + k) % n) {
      tmp.push(arr[j])
      arr[j] = 0
    }
    tmp.sort((a, b) => a - b)
    const mid = tmp[~~(tmp.length / 2)]
    for(const e of tmp) {
      res += Math.abs(e - mid)
    }
  }
  
  
  return res
};
