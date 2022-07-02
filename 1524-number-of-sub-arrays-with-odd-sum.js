/**
 * @param {number[]} arr
 * @return {number}
 */
const numOfSubarrays = function(arr) {
  const n = arr.length, mod = 1e9 + 7

  let oc = 0, ec = 1
  let sum = 0
  let res = 0
  for(let i = 0; i < n; i++) {
    sum += arr[i]
    if(sum % 2 === 1) {
      res += ec
      oc++
    } else {
      res += oc
      ec++
    }
  }
  
  return res % mod
};
