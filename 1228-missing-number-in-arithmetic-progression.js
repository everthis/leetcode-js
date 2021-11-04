/**
 * @param {number[]} arr
 * @return {number}
 */
const missingNumber = function(arr) {
  const n = arr.length

  for(let i = 1 ; i < n - 1; i++) {
    const d1 = arr[i] - arr[i - 1], d2 = arr[i + 1] - arr[i]
    if(d1 === d2) continue
    if(d1 / d2 === 2) return arr[i - 1] + d1 / 2
    if(d2 / d1 === 2) return arr[i] + d2 / 2
  }
  return arr[0]
};
