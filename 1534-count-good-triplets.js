/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const countGoodTriplets = function(arr, a, b, c) {
  const  n = arr.length, { abs } = Math
  let res = 0
  
  for(let i = 0; i < n - 2; i++) {
    for(let j = i + 1; j < n - 1; j++) {
      if(abs(arr[i] - arr[j]) > a) continue
      for(let k = j + 1; k < n; k++) {
        if(abs(arr[j] - arr[k]) <= b && abs(arr[i] - arr[k]) <= c) res++
      }
    }
  }
  
  return res
  
};
