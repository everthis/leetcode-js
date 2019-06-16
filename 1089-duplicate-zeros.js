/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = function(arr) {
  const len = arr.length
  for (let i = len - 1; i >= 0; i--) {
    if (arr[i] === 0) arr.splice(i, 0, 0)
  }
  while (arr.length > len) {
    arr.pop()
  }
}
