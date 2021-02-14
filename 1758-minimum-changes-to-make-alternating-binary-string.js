/**
 * @param {string} s
 * @return {number}
 */
const minOperations = function(s) {
  const arr = s.split('')
  return Math.min(helper(arr, 0, '0'), helper(arr, 0, '1'))
    
  function helper(arr, idx, ch) {
    if(idx === arr.length) return 0
    if(arr[idx] !== ch) return 1 + helper(arr, idx + 1, ch === '0' ? '1' : '0')
    else return helper(arr, idx + 1, ch === '0' ? '1' : '0')
  }
};
