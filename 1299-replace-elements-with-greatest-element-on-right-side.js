/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function(arr) {
  const suffix = [-1], n = arr.length
  for(let i = n - 2; i >= 0; i--) {
    suffix.unshift(Math.max(suffix[0], arr[i + 1]))
  }
  
  return suffix
};
