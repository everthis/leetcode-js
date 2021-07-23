/**
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds = function(arr) {
  for(let i = 1, n = arr.length; i < n - 1; i++) {
    if(arr[i] & 1 === 1 && arr[i - 1] & 1 === 1 && arr[i + 1] & 1 === 1) return true
  }
  return false
};
